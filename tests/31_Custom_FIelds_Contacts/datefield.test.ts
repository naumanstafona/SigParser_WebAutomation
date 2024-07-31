import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { DateFields } from "../../pages/31_Custom_Fields_Contacts/DateField";

test.describe('Starting 31 Custom Fields - Contacts - 5 - DateFields ', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let contactdatefield: DateFields;

  const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    contactdatefield = new DateFields(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom field column", async () => {

    console.log ('Starting 31 Custom Fields - Contacts - 5 - DateFields');
    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await contactdatefield.deleteEmailAddresses();
    });

    await test.step("Delete the custom date fields", async () => {
      await contactdatefield.deleteCustomDateField();
    });

    await test.step("Create a new custom column text and add it to the contacts grid", async () => {
      await contactdatefield.createNewDateCustomColumnAndAddIttoGridColumns();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await contactdatefield.createContactsEmailManuallyInContactGrid(emails[0], emails[1], emails[2]);
    });


    await test.step("Manually set the value for the custom field", async () => {
      await contactdatefield.setTheValueForTestContactDate(emails[0]);
    });

    await test.step("Update the existing field value (with a value over the character limit)", async () => {
      await contactdatefield.updateExistingvalue(emails[0]);
    });

    // await test.step("Update the existing field value directly in the grid", async () => {
    //   await contactdatefield.updateExistingFileDirectlyInGrid(emails[0]);
    // });

    await test.step("Import a CSV to set the value for the custom field", async () => {
      await contactdatefield.importCSVtoSettheValuesForTheCustomField(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the second CSV file (Updating and deleting a value)", async () => {
      await contactdatefield.importSecondCSVFileUpdatingAndDeletingValues(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the third CSV file (No changes)", async () => {
      await contactdatefield.importThirdCSVFileNoChanges(emails[0], emails[1], emails[2]);
    });

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await contactdatefield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await contactdatefield.deleteCustomDateField();
    });

  });

  test.afterAll(async () => {
    console.log('Ending 31 Custom Fields - Contacts - 5 - DateFields');
    await browser.close();
  });

});