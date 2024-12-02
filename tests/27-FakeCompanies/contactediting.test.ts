
import { chromium, Browser, Page } from 'playwright';
import config from '../../config';
import { LoginPage } from '../../pages/LoginPage';
import { FakeCompanies } from '../../pages/27- FakeCompanies/FakeComapnies';
import { BooleanField } from '../../pages/31_Custom_Fields_Contacts/BooleanField';
import { ContactTextField } from "../../pages/31_Custom_Fields_Contacts/ContactTextField";
import { DateFields } from "../../pages/31_Custom_Fields_Contacts/DateField";
import { MultiSelectField } from "../../pages/31_Custom_Fields_Contacts/MultiSelect";
import { NumberField } from "../../pages/31_Custom_Fields_Contacts/NumberField";
import { SingleSelectField } from "../../pages/31_Custom_Fields_Contacts/SingleSelect";
import { TextAreaField } from "../../pages/31_Custom_Fields_Contacts/TextAreaField";
import test from '@playwright/test';

let browser: Browser;
let page: Page;
let loginpage: LoginPage;
let fakecompanies: FakeCompanies;
let textareafield: TextAreaField;
let singleselectfield: SingleSelectField;
let numberfield: NumberField;
let multiselectfield: MultiSelectField;
let contactdatefield: DateFields;
let contacttextfield: ContactTextField;
let booleanfield: BooleanField;

