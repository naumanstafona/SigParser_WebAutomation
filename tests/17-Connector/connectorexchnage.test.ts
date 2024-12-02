import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { ConnecterExchange } from '../../pages/17-Connectors-Exchange/ConnectorsExchange';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let connectorsexchange: ConnecterExchange;

test.describe('17 - Connectors Exchange', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        connectorsexchange = new ConnecterExchange(page);
        await loginpage.login('test+stafona+connectorexchange@dragnettech.com', config.password, config.url);
    });
    test('This file conatins test cases regarding Connectors Exchange', async () => {
        console.log('Starting 17 - Connectors Exchange');

        await test.step('Delete Emails', async () => {
            await connectorsexchange.deleteEmailAddresses();
        })

        await test.step('Purchasing 2 years of Data', async () => {
            await connectorsexchange.purchaseMailbox();
        })

        await test.step('Validate and Exctract Email', async () => {
            await connectorsexchange.validateAndExtractEmails();
        })

        await test.step('Delete Emails', async () => {
            await connectorsexchange.deleteEmailAddresses();
        })
    });

    test.afterAll(async () => {
        console.log('Ending 17 - Connectors Exchange');
        await browser.close();
    });

});