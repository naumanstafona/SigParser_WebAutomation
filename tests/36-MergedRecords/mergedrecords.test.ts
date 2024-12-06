import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { MergedRecords } from '../../pages/36-MergedRecords/MergedRecords';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let mergedrecords: MergedRecords;

test.describe('36-Merged Records', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        mergedrecords = new MergedRecords(page);
        await loginpage.login('test+stafona+testuser1@dragnettech.com', config.password, config.url);
    });

    test.skip('Sequential Test Execution with Await', async () => {

        await test.step('Step 1: Verification of Merge Coworker', async () => {
            await mergedrecords.verifyCowrokerMerge();
        });

        await test.step('Step 2: Verification of Merge Contacts', async () => {
            await mergedrecords.verifyContactsMerge();
        });

        await test.step('Step 3: Verification of Merge Companies', async () => {
            await mergedrecords.verifyCompaniessMerge();
        });

        await test.step('Step 4: Verification of Merge Contacts and Companies', async () => {
            await mergedrecords.verifyContactsAndCompaniesMerge();
        });

        await test.step('Step 5: Verification of Grid Selection for Contacts Page', async () => {
            await mergedrecords.verifyGridSelectionForContactsPage();
        });

        await test.step('Step 6: Verification of Grid Selection for Companies Page', async () => {
            await mergedrecords.verifyGridSelectionForCompaniesPage();
        });
    });

    test.afterAll(async () => {
        console.log('Ending 36-Merged Records');
        await browser.close();
    });
});
