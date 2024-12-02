import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { ContactExportsColumns } from '../../pages/33-CSVExports/ContactExportColumns';
let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let contactexportcolumns: ContactExportsColumns;

test.describe('33-CSV Exports', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch({);
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        contactexportcolumns = new ContactExportsColumns(page);
        await loginpage.login(config.email, config.password, config.url);
    });

    const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];
    const emailCompanies: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

    test('Email address creation and exporting all contacts and columns', async () => {
        await test.step('Delete existing email addresses', async () => {
            await contactexportcolumns.deleteEmailAddresses();
        });

        await test.step('Create new email addresses manually in contact grid', async () => {
            await contactexportcolumns.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
        });

        await test.step('Export all columns and all contacts', async () => {
            await contactexportcolumns.allContactsAllColumns();
        });
    });

    test('User should be able to export some columns and all contacts', async () => {

        await contactexportcolumns.allContactsSomeColumns();
    });

    test('User should be able to export some contacts', async () => {

        await contactexportcolumns.exportSomeContactsVerifications();
    });

    test('Email address creation and exporting companies', async () => {

        await test.step('Delete existing email addresses', async () => {
            await contactexportcolumns.deleteEmailAddresses();
        });

        await test.step('Create new email addresses manually in Companies grid', async () => {
            await contactexportcolumns.createCompaniesManuallyInCompanyGrid(emailCompanies[0], emailCompanies[1], emailCompanies[2]);
        });

        await test.step('Export two rows of data for Companies', async () => {
            await contactexportcolumns.exportCompanyPageData();
        });

        await test.step('Delete existing email addresses', async () => {
            await contactexportcolumns.deleteEmailAddresses();
        });

    });
    test.afterAll(async () => {
        console.log('Ending 33 CSV Exports');
        await browser.close();
    });
});