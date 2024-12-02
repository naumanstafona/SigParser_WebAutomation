import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { InteractionPage } from '../../pages/34-Interactions/Interactions';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let interactionpage: InteractionPage;

test.describe('Starting 34 - Interactions', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        interactionpage = new InteractionPage(page);
        await loginpage.login('test+stafona+testuser1@dragnettech.com', config.password, config.url);
    });
    test('User should be able to verify legacy Interactions for Contacts', async () => {
        await interactionpage.verifyLegacyInteractionMetricsForContacts();
    });

    test('User should be able to verify legacy Interactions for Companies', async () => {
        await interactionpage.verifyLegacyInteractionMetricsForCompanies();
    });

    test('User should be able to verify legacy Interactions for Coworkers', async () => {
        await interactionpage.verifyLegacyInteractionMetricsForCoworkers();
    });

    // test('User should be able to press Recalculate Metrics', async () => {
    //     await interactionpage.recalculateMetrics(100000);
    // });

    test('User should be able to verify Interaction Metrics For Contacts', async () => {
        await interactionpage.VerifyInteractionMtericsForContact();
    });

    test('User should be able to verify Interaction Metrics For Companies', async () => {
        await interactionpage.VerifyInteractionMtericsForCompanies();
    });

    test.afterAll(async () => {
        console.log('Ending 34 - Interactions');
        await browser.close();
    });
});
