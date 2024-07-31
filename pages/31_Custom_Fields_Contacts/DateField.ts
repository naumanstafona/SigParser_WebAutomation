import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
//import { NumberFieldLocator } from '../../locators/31_Custom_Field_Contacts/NumberFieldLocator';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { isBooleanObject } from 'util/types';
import config from '../../config';
import { DateFieldLocator } from '../../locators/31_Custom_Field_Contacts/DateFieldLocators';

export class DateFields extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async deleteCustomDateField() {
        await this.navigateTo(config.url + '/Account/App/#/CustomFields');
        await this.waitForTime(5000);

        const isTextPresent = await this.page.getByText('Test Contact Date').count();
        if (isTextPresent === 0) {
            console.log('Test Contact Date does not exist, aborting function.');
            return;
        }
        await this.waitForTextStrict('Test Contact Date');
        await this.clickOnTextStrict('Test Contact Date');
        await this.waitForButton(ContactLocators.deleteLocator);
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

    async createContactsEmailManuallyInContactGrid(email1: string, email2: string, email3: string) {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(ContactLocators.plusButtonLocator);
        await this.clickOnLocator(ContactLocators.plusButtonLocator);
        await this.waitForLocator(ContactLocators.emailInputLocator);
        await this.fillingLocator(ContactLocators.emailInputLocator, email1);
        await this.waitForLocator(ContactLocators.firstNameInputLocator);
        await this.fillingLocator(ContactLocators.firstNameInputLocator, 'Custom');
        await this.waitForLocator(ContactLocators.lastNameInputLocator);
        await this.fillingLocator(ContactLocators.lastNameInputLocator, 'Contact1');
        await this.waitForLocator(ContactLocators.titleInputLocator);
        await this.waitForButton(ContactLocators.saveLocator);
        await this.clickOnButton(ContactLocators.saveLocator);
        await this.waitForButton(ContactLocators.viewContactButtonLocator);
        await this.clickOnButton(ContactLocators.viewContactButtonLocator);
        await this.waitForText(email1);
        await this.waitForLocator(ContactLocators.exitButtonLocator);
        await this.clickOnLocator(ContactLocators.exitButtonLocator);
        await this.waitForLocator(ContactLocators.plusButtonLocator);
        await this.clickOnLocator(ContactLocators.plusButtonLocator);
        await this.waitForLocator(ContactLocators.emailInputLocator);
        await this.fillingLocator(ContactLocators.emailInputLocator, email2);
        await this.waitForLocator(ContactLocators.firstNameInputLocator);
        await this.fillingLocator(ContactLocators.firstNameInputLocator, 'Custom');
        await this.waitForLocator(ContactLocators.lastNameInputLocator);
        await this.fillingLocator(ContactLocators.lastNameInputLocator, 'Contact2');
        await this.waitForLocator(ContactLocators.titleInputLocator);
        await this.waitForButton(ContactLocators.saveLocator);
        await this.clickOnButton(ContactLocators.saveLocator);
        await this.waitForButton(ContactLocators.viewContactButtonLocator);
        await this.clickOnButton(ContactLocators.viewContactButtonLocator);
        await this.waitForText(email2);
        await this.waitForLocator(ContactLocators.exitButtonLocator);
        await this.clickOnLocator(ContactLocators.exitButtonLocator);
        await this.waitForLocator(ContactLocators.plusButtonLocator);
        await this.clickOnLocator(ContactLocators.plusButtonLocator);
        await this.waitForLocator(ContactLocators.emailInputLocator);
        await this.fillingLocator(ContactLocators.emailInputLocator, email3);
        await this.waitForLocator(ContactLocators.firstNameInputLocator);
        await this.fillingLocator(ContactLocators.firstNameInputLocator, 'Custom');
        await this.waitForLocator(ContactLocators.lastNameInputLocator);
        await this.fillingLocator(ContactLocators.lastNameInputLocator, 'Contact3');
        await this.waitForLocator(ContactLocators.titleInputLocator);
        await this.waitForButton(ContactLocators.saveLocator);
        await this.clickOnButton(ContactLocators.saveLocator);
        await this.waitForButton(ContactLocators.viewContactButtonLocator);
        await this.clickOnButton(ContactLocators.viewContactButtonLocator);
        await this.waitForText(email3);
        await this.waitForLocator(ContactLocators.exitButtonLocator);
        await this.clickOnLocator(ContactLocators.exitButtonLocator);
    }

