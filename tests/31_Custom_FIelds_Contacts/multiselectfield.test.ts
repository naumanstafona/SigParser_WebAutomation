import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { MultiSelectField } from "../../pages/31_Custom_Fields_Contacts/MultiSelect";

test.describe('Starting 31 Custom Fields - Contacts - 8 - Multi Select Field', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let multiselectfield: MultiSelectField;

  const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    multiselectfield = new MultiSelectField(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom Text Area field column", async () => {

    console.log('Starting 31 Custom Fields - Contacts - 8 - Multi Select Field');

    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await multiselectfield.deleteEmailAddresses();
    });

    await test.step("Delete the custom fields", async () => {
      await multiselectfield.deleteCustomfield();
    });

    await test.step("Create a new custom column", async () => {
      await multiselectfield.createCustomField();
    });

    await test.step("Add it to Grid", async () => {
      await multiselectfield.adddCutomFieldToGrid();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await multiselectfield.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
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
      await multiselectfield.deleteCustomfield();
    });

  });

  test.afterAll(async () => {
    console.log('Ending 31 Custom Fields - Contacts - 8 - Multi Select Field');
    await browser.close();
  });

});