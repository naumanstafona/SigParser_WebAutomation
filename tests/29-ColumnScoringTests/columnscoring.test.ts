import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { ColumnSorting } from '../../pages/29-ColumnScoringTests/ColumnScoring';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let columnsorting: ColumnSorting;

test.describe('29 - Column Scoring Test', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        columnsorting = new ColumnSorting(page);
        await loginpage.login(config.email, config.password, config.url);
    });


    const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];
    const emails2: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];
    test('This test case conatins test cases related to Contact Details', async () => {
        console.log('Starting 29 - Column Scoring Test');

        await test.step('Deleting Email Addresses', async () => {
            await columnsorting.deleteEmailAddresses();
        });

        await test.step('Creation of email addresses', async () => {
            await columnsorting.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
        });

        await test.step('Edit the Contact Details', async () => {
            await columnsorting.updateTheContactDetails();
        });

        await test.step('View Contact Update Tracking', async () => {
            await columnsorting.viewUpdateTracking();
        });

        await test.step('Changing Source Score', async () => {
            await columnsorting.changingSourceScore();
        });

        await test.step('Updating the contact first Contact Again', async () => {
            await columnsorting.updatingContactFIrstName();
        });

        await test.step('View Contact Update Tracking', async () => {
            await columnsorting.viewContactUpdateTracking();
        });

        await test.step('Changing Source Score', async () => {
            await columnsorting.changingSourceScoreAgainto90();
        });

        await test.step('Deleting Email Addresses', async () => {
            await columnsorting.deleteEmailAddresses();
        });

    });


    test('This test case conatins test cases related to Companies', async () => {
        console.log('Starting 29 - Column Sorting Test');

        await test.step('Deleting Email Addresses', async () => {
            await columnsorting.deleteEmailAddresses();
        });

        await test.step('Creation of email addresses', async () => {
            await columnsorting.createCompaniesManuallyInCompanyGrid(emails2[0], emails2[1], emails2[2]);
        });

        await test.step('Edit the Companies Details', async () => {
            await columnsorting.updateTheCompnaniesDetail();
        });

        await test.step('View Company Update Tracking', async () => {
            await columnsorting.viewCompanyUpdateTracking();
        });

        await test.step('Changing Source Score', async () => {
            await columnsorting.changingSourceScoreCompanies();
        });

        await test.step('Updating the contact first Contact Again', async () => {
            await columnsorting.updatingCompanesdetails();
        });

        await test.step('View Contact Update Tracking', async () => {
            await columnsorting.viewCompaniesUpdateTrackingAgain();
        });

        await test.step('Changing Source Score', async () => {
            await columnsorting.changingSourceScoreAgainto95forCompanies();
        });

        await test.step('Deleting Email Addresses', async () => {
            await columnsorting.deleteEmailAddresses();
        });

    });

    test.afterAll(async () => {
        console.log('Ending 29 - Column Scoring Test');
        await browser.close();
    });

});