import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { isBooleanObject } from 'util/types';
import config from '../../config';
import { SingleSelectFieldLocators } from '../../locators/31_Custom_Field_Contacts/SingleSelectLocators';

export class SingleSelectField extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }
    async deleteCustomField() {
        await this.navigateTo(config.url + '/Account/App/#/CustomFields');
        await this.waitForTime(5000);

        const isTextPresent = await this.page.getByText('Test Contact Single Select').count();
        if (isTextPresent === 0) {
            console.log('Test Contact Single Select does not exist, aborting function.');
            return;
        }
        await this.waitForTextStrict('Test Contact Single Select');
        await this.clickOnTextStrict('Test Contact Single Select');
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

    async createNewSingleSelectCustomColumnAndAddIttoGridColumns() {
        await this.navigateTo(config.url + '/Account/App/#/CustomFields');
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.waitForHeading(CommonLocators.fieldFormHeadingLocator);
        await this.selectingDropdownValuebyLabel(ContactLocators.recordTypeLocator, 'Contacts');
        await this.selectingDropdownValuebyLabel(ContactLocators.dataTypeLocator, 'Single Select');
        await this.waitForPlaceholder(ContactLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(ContactLocators.fieldNamePlaceholder, 'Test Contact Single Select');
        await this.waitForPlaceholder(ContactLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(ContactLocators.descriptionPlaceholder, 'Description for Custom Contact Single Select Field');
        await this.waitForLocator('//textarea[@placeholder="Add multiple entires seperated by commas or line breaks"]')
        await this.fillingLocator('//textarea[@placeholder="Add multiple entires seperated by commas or line breaks"]', 'Single1, Single2, Single3');
        await this.waitForButton(ContactLocators.createFieldLocator);
        await this.clickOnButton(ContactLocators.createFieldLocator);
        await this.waitForTextStrict('Test Contact Single Select');
        await this.navigateTo(config.url + '/Account/App/#/Contacts');
        await this.waitForTitle(ContactLocators.columnTitleLocator);
        await this.clickOnTitle(ContactLocators.columnTitleLocator);
        await this.waitForTextStrict(ContactLocators.customFieldLocator);
        await this.clickOnTextStrict(ContactLocators.customFieldLocator);
        await this.hoverOverElement('//b[text()="Test Contact Single Select"]');
        await this.waitForTextStrict('Description for Custom Contact Single Select Field');
        await this.waitForLocator(SingleSelectFieldLocators.addToColumnListLocator);
        await this.clickOnLocator(SingleSelectFieldLocators.addToColumnListLocator);
        await this.waitForButton(ContactLocators.saveLocator);
        await this.clickOnButton(ContactLocators.saveLocator);
        await this.waitForLocator(SingleSelectFieldLocators.customSingleSelectColumnLocator);
    }

    async createContactManuallyInContactGrid(email1: string, email2: string, email3: string) {
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
        await this.waitForLocator('//p[normalize-space(text())="customcontact1@test.com"]');
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
        await this.waitForLocator('//p[normalize-space(text())="customcontact2@test.com"]');
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
        await this.waitForLocator('//p[normalize-space(text())="customcontact3@test.com"]');
        await this.waitForLocator(ContactLocators.exitButtonLocator);
        await this.clickOnLocator(ContactLocators.exitButtonLocator);
    }



    async setTheValueForTestContactSingleSelect(email1: string) {
        await this.navigateTo(config.url + '/Account/App/#/Contacts');
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
        await this.waitForTime(1000);
        await this.waitForTextStrict('Custom Contact1');
        await this.clickOnTextStrict('Custom Contact1');
        await this.waitForTextUnderTestContactText('Test Contact Single Select-');
        await this.waitForLocator(ContactLocators.pencilLocator);
        await this.clickOnLocator(ContactLocators.pencilLocator);
        await this.waitForLocator('select[name="Test Contact Single Select"]');
        await this.selectingDropdownValue('select[name="Test Contact Single Select"]', 'Single1');
        await this.waitForButton(ContactLocators.saveLocator);
        await this.clickOnButton(ContactLocators.saveLocator);
        await this.waitForLocator('//div[normalize-space(text())="Single1"]');
        await this.waitForLocator(ContactLocators.exitButtonLocator);
        await this.clickOnLocator(ContactLocators.exitButtonLocator);
        await this.waitForLocator('//div[normalize-space(text())="Single1"]');
    }

    async updateExistingalue(email1: string) {
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
        await this.waitForTextStrict('Custom Contact1');
        await this.clickOnTextStrict('Custom Contact1');
        await this.waitForLocator('//div[normalize-space(text())="Single1"]');
        await this.waitForLocator(ContactLocators.pencilLocator);
        await this.clickOnLocator(ContactLocators.pencilLocator);
        await this.waitForLocator('select[name="Test Contact Single Select"]');
        await this.selectingDropdownValue('select[name="Test Contact Single Select"]', 'Single2');
        await this.waitForButton(ContactLocators.saveLocator);
        await this.clickOnButton(ContactLocators.saveLocator);
        await this.waitForLocator('//div[normalize-space(text())="Single2"]');
        await this.waitForLocator(ContactLocators.exitButtonLocator);
        await this.clickOnLocator(ContactLocators.exitButtonLocator);
        await this.waitForLocator('//div[normalize-space(text())="Single2"]');
    }

    async updateExistingFileDirectlyInGrid(email1: string) {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
        await this.waitForTime(1000);
        await this.waitForTextStrict('Custom Contact1');
        await this.waitForLocator('//div[normalize-space(text())="Single2"]');
        await this.clickOnLocator('//div[normalize-space(text())="Single2"]');
        await this.clickOnLocator('//div[normalize-space(text())="Single3"]');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[normalize-space(text())="Single3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Single3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Single2"]');
        await this.waitForTime(2000);
        await this.clickOnLocator('//div[normalize-space(text())="Single2"]');
    }

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
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/31-CustomFields_Contacts-UploadItems/7 - SingleSelectField1.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Single Select');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.clickOnLocator('//div[normalize-space(text())="Single2"]');
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
        await this.clickOnLocator('//div[normalize-space(text())="Single2"]');
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
        await this.clickOnLocator('//div[normalize-space(text())="Single4"]');
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
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/31-CustomFields_Contacts-UploadItems/7 - SingleSelectField2.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Single Select');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
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
        await this.clickOnLocator('//div[normalize-space(text())="Single2"]');
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
        await this.clickOnLocator('//div[normalize-space(text())="Single3"]');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//*[@id="table"]/tbody/tr/td[12]');
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
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/31-CustomFields_Contacts-UploadItems/7 - SingleSelectField3.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Single Select');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
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
        await this.clickOnLocator('//div[normalize-space(text())="Single2"]');
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
        await this.clickOnLocator('//div[normalize-space(text())="Single3"]');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//*[@id="table"]/tbody/tr/td[12]');
    }

};
