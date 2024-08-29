import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { ContactTextField } from "../../pages/31_Custom_Fields_Contacts/ContactTextField";

test.describe('Starting 31 Custom Fields - Contacts - 2 - CustomFields ', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let contacttextfield: ContactTextField;

  const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    contacttextfield = new ContactTextField(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom field column", async () => {

    console.log('Starting 31 Custom Fields - Contacts - 2 - CustomFields');
    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await contacttextfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await contacttextfield.deleteCustomfield();
    });

    await test.step("Create a new custom column text and add it to the contacts grid", async () => {
      await contacttextfield.createNewTextCustomColumnAndAddIttoGridColumns();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await contacttextfield.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
    });


    await test.step("Manually set the value for the custom field", async () => {
      await contacttextfield.setTheValueForCustomField(emails[0]);
    });

    await test.step("Update the existing field value (with a value over the character limit)", async () => {
      await contacttextfield.updateExistingValueWithOverCharacterLimit(emails[0]);
    });

    await test.step("Update the existing field value directly in the grid", async () => {
      await contacttextfield.updateExistingFileDirectlyInGrid(emails[0]);
    });

    await test.step("Import a CSV to set the value for the custom field", async () => {
      await contacttextfield.importCSVtoSettheValuesForTheCustomField(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the second CSV file (Updating and deleting a value)", async () => {
      await contacttextfield.importSecondCSVFileUpdatingAndDeletingValues(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the third CSV file (No changes)", async () => {
      await contacttextfield.importThirdCSVFileNoChanges(emails[0], emails[1], emails[2]);
    });

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await contacttextfield.deleteEmailAddresses();
    });


    await test.step("Delete the custom fields", async () => {
      await contacttextfield.deleteCustomfield();
    });

  });

  test.afterAll(async () => {

    console.log('Ending 31 Custom Fields - Contacts - 2 - CustomFields');
    await browser.close();
  });

});