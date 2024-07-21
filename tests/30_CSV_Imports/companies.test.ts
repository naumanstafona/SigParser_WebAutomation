import { test, expect } from '@playwright/test';
import { CompaniesPage } from '../../pages/30-CSV-Imports/CompaniesPage';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';

test.describe(' Starting 30 CSV Imports - Companies  File', () => {
    let browser: Browser;
    let page: Page;
    let loginpage: LoginPage;
    let companiespage: CompaniesPage;

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        companiespage = new CompaniesPage(page);
        await loginpage.login(config.email, config.password, config.url)
    });

    test('User should be able to verify Company Domain and tag ', async () => {
        await companiespage.companyDomainTagVerification();
    });

    test('User should be able to verify Company Domain and status ', async () => {
        await companiespage.companyDomainStatusVerification();
    });

    test('User should be able to verify Company Domain and Name ', async () => {
        await companiespage.companyNameVerification();
    });

    test('User should be able to verify Company With Score At Row Level', async () => {
        await companiespage.companyWithScoreAtRowLevelVerification();
    });

    test('User should be able to verify Company with Scores At Field Level (Lower Score)', async () => {
        await companiespage.companyWithScoreAtFieldLevelLowerVerification();
    });

    test('User should be able to verify Company with Scores At All Rows Level', async () => {
        await companiespage.companyWithScoreAtAllRowLevelsVerification();
    });

    test.afterAll(async () => {
        console.log('Ending 30 CSV Imports - Companies  File')
        await browser.close();
    });
});