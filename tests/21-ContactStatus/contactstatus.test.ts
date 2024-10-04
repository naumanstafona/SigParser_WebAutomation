import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { ContactStatus } from '../../pages/21-ContactStatus/ContactStatus';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let contactstatus: ContactStatus;

test.describe('21 - Contact Status Modifications', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        contactstatus = new ContactStatus(page);
        await loginpage.login(config.email, config.password, config.url);
    });


    const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];
    test('Sequential Test Execution with Await', async () => {
        console.log('21 - Contact Status Modifications');

        await test.step('Deleting Email Addresses', async () => {
            await contactstatus.deleteEmailAddresses();
        });

        await test.step('Creation of email addresses', async () => {
            await contactstatus.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
        });

        await test.step('Edit Details of Contacts', async () => {
            await contactstatus.editDetails();
        });

        await test.step('Verify Details', async () => {
            await contactstatus.verifyDetails();
        });

        await test.step('Remove Phone Number and Address', async () => {
            await contactstatus.removePhoneAndAddress();
        });

        await test.step('Verify Address and Phone Number is removed', async () => {
            await contactstatus.verifyPhoneAndAddressRemoval();
        });

        await test.step('Add Phoine and Address Again', async () => {
            await contactstatus.addPhoneAndAddress();
        });

        await test.step('Verify Details', async () => {
            await contactstatus.verifyDetails();
        });

        await test.step('Changing Status on one contact', async () => {
            await contactstatus.changeStatus();
        });

        await test.step('Changing Status on mulitple contact', async () => {
            await contactstatus.changeStatusOnMultipleContacts();
        });

        await test.step('Deleting Email Addresses', async () => {
            await contactstatus.deleteEmailAddresses();
        });

    });

    test('This test case will cover Mail Box Scan Rules', async () => {

        await test.step('Creation of two email addresses', async () => {
            await contactstatus.createTwoEmailAddresses();
        });

        await test.step('Creation of two email addresses', async () => {
            await contactstatus.addScanRules();
        });

        await test.step('Verification of Rules', async () => {
            await contactstatus.rulesVerification();
        });

        await test.step('Deleting Email Addresses', async () => {
            await contactstatus.deleteEmailAddresses();
        });
    });

    test.afterAll(async () => {
        console.log('Ending 21 - Contact Status Modifications');
        await browser.close();
    });

});