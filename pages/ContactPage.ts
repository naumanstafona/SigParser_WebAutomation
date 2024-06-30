import { Page } from 'playwright';
import { ContactLocators } from '../locators/ContactLocators';
import { CommonLocators } from '../locators/CommonLocators';
import { CommonSteps } from './CommonSteps';

export class ContactPage extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async contactEmailTagVerification() {
        await this.waitForLinkButton(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButton(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'UploadItems/Contact - EmailTag.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Tag');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButton(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButton(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
    }

    async contactEmailStatusVerification() {
        await this.waitForLinkButton(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButton(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'UploadItems/Contact - EmailStatus.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Tag');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButton(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButton(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
    }
}