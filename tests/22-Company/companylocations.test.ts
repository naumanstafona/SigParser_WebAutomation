import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { CompanyLocations } from '../../pages/22-Company/CompanyLocations';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let companylocations: CompanyLocations;

test.describe('22 - Modify Company Locations', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        companylocations = new CompanyLocations(page);
        await loginpage.login(config.email, config.password, config.url);
    });

    const emailCompanies: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

    test('Sequential Test Execution with Await', async () => {
        console.log('22 - Modify Company Locations');

        await test.step('Deleting Email Addresses', async () => {
            await companylocations.deleteEmailAddresses();
        });

        await test.step('Creation of email addresses', async () => {
            await companylocations.createCompaniesManuallyInCompanyGrid(emailCompanies[0], emailCompanies[1], emailCompanies[2]);
        });

        await test.step('Modify Company Locations in the modal', async () => {
            await companylocations.modifyCompanyLocationsInTheModal();
        });

        await test.step('Modify Phone number in the modal', async () => {
            await companylocations.modifyPhoneNumberInModal();
        });

        await test.step('Verify the changes', async () => {
            await companylocations.verifyTheChanges();
        });

        await test.step('Modify the Location in the Modal', async () => {
            await companylocations.modifyLocationinModal();
        });

        await test.step('Modify the Location in the Grid', async () => {
            await companylocations.modifyLocationinGrid();
        });

    });

    test.afterAll(async () => {
        console.log('Ending 22 - Modify Company Locations');
        await browser.close();
    });

});