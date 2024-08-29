import { test, expect } from '@playwright/test';
import { ContactPage } from '../../pages/30-CSV-Imports/ContactPage';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { addAbortListener } from 'events';
import { availableParallelism } from 'os';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Starting 30 CSV Imports - Contacts File', () => {
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


    console.log('Starting 30 CSV Imports - Contacts File');
    test('User should be able to verify contact with Email Tag ', async () => {
        await contactpage.contactEmailTagVerification();
    });

    test('User should be able to verify contact with Email Status ', async () => {
        await contactpage.contactEmailStatusVerification();
    });


    test('User should be able to verify contact with Email Name ', async () => {
        await contactpage.contactEmailNameVerification();
    });

    test('User should be able to verify contact with Scores at Row Level ', async () => {
        await contactpage.contactwithScoresAtRowLevelVerification();
    });

    test('User should be able to verify contact with Scores At Field Level Verification ', async () => {
        await contactpage.contactwithScoresAtFieldLevelVerification();
    });

    test('User should be able to verify contact with Scores At All Row Level Verification ', async () => {
        await contactpage.contactwithScoresAtAllRowsLevelVerification();
    });

    test('User should be able to delete contact value ', async () => {
        await contactpage.contactDeleteFieldValue();
    });

    test('User should be able to delete contact value 2', async () => {
        await contactpage.contactDeleteFieldValue2();
    });

    test.afterAll(async () => {
        console.log(' Ending 30 CSV Imports - Contacts File');
        await browser.close();
    });

});