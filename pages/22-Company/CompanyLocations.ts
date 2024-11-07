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
    await this.waitForLocator(CompanyLocationLocators.addButonLocator)
    await this.clickOnLocator(CompanyLocationLocators.addButonLocator);
    await this.waitForLocator('input[name="state"]');
    await this.fillingLocator('input[name="state"]', 'Washington');
    await this.waitForLocator('input[name="country"]');
    await this.fillingLocator('input[name="country"]', 'United States');
    await this.waitForLocator('input[name="name"]');
    await this.fillingLocator('input[name="name"]', 'Test Location');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.primaryLocationModalCloseLocator);
    await this.clickOnLocator(CompanyLocationLocators.primaryLocationModalCloseLocator);

  }

  async modifySocialInModal() {
    await this.waitForLocatorFirstElement('div:nth-child(10) > #modal > .c-modal__display > .c-modal__contents > .p-profile > .p-profile__block-right > .u-mouse-default > div:nth-child(2) > .p-profile__section-content > div > div:nth-child(3) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div:nth-child(10) > #modal > .c-modal__display > .c-modal__contents > .p-profile > .p-profile__block-right > .u-mouse-default > div:nth-child(2) > .p-profile__section-content > div > div:nth-child(3) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'linked.com/test');
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
    await this.waitForLocator('(//td[@class="c-table-static__item" and text()="Washington, District of Columbia, United States"])[2]');
    await this.waitForLocator('(//a[@title="linked.com/test"])[2]');
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
    await this.waitForTime(2000);
    await this.waitForLocator(CompanyLocationLocators.primaryLocationModalCloseLocator);
    await this.clickOnLocator(CompanyLocationLocators.primaryLocationModalCloseLocator);
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
    await this.waitForLocator('(//img[@alt="Marker"])[1]');
    await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
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
    await this.waitForLocator('//button[normalize-space(text())="Add"]');
    await this.clickOnLocator('//button[normalize-space(text())="Add"]');
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
    await this.waitForLocator("//i[contains(@class,'c-modal__exit-icon fa')]");
    await this.clickOnLocator("//i[contains(@class,'c-modal__exit-icon fa')]");
    await this.waitForLocator('//a[normalize-space(text())="New York, New York, United States"]');
    await this.clickOnLocator('//a[normalize-space(text())="New York, New York, United States"]');
    await this.waitForLocator('(//td[@class="c-table-static__item --sm"]//img)[3]');
    await this.clickOnLocator('(//td[@class="c-table-static__item --sm"]//img)[3]');
    await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    await this.waitForTime(2000);
    await this.waitForTextStrict('customcompany1');
    await this.clickOnTextStrict('customcompany1');
    await this.waitForTime(2000);
    await this.waitForLocator('(//td[@class="c-table-static__item" and text()="Washington, District of Columbia, United States"])[2]');
    await this.waitForLocator('(//td[@class="c-table-static__item" and text()="Helena, Montana, United States"])[2]');
    await this.waitForLocator('(//tr[@class="c-table-static__row" and .//td[text()="Test Location2"] and .//td[text()="New York, New York, United States"]])[2]');
    await this.waitForLocator('(//td[@class="c-table-static__item" and text()="New York, New York, United States"])[2]');
  }






}
