import { Page } from 'playwright';
import { CommonLocators } from '../../locators/CommonLocators';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { CommonSteps } from '../CommonSteps';
import { FakeCompaniesLocators } from '../../locators/27-FakeCompanies/FakeCompaniesLocators';
import { CompaniesLocators } from '../../locators/30-CSV-Imports/CompaniesLocators';
import config from '../../config';

export class CompanyEditing extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }


    async addCustomColumnsToGridForCompany() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
        await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableCompanyFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableCompanyFields);
        await this.waitForTitle(CommonLocators.columnTitleLocator);
        await this.clickOnTitle(CommonLocators.columnTitleLocator);
        await this.waitForTextStrict(CommonLocators.customFieldLocator);
        await this.clickOnTextStrict(CommonLocators.customFieldLocator);
        await this.waitForLocator('//b[normalize-space(text())="Test Company Boolean"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Company Boolean"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Company Text"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Company Text"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Company Text Area"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Company Text Area"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Company Date"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Company Date"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Company Multi Select"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Company Multi Select"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Company Single Select"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Company Single Select"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Company Number"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Company Number"]');
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForTime(5000);
    }

    async contactStatusFieldValuesForCompanies() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('(//div[@title="Valid"])[1]');
        await this.clickOnLocator('(//div[@title="Valid"])[1]');
        await this.waitForLocator('//div[normalize-space(text())="Valid"]');
        await this.waitForLocator('//div[normalize-space(text())="Private"]');
        await this.waitForLocator('//div[normalize-space(text())="Coworker"]');
        await this.waitForLocator('//div[normalize-space(text())="Ignore"]');
        await this.waitForLocator('//div[normalize-space(text())="Other"]');
        await this.waitForLocator('//div[normalize-space(text())="Approved"]');
    }

    async changeStatusFieldValuesForCompanies() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('(//div[@title="Valid"])[1]');
        await this.clickOnLocator('(//div[@title="Valid"])[1]');
        await this.waitForLocator('//div[normalize-space(text())="Private"]');
        await this.clickOnLocator('//div[normalize-space(text())="Private"]');
        await this.waitForTime(2000);
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Private"]//img[1]');
    }

    async redirectionToCompanyPage() {

        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
        await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableCompanyFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableCompanyFields);
    }

    async changeFullNameForCompany() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[3]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[3]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'customcompany198');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[@title="customcompany198"]');

    }

    async changeCompanyWbsiteForCompany() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[11]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[11]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'fake.com');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[@title="fake.com"]');
    }

    async changeCompanyLinkedInForCompany() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[12]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[12]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'linkedin.com/company/testCompany');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="linkedin.com/company/testCompany"]');
    }

    async changeCompanyIndustryForCompany() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[5]');
        await this.hoverOverElement('//tbody/tr[1]/td[5]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Software');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Software"]');
    }

    async changeCompanyEmployeesForCompany() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[14]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[14]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//div[normalize-space(text())="1-10"]');
        await this.waitForLocator('//div[normalize-space(text())="11-50"]');
        await this.waitForLocator('//div[normalize-space(text())="51-200"]');
        await this.waitForLocator('//div[normalize-space(text())="201-500"]');
        await this.waitForLocator('//div[normalize-space(text())="501-1000"]');
        await this.waitForLocator('//div[normalize-space(text())="1001-5000"]');
        await this.waitForLocator('//div[normalize-space(text())="5001-10000"]');
        await this.waitForLocator('//div[normalize-space(text())="10001+"]');
        await this.clickOnLocator('//div[normalize-space(text())="51-200"]');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="51-200"]');
    }

    async changeCompanyFounded() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[15]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[15]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorByRole('1990');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="1990"]');
    }

    async changeEmailDomainTypeField() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Company"]');
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[16]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[16]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//div[normalize-space(text())="Automated"]');
        await this.waitForLocator('//div[@class="c-dropdown__label" and text()="Company"]');
        await this.waitForLocator('//div[normalize-space(text())="Education"]');
        await this.waitForLocator('//div[normalize-space(text())="Fake"]');
        await this.waitForLocator('//div[normalize-space(text())="Government"]');
        await this.waitForLocator('//div[normalize-space(text())="Invalid"]');
        await this.waitForLocator('//div[normalize-space(text())="Military"]');
        await this.waitForLocator('//div[normalize-space(text())="Organization"]');
        await this.waitForLocator('//div[normalize-space(text())="Public"]');
        await this.clickOnLocator('//div[normalize-space(text())="Government"]');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Government"]');
    }


    async changePhoneFieldForCompany() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[13]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[13]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '03465366286');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('(//div[@title="03465366286"])[1]');
    }

    async changeCompanyLinkedinFieldValues() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[12]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[12]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'linkedin.com/test');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[@title="linkedin.com/test"]');
    }

    async changeCompanyTextFieldValues() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[18]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[18]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Company Text Test');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Company Text Test"]');
    }

    async changeTestCompanyTextAreaFieldValues() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[19]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[19]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Test Company Area');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Test Company Area"]');
    }

    async changeTestCompanytNumberFieldValues() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[23]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[23]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorByRole('1328');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="1328"]');
    }

    async changeTestCompanyDateFieldValues() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
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

    async changeTestCompanyBooleanFieldValues() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[17]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[17]');
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

    async changeTestCompanySingleFieldValues() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[22]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[22]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//div[normalize-space(text())="Single1"]');
        await this.waitForLocator('//div[normalize-space(text())="Single2"]');
        await this.waitForLocator('//div[normalize-space(text())="Single3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Single3"]');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Single3"]');
    }

    async changeTestCompanyMultiSelectFieldValues() {
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[21]');
        await this.hoverOverElement('//table[@id="table"]/tbody[1]/tr[1]/td[21]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//div[normalize-space(text())="Multi1"]');
        await this.waitForLocator('//div[normalize-space(text())="Multi2"]');
        await this.waitForLocator('//div[normalize-space(text())="Multi3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi1"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi3"]');
        await this.redirectionToCompanyPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
        await this.waitForTime(2000);
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[22]');
        await this.waitForLocator('//div[@title="Multi1, Multi3"]');
    }

}