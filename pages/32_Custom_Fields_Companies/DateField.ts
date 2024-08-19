import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { CompaniesLocators } from '../../locators/30-CSV-Imports/CompaniesLocators';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { isBooleanObject } from 'util/types';
import config from '../../config';
import { DateFieldLocator } from '../../locators/32-Custom-Fields-Companies/DateFieldLocators';

export class DateFields extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async deleteCustomDateField() {
        await this.navigateTo(config.url + '/Account/App/#/CustomFields');
        await this.waitForTime(5000);

        const isTextPresent = await this.page.getByText('Test Company Date').count();
        if (isTextPresent === 0) {
            console.log('Test Contact Date does not exist, aborting function.');
            return;
        }
        await this.waitForTextStrict('Test Company Date');
        await this.clickOnTextStrict('Test Company Date');
        await this.waitForButton(CommonLocators.deleteLocator);
        await this.handleAndAcceptDialog('//button[contains(@class,"c-btn --delete")]');
        await this.waitForTime(5000);
    }

    async deleteEmailAddresses() {
        await this.navigateTo(config.url + '/Account/App/#/TestingTools');
        await this.waitForPlaceholder('john@doe.com')
        await this.fillingPlaceholder('john@doe.com', 'test+stafona+haseeb@dragnettech.com')
        await this.waitForButton('Delete All Contacts and Emails ');
        await this.clickOnButton('Delete All Contacts and Emails ');
        await this.waitForTime(3000);
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

    async createNewDateCustomColumnAndAddIttoGridColumns() {
        await this.navigateTo(config.url + '/Account/App/#/CustomFields');
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.waitForHeading(CommonLocators.fieldFormHeadingLocator);
        await this.selectingDropdownValuebyLabel(CommonLocators.recordTypeLocator, 'Companies');
        await this.selectingDropdownValuebyLabel(CommonLocators.dataTypeLocator, 'Date');
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Company Date');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Company Date Field');
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.waitForTextStrict('Test Company Date');
        await this.navigateTo(config.url + '/Account/App/#/Companies');
        await this.waitForTitle(CommonLocators.columnTitleLocator);
        await this.clickOnTitle(CommonLocators.columnTitleLocator);
        await this.waitForTextStrict(CommonLocators.customFieldLocator);
        await this.clickOnTextStrict(CommonLocators.customFieldLocator);
        await this.hoverOverElement('//b[text()="Test Company Date"]');
        await this.waitForTextStrict('Description for Custom Company Date Field');
        await this.waitForLocator(DateFieldLocator.addToColumnListLocator);
        await this.clickOnLocator(DateFieldLocator.addToColumnListLocator);
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForLocator(DateFieldLocator.customContactNumberColumnLocator);
    }

    async setTheValueForTestContactDate(email1: string) {
        await this.navigateTo(config.url + '/Account/App/#/Companies');
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForTextStrict('customcompany1');
        await this.clickOnTextStrict('customcompany1');
        await this.waitForTextStrict('Test Company Date');
        await this.waitForTextUnderTestContactText('Test Company Date-');
        await this.waitForLocator(CommonLocators.pencilLocator);
        await this.clickOnLocator(CommonLocators.pencilLocator);
        await this.waitForLocator('input[name="Test Company Date"]');
        await this.fillingLocator('input[name="Test Company Date"]', '2001-01-01');
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForLocator('//div[normalize-space(text())="Jan 1, 2001"]');
        await this.waitForTime(5000);
        await this.waitForLocator(CompaniesLocators.exitButtonLocator);
        await this.clickOnLocator(CompaniesLocators.exitButtonLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForLocator('//div[normalize-space(text())="Jan 01 2001"]');
    }

    async updateExistingvalue(email1: string) {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForTextStrict('customcompany1');
        await this.clickOnTextStrict('customcompany1');
        await this.waitForLocator('//div[normalize-space(text())="Jan 1, 2001"]');
        await this.waitForLocator(CommonLocators.pencilLocator);
        await this.clickOnLocator(CommonLocators.pencilLocator);
        await this.waitForLocator('input[name="Test Company Date"]');
        await this.fillingLocator('input[name="Test Company Date"]', '2002-02-02');
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForLocator('//div[normalize-space(text())="Feb 2, 2002"]');
        await this.waitForTime(3000);
        await this.waitForLocator(CompaniesLocators.exitButtonLocator);
        await this.clickOnLocator(CompaniesLocators.exitButtonLocator);
        await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
    }

    // async updateExistingFileDirectlyInGrid(email1: string) {
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.waitForLocator(CommonLocators.clickingOnColumns);
    //     await this.clickOnLocator(CommonLocators.clickingOnColumns);
    //     await this.waitForLocator(CommonLocators.allRecordAndColumns);
    //     await this.clickOnLocator(CommonLocators.allRecordAndColumns);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    //     await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
    //     await this.waitForTime(1000);
    //     await this.waitForTextStrict('customcompany1');
    //     await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
    //     await this.clickOnLocator('//div[normalize-space(text())="Feb 02 2002"]');
    //     await this.fillingLocator('input[name="date"]','2002-02-03');
    //     await this.page.locator('input[name="date"]').press('Enter');
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.waitForLocator(CommonLocators.clickingOnColumns);
    //     await this.clickOnLocator(CommonLocators.clickingOnColumns);
    //     await this.waitForLocator(CommonLocators.allRecordAndColumns);
    //     await this.clickOnLocator(CommonLocators.allRecordAndColumns);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    //     await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
    //     await this.waitForTime(1000);
    //     await this.waitForTextStrict('customcompany1');
    //     await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
    //     await this.clickOnLocator('//div[normalize-space(text())="Feb 02 2002"]');
    //     await this.fillingLocator('input[name="Test Contact Date"]','2002-02-02');
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.waitForLocator(CommonLocators.clickingOnColumns);
    //     await this.clickOnLocator(CommonLocators.clickingOnColumns);
    //     await this.waitForLocator(CommonLocators.allRecordAndColumns);
    //     await this.clickOnLocator(CommonLocators.allRecordAndColumns);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    //     await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
    //     await this.waitForTime(1000);
    //     await this.waitForTextStrict('customcompany1');
    //     await this.waitForTime(1000);
    //     await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
    //}

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
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/32-CustomFields-Companies/5 - DateField1.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Company Date');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email2);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Mar 03 2003"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Apr 04 2004"]');
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
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/32-CustomFields-Companies/5 - DateField2.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Company Date');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email2);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="May 05 2005"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//*[@id="table"]/tbody/tr/td[12]/div/div');
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
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/32-CustomFields-Companies/5 - DateField3.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Company Date');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email2);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="May 05 2005"]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//*[@id="table"]/tbody/tr/td[12]/div/div');
    }

};
