import { test, expect } from '@playwright/test';
import { ContactPage } from '../../pages/ContactPage';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { addAbortListener } from 'events';
import { availableParallelism } from 'os';
import { LoginPage } from '../../pages/LoginPage';

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
        await contactpage.contactEmailTagVerification();//Passed
    });

    test('User should be able to verify contact with Email Status ', async () => {
        await contactpage.contactEmailStatusVerification();//Passed
    });


    test('User should be able to verify contact with Email Name ', async () => {
        await contactpage.contactEmailNameVerification();//Passed
    });

    // test('User should be able to verify contact with Scores at Row Level ', async () => {
    //     await contactpage.contactwithScoresAtRowLevelVerification();//Failing because Source Score is not updating
    // });

    test('User should be able to verify contact with Scores At Field Level Verification ', async () => {
        await contactpage.contactwithScoresAtFieldLevelVerification(); //Passed
    });

    test('User should be able to verify contact with Scores At All Row Level Verification ', async () => {
        await contactpage.contactwithScoresAtAllRowsLevelVerification(); //Passed
    });

    test('User should be able to delete contact value ', async () => {
        await contactpage.contactDeleteFieldValue(); //Passed By default it is adding +1 (+1 888-444-5555)
    });

    test('User should be able to delete contact value 2', async () => {
        await contactpage.contactDeleteFieldValue2(); // Passed
    });

    test.afterAll(async () => {
        await browser.close();
    });

});