test.describe('27 - Fake Companies', () => {
    const emails: string[] = ['customcontact1@test.com', 'customcontact2@test.com', 'customcontact3@test.com'];

    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        fakecompanies = new FakeCompanies(page);
        textareafield = new TextAreaField(page);
        singleselectfield = new SingleSelectField(page);
        numberfield = new NumberField(page);
        multiselectfield = new MultiSelectField(page);
        contactdatefield = new DateFields(page);
        contacttextfield = new ContactTextField(page);
        booleanfield = new BooleanField(page);

        await loginpage.login(config.email, config.password, config.url);

    });

    test('User should be able to do Bulk Editing in the Contacts - 14 - Custom Fields - Contact', async () => {

        console.log('Starting 27 - Contacts 14 & 17 Combined');

        await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
            await fakecompanies.deleteEmailAddresses();
        });

        await test.step('Delete existing custom fields', async () => {
            await fakecompanies.deleteCustomfield();
        });

        await test.step('Create a Boolean custom field', async () => {
            await booleanfield.createCustomField();
        });

        await test.step('Create a Contact text custom field', async () => {
            await contacttextfield.createCustomField();
        });

        await test.step('Create a Textarea custom field', async () => {
            await textareafield.createCustomField();
        });

        await test.step('Create a Contact date custom field', async () => {
            await contactdatefield.createCustomField();
        });

        await test.step('Create a Multiselect custom field', async () => {
            await multiselectfield.createCustomField();
        });

        await test.step('Create a Number custom field', async () => {
            await numberfield.createCustomField();
        });

        await test.step('Create a Singleselect custom field', async () => {
            await singleselectfield.createCustomField();
        });

        await test.step('Add custom columns to the grid', async () => {
            await fakecompanies.addCustomColumnsToGrid();
        });

        await test.step("Manually create a couple of contacts in the Contact grid", async () => {
            await booleanfield.createContactManuallyInContactGrid(emails[0], emails[1], emails[2]);
        });
    });


    test('User should be able to Verify Status Field Values', async () => {
        await fakecompanies.contactStatusFieldValues();
    });

    test('User should be able to Modify Status Field Values', async () => {
        await fakecompanies.changeStatusFieldValues();
    });

    test('User should be able to Modify Full Name Field Values', async () => {
        await fakecompanies.changeFullName();
    });

    test('User should be able to Modify First Name Field Values', async () => {
        await fakecompanies.changeFirstName();
    });

    test('User should be able to Modify Middle Name Field Values', async () => {
        await fakecompanies.changeMiddleName();
    });

    test('User should be able to Modify Last Name Field Values', async () => {
        await fakecompanies.changeLastName();
    });

    test('User should be able to Modify Name Prefix Field Values', async () => {
        await fakecompanies.changeNamePrefix();
    });

    test('User should be able to Modify Name Suffix Field Values', async () => {
        await fakecompanies.changeNameSuffix();
    });

    test.skip('User should be able to Modify Birth Date Field Values', async () => {
        await fakecompanies.changeBirthDate(); //Date Issue bug
    });

    test('User should be able to Modify Gender Field Values', async () => {
        await fakecompanies.changeGender();
    });

    test('User should be able to Modify Company Name Field Values', async () => {
        await fakecompanies.changeCompanyName();
    });

    test('User should be able to Modify Job Title Field Values', async () => {
        await fakecompanies.changeJobTitle();
    });

    test('User should be able to Modify Company Website Field Values', async () => {
        await fakecompanies.changeCompanyWbsite();
    });

    test('User should be able to Modify Company Linkedin Field Values', async () => {
        await fakecompanies.changeCompanyLinkedIn();
    });

    test('User should be able to Modify Company Industry Field Values', async () => {
        await fakecompanies.changeCompanyIndustry();
    });

    test('User should be able to Modify Company Employees Field Values', async () => {
        await fakecompanies.changeCompanyEmployees();
    });

    test('User should be able to Modify Company Founded Field Values', async () => {
        await fakecompanies.changeCompanyFounded();
    });

    test('User should be able to Modify Email Address Type Field Values', async () => {
        await fakecompanies.changeEmailAdressTypeField();
    });

    test('User should be able to Modify Phone Number Field Values', async () => {
        await fakecompanies.changePhoneField();
    });

    test('User should be able to Modify Work/Office Number Field Values', async () => {
        await fakecompanies.changeWorkOrOfficePhoneField();
    });

    test('User should be able to Modify Fax Number Field Values', async () => {
        await fakecompanies.changeFaxNumber();
    });

    test('User should be able to Modify Direct Phone Number Field Values', async () => {
        await fakecompanies.changeDirectPhoneNumber();
    });

    test('User should be able to Modify Home Phone Number Field Values', async () => {
        await fakecompanies.changeHomePhoneNumber();
    });

    test('User should be able to Modify Personal Linkedin Field Values', async () => {
        await fakecompanies.changePersonalLinkedinFieldValues();
    });


    test('User should be able to Modify Personal Twitter Field Values', async () => {
        await fakecompanies.changePersonalTwitterFieldValues();
    });

    test('User should be able to Modify Test Contact Text Field Values', async () => {
        await fakecompanies.changeTestContactTextFieldValues();
    });

    test('User should be able to Modify Test Contact Text Area Field Values', async () => {
        await fakecompanies.changeTestContactTextAreaFieldValues();
    });

    test('User should be able to Modify Test Contact Number Field Values', async () => {
        await fakecompanies.changeTestContactNumberFieldValues();
    });

    test.skip('User should be able to Modify Test Contact Date Field Values', async () => { //Bug
        await fakecompanies.changeTestContactDateFieldValues();
    });

    test.skip('User should be able to Modify Test Contact Boolean Field Values', async () => { //Bug
        await fakecompanies.changeTestContactBooleanFieldValues();
    });

    test('User should be able to Modify Test Contact Single Select Values', async () => {
        await fakecompanies.changeTestContactSingleFieldValues();
    });

    test('User should be able to Modify Test Contact Multi Select  Values', async () => {
        await fakecompanies.changeTestContactMultiSelectFieldValues();
    });



    test.afterAll(async () => {
        await test.step('Delete existing custom fields', async () => {
            await fakecompanies.deleteCustomfield();
        });

        await test.step("Deleting all Contacts and Email Addresses For test+stafona+haseeb@dragnettech.com", async () => {
            await fakecompanies.deleteEmailAddresses();
        });

        console.log('Ending 30 CSV Imports - Companies File');
        await browser.close();
    });
});