import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { NumberField } from "../../pages/32_Custom_Fields_Companies/NumberField";

test.describe('Starting 32 Custom Fields - Companies - 4 - NumberField', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let numberfield: NumberField;

  const emails: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    numberfield = new NumberField(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom Number field column", async () => {

    console.log('Starting 32 Custom Fields - Companies - 4 - NumberField');

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await numberfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await numberfield.deleteCustomfield();
    });

    await test.step("Create a new custom column ", async () => {
      await numberfield.createCustomField();
    });

    await test.step("Add custome field to the grid ", async () => {
      await numberfield.adddCutomFieldToGrid();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await numberfield.createCompaniesManuallyInCompanyGrid(emails[0], emails[1], emails[2]);
    });


    await test.step("Manually set the value for the custom field", async () => {
      await numberfield.setTheValueForTestContactNumber(emails[0]);
    });

    await test.step("Update the existing field value", async () => {
      await numberfield.updateExistingalue(emails[0]);
    });

    await test.step("Update the existing field value directly in the grid", async () => {
      await numberfield.updateExistingFileDirectlyInGrid(emails[0]);
    });


    await test.step("Import a CSV to set the value for the custom field", async () => {
      await numberfield.importCSVtoSettheValuesForTheCustomField(emails[0], emails[1], emails[2]);
    });

    await test.step("Changing decimal value to two digits and checking its values in the grid", async () => {
      await numberfield.updateCustomContactNumberValueToTwoDecimals(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the second CSV file (Updating and deleting a value)", async () => {
      await numberfield.importSecondCSVFileUpdatingAndDeletingValues(emails[0], emails[1], emails[2]);
    });

    await test.step("Changing decimal value to three digits and checking its values in the grid", async () => {
      await numberfield.updateCustomContactNumberValueToThreeDecimals(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the third CSV file (No changes)", async () => {
      await numberfield.importThirdCSVFileNoChanges(emails[0], emails[1], emails[2]);
    });

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await numberfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await numberfield.deleteCustomfield();
    });

  });

  test.afterAll(async () => {
    console.log('Ending 32 Custom Fields - Companies - 4 - NumberField');
    await browser.close();
  });

});