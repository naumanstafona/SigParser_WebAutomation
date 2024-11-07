import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { CompaniesLocators } from '../../locators/30-CSV-Imports/CompaniesLocators';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { isBooleanObject } from 'util/types';
import config from '../../config';
import { MultiSelectFieldLocators } from '../../locators/32-Custom-Fields-Companies/MultiSelectLocators';

export class MultiSelectField extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async waitForTextUnderTestContactText(text: string) {
        console.log(`Waiting for text: ${text}`);
        try {
            await this.page.locator('div').filter({ hasText: text }).nth(2).waitFor({ state: 'visible', timeout: this.timeout_small });
            console.log(`Text "${text}" under test contact number is visible.`);
        } catch (error) {
            console.error("An error occurred while waiting for text:", error);
        }
    }

    async createNewMultiSelectCustomColumnAndAddIttoGridColumns() {
        await this.navigateTo(config.url + '/Account/App/#/CustomFields');
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.selectingDropdownValuebyLabel(CommonLocators.recordTypeLocator, 'Companies');
        await this.selectingDropdownValuebyLabel(CommonLocators.dataTypeLocator, 'Multi Select');
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Company Multi Select');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Company Multi Select Field');
        await this.waitForLocator('//textarea[@placeholder="Add multiple entires seperated by commas or line breaks"]')
        await this.fillingLocator('//textarea[@placeholder="Add multiple entires seperated by commas or line breaks"]', 'Multi1, Multi2, Multi3');
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.page.waitForSelector('div:has-text("Test Company Multi Select")', { state: 'visible', timeout: this.timeout_small });
        await this.navigateTo(config.url + '/Account/App/#/Companies');
        await this.waitForTitle(CommonLocators.columnTitleLocator);
        await this.clickOnTitle(CommonLocators.columnTitleLocator);
        await this.waitForTextStrict(CommonLocators.customFieldLocator);
        await this.clickOnTextStrict(CommonLocators.customFieldLocator);
        await this.hoverOverElement('//b[text()="Test Company Multi Select"]');
        await this.waitForTextStrict('Description for Custom Company Multi Select Field');
        await this.waitForLocator(MultiSelectFieldLocators.addToColumnListLocator);
        await this.clickOnLocator(MultiSelectFieldLocators.addToColumnListLocator);
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForLocator(MultiSelectFieldLocators.customSingleSelectColumnLocator);
    }

    async createCompaniesManuallyInCompanyGrid(email1: string, email2: string, email3: string) {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.plusButtonLocator);
        await this.clickOnLocator(CommonLocators.plusButtonLocator);
        await this.waitForHeading(CompaniesLocators.addNewCompanyLocator);
        await this.waitForLocator('//label[normalize-space(text())="Company Domain"]/following::input');
        await this.fillingLocator('//label[normalize-space(text())="Company Domain"]/following::input', email1);
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForButton(CompaniesLocators.viewCompanyButtonLocator);
        await this.clickOnButton(CompaniesLocators.viewCompanyButtonLocator);
        await this.waitForLocator('//p[normalize-space(text())="customcompany1.com"]');
        await this.waitForLocator(CompaniesLocators.modalExitButtonLocator);
        await this.clickOnLocator(CompaniesLocators.modalExitButtonLocator);
        await this.waitForLocator(CommonLocators.plusButtonLocator);
        await this.clickOnLocator(CommonLocators.plusButtonLocator);
        await this.waitForHeading(CompaniesLocators.addNewCompanyLocator);
        await this.waitForLocator('//label[normalize-space(text())="Company Domain"]/following::input');
        await this.fillingLocator('//label[normalize-space(text())="Company Domain"]/following::input', email2);
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForButton(CompaniesLocators.viewCompanyButtonLocator);
        await this.clickOnButton(CompaniesLocators.viewCompanyButtonLocator);
        await this.waitForLocator('//p[normalize-space(text())="customcompany2.com"]');
        await this.waitForLocator(CompaniesLocators.modalExitButtonLocator);
        await this.clickOnLocator(CompaniesLocators.modalExitButtonLocator);
        await this.waitForLocator(CommonLocators.plusButtonLocator);
        await this.clickOnLocator(CommonLocators.plusButtonLocator);
        await this.waitForHeading(CompaniesLocators.addNewCompanyLocator);
        await this.waitForLocator('//label[normalize-space(text())="Company Domain"]/following::input');
        await this.fillingLocator('//label[normalize-space(text())="Company Domain"]/following::input', email3);
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForButton(CompaniesLocators.viewCompanyButtonLocator);
        await this.clickOnButton(CompaniesLocators.viewCompanyButtonLocator);
        await this.waitForLocator('//p[normalize-space(text())="customcompany3.com"]');
        await this.waitForLocator(CompaniesLocators.modalExitButtonLocator);
        await this.clickOnLocator(CompaniesLocators.modalExitButtonLocator);
    }

    async manuallySetTheVaueForCustomField(email1: string) {
        await this.navigateTo(config.url + '/Account/App/#/Companies');
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForTextStrict('customcompany1');
        await this.clickOnTextStrict('customcompany1');
        await this.waitForLocator('div:nth-child(10) > #modal > .c-modal__display > .c-modal__contents > .p-profile > .p-profile__block-right > .u-mouse-default > div:nth-child(4) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.clickOnLocator('div:nth-child(10) > #modal > .c-modal__display > .c-modal__contents > .p-profile > .p-profile__block-right > .u-mouse-default > div:nth-child(4) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.waitForLocator('//div[normalize-space(text())="Multi1"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi1"]');
        await this.waitForLocator('//div[normalize-space(text())="Multi2"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi2"]');
        await this.waitForLocator('//i[@class="fa fa-check"]');
        await this.clickOnLocator('//i[@class="fa fa-check"]');
        await this.waitForTime(1000);
        await this.waitForLocator('(//div[@title="Multi1, Multi2"])[2]');
        await this.waitForLocator('(//button[@class="c-modal__exit"]//i[1])[2]');
        await this.clickOnLocator('(//button[@class="c-modal__exit"]//i[1])[2]');
        await this.waitForLocator('//div[normalize-space(text())="Multi1, Multi2"]');
    }

    async updateExistingalue(email1: string) {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForTextStrict('customcompany1');
        await this.clickOnTextStrict('customcompany1');
        await this.waitForLocator('div:nth-child(10) > #modal > .c-modal__display > .c-modal__contents > .p-profile > .p-profile__block-right > .u-mouse-default > div:nth-child(4) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.clickOnLocator('div:nth-child(10) > #modal > .c-modal__display > .c-modal__contents > .p-profile > .p-profile__block-right > .u-mouse-default > div:nth-child(4) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.waitForLocator('//div[normalize-space(text())="Multi3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi3"]');
        await this.waitForLocator('//i[@class="fa fa-check"]');
        await this.clickOnLocator('//i[@class="fa fa-check"]');
        await this.waitForTime(1000);
        await this.waitForLocator('(//div[@title="Multi1, Multi2, Multi3"])[2]');
        await this.waitForLocator('(//button[@class="c-modal__exit"]//i[1])[2]');
        await this.clickOnLocator('(//button[@class="c-modal__exit"]//i[1])[2]');
        await this.waitForLocator('//div[normalize-space(text())="Multi1, Multi2, Multi3"]');
    }

    async updateExistingFileDirectlyInGrid(email1: string) {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForTextStrict('customcompany1');
        await this.waitForLocator('//div[normalize-space(text())="Multi1, Multi2, Multi3"]');
        await this.waitForLocator('//table[@id="table"]/tbody[1]/tr[1]/td[12]/div[1]/div[1]');
        await this.clickOnLocator('//table[@id="table"]/tbody[1]/tr[1]/td[12]/div[1]/div[1]');
        await this.waitForLocator('//div[normalize-space(text())="Multi2"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi2"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Multi1, Multi3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi1, Multi3"]');
        await this.waitForLocator('//div[normalize-space(text())="Multi2"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi2"]'); await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Multi1, Multi3, Multi2"]');


    }

    async importCSVtoSettheValuesForTheCustomField(email1: string, email2: string, email3: string) {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/32-CustomFields-Companies/8 - MultiSelectField1.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Company Multi Select');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTime(20000);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Multi1, Multi3, Multi2"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email2);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Multi2"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Multi4, Multi5"]');
    }


    async importSecondCSVFileUpdatingAndDeletingValues(email1: string, email2: string, email3: string) {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/32-CustomFields-Companies/8 - MultiSelectField2.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Company Multi Select');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTime(20000);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Multi1, Multi3, Multi2"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email2);
        await this.waitForTime(1000);
        await this.clickOnLocator('//div[normalize-space(text())="Multi2, Multi3, Multi4"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//*[@id="table"]/tbody/tr/td[12]/div');
    }

    async importThirdCSVFileNoChanges(email1: string, email2: string, email3: string) {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/32-CustomFields-Companies/8 - MultiSelectField3.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Company Multi Select');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTime(20000);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Multi1, Multi3, Multi2"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email2);
        await this.waitForTime(1000);
        await this.clickOnLocator('//div[normalize-space(text())="Multi2, Multi3, Multi4"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//*[@id="table"]/tbody/tr/td[12]/div');
    }

};
