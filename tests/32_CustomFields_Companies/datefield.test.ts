import { test, expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";
import { DateFields } from "../../pages/32_Custom_Fields_Companies/DateField";

test.describe('Starting 32 Custom Fields - Companies - 5 - DateFields ', () => {

  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let contactdatefield: DateFields;

  const emails: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    contactdatefield = new DateFields(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test.skip("User should be able to create a new custom field column", async () => {

    console.log('Starting 32 Custom Fields - Companies - 5 - DateFields');
    await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
      await contactdatefield.deleteEmailAddresses();
    });

    await test.step("Delete the custom date fields", async () => {
      await contactdatefield.deleteCustomfield();
    });

    await test.step("Create a new custom column and add it to the contacts grid", async () => {
      await contactdatefield.createCustomField();
    });

    await test.step("Add custom Column to the Grid", async () => {
      await contactdatefield.adddCutomFieldToGrid();
    });

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await contactdatefield.createCompaniesManuallyInCompanyGrid(emails[0], emails[1], emails[2]);
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
      await contactdatefield.deleteCustomfield();
    });

  });

  test.afterAll(async () => {
    console.log('Ending 32 Custom Fields - Companies - 5 - DateFields');
    await browser.close();
  });

});