
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { FakeCompanies } from '../../pages/27- FakeCompanies/FakeComapnies';
import test from '@playwright/test';
import { BulkEditingContacts } from '../../pages/27- FakeCompanies/BulkEditingContacts';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let fakecompanies: FakeCompanies;
let bulkeditingcontacts: BulkEditingContacts

test.describe('27 - Fake Companies', () => {
    const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        fakecompanies = new FakeCompanies(page);
        bulkeditingcontacts = new BulkEditingContacts(page);

        await loginpage.login(config.email, config.password, config.url);
        await fakecompanies.deleteEmailAddresses();
        await fakecompanies.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
        console.log('Starting - 20 Bulk Editing Contacts File')

    });

    test('User should be able to Verify Contact Status to ignore Values', async () => {
        await bulkeditingcontacts.updatingContactStatusFieldtoIgnore();
    });

    test('User should be able to Email Addrtess Type to Non Person', async () => {
        await bulkeditingcontacts.updatingEmailAddressTypetoNonPerson();
    });

    test('User should be able to restore default status and address type to persons', async () => {
        await bulkeditingcontacts.restoreAll();
    });

    test('User should be able to Verify some Contact Status to ignore Values', async () => {
        await bulkeditingcontacts.updatingoneContactStatusFieldtoIgnore();
    });

    test('User should be able to Verify some Contact Status to Non Person Values', async () => {
        await bulkeditingcontacts.updatingOneEmailAddressTypetoNonPerson();
    });



    test.afterAll(async () => {

        await bulkeditingcontacts.restoreAll();

        await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
            await fakecompanies.deleteEmailAddresses();
        });

        console.log('Ending 20 Bulk Editing Contacts File');
        await browser.close();
    });
});