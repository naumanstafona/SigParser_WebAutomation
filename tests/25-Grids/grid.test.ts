import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { Grids } from '../../pages/25-Grids/Grid';
let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let grid: Grids;

test.describe('25 - Grids', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        grid = new Grids(page);
        await loginpage.login(config.email, config.password, config.url);
    });

    const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

    const expectedVisibleColumns = ["Contact Status", "Full Name", "Company Name", "Email Address", "Job Title", "Phone", "Location", 'interactions', "Latest Interaction"];

    const allVisibleColumns = ["Contact Status", "Full Name", "Company Name", "Date Created", "Date Last Updated (Details)", "Date Last Updated (All)", "Source Mailboxes", 'Source Mailbox Folders', "SigParser Contact ID", "First Name", "Middle Name", "Last Name", "Name Prefix", "Name Suffix", "Job Title", "Birth Date", "Gender", "Company Website", "Company LinkedIn", "Company Industry", "Company Employees", "Company Location", "Company City", "Company State", "Company Country", "Company Founded", "Assistant Phone", "Assistant Name", "Email Address", "Email Address Name", "Email Address Type", "Email Domain", "Email Domain Type", "Email Domain Country", "Latest Email Display Name", "Latest Email Signature", "Email Includes Unsubscribe", "All Email Addresses", "All Email Addresses Count", "Phone", "Office Phone", "Mobile Phone", "Fax Phone", "Direct Phone", "Home Phone", "Personal LinkedIn", "Personal Twitter", "Personal Website", "Location", "Location - City", "Location - State", "Location - Country", "Location - Latitude", "Location - Latitude", "Location Source", "Full Address", "Address - Street", "Address - Line 2", "Address - City", "Address - State", "Address - Postal Code", "Address - Country", "Estimated Location", "Interactions", "Interaction Status", "Total Emails", "Emails To", "Emails From", "Emails Included", "Total Meetings", "Completed Meetings", "Upcoming Meetings", "First Interaction", "Latest Interaction", "Latest Email To", "Latest Email From", "Latest Email Included", "Latest Meeting", "Next Meeting", "Interactions (Legacy)", "Total Emails (Legacy)", "Inbound Emails (Legacy)", "Direct Inbound Emails (Legacy)", "Outbound Emails (Legacy)", "Direct Outbound Emails (Legacy)", "CC Emails (Legacy)", "Latest Inbound Email (Legacy)", "Latest Outbound Email (Legacy)", "Relationships", "Coworker Relationships", "Company Relationships", "Other Relationships", "Strongest Relationship", "Most Active Relationship", "First Relationship", "Latest Relationship", "Primary Relationship", "Coworker Relationship Email Addresses", "Company Relationship Email Addresses", "Other Relationship Email Addresses", "In CRM", "CRM Contact", "CRM Contact Date Added", "CRM Contact Date Last Updated", "CRM Contact ID", "CRM Contact URL", "CRM Contact Record Type", "CRM Contact Matches", "CRM Contact Status", "CRM Contact Master ID", "CRM Company", "Contact CRM Company", "CRM Company Match", "CRM Company Mismatch", "CRM Company Type", "CRM Company Match Type", "CRM Company Match Reason", "CRM Company ID", "CRM Company URL", "Email Validation", "Email Validation Details", "Email Validation Last Checked", "Email Validation Last Updated", "Email Validation Last Bounced", "Phone Parsing Error", "Status - Contact Only", "Status - Company Only", "Tag", "Custom", "BIG NAME",];

    test('User should be able to verify exports only visible colums', async () => {
        console.log('Starting 25-Grids');

        await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
            await grid.deleteEmailAddresses();
        });

        await test.step("Manually create a couple of contacts in the Contact grid", async () => {
            await grid.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
        });

        await test.step("Verify exports only visible colums", async () => {
            await grid.exportColumns(expectedVisibleColumns, true);
        });

        await test.step("Verify exports all visible colums", async () => {
            await grid.exportColumns(allVisibleColumns, false);
        });

        await test.step("Verify exports all visible colums", async () => {
            await grid.exportColumnsWithSelectedRows(allVisibleColumns, 2);
        });

    });

    test('User should be able create and Manage Views', async () => {
        await grid.createTestView();
    });

    test('User should be able to manage columns', async () => {
        await grid.manageColumns();
    });

    test.afterAll(async () => {
        console.log('Ending 30 CSV Imports - Companies File');
        await browser.close();
    });
});