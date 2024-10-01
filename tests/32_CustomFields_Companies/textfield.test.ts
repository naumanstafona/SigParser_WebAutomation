import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { TextField } from "../../pages/32_Custom_Fields_Companies/TextField";

test.describe('Starting 32 Custom Fields - Companies - 2 - TextField ', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let companiestextfield: TextField;

  const emails: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    companiestextfield = new TextField(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom field column", async () => {

    console.log('Starting 31 Custom Fields - Contacts - 2 - CustomFields');
    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await companiestextfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await companiestextfield.deleteCustomfield();
    });

    await test.step("Create a new custom column text and add it to the contacts grid", async () => {
      await companiestextfield.createNewTextCustomColumnAndAddIttoGridColumns();
    });

    await test.step("Create a new custom column text and add it to the Companies grid", async () => {
      await companiestextfield.createCompaniesManuallyInCompanyGrid(emails[0], emails[1], emails[2]);
    });

    await test.step("Manually set the value for the custom field", async () => {
      await companiestextfield.setTheValueForCustomField(emails[0]);
    });

    await test.step("Update the existing field value (with a value over the character limit)", async () => {
      await companiestextfield.updateExistingValueWithOverCharacterLimit(emails[0]);
    });

    await test.step("Update the existing field value directly in the grid", async () => {
      await companiestextfield.updateExistingFileDirectlyInGrid(emails[0]);
    });

    await test.step("Import a CSV to set the value for the custom field", async () => {
      await companiestextfield.importCSVtoSettheValuesForTheCustomField(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the second CSV file (Updating and deleting a value)", async () => {
      await companiestextfield.importSecondCSVFileUpdatingAndDeletingValues(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the third CSV file (No changes)", async () => {
      await companiestextfield.importThirdCSVFileNoChanges(emails[0], emails[1], emails[2]);
    });

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await companiestextfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await companiestextfield.deleteCustomfield();
    });


  });

  test.afterAll(async () => {

    console.log('Ending 31 Custom Fields - Contacts - 2 - CustomFields');
    await browser.close();
  });

});