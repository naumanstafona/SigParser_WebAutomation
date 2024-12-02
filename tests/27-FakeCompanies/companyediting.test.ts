
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { BooleanField } from '../../pages/32_Custom_Fields_Companies/BooleanField';
import { DateFields } from '../../pages/32_Custom_Fields_Companies/DateField';
import { MultiSelectField } from '../../pages/32_Custom_Fields_Companies/MultiSelect';
import { SingleSelectField } from '../../pages/32_Custom_Fields_Companies/SingleSelect';
import { NumberField } from '../../pages/32_Custom_Fields_Companies/NumberField';
import { TextAreaField } from '../../pages/32_Custom_Fields_Companies/TextAreaField';
import { TextField } from '../../pages/32_Custom_Fields_Companies/TextField';
import { CompanyEditing } from '../../pages/27- FakeCompanies/CompanyEditing';

import test from '@playwright/test';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let textareafield: TextAreaField;
let singleselectfield: SingleSelectField;
let numberfield: NumberField;
let multiselectfield: MultiSelectField;
let companydatefield: DateFields;
let companytextfield: TextField;
let booleanfield: BooleanField;
let companyediting: CompanyEditing;

test.describe('27 - Fake Companies', () => {
    const emails: string[] = ['customcompany1.com', 'customcompany2.com', 'customcompany3.com'];

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        textareafield = new TextAreaField(page);
        singleselectfield = new SingleSelectField(page);
        numberfield = new NumberField(page);
        multiselectfield = new MultiSelectField(page);
        companydatefield = new DateFields(page);
        companytextfield = new TextField(page);
        booleanfield = new BooleanField(page);
        companyediting = new CompanyEditing(page);

        await loginpage.login(config.email, config.password, config.url);

    });

    test('User should be able to do Bulk Editing in the Contacts - 14 - Custom Fields - Contact', async () => {

        console.log('Starting 27 - Companies 15 & 18 Combined');

        await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
            await companyediting.deleteEmailAddresses();
        });

        await test.step('Delete existing custom fields', async () => {
            await companyediting.deleteCustomfield();
        });

        await test.step('Create a Boolean custom field', async () => {
            await textareafield.createCustomField();
        });

        await test.step('Create a Contact text custom field', async () => {
            await singleselectfield.createCustomField();
        });

        await test.step('Create a Textarea custom field', async () => {
            await numberfield.createCustomField();
        });

        await test.step('Create a Contact date custom field', async () => {
            await multiselectfield.createCustomField();
        });

        await test.step('Create a Multiselect custom field', async () => {
            await companydatefield.createCustomField();
        });

        await test.step('Create a Number custom field', async () => {
            await companytextfield.createCustomField();
        });

        await test.step('Create a Singleselect custom field', async () => {
            await booleanfield.createCustomField();
        });

        await test.step('Add custom columns to the grid', async () => {
            await companyediting.addCustomColumnsToGridForCompany();
        });

        await test.step("Manually create a couple of contacts in the Contact grid", async () => {
            await companyediting.createCompaniesManuallyInCompanyGrid(emails[0], emails[1], emails[2]);
        });
    });


    test('User should be able to Verify Status Field Values', async () => {
        await companyediting.contactStatusFieldValuesForCompanies();
    });

    test('User should be able to Modify Status Field Values', async () => {
        await companyediting.changeStatusFieldValuesForCompanies();
    });

    test('User should be able to Modify Full Name Field Values', async () => {
        await companyediting.changeFullNameForCompany();
    });


    test('User should be able to Modify Company Website Field Values', async () => {
        await companyediting.changeCompanyWbsiteForCompany();
    });

    test('User should be able to Modify Company Linkedin Field Values', async () => {
        await companyediting.changeCompanyLinkedInForCompany();
    });

    test('User should be able to Modify Company Industry Field Values', async () => {
        await companyediting.changeCompanyIndustryForCompany();
    });

    test('User should be able to Modify Company Employees Field Values', async () => {
        await companyediting.changeCompanyEmployeesForCompany();
    });

    test('User should be able to Modify Company Founded Field Values', async () => {
        await companyediting.changeCompanyFounded();
    });

    test('User should be able to Modify Email Domain Type Field Values', async () => {
        await companyediting.changeEmailDomainTypeField();
    });

    test('User should be able to Modify Phone Number Field Values', async () => {
        await companyediting.changePhoneFieldForCompany();
    });


    test('User should be able to Modify Personal Linkedin Field Values', async () => {
        await companyediting.changeCompanyLinkedinFieldValues();
    });

    test('User should be able to Modify Test Contact Text Field Values', async () => {
        await companyediting.changeCompanyTextFieldValues();
    });

    test('User should be able to Modify Test Contact Text Area Field Values', async () => {
        await companyediting.changeTestCompanyTextAreaFieldValues();
    });

    test('User should be able to Modify Test Contact Number Field Values', async () => {
        await companyediting.changeTestCompanytNumberFieldValues();
    });

    test.skip('User should be able to Modify Test Contact Date Field Values', async () => { //Bug
        await companyediting.changeTestCompanyDateFieldValues();
    });

    test.skip('User should be able to Modify Test Contact Boolean Field Values', async () => { //Bug
        await companyediting.changeTestCompanyBooleanFieldValues();
    });

    test('User should be able to Modify Test Contact Single Select Values', async () => {
        await companyediting.changeTestCompanySingleFieldValues();
    });

    test('User should be able to Modify Test Contact Multi Select  Values', async () => {
        await companyediting.changeTestCompanyMultiSelectFieldValues();

    });



    test.afterAll(async () => {
        await test.step('Delete existing custom fields', async () => {
            await companyediting.deleteCustomfield();
        });

        await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
            await companyediting.deleteEmailAddresses();
        });

        console.log('Ending 27 - Companies 15 & 18 Combined');
        await browser.close();
    });
});