
import { test, expect } from '@playwright/test';
import { CoworkerPage } from '../../pages/CoworkerPage';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
test.describe('login test', () => {
    let browser: Browser;
    let page: Page;
    let loginpage: LoginPage;
    let coworkerpage: CoworkerPage;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        coworkerpage = new CoworkerPage(page);
        await loginpage.login(config.email, config.password, config.url)
    });

    test('User should be able to verify coworker with score at Row Level ', async () => {
        await coworkerpage.coworkerWithScoresAtRowLevelVerification();//Failinig due to not updated 56 score
    });

    test('User should be able to verify coworker with score at Field Level and Lower Score ', async () => {
        await coworkerpage.coworkerWithScoreAtFieldLevelLowerVerification();//Passing
    });

    test('User should be able to verify coworker with score at All Row Level Verification ', async () => {
        await coworkerpage.coworkerwithScoresAtAllRowsLevelVerification();//Passing
    });

    test.afterAll(async () => {
        await browser.close();
    });
});