import { Page } from 'playwright';
import { CompaniesLocators } from '../../locators/30-CSV-Imports/CompaniesLocators';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { CoworkerLocator } from '../../locators/30-CSV-Imports/CoworkersLocators';

export class CompaniesPage extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async companyDomainTagVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Company - DomainTag.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Tag');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
        await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore, 'csvtest.com');
        await this.waitForTime(1000);
        await this.waitForLocator('(//a[@class="c-link --sm"])[1]');
        await this.clickOnLocator('(//a[@class="c-link --sm"])[1]');
        await this.waitForTextStrict(CompaniesLocators.tagVerificationLocator);
        await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    }

    async companyDomainStatusVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Company - DomainStatus.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Company Status');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
        await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore, 'csvtest.com');
        await this.waitForTime(1000);
        await this.waitForLocator('(//a[@class="c-link --sm"])[1]');
        await this.clickOnLocator('(//a[@class="c-link --sm"])[1]');
        await this.waitForTextStrict(CommonLocators.modalFileDetailsButtonLocator);
        await this.clickOnTextStrict(CommonLocators.modalFileDetailsButtonLocator);
        await this.waitForElementByTextWithin('#modal', 'Ignore');
        await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');

    }

    async companyNameVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Company - DomainName.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Company Name');
        await this.waitForButton(CommonLocators.importFileLocator);
        await this.clickOnButton(CommonLocators.importFileLocator);
        await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
        await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
        await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
        await this.waitForLocator(CommonLocators.allRecordAndColumns);
        await this.clickOnLocator(CommonLocators.allRecordAndColumns);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore, 'csvtest.com');
        await this.waitForTime(1000);
        await this.waitForTextStrict('CSVtest_Name');
        await this.clickOnTextStrict('CSVtest_Name');
        await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
        await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    }

    async companyWithScoreAtRowLevelVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Company_WithRowScores.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
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
        await this.waitForLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.clickOnLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailDomainPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailDomainPlaceholderLocator, 'unicorn.co');
        await this.waitForTime(1000);
        await this.waitingForCellHavingTextforVerification('Unicorn Co');
        await this.waitingForCellHavingTextforVerification('56');
        await this.waitingForCellHavingTextforVerification('Updated');
    }

    async companyWithScoreAtFieldLevelLowerVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Company_WithRowScores_Lower.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
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
        await this.waitForLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.clickOnLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailDomainPlaceholderLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailDomainPlaceholderLocator, 'unicorn.co');
        await this.waitForTime(1000);
        await this.waitingForCellHavingTextforVerification('Unicorn Co');
    }

    async companyWithScoreAtAllRowLevelsVerification() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.importButtonLocator);
        await this.clickOnButton(CommonLocators.importButtonLocator);
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
        await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
        await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/30-CSV-Imports-UploadItems/Company_ALL_ROWS_Scores.csv');
        await this.waitForButton(CommonLocators.nextButtonLocator);
        await this.clickOnButton(CommonLocators.nextButtonLocator);
        await this.waitForHeading(CommonLocators.mapDataFieldLocators);
        await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
        await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
        await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Company Name');
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
        await this.waitForLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.clickOnLinkButton(CompaniesLocators.companyUpdatesTrackingLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailDomainPlaceholderLocator, 'unicorn.co');
        await this.waitForTime(1000);
        await this.waitingForCellHavingTextforVerification('Updated');
        await this.waitingForCellHavingTextforVerification('90');
        await this.waitForLocator(CompaniesLocators.awesomeCompanyLocator);

    }
};