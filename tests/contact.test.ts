import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ContactPage } from '../pages/ContactPage';
import { chromium, Browser, Page } from 'playwright';
import config from '../config';
import { addAbortListener } from 'events';
import { availableParallelism } from 'os';

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
        await contactpage.contactEmailTagVerification(); //Passed
    });

    test('User should be able to verify contact with Email Status ', async () => {
        await contactpage.contactEmailStatusVerification();//Passed
    });


    test('User should be able to verify contact with Email Name ', async () => {
        await contactpage.contactEmailNameVerification(); //Passed
    });

    test('User should be able to verify contact with Scores at Row Level ', async () => {
        await contactpage.contactwithScoresAtRowLevelVerification(); //Failing due to Active bug Source Scoore is not Updating
    });

    test('User should be able to verify contact with Scores At Field Level Verification ', async () => {
        await contactpage.contactwithScoresAtFieldLevelVerification(); //Will Fail due to sscore not updates and field not updated
    });

    test('User should be able to verify contact with Scores At All Row Level Verification ', async () => {
        await contactpage.contactwithScoresAtAllRowsLevelVerification(); //Will Fail due to sscore not updates and field not updated
    });

    test('User should be able to delete contact value ', async () => {
        await contactpage.contactDeleteFieldValue(); //
    });

    test('User should be able to delete contact value 2', async () => {
        await contactpage.contactDeleteFieldValue2(); //
    });

    test.afterAll(async () => {
        await browser.close();
    });

});