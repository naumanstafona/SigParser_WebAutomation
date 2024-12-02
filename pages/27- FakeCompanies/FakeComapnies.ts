import { Page } from 'playwright';
import { CommonLocators } from '../../locators/CommonLocators';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { CommonSteps } from '../CommonSteps';
import { FakeCompaniesLocators } from '../../locators/27-FakeCompanies/FakeCompaniesLocators';
import config from '../../config';

export class FakeCompanies extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async downloadFile(): Promise<string | null> {
        try {
            // Locate the "Export Now" button
            const exportButton = this.page.locator(FakeCompaniesLocators.exportNowButtonLocator);

            // Check if the button is enabled
            const isEnabled = await exportButton.isEnabled();
            if (!isEnabled) {
                console.error('Export button is disabled. Download will not proceed.');
                return null; // Return null if the button is disabled
            }

            // Proceed with download if the button is enabled
            const [download] = await Promise.all([
                this.page.waitForEvent('download'), // Wait for the download event
                exportButton.click()                 // Click the button to trigger the download

            ]);

            // Get the path of the downloaded file
            const filePath = await download.path();
            process.exit(1);
        } catch (error) {
            console.error('Download failed:', error);
            return null; // Return null if download failed
        }
    }

    async contactSearchLocations() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.waitForLocator(FakeCompaniesLocators.locationMarkerLocators);
        await this.clickOnLocator(FakeCompaniesLocators.locationMarkerLocators);
        await this.waitForTime(15000);
        await this.waitForLocator(FakeCompaniesLocators.locationZoomLocator);
        await this.clickOnLocator(FakeCompaniesLocators.locationZoomLocator);
        await this.waitForLocator(FakeCompaniesLocators.applyButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.applyButtonLocator);
        await this.waitForTime(5000)
        await this.waitForLocator(FakeCompaniesLocators.locationVerificationLocator);
        await this.waitForLocator(FakeCompaniesLocators.removeLocationLocator);
        await this.clickOnLocator(FakeCompaniesLocators.removeLocationLocator);
        await this.waitForLocator(FakeCompaniesLocators.ukScotlandLocator);
        await this.waitForLocator(FakeCompaniesLocators.locationMarkerLocators);
        await this.clickOnLocator(FakeCompaniesLocators.locationMarkerLocators);
        await this.waitForTime(15000);
        await this.waitForLocator(FakeCompaniesLocators.locationZoomLocator);
        await this.clickOnLocator(FakeCompaniesLocators.locationZoomLocator);
        await this.waitForTime(2000);
        await this.waitForLocator(FakeCompaniesLocators.locationZoomLocator);
        await this.clickOnLocator(FakeCompaniesLocators.locationZoomLocator);
        await this.waitForLocator(FakeCompaniesLocators.applyButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.applyButtonLocator);
        await this.waitForTime(5000)
        await this.waitForLocator(FakeCompaniesLocators.nebraskaLocator);
        await this.waitForLocator(FakeCompaniesLocators.removeLocationLocator)
        await this.clickOnLocator(FakeCompaniesLocators.removeLocationLocator)
        await this.waitForTime(5000);
        await this.waitForLocator(FakeCompaniesLocators.netherlandsLocator);

    }
    async logOut() {
        await this.waitForButton(CommonLocators.settingButtonLocator);
        await this.clickOnButton(CommonLocators.settingButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.logoutLocator);
        await this.clickOnLocator(FakeCompaniesLocators.logoutLocator);
    }

    async contactSearchThroughMailbox() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(FakeCompaniesLocators.exportButtonLocator);
        await this.clickOnButton(FakeCompaniesLocators.exportButtonLocator);
        await this.waitForButtonByRow(FakeCompaniesLocators.selectButtonLocator);
        await this.clickOnButtonByRow(FakeCompaniesLocators.selectButtonLocator);
        await this.waitforLabel(FakeCompaniesLocators.exportAllColumnLocator);
        await this.checkLabel(FakeCompaniesLocators.exportAllColumnLocator);
        await this.waitforLabel('Export to CSV file');
        await this.checkLabel('Export to CSV file');
        const filePath = await this.downloadFile();
        await this.waitForTime(4000);
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.waitForTime(2000);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'jim.halpert@dundermifflin.com');
        await this.waitForTime(5000);
        await this.waitForLocator(FakeCompaniesLocators.noDataLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'kelly.kapoor@fakecompany.com');
        await this.waitForTime(5000);
        await this.waitForLocator(FakeCompaniesLocators.noDataLocator);
    }

    async contactSearchthroughExportAndAccessit() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.mailBoxLocator);
        await this.fillingLocator(FakeCompaniesLocators.mailBoxLocator, 'pam.beesley@fakecompany.com');
        await this.waitForTime(5000);
        await this.checkLocatorAbsence('(//td[contains(@class, "c-table-dynamic__item") and .//span[normalize-space()="(1)"] and .//a[contains(@href, "#/Connector") and text()="pam.beesley@fakecompany.com"]])[1]');
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.fullNameLocator);
        await this.fillingLocator(FakeCompaniesLocators.fullNameLocator, 'Virginia Luttger');
        await this.waitForTime(5000);
        await this.waitForLocator('(//td[contains(@class, "c-table-dynamic__item") and .//span[normalize-space()="(1)"] and .//a[contains(@href, "#/Connector") and text()="dwight.schrute@fakecompany.com"]])[1]');
    }

    async emailSignatureVerification() {
        await this.navigateTo(config.url + '/Account/App/#/Users');
        await this.waitForLocator(FakeCompaniesLocators.adminLocator);
        await this.clickOnLocator(FakeCompaniesLocators.adminLocator);
        await this.waitForTime(5000);
        const latestSignatureDisabled = this.page.locator('//tr[@class="c-table-static__row" and .//td/b[text()="Can View Latest Email Signatures"]]//button[text()="Disabled"]');
        const latestSignatureEnabled = this.page.locator('//tr[@class="c-table-static__row" and .//td/b[text()="Can View Latest Email Signatures"]]//button[text()="Enabled"]');
        console.log(await latestSignatureDisabled.isVisible());
        console.log(await latestSignatureEnabled.isVisible());
        if (await latestSignatureDisabled.isVisible()) {
            console.log("1");
            await this.waitForLocator(FakeCompaniesLocators.latestSignatureDisabled);
            await this.clickOnLocator(FakeCompaniesLocators.latestSignatureDisabled);
            await this.waitForButton(CommonLocators.saveLocator);
            await this.clickOnButton(CommonLocators.saveLocator);
            await this.waitForTime(50000);
        }
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.fullNameLocator);
        await this.fillingLocator(FakeCompaniesLocators.fullNameLocator, 'Delegated');
        await this.waitForTime(3000);
        await this.waitForLocator('//a[@class="c-link --sm" and @title="Delegated User"]');
        await this.clickOnLocator('//a[@class="c-link --sm" and @title="Delegated User"]');
        await this.waitForLocator('//div[normalize-space(text())="Dob dobbie Principal Dobber Dob@Dob.com"]');
        await this.waitForLocator(FakeCompaniesLocators.contactModalClose);
        await this.clickOnLocator(FakeCompaniesLocators.contactModalClose);
        await this.navigateTo(config.url + '/Account/App/#/Users');
        await this.waitForLocator(FakeCompaniesLocators.adminLocator);
        await this.clickOnLocator(FakeCompaniesLocators.adminLocator);
        await this.waitForTime(5000);

        if (await latestSignatureEnabled.isVisible()) {
            await this.waitForLocator(FakeCompaniesLocators.latestSignatureEnabled);
            await this.clickOnLocator(FakeCompaniesLocators.latestSignatureEnabled);
            await this.waitForButton(CommonLocators.saveLocator);
            await this.clickOnButton(CommonLocators.saveLocator);
            await this.waitForTime(50000);
        }
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.fullNameLocator);
        await this.fillingLocator(FakeCompaniesLocators.fullNameLocator, 'Delegated');
        await this.waitForTime(3000);
        await this.waitForLocator('//a[@class="c-link --sm" and @title="Delegated User"]');
        await this.clickOnLocator('//a[@class="c-link --sm" and @title="Delegated User"]');
        await this.waitForLocator('//div[normalize-space(text())="YOU NEED PERMISSION TO SEE THE EMAIL SIGNATURE."]');
        await this.waitForLocator(FakeCompaniesLocators.contactModalClose);
        await this.clickOnLocator(FakeCompaniesLocators.contactModalClose);

    }

    async changeStatus() {
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.firstContactCoworkerLocator);
        await this.clickOnLocator(FakeCompaniesLocators.firstContactCoworkerLocator);
        await this.waitForLocator(FakeCompaniesLocators.inactiveLocator);
        await this.clickOnLocator(FakeCompaniesLocators.inactiveLocator);
        await this.waitForTime(1000);
        await this.waitForLocator(FakeCompaniesLocators.firstContactCoworkerLocator);
        await this.clickOnLocator(FakeCompaniesLocators.firstContactCoworkerLocator);
        await this.waitForLocator(FakeCompaniesLocators.ignoreLocator);
        await this.clickOnLocator(FakeCompaniesLocators.ignoreLocator);
        await this.waitForTime(1000);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.verifyIgnoreStatus);
        await this.waitForLocator(FakeCompaniesLocators.verifyInactiveStatus);
        await this.waitForLocator(FakeCompaniesLocators.verifyInactiveStatus);
        await this.clickOnLocator(FakeCompaniesLocators.verifyInactiveStatus);
        await this.waitForLocator(FakeCompaniesLocators.activeLocator);
        await this.clickOnLocator(FakeCompaniesLocators.activeLocator);
        await this.waitForLocator(FakeCompaniesLocators.verifyIgnoreStatus);
        await this.clickOnLocator(FakeCompaniesLocators.verifyIgnoreStatus);
        await this.waitForLocator(FakeCompaniesLocators.activeLocator);
        await this.clickOnLocator(FakeCompaniesLocators.activeLocator);
        await this.waitForTime(1000);
    }

    async coworkerMerge() {
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'jim.halpert@fakecompany.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="Jim Halpert"]');
        await this.clickOnLocator('//a[normalize-space(text())="Jim Halpert"]');
        await this.waitForTime(2000);
        await this.waitForLocator(FakeCompaniesLocators.primaryEmailLocator);
        await this.waitForLocator('//td[normalize-space(text())="pam.beesley@fakecompany.com"]');
        await this.waitForLocator('//td[normalize-space(text())="stanley.hudson@fakecompany.com"]');
        await this.waitForLocator(FakeCompaniesLocators.plusButtonLocatoe);
        await this.clickOnLocator(FakeCompaniesLocators.plusButtonLocatoe);
        await this.waitForLocator(FakeCompaniesLocators.searchInputLocator);
        await this.fillingLocator(FakeCompaniesLocators.searchInputLocator, 'dschrute@fakecompany.com');
        await this.waitForLocator(FakeCompaniesLocators.searchButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.searchButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.dwightCheckboxLocator);
        await this.clickOnLocator(FakeCompaniesLocators.dwightCheckboxLocator);
        await this.waitForLocator(FakeCompaniesLocators.addSelectedButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.addSelectedButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.dwightemailLocator);
        await this.waitForLocator(FakeCompaniesLocators.trashLocator);
        await this.clickOnLocator(FakeCompaniesLocators.trashLocator);
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForTime(2000);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'dschrute@fakecompany.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="Dwight Schrute"]');
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'jim.halpert@fakecompany.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//span[normalize-space(text())="jim.halpert@fakecompany.com, pam.beesley@fakecompany.com, stanley.hudson@fakecompany.com"]');

    }

    async verifyRelationships() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'stanley.hudson@fakecompany.com');
        await this.waitForTime(2000);
        await this.waitForLocator(FakeCompaniesLocators.noDataLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'michael.scott@fakecompany.com');
        await this.waitForTime(2000);
        await this.waitForLocator(FakeCompaniesLocators.noDataLocator);
    }

    async verifyCoworkerModal() {
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'jim.halpert@fakecompany.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="Jim Halpert"]');
        await this.clickOnLocator('//a[normalize-space(text())="Jim Halpert"]');
        await this.waitForTime(2000);
        await this.waitForLocator('//td[normalize-space(text())="stanley.hudson@fakecompany.com"]');
        await this.waitForLocator(FakeCompaniesLocators.contactTabinModalLocator);
        await this.clickOnLocator(FakeCompaniesLocators.contactTabinModalLocator);
        await this.waitForLocator(FakeCompaniesLocators.contactColumnInContacts);
        await this.waitForLocator(FakeCompaniesLocators.companiesTabinModalLocator);
        await this.clickOnLocator(FakeCompaniesLocators.companiesTabinModalLocator);
        await this.waitForLocator(FakeCompaniesLocators.companyColumnInComapnies);
        await this.waitForLocator(FakeCompaniesLocators.cworkersTabinModalLocator);
        await this.clickOnLocator(FakeCompaniesLocators.cworkersTabinModalLocator);
        await this.waitForLocator(FakeCompaniesLocators.coworkerColumnInCoworkers);
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);
    }

    async verifyCoworkerModalStatistics() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'creed.bratton@fakecompany.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="Creed Bratton"]');
        await this.handleAndAcceptDialog('//a[normalize-space(text())="Creed Bratton"]');
        await this.waitForLocator(FakeCompaniesLocators.contactTabinModalLocator);
        await this.clickOnLocator(FakeCompaniesLocators.contactTabinModalLocator);
        await this.waitForLocator(FakeCompaniesLocators.errorMessageLocator);
        await this.waitForLocator(FakeCompaniesLocators.companiesTabinModalLocator);
        await this.clickOnLocator(FakeCompaniesLocators.companiesTabinModalLocator);
        await this.waitForLocator(FakeCompaniesLocators.errorMessageLocator);
        await this.waitForLocator(FakeCompaniesLocators.cworkersTabinModalLocator);
        await this.clickOnLocator(FakeCompaniesLocators.cworkersTabinModalLocator);
        await this.waitForLocator(FakeCompaniesLocators.errorMessageLocator);
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.waitForTime(5000);
    }

    async verifyCoworkerModalStatisticsforQAAccount() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'creed.bratton@fakecompany.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="Creed Bratton"]');
        await this.clickOnLocator('//a[normalize-space(text())="Creed Bratton"]');
        await this.waitForLocator(FakeCompaniesLocators.contactTabinModalLocator);
        await this.clickOnLocator(FakeCompaniesLocators.contactTabinModalLocator);
        await this.waitForLocator(FakeCompaniesLocators.hasDataLocator);
        await this.waitForLocator(FakeCompaniesLocators.janetteContactLocator);
        await this.clickOnLocator(FakeCompaniesLocators.janetteContactLocator);
        await this.waitForLocator(FakeCompaniesLocators.janetteContactModalLocator);
        await this.waitForLocator('(//i[contains(@class,"c-modal__exit-icon fa")])[2]');
        await this.clickOnLocator('(//i[contains(@class,"c-modal__exit-icon fa")])[2]');
        await this.waitForLocator(FakeCompaniesLocators.companiesTabinModalLocator);
        await this.clickOnLocator(FakeCompaniesLocators.companiesTabinModalLocator);
        await this.waitForLocator(FakeCompaniesLocators.hasDataLocator);
        await this.waitForLocator(FakeCompaniesLocators.novastyleCompanyLocator);
        await this.clickOnLocator(FakeCompaniesLocators.novastyleCompanyLocator);
        await this.waitForLocator(FakeCompaniesLocators.jnovaCompanyModalLocator);
        await this.waitForLocator('(//i[contains(@class,"c-modal__exit-icon fa")])[2]');
        await this.clickOnLocator('(//i[contains(@class,"c-modal__exit-icon fa")])[2]');
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);

    }

    async verifyCRMCompanyOverride() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.companyNameSearchLocator);
        await this.fillingLocator(FakeCompaniesLocators.companyNameSearchLocator, 'salesw');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="salesw"]');
        await this.clickOnLocator('//a[normalize-space(text())="salesw"]');
        await this.waitForTime(2000);
        await this.waitForLocator('//span[normalize-space(text())="Connectors"]');
        await this.clickOnLocator('//span[normalize-space(text())="Connectors"]');
        await this.waitForButton(FakeCompaniesLocators.changeCRMButtonLocator);
        await this.clickOnButton(FakeCompaniesLocators.changeCRMButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.originalCRMValue);
        await this.waitForLocator('//div[normalize-space(text())="Matching CRM Companies"]');
        await this.clickOnLocator('//div[normalize-space(text())="Matching CRM Companies"]');
        await this.waitForLocator('//option[normalize-space(text())="All CRM Companies"]');
        await this.clickOnLocator('//option[normalize-space(text())="All CRM Companies"]');
        await this.waitForLocator(FakeCompaniesLocators.agileCMSelector);
        await this.clickOnLocator(FakeCompaniesLocators.agileCMSelector);
        await this.waitForButton(FakeCompaniesLocators.approveButtonLocator);
        await this.clickOnButton(FakeCompaniesLocators.approveButtonLocator);
        await this.waitForTime(2000);
        await this.waitForLocator(FakeCompaniesLocators.fakeCRMValue);
        await this.waitForButton(FakeCompaniesLocators.changeCRMButtonLocator);
        await this.clickOnButton(FakeCompaniesLocators.changeCRMButtonLocator);
        await this.waitForButton(FakeCompaniesLocators.clearButtonLocator);
        await this.clickOnButton(FakeCompaniesLocators.clearButtonLocator);
        await this.waitForTime(2000);
        await this.waitForButton(FakeCompaniesLocators.approveButtonLocator);
        await this.clickOnButton(FakeCompaniesLocators.approveButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.originalCRMValue);
        await this.waitForTime(2000);
        await this.waitForLocator('//button[@class="c-modal__exit"]//i[1]');
        await this.clickOnLocator('//button[@class="c-modal__exit"]//i[1]');
    }



    async verifyContactInNavSearch() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'integromat@sigparser.com');
        await this.waitForTime(3000);
        await this.waitForLocator('//a[@title="Integromat User"]');
        await this.clickOnLocator('//a[@title="Integromat User"]');
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.waitForLocator(FakeCompaniesLocators.searchNavLocator);
        await this.fillingLocator(FakeCompaniesLocators.searchNavLocator, 'Integromat User');
        await this.waitForTime(3000);
        await this.waitForLocator(FakeCompaniesLocators.integromatLocator);
        await this.clickOnLocator(FakeCompaniesLocators.integromatLocator);
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.searchNavLocator);
        await this.fillingLocator(FakeCompaniesLocators.searchNavLocator, 'Goldberg');
        await this.waitForTime(3000);
        await this.waitForLocator('//div[normalize-space(text())="No contact results"]');


    }

    async verifyCompanyInNavSearch() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.companyNameSearchLocator);
        await this.fillingLocator(FakeCompaniesLocators.companyNameSearchLocator, 'Generalitat de Catalunya');
        await this.waitForTime(3000);
        await this.waitForLocator('//a[normalize-space(text())="Generalitat de Catalunya"]');
        await this.clickOnLocator('//a[normalize-space(text())="Generalitat de Catalunya"]');
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.waitForLocator(FakeCompaniesLocators.searchNavLocator);
        await this.fillingLocator(FakeCompaniesLocators.searchNavLocator, 'Generalitat de Catalunya');
        await this.waitForTime(3000);
        await this.waitForLocator(FakeCompaniesLocators.genCompanyLocator);
        await this.clickOnLocator(FakeCompaniesLocators.genCompanyLocator);
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.searchNavLocator);
        await this.fillingLocator(FakeCompaniesLocators.searchNavLocator, 'Goldberg');
        await this.waitForTime(3000);
        await this.waitForLocator('//div[normalize-space(text())="No company results"]');
    }

    async verifyCoworkerInNavSearch() {
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.fullNameLocator);
        await this.fillingLocator(FakeCompaniesLocators.fullNameLocator, 'Toby Flenderson');
        await this.waitForTime(3000);
        await this.waitForLocator('//a[normalize-space(text())="Toby Flenderson"]');
        await this.clickOnLocator('//a[normalize-space(text())="Toby Flenderson"]');
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.waitForLocator(FakeCompaniesLocators.searchNavLocator);
        await this.fillingLocator(FakeCompaniesLocators.searchNavLocator, 'Toby Flenderson');
        await this.waitForTime(3000);
        await this.waitForLocator(FakeCompaniesLocators.tobyCompanyLocator);
        await this.clickOnLocator(FakeCompaniesLocators.tobyCompanyLocator);
        await this.waitForLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.clickOnLocator(FakeCompaniesLocators.exportModalCloseButton);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.searchNavLocator);
        await this.fillingLocator(FakeCompaniesLocators.searchNavLocator, 'Goldberg');
        await this.waitForTime(3000);
        await this.waitForLocator('//div[normalize-space(text())="No coworker results"]');
    }

    async addCustomColumnsToGrid() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.allValidContactsLocator);
        await this.clickOnLocator(CommonLocators.allValidContactsLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableContactFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableContactFields);
        await this.waitForTitle(CommonLocators.columnTitleLocator);
        await this.clickOnTitle(CommonLocators.columnTitleLocator);
        await this.waitForTextStrict(CommonLocators.customFieldLocator);
        await this.clickOnTextStrict(CommonLocators.customFieldLocator);
        await this.waitForLocator('//b[normalize-space(text())="Test Contact Boolean"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Contact Boolean"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Contact Text"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Contact Text"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Contact Text Area"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Contact Text Area"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Contact Date"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Contact Date"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Contact Multi Select"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Contact Multi Select"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Contact Single Select"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Contact Single Select"]');
        await this.waitForLocator('//b[normalize-space(text())="Test Contact Number"]');
        await this.clickOnLocator('//b[normalize-space(text())="Test Contact Number"]');
        await this.waitForButton(CommonLocators.saveLocator);
        await this.clickOnButton(CommonLocators.saveLocator);
        await this.waitForTime(5000);
    }

    async contactStatusFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('(//div[@title="Valid"])[1]');
        await this.clickOnLocator('(//div[@title="Valid"])[1]');
        await this.waitForLocator('//div[normalize-space(text())="Valid"]');
        await this.waitForLocator('//div[normalize-space(text())="Private"]');
        await this.waitForLocator('//div[normalize-space(text())="Coworker"]');
        await this.waitForLocator('//div[normalize-space(text())="Ignore"]');
        await this.waitForLocator('//div[normalize-space(text())="Other"]');
        await this.waitForLocator('//div[normalize-space(text())="Approved"]');
    }

    async changeStatusFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('(//div[@title="Valid"])[1]');
        await this.clickOnLocator('(//div[@title="Valid"])[1]');
        await this.waitForLocator('//div[normalize-space(text())="Private"]');
        await this.clickOnLocator('//div[normalize-space(text())="Private"]');
        await this.waitForTime(2000);
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Private"]//img[1]');
        await this.clickOnLocator('//div[@title="Private"]//img[1]');
        await this.waitForLocator('//div[normalize-space(text())="Coworker"]');
        await this.clickOnLocator('//div[normalize-space(text())="Coworker"]');
        await this.waitForTime(2000);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForLocator('//img[@alt="Active"]');
    }
    async redirectionToContactsPage() {

        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.allValidContactsLocator);
        await this.clickOnLocator(CommonLocators.allValidContactsLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableContactFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableContactFields);
    }

    async redirectionToCompaniesPage() {

        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.allValidContactsLocator);
        await this.clickOnLocator(CommonLocators.allValidContactsLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableContactFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableContactFields);
    }

    async redirectionToCoworkersPage() {

        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
        await this.waitForLocator(CommonLocators.allValidContactsLocator);
        await this.clickOnLocator(CommonLocators.allValidContactsLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableContactFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableContactFields);
    }

    async changeFullName() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="Custom Contact3"]');
        await this.hoverOverElement('//a[normalize-space(text())="Custom Contact3"]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForPlaceholder('First Name');
        await this.fillingPlaceholder('First Name', 'Customm');
        await this.waitForPlaceholder('Last Name');
        await this.fillingPlaceholder('Last Name', 'Contact33');
        await this.redirectionToContactsPage();
        await this.waitForLocator('//a[normalize-space(text())="Customm Contact33"]');

    }

    async changeFirstName() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[normalize-space(text())="Customm"]');
        await this.hoverOverElement('//div[normalize-space(text())="Customm"]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Custom');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(3000);
        await this.waitForLocator('//div[normalize-space(text())="Custom"]');
        await this.waitForLocator('//a[normalize-space(text())="Custom Contact33"]');

    }


    async changeMiddleName() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[7]/div[1]/div[1]');
        await this.clickOnLocator('//tbody/tr[1]/td[7]/div[1]/div[1]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Middle');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForLocator('//div[normalize-space(text())="Middle"]');
        await this.waitForLocator('//a[normalize-space(text())="Custom Middle Contact33"]');
    }

    async changeLastName() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[normalize-space(text())="Contact33"]');
        await this.clickOnLocator('//div[normalize-space(text())="Contact33"]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Contact');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForLocator('//div[normalize-space(text())="Contact"]');
        await this.waitForLocator('//a[normalize-space(text())="Custom Middle Contact"]');
    }

    async changeNamePrefix() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[9]/div[1]/div[1]');
        await this.clickOnLocator('//tbody/tr[1]/td[9]/div[1]/div[1]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Mr');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForLocator('//div[normalize-space(text())="Mr"]');
        await this.waitForLocator('//a[normalize-space(text())="Mr Custom Middle Contact"]');
    }

    async changeNameSuffix() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[10]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[10]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Jr');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(3000);
        await this.waitForLocator('//div[normalize-space(text())="Jr"]');
        await this.waitForLocator('//a[normalize-space(text())="Mr Custom Middle Contact Jr"]');
    }

    async changeBirthDate() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        // await this.waitForLocator('//tbody/tr[1]/td[11]/div[1]/div[1]');Date ISSue Bug
        // await this.clickOnLocator('//tbody/tr[1]/td[11]/div[1]/div[1]');
        // await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Jr');
        // await this.redirectionToContactsPage();
        // await this.waitForButton(CommonLocators.searchButtonLocator);
        // await this.clickOnButton(CommonLocators.searchButtonLocator);
        // await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        // await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        // await this.waitForLocator('//div[normalize-space(text())="Jr"]');
        // await this.waitForLocator('//a[normalize-space(text())="Mr Custom Middle Contact Jr"]');
    }

    async changeGender() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[12]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[12]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Male');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[normalize-space(text())="Male"]');
    }

    async changeCompanyName() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="test"]');
        await this.hoverOverElement('//a[normalize-space(text())="test"]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'test2');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="test2"]');
    }

    async changeJobTitle() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[18]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[18]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'QA');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="QA"]');
    }

    async changeCompanyWbsite() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="test.com"]');
        await this.hoverOverElement('//a[normalize-space(text())="test.com"]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'companywebsite.com');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="companywebsite.com"]');
    }

    async changeCompanyLinkedIn() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[@title="linkedin.com/company/xyz_2"]');
        await this.hoverOverElement('//a[@title="linkedin.com/company/xyz_2"]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'linkedin.com/company/testCompany');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[normalize-space(text())="linkedin.com/company/testCompany"]');
    }

    async changeCompanyIndustry() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[15]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[15]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Energy');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Energy"]');
    }

    async changeCompanyEmployees() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[16]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[16]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//div[normalize-space(text())="1-10"]');
        await this.waitForLocator('//div[normalize-space(text())="11-50"]');
        await this.waitForLocator('//div[normalize-space(text())="51-200"]');
        await this.waitForLocator('//div[normalize-space(text())="201-500"]');
        await this.waitForLocator('//div[normalize-space(text())="501-1000"]');
        await this.waitForLocator('//div[normalize-space(text())="1001-5000"]');
        await this.waitForLocator('//div[normalize-space(text())="5001-10000"]');
        await this.waitForLocator('//div[normalize-space(text())="10001+"]');
        await this.clickOnLocator('//div[normalize-space(text())="51-200"]');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="51-200"]');
    }

    async changeCompanyFounded() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[17]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[17]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorByRole('1990');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="1990"]');
    }

    async changeEmailAdressTypeField() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[19]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[19]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('(//div[@class="c-dropdown__label"])[1]');
        await this.clickOnLocator('(//div[@class="c-dropdown__label"])[1]');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Person"]');
    }


    async changePhoneField() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[20]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[20]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//input[@title="Mobile Phone"]');
        await this.fillingLocator('//input[@title="Mobile Phone"]', '03465366286');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('(//div[@title="03465366286"])[1]');
    }

    async changeWorkOrOfficePhoneField() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[20]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[20]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//input[@title="Work Phone"]');
        await this.fillingLocator('//input[@title="Work Phone"]', '123');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="123"]');
    }

    async changeFaxNumber() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[23]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[23]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '456');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="456"]');
    }

    async changeDirectPhoneNumber() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[26]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[26]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '789');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="789"]');
    }

    async changeHomePhoneNumber() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[27]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[27]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '901');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="901"]');
    }

    async changePersonalLinkedinFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[24]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[24]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'linkedin.com/test');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//a[@title="linkedin.com/test"]');
    }

    async changePersonalTwitterFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[25]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[25]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'twitter.com/test');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="twitter.com/test"]');
    }

    async changeTestContactTextFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[30]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[30]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Test Contact');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Test Contact"]');
    }

    async changeTestContactTextAreaFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[31]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[31]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Test Contact Area');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Test Contact Area"]');
    }

    async changeTestContactNumberFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[35]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[35]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.fillingLocatorByRole('1328');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="1328"]');
    }

    async changeTestContactDateFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        // await this.waitForLocator('//tbody/tr[1]/td[35]/div[1]/div[1]');
        // await this.hoverOverElement('//tbody/tr[1]/td[35]/div[1]/div[1]');
        // await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        // await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        // await this.fillingLocatorByRole('1328');
        // await this.redirectionToContactsPage();
        // await this.waitForButton(CommonLocators.searchButtonLocator);
        // await this.clickOnButton(CommonLocators.searchButtonLocator);
        // await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        // await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        // await this.waitForTime(2000);
        // await this.waitForLocator('//div[@title="1328"]');
    }

    async changeTestContactBooleanFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[29]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[29]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//label[normalize-space(text())="True"]');
        await this.waitForLocator('//label[normalize-space(text())="False"]');

        // await this.redirectionToContactsPage();
        // await this.waitForButton(CommonLocators.searchButtonLocator);
        // await this.clickOnButton(CommonLocators.searchButtonLocator);
        // await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        // await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        // await this.waitForTime(2000);
        // await this.waitForLocator('//div[@title="1328"]');
    }

    async changeTestContactSingleFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[34]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[34]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//div[normalize-space(text())="Single1"]');
        await this.waitForLocator('//div[normalize-space(text())="Single2"]');
        await this.waitForLocator('//div[normalize-space(text())="Single3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Single3"]');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Single3"]');
    }

    async changeTestContactMultiSelectFieldValues() {
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//tbody/tr[1]/td[33]/div[1]/div[1]');
        await this.hoverOverElement('//tbody/tr[1]/td[33]/div[1]/div[1]');
        await this.waitForLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.clickOnLocator('//i[contains(@class,"fa fa-pencil")]');
        await this.waitForLocator('//div[normalize-space(text())="Multi1"]');
        await this.waitForLocator('//div[normalize-space(text())="Multi2"]');
        await this.waitForLocator('//div[normalize-space(text())="Multi3"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi1"]');
        await this.clickOnLocator('//div[normalize-space(text())="Multi3"]');
        await this.redirectionToContactsPage();
        await this.waitForButton(CommonLocators.searchButtonLocator);
        await this.clickOnButton(CommonLocators.searchButtonLocator);
        await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
        await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
        await this.waitForTime(2000);
        await this.waitForLocator('//div[@title="Multi1, Multi3"]');
    }






}