    async createNewDateCustomColumnAndAddIttoGridColumns() {
        await this.navigateTo(config.url + '/Account/App/#/CustomFields');
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.waitForHeading(CommonLocators.fieldFormHeadingLocator);
        await this.selectingDropdownValuebyLabel(ContactLocators.recordTypeLocator, 'Contacts');
        await this.selectingDropdownValuebyLabel(ContactLocators.dataTypeLocator, 'Date');
        await this.waitForPlaceholder(ContactLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(ContactLocators.fieldNamePlaceholder, 'Test Contact Date');
        await this.waitForPlaceholder(ContactLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(ContactLocators.descriptionPlaceholder, 'Description for Custom Contact Date Field');
        await this.waitForButton(ContactLocators.createFieldLocator);
        await this.clickOnButton(ContactLocators.createFieldLocator);
        await this.waitForText('Test Contact Date');
        await this.navigateTo(config.url + '/Account/App/#/Contacts');
        await this.waitForTitle(ContactLocators.columnTitleLocator);
        await this.clickOnTitle(ContactLocators.columnTitleLocator);
        await this.waitForText(ContactLocators.customFieldLocator);
        await this.clickOnText(ContactLocators.customFieldLocator);
        await this.hoverOverElement('//b[text()="Test Contact Date"]');
        await this.waitForText('Description for Custom Contact Date Field');
        await this.waitForLocator(DateFieldLocator.addToColumnListLocator);
        await this.clickOnLocator(DateFieldLocator.addToColumnListLocator);
        await this.waitForButton(ContactLocators.saveLocator);
        await this.clickOnButton(ContactLocators.saveLocator);
        await this.waitForLocator(DateFieldLocator.customContactNumberColumnLocator);
    }

    async setTheValueForTestContactDate(email1: string) {
        await this.navigateTo(config.url + '/Account/App/#/Contacts');
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
        await this.waitForTime(1000);
        await this.waitForText('Custom Contact1');
        await this.clickOnText('Custom Contact1');
        await this.waitForText('Test Contact Date');
        await this.waitForTextUnderTestContactText('Test Contact Date-');
        await this.waitForLocator(ContactLocators.pencilLocator);
        await this.clickOnLocator(ContactLocators.pencilLocator);
        await this.waitForLocator('input[name="Test Contact Date"]');
        await this.fillingLocator('input[name="Test Contact Date"]','2001-01-01');
        await this.waitForButton(ContactLocators.saveLocator);
        await this.clickOnButton(ContactLocators.saveLocator);    
        await this.waitForLocator('//div[normalize-space(text())="Jan 1, 2001"]');
        await this.waitForTime(5000);
        await this.waitForLocator(ContactLocators.exitButtonLocator);
        await this.clickOnLocator(ContactLocators.exitButtonLocator);
        await this.waitForLocator('//div[normalize-space(text())="Jan 01 2001"]');
    }

    async updateExistingvalue(email1: string) {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
        await this.waitForTime(1000);
        await this.waitForText('Custom Contact1');
        await this.clickOnText('Custom Contact1');
        await this.waitForLocator('//div[normalize-space(text())="Jan 1, 2001"]');
        await this.waitForLocator(ContactLocators.pencilLocator);
        await this.clickOnLocator(ContactLocators.pencilLocator);
        await this.waitForLocator('input[name="Test Contact Date"]');
        await this.fillingLocator('input[name="Test Contact Date"]','2002-02-02');
        await this.waitForButton(ContactLocators.saveLocator);
        await this.clickOnButton(ContactLocators.saveLocator);
        await this.waitForLocator('//div[normalize-space(text())="Feb 2, 2002"]');
        await this.waitForTime(3000);
        await this.waitForLocator(ContactLocators.exitButtonLocator);
        await this.clickOnLocator(ContactLocators.exitButtonLocator);
        await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
    }

    // async updateExistingFileDirectlyInGrid(email1: string) {
    //     await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForLocator(CommonLocators.clickingOnColumns);
    //     await this.clickOnLocator(CommonLocators.clickingOnColumns);
    //     await this.waitForLocator(CommonLocators.allRecordAndColumns);
    //     await this.clickOnLocator(CommonLocators.allRecordAndColumns);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.waitForTime(1000);
    //     await this.waitForText('Custom Contact1');
    //     await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
    //     await this.clickOnLocator('//div[normalize-space(text())="Feb 02 2002"]');
    //     await this.fillingLocator('input[name="date"]','2002-02-03');
    //     await this.page.locator('input[name="date"]').press('Enter');
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForLocator(CommonLocators.clickingOnColumns);
    //     await this.clickOnLocator(CommonLocators.clickingOnColumns);
    //     await this.waitForLocator(CommonLocators.allRecordAndColumns);
    //     await this.clickOnLocator(CommonLocators.allRecordAndColumns);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.waitForTime(1000);
    //     await this.waitForText('Custom Contact1');
    //     await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
    //     await this.clickOnLocator('//div[normalize-space(text())="Feb 02 2002"]');
    //     await this.fillingLocator('input[name="Test Contact Date"]','2002-02-02');
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForLocator(CommonLocators.clickingOnColumns);
    //     await this.clickOnLocator(CommonLocators.clickingOnColumns);
    //     await this.waitForLocator(CommonLocators.allRecordAndColumns);
    //     await this.clickOnLocator(CommonLocators.allRecordAndColumns);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.waitForTime(1000);
    //     await this.waitForText('Custom Contact1');
    //     await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
    // }

    async importCSVtoSettheValuesForTheCustomField(email1: string, email2: string, email3: string) {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/31-CustomFields_Contacts-UploadItems/5 - DateField1.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Date');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email2);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Mar 03 2003"]');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Apr 04 2004"]');
    }

    async importSecondCSVFileUpdatingAndDeletingValues(email1: string, email2: string, email3: string) {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/31-CustomFields_Contacts-UploadItems/5 - DateField2.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Date');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email2);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="May 05 2005"]');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//*[@id="table"]/tbody/tr/td[12]/div/div');
    }

    async importThirdCSVFileNoChanges(email1: string, email2: string, email3: string) {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/31-CustomFields_Contacts-UploadItems/5 - DateField3.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Date');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="Feb 02 2002"]');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email2);
        await this.waitForTime(1000);
        await this.waitForLocator('//div[normalize-space(text())="May 05 2005"]');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//*[@id="table"]/tbody/tr/td[12]/div/div');
    }

};
