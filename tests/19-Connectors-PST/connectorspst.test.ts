import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { ConnectorsPST } from '../../pages/19-Connector-PST/ConnectorsPST';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let connectorspst: ConnectorsPST;

test.describe('19 - Connectors - PST', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        connectorspst = new ConnectorsPST(page);
        await loginpage.login(config.email, config.password, config.url);
    });

    test('This file conatins test cases regarding uploading PST Files', async () => {
        console.log('Starting 19 - Connectors - PST');

        await test.step('Delete Emails', async () => {
            await connectorspst.deleteEmailAddresses();
        })

        await test.step('Uploading a PST file', async () => {
            await connectorspst.uploadPSTFile();
        })

        await test.step('Purchasing a PST file', async () => {
            await connectorspst.purchasePSTFile();
        })

        await test.step('Verification of File Name under MailBox', async () => {
            await connectorspst.verifyFileName();
        })


        await test.step('Delete Emails', async () => {
            await connectorspst.deleteEmailAddresses();
        })

    });

    test.afterAll(async () => {
        console.log('Ending 19 - Connectors - PST');
        await browser.close();
    });

});