import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { isBooleanObject } from 'util/types';
import config from '../../config';

export class ContactTextField extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }


    async waitForTextUnderTestContactText(text: string) {
        console.log(`Waiting for text: ${text}`);
        try {
            await this.page.locator('div').filter({ hasText: text }).nth(2).waitFor({ state: 'visible', timeout: this.timeout_small });
            console.log(`Text "${text}" under test contact is visible.`);
        } catch (error) {
            console.error("An error occurred while waiting for text:", error);
        }
    }

    async createCustomField() {
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator(CommonLocators.addFieldLocator);
        await this.clickOnLocator(CommonLocators.addFieldLocator);
        await this.waitForPlaceholder(CommonLocators.fieldNamePlaceholder);
        await this.fillingPlaceholder(CommonLocators.fieldNamePlaceholder, 'Test Contact Text');
        await this.waitForPlaceholder(CommonLocators.descriptionPlaceholder);
        await this.fillingPlaceholder(CommonLocators.descriptionPlaceholder, 'Description for Custom Contact Text Field');
        await this.waitForButton(CommonLocators.createFieldLocator);
        await this.clickOnButton(CommonLocators.createFieldLocator);
        await this.waitForTime(3000);
        await this.page.waitForSelector('div:has-text("Test Contact Text")', { state: 'visible', timeout: this.timeout_small });
        await this.navigateTo(config.url + '/Account/App/#/Fields');
        await this.waitForTime(5000);
        await this.waitForLocator('//a[normalize-space(text())="Test Contact Text"]');
    }
    async adddCutomFieldToGrid() {

        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator)
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator)
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator)
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator)
        await this.waitForTitle(CommonLocators.columnTitleLocator);
        await this.clickOnTitle(CommonLocators.columnTitleLocator);
        await this.waitForTextStrict(CommonLocators.customFieldLocator);
        await this.clickOnTextStrict(CommonLocators.customFieldLocator);
        await this.hoverOverElement(CommonLocators.testContactTextLinkLocator);
        await this.waitForTextStrict('Description for Custom Contact Text Field');
        await this.waitForLocator(ContactLocators.addToColumnListLocator);
        await this.clickOnLocator(ContactLocators.addToColumnListLocator);
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForLocator(CommonLocators.testContactTextColumnLocator);
    }

    async setTheValueForCustomField(email1: string) {
        await this.navigateTo(config.url + '/Account/App/#/Contacts');
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
        await this.waitForTime(1000);
        await this.waitForTextStrict('Custom Contact1');
        await this.clickOnTextStrict('Custom Contact1');
        await this.waitForLocator('div:nth-child(10) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.hoverOverElement('div:nth-child(10) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.clickOnLocator('div:nth-child(10) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Text Value 1');
        await this.waitForTime(2000);
        await this.waitForLocator('(//div[@title="Text Value 1"])[2]');
        await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.waitForLocator('//div[normalize-space(text())="Text Value 1"]');

    }

    async updateExistingValueWithOverCharacterLimit(email1: string) {
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
        await this.clickOnTextStrict('Custom Contact1');
        await this.waitForLocator('div:nth-child(10) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.hoverOverElement('div:nth-child(10) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.clickOnLocator('div:nth-child(10) > .p-profile__section-content > div > .c-input > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.THIS TEXT IS OVER THE 250 LIMIT');
        await this.waitForTime(2000);
        await this.waitForLocator('(//div[@title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."])[2]');
        await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.waitForLocator('//div[@title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
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
        await this.waitForTime(3000);
        await this.waitForLocator('//div[normalize-space(text())="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
        await this.hoverOverElement('//tbody/tr[1]/td[12]/div[1]/div[1]');
        await this.clickOnLocator('//div[normalize-space(text())="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Text Value 1 Updated');
        await this.waitForTime(3000);
        await this.waitForLocator('//div[normalize-space(text())="Text Value 1 Updated"]');
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
        await this.waitForTime(3000);
        await this.waitForLocator('//tbody/tr[1]/td[12]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[12]/div[1]/div[1]');
        await this.clickOnLocator('//tbody/tr[1]/td[12]/div[1]/div[1]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.THIS TEXT IS OVER THE 250 LIMIT');
        await this.waitForTime(5000);
        await this.waitForLocator('//div[@title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]'); await this.clickOnLocator('//div[normalize-space(text())="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
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
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/31-CustomFields_Contacts-UploadItems/2 - TextField1.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.waitForTime(3000);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Text');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTime(30000);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForLocator('//div[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
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
        await this.waitForTextStrict('Text Value 2');
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
        await this.waitForTextStrict('Text Value 3');
    }

    async importSecondCSVFileUpdatingAndDeletingValues(email1: string, email2: string, email3: string) {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/31-CustomFields_Contacts-UploadItems/2 - TextField2.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.waitForTime(3000);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Text');
        await this.waitForTime(2000);
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTime(30000);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForLocator('//div[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
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
        await this.waitForTextStrict('Text Value 2 - Updated');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
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
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/31-CustomFields_Contacts-UploadItems/2 - TextField3.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.waitForTime(3000);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Text');
        await this.waitForTime(2000);
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTime(30000);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForLocator('//div[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
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
        await this.waitForTextStrict('Text Value 2 - Updated');
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email3);
        await this.waitForTime(1000);
        await this.waitForLocator('//*[@id="table"]/tbody/tr/td[12]/div/div');
    }


};

