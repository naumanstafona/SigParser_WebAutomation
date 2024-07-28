
import { test, expect } from '@playwright/test';
import { CoworkerPage } from '../../pages/30-CSV-Imports/CoworkerPage';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
test.describe('Starting 30 CSV Imports - Coworkers  File', () => {
    let browser: Browser;
    let page: Page;
    let loginpage: LoginPage;
    let coworkerpage: CoworkerPage;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: true });
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        coworkerpage = new CoworkerPage(page);
        await loginpage.login(config.email, config.password, config.url)
    });
    
    console.log('Starting 30 CSV Imports - Coworkers  File');
    test('User should be able to verify coworker with score at Row Level ', async () => {
        await coworkerpage.coworkerWithScoresAtRowLevelVerification();
    });

    test('User should be able to verify coworker with score at Field Level and Lower Score ', async () => {
        await coworkerpage.coworkerWithScoreAtFieldLevelLowerVerification();
    });

    test('User should be able to verify coworker with score at All Row Level Verification ', async () => {
        await coworkerpage.coworkerwithScoresAtAllRowsLevelVerification();
    });

    test.afterAll(async () => {
        console.log('Ending 30 CSV Imports - Coworkers  File');
        await browser.close();
    });
});