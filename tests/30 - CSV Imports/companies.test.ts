import { test, expect } from '@playwright/test';
import { CompaniesPage } from '../../pages/CompaniesPage';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';

test.describe('login test', () => {
    let browser: Browser;
    let page: Page;
    let loginpage: LoginPage;
    let companiespage: CompaniesPage;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        companiespage = new CompaniesPage(page);
        await loginpage.login(config.email, config.password, config.url)
    });

    test('User should be able to verify Company Domain and tag ', async () => {
        await companiespage.companyDomainTagVerification();//Passed
    });

    test('User should be able to verify Company Domain and status ', async () => {
        await companiespage.companyDomainStatusVerification();//Passed 
    });

    test('User should be able to verify Company Domain and Name ', async () => {
        await companiespage.companyNameVerification(); //Passed
    });

    test('User should be able to verify Company With Score At Row Level', async () => {
        await companiespage.companyWithScoreAtRowLevelVerification(); //Passed
    });

    test('User should be able to verify Company with Scores At Field Level (Lower Score)', async () => {
        await companiespage.companyWithScoreAtFieldLevelLowerVerification(); //Passed
    });

    test('User should be able to verify Company with Scores At All Rows Level', async () => {
        await companiespage.companyWithScoreAtAllRowLevelsVerification(); //Passed
    });

    test.afterAll(async () => {
        await browser.close();
    });
})
