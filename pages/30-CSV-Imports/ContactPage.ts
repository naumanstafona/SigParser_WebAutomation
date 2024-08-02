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
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForTextStrict(CommonLocators.domainTagFileLocator);
        await this.clickOnTextStrict(CommonLocators.domainTagFileLocator);
        await this.waitForTextStrict(ContactLocators.tagVerificationFieldLocator);
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
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForTextStrict('Joe Doe');
        await this.clickOnTextStrict('Joe Doe');
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
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForTextStrict('Joe Doe');
        await this.waitForTextStrict('Joe Doe');
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
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForTextStrict(CommonLocators.showAdvancedSettingsTextLocator);
        await this.clickOnTextStrict(CommonLocators.showAdvancedSettingsTextLocator);
        await this.waitForLocator(CommonLocators.dateLocator);
        const nextDayDate = await this.getNextDayDate();
        await this.fillingLocator(CommonLocators.dateLocator, nextDayDate);
        await this.selectingDropdownValue(CommonLocators.defaultSourceScoreDropDownLocator, 'High (score = 90)');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
        await this.waitForLocator('//a[contains(text(),"Delete")]');
        await this.clickOnLocator('//a[contains(text(),"Delete")]');
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
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
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
};