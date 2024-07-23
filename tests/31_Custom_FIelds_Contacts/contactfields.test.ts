import { test, expect } from "@playwright/test";
import { ContactPage } from "../../pages/30-CSV-Imports/ContactPage";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";

test.describe('Starting 31 Custom Fields - Contacts - 2 - CustomFields ', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let contactpage: ContactPage;

  const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    contactpage = new ContactPage(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom field column", async () => {


    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await contactpage.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await contactpage.deleteCustomField();
    });

    await test.step("Create a new custom column text and add it to the contacts grid", async () => {
      await contactpage.createNewTextCustomColumnAndAddIttoGridColumns();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await contactpage.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
    });


    await test.step("Manually set the value for the custom field", async () => {
      await contactpage.setTheValueForCustomField(emails[0]);
    });

    await test.step("Update the existing field value (with a value over the character limit)", async () => {
      await contactpage.updateExistingValueWithOverCharacterLimit(emails[0]);
    });

    // await test.step("Update the existing field value directly in the grid", async () => {
    //   await contactpage.updateExistingFileDirectlyInGrid(emails[0]);
    // });

    // await test.step("Import a CSV to set the value for the custom field", async () => {
    //   await contactpage.importCSVtoSettheValuesForTheCustomField(emails[0], emails[1], emails[2]);
    // });




  });

  test.afterAll(async ({ }, testInfo) => {
    
    // testInfo.setTimeout(300000);
    // await test.step("Import the second CSV file (Updating and deleting a value)", async () => {
    //   await contactpage.importSecondCSVFileUpdatingAndDeletingValues(emails[0], emails[1], emails[2]);
    // });

    // await test.step("Import the third CSV file (No changes)", async () => {
    //   await contactpage.importThirdCSVFileNoChanges(emails[0], emails[1], emails[2]);
    // });

    await browser.close();
  });

});