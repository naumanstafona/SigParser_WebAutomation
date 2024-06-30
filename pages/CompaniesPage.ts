import { Page } from 'playwright';
import { CompaniesLocators } from '../locators/CompaniesLocators';
import { CommonLocators } from '../locators/CommonLocators';
import { CommonSteps } from './CommonSteps';

export class CompaniesPage extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async getNextDayDate(): Promise<string> {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    async companyDomainTagVerification() {
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'UploadItems/Company - DomainTag.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Tag');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore, 'cvtest.com');
    }

    async companyDomainStatusVerification() {
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'UploadItems/Company - DomainStatus.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Company Status');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore, 'cvtest.com');
    }

    async companyNameVerification() {
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'UploadItems/Company - DomainName.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Company Name');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore, 'cvtest.com');
    }

    async companyWithScoreAtRowLevelVerification() {
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'UploadItems/Company_WithRowScores.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CompaniesLocators.mappingthirddropdownLocator);
        await this.selectingDropdownValue(CompaniesLocators.mappingthirddropdownLocator, 'Source Date');
        await this.waitForLocator(CompaniesLocators.mappingfourthdropdownLocator);
        await this.selectingDropdownValue(CompaniesLocators.mappingfourthdropdownLocator, 'Source Score');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForButton(CommonLocators.settingButtonLocator);
        await this.clickOnButton(CommonLocators.settingButtonLocator);
        await this.waitForText(CompaniesLocators.updatesButtonLocator);
        await this.clickOnText(CompaniesLocators.updatesButtonLocator);
        await this.waitForLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.clickOnLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailDomainPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailDomainPlaceholderLocator, 'unicorn.co');
        await this.waitingForCellHavingTextforVerification('Unicorn Co');
        await this.waitingForCellHavingTextforVerification('56');
        await this.waitingForCellHavingTextforVerification('Updated');
    }

    async companyWithScoreAtFieldLevelLowerVerification() {
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'UploadItems/Company_WithRowScores_Lower.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CompaniesLocators.mappingthirddropdownLocator);
        await this.selectingDropdownValue(CompaniesLocators.mappingthirddropdownLocator, 'Source Date');
        await this.waitForLocator(CompaniesLocators.mappingfourthdropdownLocator);
        await this.selectingDropdownValue(CompaniesLocators.mappingfourthdropdownLocator, 'Source Score');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForButton(CommonLocators.settingButtonLocator);
        await this.clickOnButton(CommonLocators.settingButtonLocator);
        await this.waitForText(CompaniesLocators.updatesButtonLocator);
        await this.clickOnText(CompaniesLocators.updatesButtonLocator);
        await this.waitForLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.clickOnLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyNamePlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyNamePlaceholderLocator, 'Unicorn.co');
        await this.waitingForCellHavingTextforVerification('Unicorn Co');
    }

    async companyWithScoreAtAllRowLevelsVerification() {
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'UploadItems/Company_ALL_ROWS_Scores.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Company Name');
        await this.waitForText(CompaniesLocators.showAdvancedSettingsTextLocator);
        await this.clickOnText(CompaniesLocators.showAdvancedSettingsTextLocator);
        await this.waitForLocator(CompaniesLocators.dateLocator);
        const nextDayDate = await this.getNextDayDate();
        await this.fillingLocator(CompaniesLocators.dateLocator, nextDayDate);
        await this.selectingDropdownValue(CompaniesLocators.deafultSourceScoreDropDownLocator, 'High (score = 90)');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForText(CommonLocators.statusQueuedNameLocator);
        await this.waitForText(CommonLocators.statusFinishedNameLocator);
        await this.waitForButton(CommonLocators.settingButtonLocator);
        await this.clickOnButton(CommonLocators.settingButtonLocator);
        await this.waitForText(CompaniesLocators.updatesButtonLocator);
        await this.clickOnText(CompaniesLocators.updatesButtonLocator);
        await this.waitForLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.clickOnLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailDomainPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailDomainPlaceholderLocator, 'unicorn.co');
        await this.waitingForCellHavingTextforVerification('Updated');
        await this.waitingForCellHavingTextforVerification('90');
        await this.waitForLocator(CompaniesLocators.awesomeCompanyLocator);

    }

}