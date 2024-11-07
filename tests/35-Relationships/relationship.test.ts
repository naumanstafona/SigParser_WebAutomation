import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { RelationshipPage } from '../../pages/35-Relationships/Relationship';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let relationship: RelationshipPage;

test.describe('Starting 35 - Relationships', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        relationship = new RelationshipPage(page);
        await loginpage.login('test+stafona+testuser1@dragnettech.com', config.password, config.url);
    });

    test('User should be able to verify Relationship for Contacts', async () => {
        await relationship.verifyRelationshipMetricsinContacts();
    });

    test('User should be able to verify Relationship for Companies', async () => {
        await relationship.verifyRelationshipMetricsinCompanies();
    });

    test('User should be able to verify Relationship for Coworkers', async () => {
        await relationship.verifyRelationshipMetricsinCoworkers();
    });

    test.afterAll(async () => {
        console.log('Ending 35 - Relationships');
        await browser.close();
    });
});
