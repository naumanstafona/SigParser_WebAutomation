import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { BooleanField } from "../../pages/32_Custom_Fields_Companies/BooleanField";

test.describe('Starting 31 Custom Fields - Contacts - 5 - BooleanField', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let booleanfield: BooleanField;

  const emails: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    booleanfield = new BooleanField(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom Boolean field column", async () => {

    console.log('Starting 32 Custom Fields - Companies - 5 - BooleanField');

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await booleanfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await booleanfield.deleteCustomfield();
    });

    await test.step("Create a new custom column and add it to the contacts grid", async () => {
      await booleanfield.createNewBooleanCustomColumnAndAddIttoGridColumns();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await booleanfield.createCompaniesManuallyInCompanyGrid(emails[0], emails[1], emails[2]);
    });


    await test.step("Manually set the value for the custom field", async () => {
      await booleanfield.setTheValueForTestContactBoolean(emails[0]);
    });

    await test.step("Update the existing field value", async () => {
      await booleanfield.updateExistingalue(emails[0]);
    });

    await test.step("Update the existing field value directly in the grid", async () => {
      await booleanfield.updateExistingFileDirectlyInGrid(emails[0]);
    });


    await test.step("Import a CSV to set the value for the custom field", async () => {
      await booleanfield.importCSVtoSettheValuesForTheCustomField(emails[0], emails[1], emails[2]);
    });


    await test.step("Import the second CSV file (Updating and deleting a value)", async () => {
      await booleanfield.importSecondCSVFileUpdatingAndDeletingValues(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the third CSV file (No changes)", async () => {
      await booleanfield.importThirdCSVFileNoChanges(emails[0], emails[1], emails[2]);
    });

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await booleanfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await booleanfield.deleteCustomfield();
    });

  });

  test.afterAll(async () => {
    console.log('Ending 32 Custom Fields - Companies - 5 - BooleanField');
    await browser.close();
  });

});