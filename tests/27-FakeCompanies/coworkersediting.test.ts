
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { CoworkersEditing } from '../../pages/27- FakeCompanies/CoworkersEditing';
import test from '@playwright/test';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let coworkerediting: CoworkersEditing;

const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

test.describe('27 - Fake Companies', () => {


    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        coworkerediting = new CoworkersEditing(page);
        await loginpage.login(config.email, config.password, config.url);

    });

    test('User should be able to do Bulk Editing in the Coworkers - 16 - Custom Fields - Coworkers', async () => {

        console.log('Starting 27 - Companies 16 & 19 Combined');

        await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
            await coworkerediting.deleteEmailAddresses();
        });

        await test.step('Delete existing custom fields', async () => {
            await coworkerediting.deleteCustomfield();
        });

        await test.step('Create a Boolean custom field', async () => {
            await coworkerediting.createCustomFieldBoolean();
        });

        await test.step('Create a Contact text custom field', async () => {
            await coworkerediting.createCustomFieldText();
        });

        await test.step('Create a Textarea custom field', async () => {
            await coworkerediting.createCustomFieldTextArea();
        });

        await test.step('Create a Contact date custom field', async () => {
            await coworkerediting.createCustomFieldDate();
        });

        await test.step('Create a Multiselect custom field', async () => {
            await coworkerediting.createCustomFieldMultiSelect();
        });

        await test.step('Create a Single Select custom field', async () => {
            await coworkerediting.createCustomFieldSingleSelect();
        });

        await test.step('Create a Number custom field', async () => {
            await coworkerediting.createCustomFieldNumber();
        });

        await test.step('Add custom columns to the grid', async () => {
            await coworkerediting.addCustomColumnsToGridForCompany();
        });

        await test.step("Manually create a couple of contacts in the Contact grid", async () => {
            await coworkerediting.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
        });

        await test.step("Manually create a couple of coworkers", async () => {
            await coworkerediting.crearteCoWorkersemails();
        });

    });

    test('User should be able to Modify Full Name Field Values', async () => {
        await coworkerediting.changeFullNameForCoworker();
    });

    test('User should be able to Modify First Name Field Values', async () => {
        await coworkerediting.changeFirstNameForCoworker();
    });

    test('User should be able to Modify Middle Name Field Values', async () => {
        await coworkerediting.changeMiddleNameForCoworker();
    });

    test('User should be able to Modify Last Name Field Values', async () => {
        await coworkerediting.changeLastNameForCoworker();
    });

    test('User should be able to Modify Name Prefix Field Values', async () => {
        await coworkerediting.changeNamePrefixForCoworker();
    });

    test('User should be able to Modify Name Suffix Field Values', async () => {
        await coworkerediting.changeNameSuffixForCoworker();
    });

    test('User should be able to Modify Job Title Field Values', async () => {
        await coworkerediting.changeJobTitleForCoworker();
    });

    test('User should be able to Modify Office Phone Field Values', async () => {
        await coworkerediting.changeOfficePhoneFieldForCoworker();
    });

    test('User should be able to Modify Mobiule Phone Field Values', async () => {
        await coworkerediting.changeOfficePhoneFieldForCoworker();
    });

    test('User should be able to Modify Job Role Level Field Values', async () => {
        await coworkerediting.changeJobRoleLevelFieldForCoworker();
    });


    test('User should be able to Modify Test Contact Text Field Values', async () => {
        await coworkerediting.changeTextFieldValuesForCoworkers();
    });

    test('User should be able to Modify Test Contact Text Area Field Values', async () => {
        await coworkerediting.changeTextAreaFieldValuesForCoworker();
    });

    test('User should be able to Modify Test Contact Number Field Values', async () => {
        await coworkerediting.changeTestCompanytNumberFieldValuesForCoworker();
    });

    test.skip('User should be able to Modify Test Contact Date Field Values', async () => { //Bug
        await coworkerediting.changeTestCompanyDateFieldValuesForCoworker();
    });

    test.skip('User should be able to Modify Test Contact Boolean Field Values', async () => { //Bug
        await coworkerediting.changeTestCompanyBooleanFieldValuesForCoworker();
    });

    test('User should be able to Modify Test Contact Single Select Values', async () => {
        await coworkerediting.changeTestCompanySingleFieldValuesForCoworker();
    });

    test('User should be able to Modify Test Contact Multi Select  Values', async () => {
        await coworkerediting.changeTestCompanyMultiSelectFieldValuesForCoworker();

    });



    test.afterAll(async () => {
        await test.step('Delete existing custom fields', async () => {
            await coworkerediting.deleteCustomfield();
        });

        await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
            await coworkerediting.deleteEmailAddresses();
        });

        console.log('Ending 27 - Companies 16 & 19 Combined');
        await browser.close();
    });
});