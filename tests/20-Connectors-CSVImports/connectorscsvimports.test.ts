import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { ConnectorsCSVImports } from '../../pages/20-Connectors-CSVImports/ConnectorsCSVImports';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let connectorscsvimports: ConnectorsCSVImports;

test.describe('20 - Connectors - CSV Imports', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        connectorscsvimports = new ConnectorsCSVImports(page);
        await loginpage.login(config.email, config.password, config.url);
    });


    test('This file conatins test cases regarding uploading Connectors CSV Imports - Contact List Upload  - 1', async () => {
        console.log('Starting 20 - Connectors - CSV Imports- Contact List Upload  - 1');

        await test.step('Deleting Email Addresses', async () => {
            await connectorscsvimports.deleteEmailAddresses();
        });

        await test.step('Contact List Upload', async () => {
            await connectorscsvimports.contactListUpload();
        });

    });

    test('This file conatins test cases regarding uploading Connectors CSV Imports - Companies List Upload - 2', async () => {
        console.log('Starting 20 - Connectors - CSV Imports - Companies List Upload - 2');

        await test.step('Deleting Email Addresses', async () => {
            await connectorscsvimports.deleteEmailAddresses();
        });

        await test.step('Companies lIst Upload', async () => {
            await connectorscsvimports.companiesListUpload();
        });

    });

    test('This file conatins test cases regarding uploading Connectors CSV Imports - CSV List Upload Error Checking - 3', async () => {
        console.log('Starting 20 - Connectors - CSV Imports -CSV List Upload Error Checking - 3');

        await test.step('CSV List Upload Error Checking - 3', async () => {
            await connectorscsvimports.csvlistUploadErrorChecking();
        });

    });

    test('This file conatins test cases regarding uploading Connectors CSV Imports - Coworkers List Upload - 4', async () => {
        console.log('Starting 20 - Connectors - CSV Imports - Coworkers List Upload - 4');

        await test.step('Deleting Email Addresses', async () => {
            await connectorscsvimports.deleteEmailAddresses();
        });

        await test.step('Coworkers List Upload', async () => {
            await connectorscsvimports.coWorkersListUpload();
        });

    });

    test('This file conatins test cases regarding uploading Connectors CSV Imports - Coworker Merge Upload. - 5', async () => {
        console.log('Starting 20 - Connectors - CSV Imports - Coworker Merge Upload -5.');

        await test.step('Deleting Email Addresses', async () => {
            await connectorscsvimports.deleteEmailAddresses();
        });

        await test.step('Coworkers List Upload', async () => {
            await connectorscsvimports.coWorkersMergeUpload();
        });
    });

    test('This file conatins test cases regarding uploading Connectors CSV Imports - Coworker Cherry Pick Upload. - 6', async () => {
        console.log('Starting 20 - Connectors - CSV Imports - Coworker Cherry Pick Upload. - 6.');

        await test.step('Deleting Email Addresses', async () => {
            await connectorscsvimports.deleteEmailAddresses();
        });

        await test.step('Coworkers List Upload', async () => {
            await connectorscsvimports.coWorkersCherryPickUpload();
        });
    });


    test('This file conatins test cases regarding uploading Connectors CSV Imports - Coworker Consumer Upload. - 7', async () => {
        console.log('Starting 20 - Connectors - CSV Imports - Coworker Consumer Upload. - 7.');
        await test.step('Deleting Email Addresses', async () => {
            await connectorscsvimports.deleteEmailAddresses();
        });

        await test.step('Coworkers List Upload', async () => {
            await connectorscsvimports.coWorkersConsumerUpload();
        });
    });


    test('This file conatins test cases regarding uploading Connectors CSV Imports - Contact List Upload Semicolon Version - 10', async () => {
        console.log('Starting 20 - Connectors - CSV Imports');

        await test.step('Deleting Email Addresses', async () => {
            await connectorscsvimports.deleteEmailAddresses();
        });

        await test.step('Contact List Upload Semi Colon Version', async () => {
            await connectorscsvimports.contactListUploadSemicolonVersion();
        });

    });

    test.afterAll(async () => {
        console.log('Ending 20 - Connectors - CSV Imports');
        await browser.close();
    });

});