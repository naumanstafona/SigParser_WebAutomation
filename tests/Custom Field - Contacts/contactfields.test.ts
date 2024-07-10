import { test, expect } from "@playwright/test";
import { ContactPage } from "../../pages/ContactPage";
import { chromium, Browser, Page } from "playwright";
import config from "../../config";
import { LoginPage } from "../../pages/LoginPage";

test.describe("login test", () => {
  let browser: Browser;
  let page: Page;
  let loginpage: LoginPage;
  let contactpage: ContactPage;
  const emails = ['customcontact01@test.com', 'customcontact02@test.com', 'customcontact03@test.com'];//Always changhe these email paths in order to avaoid conflict

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new LoginPage(page);
    contactpage = new ContactPage(page);
    await loginpage.login(config.email, config.password, config.url);
  });

  test("User should be able to create a new custom field column", async () => {

    await test.step("Manually create a couple of contacts in the Contact grid", async () => {
      await contactpage.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);// Passing
    });


    await test.step("Create a new custom column text and add it to the contacts grid", async () => {
      await contactpage.createNewTextCustomColumnAndAddIttoGridColumns();
    });

    await test.step("Manually set the value for the custom field", async () => {
      await contactpage.setTHeValueForCustomField(emails[0], emails[1], emails[2]);
    });

    await test.step("Delete the custom fields", async () => {
      await contactpage.deleteCustomField();
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });
});
