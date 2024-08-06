import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { SingleSelectField } from "../../pages/31_Custom_Fields_Contacts/SingleSelect";

test.describe('Starting 31 Custom Fields - Contacts - 7 - Single Select Field', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let singleselectfield: SingleSelectField;

  const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    singleselectfield = new SingleSelectField(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom Text Area field column", async () => {

    console.log('Starting 31 Custom Fields - Contacts - 7 - Single Select Field');

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await singleselectfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await singleselectfield.deleteCustomField();
    });

    await test.step("Create a new custom column and add it to the contacts grid", async () => {
      await singleselectfield.createNewSingleSelectCustomColumnAndAddIttoGridColumns();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await singleselectfield.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
    });


    await test.step("Manually set the value for the custom field", async () => {
      await singleselectfield.setTheValueForTestContactSingleSelect(emails[0]);
    });

    await test.step("Update the existing field value", async () => {
      await singleselectfield.updateExistingalue(emails[0]);
    });

    await test.step("Update the existing field value directly in the grid", async () => {
      await singleselectfield.updateExistingFileDirectlyInGrid(emails[0]);
    });


    await test.step("Import a CSV to set the value for the custom field", async () => {
      await singleselectfield.importCSVtoSettheValuesForTheCustomField(emails[0], emails[1], emails[2]);
    });


    await test.step("Import the second CSV file (Updating and deleting a value)", async () => {
      await singleselectfield.importSecondCSVFileUpdatingAndDeletingValues(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the third CSV file (No changes)", async () => {
      await singleselectfield.importThirdCSVFileNoChanges(emails[0], emails[1], emails[2]);
    });

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await singleselectfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await singleselectfield.deleteCustomField();
    });

  });

  test.afterAll(async () => {
    console.log('Ending 31 Custom Fields - Contacts - 7 - Single Select Field');
    await browser.close();
  });

});