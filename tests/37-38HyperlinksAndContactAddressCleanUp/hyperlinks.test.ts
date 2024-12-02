import { test, expect } from '@playwright/test';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { Hyperlinks } from '../../pages/37-38HyperlinksAndContactAddressCleanUp/Hyperlinks';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let hyperlinks: Hyperlinks;
let context: BrowserContext;

test.describe('Starting 37 & 38 Hyperlinks and Contact Address Clean Up', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginpage = new LoginPage(page);
        hyperlinks = new Hyperlinks(page, context);
        await loginpage.login(config.email, config.password, config.url);
    });

    const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

    test('This test case includes hyperlinks for contacts and Companies and also Adreess Cleanup', async () => {
        await test.step('Deletion of Email Addresses', async () => {
            await hyperlinks.deleteEmailAddresses();
        });

        await test.step('Creation of Email Addresses', async () => {
            await hyperlinks.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
        });

        await test.step('Add links and verifying them', async () => {
            await hyperlinks.addLinksToContacts();
        });

        await test.step('Add links on company links', async () => {
            await hyperlinks.addLinksToCompanies();
        });

        await test.step('Add Phone Number and Getting its location', async () => {
            await hyperlinks.locationFromPhoneNumber();
        });

        await test.step('Deletion of Email Addresses', async () => {
            await hyperlinks.deleteEmailAddresses();
        });
    });

    test.afterAll(async () => {
        console.log('Ending 37 & 38 Hyperlinks and Contact Address Clean Up');
        await browser.close();
    });
});
