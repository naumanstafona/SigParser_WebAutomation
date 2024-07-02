import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ContactPage } from '../pages/ContactPage';
import { chromium, Browser, Page } from 'playwright';
import config from '../config';


test.describe('login test', () => {
    let browser: Browser;
    let page: Page;
    let loginpage: LoginPage;
    let contactpage: ContactPage;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        contactpage = new ContactPage(page);
        await loginpage.login(config.email, config.password, config.url)
    });


    test('User should be able to verify contact with Email Tag ', async () => {
        await contactpage.contactEmailTagVerification();
    });

    test('User should be able to verify contact with Email Status ', async () => {
        await contactpage.contactEmailStatusVerification();//Haseeb to verify
    });

    
    test('User should be able to verify contact with Email Name ', async () => {
        await contactpage.contactEmailNameVerification();
    });

    test.afterAll(async () => {
        await browser.close();
    });
});