import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { TextAreaField } from "../../pages/32_Custom_Fields_Companies/TextAreaField";
import { TextAreaFieldLocators } from "../../locators/32-Custom-Fields-Companies/TextAreaFieldLoctors";
test.describe('Starting 32 Custom Fields - Company - 3 - TextAreaField', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let textareafield: TextAreaField;

  const emails: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    textareafield = new TextAreaField(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom Text Area field column", async () => {

    console.log('Starting 31 Custom Fields - Contacts - 3 - TextAreaField');
    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await textareafield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await textareafield.deleteCustomfield();
    });

    await test.step("Create a new custom column text and add it to the contacts grid", async () => {
      await textareafield.createNewTextCustomColumnAndAddIttoGridColumns();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await textareafield.createCompaniesManuallyInCompanyGrid(emails[0], emails[1], emails[2]);
    });


    await test.step("Manually set the value for the custom field", async () => {
      await textareafield.setTheValueForTestContactTextArea(emails[0]);
    });

    await test.step("Update the existing field value (with a value over the character limit)", async () => {
      await textareafield.updateExistingValueWithOverCharacterLimit(emails[0]);
    });

    await test.step("Update the existing field value directly in the grid", async () => {
      await textareafield.updateExistingFileDirectlyInGrid(emails[0]);
    });

    await test.step("Import a CSV to set the value for the custom field", async () => {
      await textareafield.importCSVtoSettheValuesForTheCustomField(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the second CSV file (Updating and deleting a value)", async () => {
      await textareafield.importSecondCSVFileUpdatingAndDeletingValues(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the third CSV file (No changes)", async () => {
      await textareafield.importThirdCSVFileNoChanges(emails[0], emails[1], emails[2]);
    });

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await textareafield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await textareafield.deleteCustomfield();
    });

  });

  test.afterAll(async () => {
    console.log('Ending 32 Custom Fields - Company - 3 - TextAreaField');
    await browser.close();
  });

});