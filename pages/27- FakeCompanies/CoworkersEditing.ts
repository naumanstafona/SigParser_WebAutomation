import { Page } from 'playwright';
import { CommonLocators } from '../../locators/CommonLocators';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { CommonSteps } from '../CommonSteps';
import { FakeCompaniesLocators } from '../../locators/27-FakeCompanies/FakeCompaniesLocators';
import { CompaniesLocators } from '../../locators/30-CSV-Imports/CompaniesLocators';
import { NumberFieldLocator } from '../../locators/32-Custom-Fields-Companies/NumberFieldLocator';
import config from '../../config';

export class CoworkersEditing extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async createCustomFieldBoolean() {
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.selectingDropdownValuebyLabel(CommonLocators.recordTypeLocator, 'Coworkers');
        await this.selectingDropdownValuebyLabel(CommonLocators.dataTypeLocator, 'Boolean');
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Coworker Boolean');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Coworker Boolean Field');
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.page.waitForSelector('div:has-text("Test Coworker Boolean")', { state: 'visible', timeout: this.timeout_large });
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator('//a[normalize-space(text())="Test Coworker Boolean"]');
    }

    async createCustomFieldDate() {
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.selectingDropdownValuebyLabel(CommonLocators.recordTypeLocator, 'Coworkers');
        await this.selectingDropdownValuebyLabel(CommonLocators.dataTypeLocator, 'Date');
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Coworker Date');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Coworker Date Field');
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.page.waitForSelector('div:has-text("Test Coworker Date")', { state: 'visible', timeout: this.timeout_small });
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator('//a[normalize-space(text())="Test Coworker Date"]');
    }

    async createCustomFieldMultiSelect() {
        await this.navigateTo(config.url + '/Account/App/#/CustomFields');
        await this.waitForTime(5000);
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.selectingDropdownValuebyLabel(CommonLocators.recordTypeLocator, 'Coworkers');
        await this.selectingDropdownValuebyLabel(CommonLocators.dataTypeLocator, 'Multi Select');
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Coworker Multi Select');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Coworker Multi Select Field');
        await this.waitForLocator('//textarea[@placeholder="Add multiple entires seperated by commas or line breaks"]')
        await this.fillingLocator('//textarea[@placeholder="Add multiple entires seperated by commas or line breaks"]', 'Multi1, Multi2, Multi3');
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.page.waitForSelector('div:has-text("Test Coworker Multi Select")', { state: 'visible', timeout: this.timeout_small });
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator('//a[normalize-space(text())="Test Coworker Multi Select"]');
    }

    async createCustomFieldNumber() {
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.selectingDropdownValuebyLabel(CommonLocators.recordTypeLocator, 'Coworkers');
        await this.selectingDropdownValuebyLabel(CommonLocators.dataTypeLocator, 'Number');
        await this.waitForPlaceholder(NumberFieldLocator.decimalPlacesLocator);
        await this.fillingPlaceholder(NumberFieldLocator.decimalPlacesLocator, '0');
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Coworker Number');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Coworker Number Field');
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.page.waitForSelector('div:has-text("Test Coworker Number")', { state: 'visible', timeout: this.timeout_large });
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator('//a[normalize-space(text())="Test Coworker Number"]');
    }

    async createCustomFieldSingleSelect() {
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.selectingDropdownValuebyLabel(CommonLocators.recordTypeLocator, 'Coworkers');
        await this.selectingDropdownValuebyLabel(CommonLocators.dataTypeLocator, 'Single Select');
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Coworker Single Select');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Coworker Single Select Field');
        await this.waitForLocator('//textarea[@placeholder="Add multiple entires seperated by commas or line breaks"]')
        await this.fillingLocator('//textarea[@placeholder="Add multiple entires seperated by commas or line breaks"]', 'Single1, Single2, Single3');
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.page.waitForSelector('div:has-text("Test Coworker Single Select")', { state: 'visible', timeout: this.timeout_large });
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator('//a[normalize-space(text())="Test Coworker Single Select"]');
    }

    async createCustomFieldTextArea() {
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.selectingDropdownValuebyLabel(CommonLocators.recordTypeLocator, 'Coworkers');
        await this.selectingDropdownValuebyLabel(CommonLocators.dataTypeLocator, 'Text Area');
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Coworker Text Area');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Coworker Text Area Field');
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.page.waitForSelector('div:has-text("Test Coworker Text Area")', { state: 'visible', timeout: this.timeout_large });
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator('//a[normalize-space(text())="Test Coworker Text Area"]');
    }

    async createCustomFieldText() {
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.selectingDropdownValuebyLabel(CommonLocators.recordTypeLocator, 'Coworkers');
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Coworker Text');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Coworkers Text Field');
        await this.waitForTime(2000);
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.page.waitForSelector('div:has-text("Test Coworker Text")', { state: 'visible', timeout: this.timeout_large });
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator('//a[normalize-space(text())="Test Coworker Text"]');
    }


    async addCustomColumnsToGridForCompany() {
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.allActiveCoworkersLocator);
        await this.clickOnLocator(FakeCompaniesLocators.allActiveCoworkersLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableCoworkerFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableCoworkerFields);
        await this.waitForTitle(CommonLocators.columnTitleLocator);
        await this.clickOnTitle(CommonLocators.columnTitleLocator);
        await this.waitForTextStrict(CommonLocators.customFieldLocator);
        await this.clickOnTextStrict(CommonLocators.customFieldLocator);
        await this.waitForLocator('//b[normalize-space(text())="Test Coworker Boolean"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Coworker Boolean"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Coworker Text"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Coworker Text"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Coworker Text Area"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Coworker Text Area"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Coworker Date"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Coworker Date"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Coworker Multi Select"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Coworker Multi Select"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Coworker Single Select"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Coworker Single Select"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Coworker Number"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Coworker Number"]');
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForTime(5000);
    }

    async crearteCoWorkersemails() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator('(//img[@alt="Valid"])[1]');
        await this.clickOnLocator('(//img[@alt="Valid"])[1]');
        await this.waitForLocator('//div[normalize-space(text())="Coworker"]');
        await this.clickOnLocator('//div[normalize-space(text())="Coworker"]');
        await this.waitForTime(2000);
        await this.waitForLocator('(//img[@alt="Valid"])[1]');
        await this.clickOnLocator('(//img[@alt="Valid"])[1]');
        await this.waitForLocator('//div[normalize-space(text())="Coworker"]');
        await this.clickOnLocator('//div[normalize-space(text())="Coworker"]');
        await this.waitForTime(2000);
        await this.waitForLocator('(//img[@alt="Valid"])[1]');
        await this.clickOnLocator('(//img[@alt="Valid"])[1]');
        await this.waitForLocator('//div[normalize-space(text())="Coworker"]');
        await this.clickOnLocator('//div[normalize-space(text())="Coworker"]');
        await this.waitForTime(2000);
    }

    // async contactStatusFieldValuesForCompanies() {
    //     await this.redirectionToCompanyPage();
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    //     await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
    //     await this.waitForTime(2000);
    //     await this.waitForLocator('(//div[@title="Valid"])[1]');
    //     await this.clickOnLocator('(//div[@title="Valid"])[1]');
    //     await this.waitForLocator('//div[normalize-space(text())="Valid"]');
    //     await this.waitForLocator('//div[normalize-space(text())="Private"]');
    //     await this.waitForLocator('//div[normalize-space(text())="Coworker"]');
    //     await this.waitForLocator('//div[normalize-space(text())="Ignore"]');
    //     await this.waitForLocator('//div[normalize-space(text())="Other"]');
    //     await this.waitForLocator('//div[normalize-space(text())="Approved"]');
    // }

    // async changeStatusFieldValuesForCompanies() {
    //     await this.redirectionToCompanyPage();
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    //     await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
    //     await this.waitForTime(2000);
    //     await this.waitForLocator('(//div[@title="Valid"])[1]');
    //     await this.clickOnLocator('(//div[@title="Valid"])[1]');
    //     await this.waitForLocator('//div[normalize-space(text())="Private"]');
    //     await this.clickOnLocator('//div[normalize-space(text())="Private"]');
    //     await this.waitForTime(2000);
    //     await this.redirectionToCompanyPage();
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    //     await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
    //     await this.waitForTime(2000);
    //     await this.waitForLocator('//div[@title="Private"]//img[1]');
    // }

    async redirectionToCoworkersPage() {

        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.allActiveCoworkersLocator);
        await this.clickOnLocator(FakeCompaniesLocators.allActiveCoworkersLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableCoworkerFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableCoworkerFields);
    }

    async changeFullNameForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[3]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[3]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForPlaceholder('First Name');
        await this.fillingPlaceholder('First Name', 'Customm');
        await this.waitForPlaceholder('Last Name');
        await this.fillingPlaceholder('Last Name', 'Contact1');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[@title="Customm Contact1"]');

    }

    async changeFirstNameForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[10]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[10]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Custom');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(3000);
        await this.waitForLocator('//div[@title="Custom"]');
        await this.waitForLocator('//a[normalize-space(text())="Custom Contact1"]');
    }

    async changeMiddleNameForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[11]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[11]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Middle');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForLocator('//div[normalize-space(text())="Middle"]');
        await this.waitForLocator('//a[normalize-space(text())="Custom Middle Contact1"]');
    }

    async changeLastNameForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[12]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[12]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Cont');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForLocator('//div[normalize-space(text())="Cont"]');
        await this.waitForLocator('//a[normalize-space(text())="Custom Middle Cont"]');
    }

    async changeNamePrefixForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[13]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[13]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Mr');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForLocator('//div[normalize-space(text())="Mr"]');
        await this.waitForLocator('//a[normalize-space(text())="Mr Custom Middle Cont"]');
    }

    async changeNameSuffixForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[14]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[14]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Jr');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(3000);
        await this.waitForLocator('//div[normalize-space(text())="Jr"]');
        await this.waitForLocator('//a[normalize-space(text())="Mr Custom Middle Cont Jr"]');
    }


    async changeJobTitleForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[5]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[5]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'QA');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="QA"]');
    }

    async changeOfficePhoneFieldForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[17]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[17]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '123');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="123"]');
    }

    async changeMobilePhoneFieldForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[16]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[16]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '456');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="456"]');
    }

    async changeJobRoleLevelFieldForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[15]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[15]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorByRole('4');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="4"]');
    }

    async changeTextFieldValuesForCoworkers() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[19]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[19]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Coworket Text Test');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Coworket Text Test"]');
    }

    async changeTextAreaFieldValuesForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[20]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[20]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Test Coworket Area');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Test Coworket Area"]');
    }

    async changeTestCompanytNumberFieldValuesForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[24]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[24]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorByRole('1328');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="1328"]');
    }

    async changeTestCompanyDateFieldValuesForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        // await this.waitForLocator('//tbody/tr[1]/td[35]/div[1]/div[1]');
        // await this.hoverOverElement('//tbody/tr[1]/td[35]/div[1]/div[1]');
        // await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        // await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        // await this.fillingLocatorByRole('1328');
        // await this.redirectionToContactsPage();
        // await this.waitForButton(CommonLocators.searchButtonLocator);
        // await this.clickOnButton(CommonLocators.searchButtonLocator);
        // await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        // await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        // await this.waitForTime(2000);
        // await this.waitForLocator('//div[@title="1328"]');
    }

    async changeTestCompanyBooleanFieldValuesForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[18]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[19]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//label[normalize-space(text())="True"]');
        await this.waitForLocator('//label[normalize-space(text())="False"]');
        await this.clickOnLocator('//label[normalize-space(text())="True"]');
        // await this.redirectionToCompanyPage();
        // await this.waitForButton(CommonLocators.searchButtonLocator);
        // await this.clickOnButton(CommonLocators.searchButtonLocator);
        // await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        // await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        // await this.waitForTime(2000);

    }

    async changeTestCompanySingleFieldValuesForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[23]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[23]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//div[normalize-space(text())="Single1"]');
        await this.waitForLocator('//div[normalize-space(text())="Single2"]');
        await this.waitForLocator('//div[normalize-space(text())="Single3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Single3"]');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Single3"]');
    }

    async changeTestCompanyMultiSelectFieldValuesForCoworker() {
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[22]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[22]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//div[normalize-space(text())="Multi1"]');
        await this.waitForLocator('//div[normalize-space(text())="Multi2"]');
        await this.waitForLocator('//div[normalize-space(text())="Multi3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi1"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi3"]');
        await this.redirectionToCoworkersPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[22]');
        await this.waitForLocator('//div[@title="Multi1, Multi3"]');
    }

}