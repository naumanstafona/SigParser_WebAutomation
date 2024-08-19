import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { MultiSelectField } from "../../pages/32_Custom_Fields_Companies/MultiSelect";

test.describe('Starting 32 Custom Fields - Company - 8 - Multi Select Field', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let multiselectfield: MultiSelectField;

  const emails: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    multiselectfield = new MultiSelectField(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom Text Area field column", async () => {

    console.log('Starting Starting 32 Custom Fields - Company - 8 - Multi Select Field');

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await multiselectfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await multiselectfield.deleteCustomField();
    });

    await test.step("Create a new custom column and add it to the contacts grid", async () => {
      await multiselectfield.createNewMultiSelectCustomColumnAndAddIttoGridColumns();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await multiselectfield.createCompaniesManuallyInCompanyGrid(emails[0], emails[1], emails[2]);
    });

    await test.step("Manually set the value for the custom field", async () => {
      await multiselectfield.manuallySetTheVaueForCustomField(emails[0]);
    });

    await test.step("Update the existing field value", async () => {
      await multiselectfield.updateExistingalue(emails[0]);
    });

    await test.step("Update the existing field value directly in the grid", async () => {
      await multiselectfield.updateExistingFileDirectlyInGrid(emails[0]);
    });


    await test.step("Import a CSV to set the value for the custom field", async () => {
      await multiselectfield.importCSVtoSettheValuesForTheCustomField(emails[0], emails[1], emails[2]);
    });


    await test.step("Import the second CSV file (Updating and deleting a value)", async () => {
      await multiselectfield.importSecondCSVFileUpdatingAndDeletingValues(emails[0], emails[1], emails[2]);
    });

    await test.step("Import the third CSV file (No changes)", async () => {
      await multiselectfield.importThirdCSVFileNoChanges(emails[0], emails[1], emails[2]);
    });

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await multiselectfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await multiselectfield.deleteCustomField();
    });

  });

  test.afterAll(async () => {
    console.log('Ending Starting 32 Custom Fields - Company - 8 - Multi Select Field');
    await browser.close();
  });

});