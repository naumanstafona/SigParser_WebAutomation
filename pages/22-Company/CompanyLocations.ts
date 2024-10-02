import { BrowserContext, Page } from 'playwright';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { CompanyLocationLocators } from '../../locators/22-Companies/ComapanyLocationLocators';
import { CompaniesLocators } from '../../locators/30-CSV-Imports/CompaniesLocators';

export class CompanyLocations extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async modifyCompanyLocationsInTheModal() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForTime(2000);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
    await this.waitForTime(1000);
    await this.waitForTextStrict('customcompany1');
    await this.clickOnTextStrict('customcompany1');
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.detailsButtonLocator);
    await this.clickOnLocator(CompanyLocationLocators.detailsButtonLocator);
    await this.waitForLocator(CompanyLocationLocators.locationsPecilButtonLocator);
    await this.clickOnLocator(CompanyLocationLocators.locationsPecilButtonLocator);
    await this.waitForButton(CompanyLocationLocators.addButonLocator)
    await this.clickOnButton(CompanyLocationLocators.addButonLocator);
    await this.waitForLocator('input[name="state"]');
    await this.fillingLocator('input[name="state"]', 'Washington');
    await this.waitForLocator('input[name="country"]');
    await this.fillingLocator('input[name="country"]', 'United States');
    await this.waitForLocator('input[name="name"]');
    await this.fillingLocator('input[name="name"]', 'Test Location');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.closeAddLocationFormLocator);
    await this.clickOnLocator(CompanyLocationLocators.closeAddLocationFormLocator);

  }

  async modifyPhoneNumberInModal() {
    await this.waitForLocator(CompanyLocationLocators.socialPencilButtonLocator);
    await this.clickOnLocator(CompanyLocationLocators.socialPencilButtonLocator);
    await this.page.locator('label').filter({ hasText: 'Company LinkedIn' }).click();
    await this.waitForLocator('input[name="linkedin_profile"]');
    await this.fillingLocator('input[name="linkedin_profile"]', 'linked.com/test');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.modalExitLocator);
    await this.clickOnLocator(CompanyLocationLocators.modalExitLocator);
  }

  async verifyTheChanges() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForTime(2000);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
    await this.waitForTime(1000);
    await this.waitForTextStrict('customcompany1');
    await this.clickOnTextStrict('customcompany1');
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.detailsButtonLocator);
    await this.clickOnLocator(CompanyLocationLocators.detailsButtonLocator);
    await this.waitForLocator('//tr[contains(.,"Test LocationWashington, District of Columbia, United States")]');
    await this.waitForLocator('//div[@class="p-profile__field-group u-w-third" and div[text()="Company LinkedIn"]]//a[@href="https://linked.com/test" and @target="_blank"]');
    await this.waitForLocator(CompanyLocationLocators.modalExitLocator);
    await this.clickOnLocator(CompanyLocationLocators.modalExitLocator);

  }

  async modifyLocationinModal() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForTime(2000);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
    await this.waitForTime(1000);
    await this.waitForTextStrict('customcompany1');
    await this.clickOnTextStrict('customcompany1');
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.detailsButtonLocator);
    await this.clickOnLocator(CompanyLocationLocators.detailsButtonLocator);
    await this.waitForLocator('//tr[contains(.,"Test LocationWashington, District of Columbia, United States")]');
    await this.waitForLocator(CompanyLocationLocators.locationPlusButtonLocator);
    await this.clickOnLocator(CompanyLocationLocators.locationPlusButtonLocator);
    await this.waitForLocator('input[name="state"]');
    await this.fillingLocator('input[name="state"]', 'New York');
    await this.waitForLocator('input[name="country"]');
    await this.fillingLocator('input[name="country"]', 'United States');
    await this.waitForLocator('input[name="name"]');
    await this.fillingLocator('input[name="name"]', 'Test Location2');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.selectPrimaryLocator);
    await this.clickOnLocator(CompanyLocationLocators.selectPrimaryLocator);
    await this.waitForTime(3000);
    await this.waitForLocator(CompanyLocationLocators.closeAddLocationFormLocator);
    await this.clickOnLocator(CompanyLocationLocators.closeAddLocationFormLocator);
    await this.waitForLocator(CompanyLocationLocators.modalExitLocator);
    await this.clickOnLocator(CompanyLocationLocators.modalExitLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
    await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
    await this.waitForLocator(CompanyLocationLocators.locationColumnsLocator);
    await this.clickOnLocator(CompanyLocationLocators.locationColumnsLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.mapButtonLocator);
    await this.clickOnLocator(CompanyLocationLocators.mapButtonLocator);
    await this.waitForButton('Marker');
    await this.waitForLocator(CompanyLocationLocators.modalExitLocator);
    await this.clickOnLocator(CompanyLocationLocators.modalExitLocator);
  }

  async modifyLocationinGrid() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForTime(2000);
    await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
    await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
    await this.waitForLocator(CompanyLocationLocators.locationColumnsLocator);
    await this.clickOnLocator(CompanyLocationLocators.locationColumnsLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1');
    await this.waitForTime(2000);
    await this.waitForLocator('//a[normalize-space(text())="New York, New York, United States"]');
    await this.clickOnLocator('//a[normalize-space(text())="New York, New York, United States"]');
    await this.waitForButton(CompanyLocationLocators.addButonLocator)
    await this.clickOnButton(CompanyLocationLocators.addButonLocator);
    await this.waitForLocator('input[name="state"]');
    await this.fillingLocator('input[name="state"]', 'Montana');
    await this.waitForLocator('input[name="country"]');
    await this.fillingLocator('input[name="country"]', 'United States');
    await this.waitForLocator('input[name="name"]');
    await this.fillingLocator('input[name="name"]', 'Test Location3');
    await this.waitForLocator('input[name="city"]');
    await this.fillingLocator('input[name="city"]', 'Helena');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(2000);
    await this.waitForLocator('//a[normalize-space(text())="New York, New York, United States"]');
    await this.clickOnLocator('//a[normalize-space(text())="New York, New York, United States"]');
    await this.waitForLocator('(//td[@class="c-table-static__item --sm"]//img)[3]');
    await this.clickOnLocator('(//td[@class="c-table-static__item --sm"]//img)[3]');
    await this.waitForLocator(CompanyLocationLocators.modalExitLocator);
    await this.clickOnLocator(CompanyLocationLocators.modalExitLocator);
    await this.waitForTime(2000);
    await this.waitForTextStrict('customcompany1');
    await this.clickOnTextStrict('customcompany1');
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.detailsButtonLocator);
    await this.clickOnLocator(CompanyLocationLocators.detailsButtonLocator);
    await this.waitForLocator('//tr[contains(.,"Test LocationWashington, District of Columbia, United States")]');
    await this.waitForLocator('//tr[contains(.,"Test Location2New York, New York, United States")]');
    await this.waitForLocator('//tr[@class="c-table-static__row" and td[contains(text(),"Test Location3")]]/td[contains(text(),"Helena, Montana, United States")]');
    await this.waitForLocator('//div[normalize-space(text())="Helena, Montana, United States"]');



  }






}
