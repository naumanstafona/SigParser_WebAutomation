import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { isBooleanObject } from 'util/types';

export class ContactPage extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async waitForemptyphonenumber() {
        console.log("Starting wait for empty phone number.");
        try {
            await this.page.locator('div').filter({ hasText: /^Phone-$/ }).locator('div').nth(1).waitFor({ state: 'visible', timeout: this.timeout_small });
            console.log("Empty phone number is visible.");
        } catch (error) {
            console.error("An error occurred while waiting for empty phone number:", error);
        }
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

    async contactEmailTagVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Contact - EmailTag.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Tag');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);    
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'joe.doe@csvtest.com');
        await this.waitForTime(1000);
        await this.waitForText(CommonLocators.domainTagFileLocator);
        await this.clickOnText(CommonLocators.domainTagFileLocator);
        await this.waitForText(ContactLocators.tagVerificationFieldLocator);
        await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');

    }

    async contactEmailStatusVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Contact - EmailStatus.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'status');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);  
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'joe.doe@csvtest.com');
        await this.waitForTime(1000);
        await this.waitForText('Jonathan Doehopper');
        await this.clickOnText('Jonathan Doehopper');
        await this.waitForTextStrict(CommonLocators.modalFileDetailsButtonLocator);
        await this.clickOnTextStrict(CommonLocators.modalFileDetailsButtonLocator);
        await this.waitForElementByTextWithin('#modal-contact', 'Ignore');
        await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    }

    async contactEmailNameVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Contact - EmailName.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Full Name');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForButton(CommonLocators.settingButtonLocator);
        await this.clickOnButton(CommonLocators.settingButtonLocator);
        await this.waitForTextStrict(CommonLocators.updatesButtonLocator);
        await this.clickOnTextStrict(CommonLocators.updatesButtonLocator);
        await this.waitForLinkButton(ContactLocators.contactUpdateTrackingLocator);
        await this.clickOnLinkButton(ContactLocators.contactUpdateTrackingLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);  
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.contactEmailAddressPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.contactEmailAddressPlaceholderLocator, 'joe.doe@csvtest.com');
        await this.waitForTime(1000);
        await this.waitForLocator('(//a[@class="c-link --sm"])[1]');
        await this.clickOnLocator('(//a[@class="c-link --sm"])[1]');
        await this.waitForTextStrict(CommonLocators.modalFileDetailsButtonLocator);
        await this.clickOnTextStrict(CommonLocators.modalFileDetailsButtonLocator);
        await this.waitForTextStrict('Jonathan');
        await this.waitForTextStrict('Doehopper');
        await this.waitForLocator(ContactLocators.exitButtonLocator);
        await this.clickOnLocator(ContactLocators.exitButtonLocator);



    }

    async contactwithScoresAtRowLevelVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/ContactsWithRowScores.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Full Name');
        await this.waitForLocator(CommonLocators.mappingthirddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingthirddropdownLocator, 'Source Date');
        await this.waitForLocator(CommonLocators.mappingfourthdropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingfourthdropdownLocator, 'Source Score');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForButton(CommonLocators.settingButtonLocator);
        await this.clickOnButton(CommonLocators.settingButtonLocator);
        await this.waitForTextStrict(CommonLocators.updatesButtonLocator);
        await this.clickOnTextStrict(CommonLocators.updatesButtonLocator);
        await this.waitForLinkButton(ContactLocators.contactUpdateTrackingLocator);
        await this.clickOnLinkButton(ContactLocators.contactUpdateTrackingLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns); 
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.contactEmailAddressPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.contactEmailAddressPlaceholderLocator, 'mark.e@qweui.com');
        await this.waitForTime(1000);
        await this.waitingForCellHavingTextforVerification('Mark Elor');
        await this.waitingForCellHavingTextforVerification('Updated');
        await this.waitingForCellHavingTextforVerification('56');

    }

    async contactwithScoresAtFieldLevelVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/ContactsWithRowScores_Lower.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Full Name');
        await this.waitForLocator(CommonLocators.mappingthirddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingthirddropdownLocator, 'Source Date');
        await this.waitForLocator(CommonLocators.mappingfourthdropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingfourthdropdownLocator, 'Source Score');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForButton(CommonLocators.settingButtonLocator);
        await this.clickOnButton(CommonLocators.settingButtonLocator);
        await this.waitForTextStrict(CommonLocators.updatesButtonLocator);
        await this.clickOnTextStrict(CommonLocators.updatesButtonLocator);
        await this.waitForLinkButton(ContactLocators.contactUpdateTrackingLocator);
        await this.clickOnLinkButton(ContactLocators.contactUpdateTrackingLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns); 
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.contactEmailAddressPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.contactEmailAddressPlaceholderLocator, 'mark.e@qweui.com');
        await this.waitForTime(1000);
        await this.waitingForCellHavingTextforVerification('Mark Elor');
    }

    async contactwithScoresAtAllRowsLevelVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Contacts_ALL_ROWS_Scores.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Full Name');
        await this.waitForText(CommonLocators.showAdvancedSettingsTextLocator);
        await this.clickOnText(CommonLocators.showAdvancedSettingsTextLocator);
        await this.waitForLocator(CommonLocators.dateLocator);
        const nextDayDate = await this.getNextDayDate();
        await this.fillingLocator(CommonLocators.dateLocator, nextDayDate);
        await this.selectingDropdownValue(CommonLocators.defaultSourceScoreDropDownLocator, 'High (score = 90)');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForButton(CommonLocators.settingButtonLocator);
        await this.clickOnButton(CommonLocators.settingButtonLocator);
        await this.waitForTextStrict(CommonLocators.updatesButtonLocator);
        await this.clickOnTextStrict(CommonLocators.updatesButtonLocator);
        await this.waitForLinkButton(ContactLocators.contactUpdateTrackingLocator);
        await this.clickOnLinkButton(ContactLocators.contactUpdateTrackingLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns); 
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.contactEmailAddressPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.contactEmailAddressPlaceholderLocator, 'mark.e@qweui.com');
        await this.waitForTime(1000);
        await this.waitingForCellHavingTextforVerification('Mark Ronnin');
        await this.waitingForCellHavingTextforVerification('Updated');
        await this.waitingForCellHavingTextforVerification('90');
    }

    async contactDeleteFieldValue() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Contact-DeleteFieldValue-1.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Phone - Work');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns); 
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'delete@csv-delete-test.com');
        await this.waitForTime(1000);
        await this.waitForLocator('//a[contains(text(),"Delete")]');//Delete hyperlinked contact name
        await this.clickOnLocator('//a[contains(text(),"Delete")]');//clicking Delete hyperlinked contact name
        await this.waitForLocator('(//div[text()="888-444-5555"])[2]');
        await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    }

    async contactDeleteFieldValue2() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Contact-DeleteFieldValue-2.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Phone - Work');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.clickingOnColumns);
        await this.clickOnLocator(CommonLocators.clickingOnColumns);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns); 
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'delete@csv-delete-test.com');
        await this.waitForTime(1000);
        await this.waitForLocator('//a[contains(text(),"csv-delete-test")]');
        await this.clickOnLocator('//a[contains(text(),"csv-delete-test")]');
        await this.waitForTextStrict(CommonLocators.modalFileDetailsButtonLocator);
        await this.clickOnTextStrict(CommonLocators.modalFileDetailsButtonLocator);
        await this.waitForemptyphonenumber();
        await this.waitForLocator('//button[@class="c-modal__exit"]//i[1]');
        await this.clickOnLocator('//button[@class="c-modal__exit"]//i[1]');

    }

    async deleteCustomField() {
        await this.navigateTo('https://hotfix.sigparser.com/Account/App/#/CustomFields');
        await this.page.waitForTimeout(3000);

        const isTextPresent = await this.page.locator(ContactLocators.testContactTextLinkLocator).count();
        if (isTextPresent === 0) {
            console.log('Test Contact Text does not exist, aborting function.');
            return;
        }
        await this.waitForText('Test Contact Text');
        await this.clickOnText('Test Contact Text');
        await this.waitForButton(ContactLocators.deleteLocator);
        await this.handleAndAcceptDialog('//button[contains(@class,"c-btn --delete")]');
    }

    async deleteEmailAddresses() {
        await this.navigateTo('https://hotfix.sigparser.com/Account/App/#/TestingTools');
        await this.waitForPlaceholder('john@doe.com')
        await this.fillingPlaceholder('john@doe.com', 'test+stafona+haseeb@dragnettech.com')
        await this.waitForButton('Delete All Contacts and Emails ');
        await this.clickOnButton('Delete All Contacts and Emails ');
    }

    // async createContactManuallyInContactGrid(email1: string, email2: string, email3: string) {
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForLocator(ContactLocators.plusButtonLocator);
    //     await this.clickOnLocator(ContactLocators.plusButtonLocator);
    //     await this.waitForLocator(ContactLocators.emailInputLocator);
    //     await this.fillingLocator(ContactLocators.emailInputLocator, email1);
    //     await this.waitForLocator(ContactLocators.firstNameInputLocator);
    //     await this.fillingLocator(ContactLocators.firstNameInputLocator, 'Custom');
    //     await this.waitForLocator(ContactLocators.lastNameInputLocator);
    //     await this.fillingLocator(ContactLocators.lastNameInputLocator, 'Contact1');
    //     await this.waitForLocator(ContactLocators.titleInputLocator);
    //     await this.waitForButton(ContactLocators.saveLocator);
    //     await this.clickOnButton(ContactLocators.saveLocator);
    //     await this.waitForButton(ContactLocators.viewContactButtonLocator);
    //     await this.clickOnButton(ContactLocators.viewContactButtonLocator);
    //     await this.waitForText(email1);
    //     await this.waitForLocator(ContactLocators.exitButtonLocator);
    //     await this.clickOnLocator(ContactLocators.exitButtonLocator);
    //     await this.waitForLocator(ContactLocators.plusButtonLocator);
    //     await this.clickOnLocator(ContactLocators.plusButtonLocator);
    //     await this.waitForLocator(ContactLocators.emailInputLocator);
    //     await this.fillingLocator(ContactLocators.emailInputLocator, email2);
    //     await this.waitForLocator(ContactLocators.firstNameInputLocator);
    //     await this.fillingLocator(ContactLocators.firstNameInputLocator, 'Custom');
    //     await this.waitForLocator(ContactLocators.lastNameInputLocator);
    //     await this.fillingLocator(ContactLocators.lastNameInputLocator, 'Contact2');
    //     await this.waitForLocator(ContactLocators.titleInputLocator);
    //     await this.waitForButton(ContactLocators.saveLocator);
    //     await this.clickOnButton(ContactLocators.saveLocator);
    //     await this.waitForButton(ContactLocators.viewContactButtonLocator);
    //     await this.clickOnButton(ContactLocators.viewContactButtonLocator);
    //     await this.waitForText(email2);
    //     await this.waitForLocator(ContactLocators.exitButtonLocator);
    //     await this.clickOnLocator(ContactLocators.exitButtonLocator);
    //     await this.waitForLocator(ContactLocators.plusButtonLocator);
    //     await this.clickOnLocator(ContactLocators.plusButtonLocator);
    //     await this.waitForLocator(ContactLocators.emailInputLocator);
    //     await this.fillingLocator(ContactLocators.emailInputLocator, email3);
    //     await this.waitForLocator(ContactLocators.firstNameInputLocator);
    //     await this.fillingLocator(ContactLocators.firstNameInputLocator, 'Custom');
    //     await this.waitForLocator(ContactLocators.lastNameInputLocator);
    //     await this.fillingLocator(ContactLocators.lastNameInputLocator, 'Contact3');
    //     await this.waitForLocator(ContactLocators.titleInputLocator);
    //     await this.waitForButton(ContactLocators.saveLocator);
    //     await this.clickOnButton(ContactLocators.saveLocator);
    //     await this.waitForButton(ContactLocators.viewContactButtonLocator);
    //     await this.clickOnButton(ContactLocators.viewContactButtonLocator);
    //     await this.waitForText(email3);
    //     await this.waitForLocator(ContactLocators.exitButtonLocator);
    //     await this.clickOnLocator(ContactLocators.exitButtonLocator);
    // }

    // async createNewTextCustomColumnAndAddIttoGridColumns() {
    //     await this.navigateTo('https://hotfix.sigparser.com/Account/App/#/CustomFields');
    //     await this.waitForTime(1000);
    //     await this.waitForLocator(CommonLocators.addFieldLocator);
    //     await this.clickOnLocator(CommonLocators.addFieldLocator);
    //     await this.waitForHeading(CommonLocators.fieldFormHeadingLocator);
    //     await this.waitForPlaceholder(ContactLocators.fieldNamePlaceholder);
    //     await this.fillingPlaceholder(ContactLocators.fieldNamePlaceholder, 'Test Contact Text');
    //     await this.waitForPlaceholder(ContactLocators.descriptionPlaceholder);
    //     await this.fillingPlaceholder(ContactLocators.descriptionPlaceholder, 'Description for Custom Contact Text Field');
    //     await this.waitForButton(ContactLocators.createFieldLocator);
    //     await this.clickOnButton(ContactLocators.createFieldLocator);
    //     await this.waitForText('Test Contact Text');
    //     await this.navigateTo('https://hotfix.sigparser.com/Account/App/#/Contacts');
    //     await this.waitForTitle(ContactLocators.columnTitleLocator);
    //     await this.clickOnTitle(ContactLocators.columnTitleLocator);
    //     await this.waitForText(ContactLocators.customFieldLocator);
    //     await this.clickOnText(ContactLocators.customFieldLocator);
    //     await this.hoverOverElement(ContactLocators.testContactTextLinkLocator);
    //     await this.waitForText('Description for Custom Contact Text Field');
    //     await this.waitForLocator(ContactLocators.addToColumnListLocator);
    //     await this.clickOnLocator(ContactLocators.addToColumnListLocator);
    //     await this.waitForButton(ContactLocators.saveLocator);
    //     await this.clickOnButton(ContactLocators.saveLocator);
    //     await this.waitForLocator(ContactLocators.testContactTextColumnLocator);
    // }

    // async setTheValueForCustomField(email1: string) {
    //     await this.navigateTo('https://hotfix.sigparser.com/Account/App/#/Contacts');
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.page.waitForTimeout(1000);
    //     await this.waitForText('Custom Contact1');
    //     await this.clickOnText('Custom Contact1');
    //     await this.waitForText('Test Contact Text');
    //     await this.waitForTextUnderTestContactText('Test Contact Text-');
    //     await this.waitForLocator(ContactLocators.pencilLocator);
    //     await this.clickOnLocator(ContactLocators.pencilLocator);
    //     await this.waitForPlaceholder('Field Value');
    //     await this.fillingPlaceholder('Field Value', '1');
    //     await this.waitForButton(ContactLocators.saveLocator);
    //     await this.clickOnButton(ContactLocators.saveLocator);
    //     await this.waitForTextUnderTestContactText('Test Contact Text1');
    //     await this.waitForLocator(ContactLocators.exitButtonLocator);
    //     await this.clickOnLocator(ContactLocators.exitButtonLocator);
    // }

    // async updateExistingValueWithOverCharacterLimit(email1: string) {
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.page.waitForTimeout(3000);
    //     await this.waitForText('Custom Contact1');
    //     await this.clickOnText('Custom Contact1');
    //     await this.waitForTextUnderTestContactText('Test Contact Text1');
    //     await this.waitForLocator(ContactLocators.pencilLocator);
    //     await this.clickOnLocator(ContactLocators.pencilLocator);
    //     await this.waitForPlaceholder('Field Value');
    //     await this.fillingPlaceholder('Field Value', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.THIS TEXT IS OVER THE 250 LIMIT');
    //     await this.waitForButton(ContactLocators.saveLocator);
    //     await this.clickOnButton(ContactLocators.saveLocator);
    //     await this.page.hover('//div[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ..."]');
    //     await this.waitForLocator('//p[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.THIS TEXT IS OVER THE 250 LIMIT"]');
    //     await this.waitForLocator(ContactLocators.exitButtonLocator);
    //     await this.clickOnLocator(ContactLocators.exitButtonLocator);
    //     await this.waitForText('Custom Contact1');
    //     await this.clickOnText('Custom Contact1');
    //     await this.page.hover('//div[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ..."]');
    //     await this.waitForLocator('//p[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
    //     await this.waitForLocator(ContactLocators.exitButtonLocator);
    //     await this.clickOnLocator(ContactLocators.exitButtonLocator);
    // }

    // async updateExistingFileDirectlyInGrid(email1: string) {
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.page.waitForTimeout(3000);
    //     await this.waitForText('Lorem ipsum dolor sit ame');
    //     await this.clickOnText('Lorem ipsum dolor sit ame');
    //     await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '1');
    //     await this.waitForElementToBeVisibleinCell('1');
    //     await this.waitForTime(1000);
    //     await this.clickElementByTextWithin('#table', '1');
    //     await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.THIS TEXT IS OVER THE 250 LIMIT');
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.page.waitForTimeout(3000);
    //     await this.waitForLocator('//div[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
    //     await this.waitForText('Custom Contact1');
    //     await this.clickOnText('Custom Contact1');
    //     await this.page.hover('//div[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ..."]');
    //     await this.waitForLocator('//p[text()="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."]');
    //     await this.waitForLocator(ContactLocators.exitButtonLocator);
    //     await this.clickOnLocator(ContactLocators.exitButtonLocator);
    // }


    // async importCSVtoSettheValuesForTheCustomField(email1: string, email2: string, email3: string) {
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.importButtonLocator);
    //     await this.clickOnButton(CommonLocators.importButtonLocator);
    //     await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    //     await this.clickOnSelectFileButton();
    //     await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    //     await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    //     await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, '31-CustomFields_Contacts-UploadItems/2 - TextField1.csv');
    //     await this.waitForButton(CommonLocators.nextButtonLocator);
    //     await this.clickOnButton(CommonLocators.nextButtonLocator);
    //     await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    //     await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
    //     await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Text');
    //     await this.waitForButton(CommonLocators.importFileLocator);
    //     await this.clickOnButton(CommonLocators.importFileLocator);
    //     await this.waitForText(CommonLocators.statusQueuedNameLocator);
    //     await this.waitForText(CommonLocators.statusFinishedNameLocator);
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.waitForTime(1000);
    //     await this.waitForText('New Text Value 1');
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email2);
    //     await this.waitForTime(1000);
    //     await this.waitForText('Text Value 2');
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email3);
    //     await this.waitForTime(1000);
    //     await this.waitForText('Text Value 3');
    // }

    // async importSecondCSVFileUpdatingAndDeletingValues(email1: string, email2: string, email3: string) {
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.importButtonLocator);
    //     await this.clickOnButton(CommonLocators.importButtonLocator);
    //     await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    //     await this.clickOnSelectFileButton();
    //     await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    //     await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    //     await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, '31-CustomFields_Contacts-UploadItems/2 - TextField2.csv');
    //     await this.waitForButton(CommonLocators.nextButtonLocator);
    //     await this.clickOnButton(CommonLocators.nextButtonLocator);
    //     await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    //     await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
    //     await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Text');
    //     await this.waitForButton(CommonLocators.importFileLocator);
    //     await this.clickOnButton(CommonLocators.importFileLocator);
    //     await this.waitForText(CommonLocators.statusQueuedNameLocator);
    //     await this.waitForTime(30000);
    //     await this.waitForText(CommonLocators.statusFinishedNameLocator);
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.page.waitForTimeout(3000);
    //     await this.waitForText('New Text Value 1');
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email2);
    //     await this.waitForTime(1000);
    //     await this.waitForText('Text Value 2');
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email3);
    //     await this.waitForTime(1000);
    //     await this.waitForLocator('//*[@id="table"]/tbody/tr/td[11]/div/div');
    // }

    // async importThirdCSVFileNoChanges(email1: string, email2: string, email3: string) {
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.importButtonLocator);
    //     await this.clickOnButton(CommonLocators.importButtonLocator);
    //     await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    //     await this.clickOnSelectFileButton();
    //     await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    //     await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    //     await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, '31-CustomFields_Contacts-UploadItems/2 - TextField3.csv');
    //     await this.waitForButton(CommonLocators.nextButtonLocator);
    //     await this.clickOnButton(CommonLocators.nextButtonLocator);
    //     await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    //     await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'work_email');
    //     await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Test Contact Text');
    //     await this.waitForButton(CommonLocators.importFileLocator);
    //     await this.clickOnButton(CommonLocators.importFileLocator);
    //     await this.waitForText(CommonLocators.statusQueuedNameLocator);
    //     await this.waitForTime(30000);
    //     await this.waitForText(CommonLocators.statusFinishedNameLocator);
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email1);
    //     await this.page.waitForTimeout(3000);
    //     await this.waitForText('New Text Value 1');
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email2);
    //     await this.waitForTime(1000);
    //     await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForButton(CommonLocators.searchButtonLocator);
    //     await this.clickOnButton(CommonLocators.searchButtonLocator);
    //     await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    //     await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, email3);
    //     await this.page.waitForTimeout(3000);
    //     await this.waitForLocator('//*[@id="table"]/tbody/tr/td[11]/div/div');
    // }

};

