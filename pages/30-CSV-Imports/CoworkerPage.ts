import { Page } from 'playwright';
import { CoworkerLocator } from '../../locators/30-CSV-Imports/CoworkersLocators';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';

export class CoworkerPage extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async coworkerWithScoresAtRowLevelVerification() {
        await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, '30-CSV-Imports-UploadItems/Coworkers_WithRowScores.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
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
        await this.waitForLinkButton(CoworkerLocator.contactUpdateTrackingLocator);
        await this.clickOnLinkButton(CoworkerLocator.contactUpdateTrackingLocator);
        await this.waitForLocator(CommonLocators.allContactUpdatesLocator);
        await this.clickOnLocator(CommonLocators.allContactUpdatesLocator);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CoworkerLocator.contactEmailAddressPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CoworkerLocator.contactEmailAddressPlaceholderLocator, 'mary.b@coworker-space.com');
        await this.waitForTime(2000);
        await this.waitingForCellHavingTextforVerification('Mary Balier');
        await this.waitingForCellHavingTextforVerification('Updated');
        await this.waitingForCellHavingTextforVerification('56');
        
    }

    async coworkerWithScoreAtFieldLevelLowerVerification() {
        await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, '30-CSV-Imports-UploadItems/Coworkers_WithRowScores_Lower.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
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
        await this.waitForLinkButton(CoworkerLocator.contactUpdateTrackingLocator);
        await this.clickOnLinkButton(CoworkerLocator.contactUpdateTrackingLocator);
        await this.waitForLocator(CommonLocators.allContactUpdatesLocator);
        await this.clickOnLocator(CommonLocators.allContactUpdatesLocator);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CoworkerLocator.contactEmailAddressPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CoworkerLocator.contactEmailAddressPlaceholderLocator, 'mary.b@coworker-space.com');
        await this.waitForTime(2000);
        await this.waitingForCellHavingTextforVerification('Mary Balier');
    }

    async coworkerwithScoresAtAllRowsLevelVerification() {
        await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, '30-CSV-Imports-UploadItems/Coworkers_ALL_ROWS_Scores.csv');
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
        await this.waitForLinkButton(CoworkerLocator.contactUpdateTrackingLocator);
        await this.clickOnLinkButton(CoworkerLocator.contactUpdateTrackingLocator);
        await this.waitForLocator(CommonLocators.allContactUpdatesLocator);
        await this.clickOnLocator(CommonLocators.allContactUpdatesLocator);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CoworkerLocator.contactEmailAddressPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CoworkerLocator.contactEmailAddressPlaceholderLocator, 'mary.b@coworker-space.com');
        await this.waitForTime(2000);
        await this.waitingForCellHavingTextforVerification('Mary Tahoe');
        await this.waitingForCellHavingTextforVerification('Updated');
        await this.waitingForCellHavingTextforVerification('90');
    }
}