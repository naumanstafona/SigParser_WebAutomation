import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CompaniesPage } from '../pages/CompaniesPage';
import { chromium, Browser, Page } from 'playwright';
import config from '../config';


test.describe('login test', () => {
    let browser: Browser;
    let page: Page;
    let loginpage: LoginPage;
    let companiespage:CompaniesPage;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        companiespage = new CompaniesPage(page);
        await loginpage.login(config.email, config.password, config.url)
    });

    test('User should be able to import Companies file and verify it ', async () => {
        await companiespage.companiesParserVerification();
    });

    test.afterAll(async () => {
        await browser.close();
    });
});