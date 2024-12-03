
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { FakeCompanies } from '../../pages/27- FakeCompanies/FakeComapnies';
import { ContactExportsColumns } from '../../pages/33-CSVExports/ContactExportColumns';
import { InteractionPage } from '../../pages/34-Interactions/Interactions';
import test from '@playwright/test';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let fakecompanies: FakeCompanies;
let contactexportcolumns: ContactExportsColumns;
let interactionpage: InteractionPage

test.describe('27 - Fake Companies', () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        fakecompanies = new FakeCompanies(page);
        contactexportcolumns = new ContactExportsColumns(page);
        interactionpage = new InteractionPage(page);
    });

    test('User should be able to search the contact throught the location - 01 - Credentials', async () => {
        await loginpage.login('michael.scott@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.contactSearchLocations();
        await fakecompanies.logOut();

    });

    test('User should be able to log in with a different account and search contact through Mailbox - 02 - Contact search - Locations', async () => {

        await loginpage.login('pam.beesley@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.contactSearchThroughMailbox();
        await fakecompanies.logOut();
    });

    test('User should be able to export the contact - 03 - Contact search - Mailboxes', async () => {

        await loginpage.login('jim.halpert@fakecompany.com', 'AppleSauce1', config.url);
        await contactexportcolumns.exportSomeContactsVerifications();
        await fakecompanies.contactSearchthroughExportAndAccessit();
        await fakecompanies.logOut();
    });

    test('User should be able to check Email Signature Access - 04 - Email Signature access', async () => {

        await loginpage.login('qa@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.emailSignatureVerification();
        await fakecompanies.logOut();

    });

    test('User should be able to change status - 06 - Coworkers - Change Status', async () => {

        await loginpage.login('qa@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.changeStatus();
        await fakecompanies.logOut();

    });

    test('User should be able to verify Cowoker Merge -07 - Coworkers - Merge.', async () => {

        await loginpage.login('qa@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.coworkerMerge();
        await interactionpage.recalculateMetrics(360000);
        await fakecompanies.verifyRelationships();
        await fakecompanies.logOut();

    });

    test('User should be able to verify Cowoker Modal and its data - 08 - Coworker - Modal.', async () => {

        await loginpage.login('qa@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.verifyCoworkerModal();
        await fakecompanies.logOut();

    });

    test('User should be able to verify Cowoker Modal and its Statistics - 9 - Coworker - Modal - Statistic', async () => {

        await loginpage.login('dwight.schrute@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.verifyCoworkerModalStatistics();
        await fakecompanies.logOut();

        await loginpage.login('qa@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.verifyCoworkerModalStatisticsforQAAccount();
        await fakecompanies.logOut();
    });

    test('User should be able to overide the Conpany CRM ID  - 10 - Companies - Override CRM Company', async () => {

        await loginpage.login('qa@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.verifyCRMCompanyOverride();
        await fakecompanies.logOut();
    });

    test('User should be able to search the contact through Nav bar - 11 - Navbar search - Contact', async () => {

        await loginpage.login('qa@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.verifyContactInNavSearch();
        await fakecompanies.logOut();
    });

    test('User should be able to search the company through Nav bar - 12 - Navbar search - Company', async () => {

        await loginpage.login('qa@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.verifyCompanyInNavSearch();
        await fakecompanies.logOut();
    });

    test('User should be able to search the coworker through Nav bar - 13 - Navbar search - Coworker', async () => {

        await loginpage.login('qa@fakecompany.com', 'AppleSauce1', config.url);
        await fakecompanies.verifyCoworkerInNavSearch();
        await fakecompanies.logOut();
    });

    test.afterAll(async () => {
        console.log('Ending 30 CSV Imports - Companies File');
        await browser.close();
    });
});