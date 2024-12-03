
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { FakeCompanies } from '../../pages/27- FakeCompanies/FakeComapnies';
import test from '@playwright/test';
import { BulkEditingCompany } from '../../pages/27- FakeCompanies/BulkEditingCompany';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let fakecompanies: FakeCompanies;
let bulkeditingcompanies: BulkEditingCompany

test.describe('27 - Fake Companies', () => {
    const emails: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        fakecompanies = new FakeCompanies(page);
        bulkeditingcompanies = new BulkEditingCompany(page);

        await loginpage.login(config.email, config.password, config.url);
        await fakecompanies.deleteEmailAddresses();
        await fakecompanies.createCompaniesManuallyInCompanyGrid(emails[0], emails[1], emails[2]);
        console.log('Starting - 20 Bulk Editing Companies File')

    });

    test.skip('User should be able to Verify Contact Status to Empty Values', async () => {
        await bulkeditingcompanies.updatingCompaniesStatusFieldtoEmptyValue();
    });

    test('User should be able to Verify Contact Status to ignore Values', async () => {
        await bulkeditingcompanies.updatingCompaniesStatusFieldtoIgnore();
    });

    test.skip('User should be able to Email Addrtess Type to Non Person', async () => {
        await bulkeditingcompanies.updatingEmailAddressTypetoNonPerson();
    });

    test.skip('User should be able to restore default status and address type to persons', async () => {
        await bulkeditingcompanies.restoreAll();
    });

    // test('User should be able to Verify some Contact Status to ignore Values', async () => {
    //     await bulkeditingcontacts.updatingoneContactStatusFieldtoIgnore();
    // });

    // test('User should be able to Verify some Contact Status to Non Person Values', async () => {
    //     await bulkeditingcontacts.updatingOneEmailAddressTypetoNonPerson();
    // });



    test.afterAll(async () => {

        // await bulkeditingcontacts.restoreAll();

        await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
            await fakecompanies.deleteEmailAddresses();
        });

        console.log('Ending 20 Bulk Editing Companies File');
        await browser.close();
    });
});