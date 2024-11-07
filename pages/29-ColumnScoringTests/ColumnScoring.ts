import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { CompaniesLocators } from '../../locators/30-CSV-Imports/CompaniesLocators';
import { ColumnSortingLocators } from '../../locators/29-ColumnScoringTests/ColumnScoringLocators';


export class ColumnSorting extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async updateTheContactDetails() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
    await this.waitForTime(1000);
    await this.waitForTextStrict('Custom Contact1');
    await this.clickOnTextStrict('Custom Contact1');
    await this.waitForTime(2000);
    await this.waitForLocatorFirstElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingPlaceholder('First Name', 'John');
    await this.fillingPlaceholder('Last Name', 'Smith');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForTime(2000);
    await this.waitForLocator('//div[@title="John Smith"]');
    await this.waitForLocatorFirstElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingPlaceholder('First Name', 'Test');
    await this.fillingPlaceholder('Last Name', 'User');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForTime(2000);
    await this.waitForLocator('//div[@title="Test User"]');
    await this.waitForLocatorFirstElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingPlaceholder('First Name', 'Pink');
    await this.fillingPlaceholder('Last Name', 'Dales');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForTime(2000);
    await this.waitForLocator('//div[@title="Pink Dales"]');
    await this.waitForLocator(ColumnSortingLocators.modalExitLocator);
    await this.clickOnLocator(ColumnSortingLocators.modalExitLocator);
  }

  async viewUpdateTracking() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.updatesButtonLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.updatesButtonLocator);
    await this.waitForLinkButton(ColumnSortingLocators.contactUpdateTrackingButtonLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.contactUpdateTrackingButtonLocator);
    await this.waitForLocator('(//tr[td[11][span[text()="Custom Contact1"]] and td[10][span[text()="John Smith"]] and td[18][a[text()="Updated"]]])[1]');
    await this.waitForLocator('(//tr[td[11][span[text()="John Smith"]] and td[10][span[text()="Test User"]] and td[18][a[text()="Updated"]]])[1]');
    await this.waitForLocator('(//tr[td[11][span[text()="Test User"]] and td[10][span[text()="Pink Dales"]] and td[18][a[text()="Updated"]]])[1]');

  }

  async changingSourceScore() {
    const rowLocator = '//tr[td/span[text()="Contact"] and td[text()="90"] and td[text()="3,000"]]';
    const row2Locator = '//tr[td/span[text()="Contact"] and td[text()="85"] and td[text()="3,000"]]';
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.waitForLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.waitForTime(10000);
    if (await this.page.locator(rowLocator).isVisible()) {
      console.log(rowLocator + 'is visible');
      await this.page.getByRole('row', { name: 'User Input N/A Contact name 90' }).locator('a').click();
      await this.waitForPlaceholder('50');
      await this.fillingPlaceholder('50', '85');
      await this.waitForButton(CommonLocators.saveLocator);
      await this.clickOnButton(CommonLocators.saveLocator);
      await this.waitForTime(3000);
      await this.waitForLocator(row2Locator);
    }
    else if (await this.page.locator(row2Locator).isVisible()) {
      console.log(row2Locator + 'is visible');
      return;
    }
    else {
      throw new Error(`Row with details "User Input N/A Company name 90 or 85" is not visible on the page.`);
    }
    // await this.waitForLocator('//tr[td/span[text()="Contact"] and td[text()="90"] and td[text()="3,000"]]')
    // await this.page.getByRole('row', { name: 'User Input N/A Contact name 90' }).locator('a').click();
    // await this.waitForPlaceholder('50');
    // await this.fillingPlaceholder('50', '85');
    // await this.waitForButton(CommonLocators.saveLocator);
    // await this.clickOnButton(CommonLocators.saveLocator);
    // await this.waitForTime(3000);
    // await this.waitForLocator('//tr[td[1]/a[text()="User Input"] and td[2]/span[text()="N/A"] and td[3]/span[text()="Contact"] and td[4]/span[text()="name"] and td[5][text()="85"] and td[6][text()="3,000"]]')

  }

  async updatingContactFIrstName() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
    await this.waitForTime(1000);
    await this.waitForTextStrict('Pink Dales');
    await this.clickOnTextStrict('Pink Dales');
    await this.waitForTime(2000);
    await this.waitForLocatorFirstElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingPlaceholder('First Name', 'Peter');
    await this.fillingPlaceholder('Last Name', 'Parker');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForTime(4000);
    await this.waitForLocator('//div[@title="Pink Dales"]');
    await this.waitForLocator(ColumnSortingLocators.modalExitLocator);
    await this.clickOnLocator(ColumnSortingLocators.modalExitLocator);

  }

  async viewContactUpdateTracking() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.updatesButtonLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.updatesButtonLocator);
    await this.waitForLinkButton(ColumnSortingLocators.contactUpdateTrackingButtonLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.contactUpdateTrackingButtonLocator);
    // await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[10]//span[text()="Peter Parker"] and  td[18]//a[text()="Not Updated"]]');
  }

  async changingSourceScoreAgainto90() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.waitForLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.page.getByRole('row', { name: 'User Input N/A Contact name 85' }).locator('a').click();
    await this.waitForPlaceholder('50');
    await this.fillingPlaceholder('50', '90');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//tr[td/span[text()="Contact"] and td[text()="90"] and td[text()="3,000"]]')
  }

  async updateTheCompnaniesDetail() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1.com');
    await this.waitForTime(2000);
    await this.waitForTextStrict('customcompany1');
    await this.clickOnTextStrict('customcompany1');
    await this.waitForLocator('//div[@title="customcompany1"]');
    await this.hoverOverElement('//div[@title="customcompany1"]');
    await this.clickOnLocator('//div[@title="customcompany1"]');
    await this.fillingLocator('//input[contains(@class,"c-input__input --medium")]', 'John Smith');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForTime(2000);
    await this.waitForLocator('//div[@title="John Smith"]');
    await this.hoverOverElement('//div[@title="John Smith"]');
    await this.clickOnLocator('//div[@title="John Smith"]');
    await this.fillingLocator('//input[contains(@class,"c-input__input --medium")]', 'Test User');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForTime(2000);
    await this.waitForLocator('//div[@title="Test User"]');
    await this.hoverOverElement('//div[@title="Test User"]');
    await this.clickOnLocator('//div[@title="Test User"]');
    await this.fillingLocator('//input[contains(@class,"c-input__input --medium")]', 'Pink Dales');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForTime(2000);
    await this.waitForLocator('//div[@title="Pink Dales"]');
    await this.waitForLocator(ColumnSortingLocators.modalExitLocator);
    await this.clickOnLocator(ColumnSortingLocators.modalExitLocator);
  }

  async viewCompanyUpdateTracking() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.updatesButtonLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.updatesButtonLocator);
    await this.waitForLinkButton(ColumnSortingLocators.CompanyUpdateTrackingButtonLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.CompanyUpdateTrackingButtonLocator);
    await this.waitForLocator('(//tr[contains(@class, "c-table-dynamic__row") and      .//a[contains(text(), "Updated")] and      .//span[contains(text(), "Test User")] and      .//span[contains(text(), "John Smith")] ])[1]');
    await this.waitForLocator('(//tr[contains(@class, "c-table-dynamic__row") and      .//a[contains(text(), "Updated")] and      .//span[contains(text(), "John Smith")] and      .//span[contains(text(), "customcompany1")] ])[1]');
    await this.waitForLocator('(//tr[contains(@class, "c-table-dynamic__row") and      .//a[contains(text(), "Updated")] and      .//span[contains(text(), "Pink Dales")] and      .//span[contains(text(), "Test User")] ])[1]');

  }

  async changingSourceScoreCompanies() {
    const rowLocator = '//tr[td/span[text()="Company"] and td[text()="95"] and td[text()="3,000"]]';
    const row2Locator = '//tr[td/span[text()="Company"] and td[text()="85"] and td[text()="3,000"]]';
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.waitForLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.waitForTime(10000);
    if (await this.page.locator(rowLocator).isVisible()) {
      console.log(rowLocator + 'is visible');
      await this.page.getByRole('row', { name: 'User Input N/A Company name 95' }).locator('a').click();
      await this.waitForPlaceholder('50');
      await this.fillingPlaceholder('50', '85');
      await this.waitForButton(CommonLocators.saveLocator);
      await this.clickOnButton(CommonLocators.saveLocator);
      await this.waitForTime(3000);
      await this.waitForLocator(row2Locator);
    }
    else if (await this.page.locator(row2Locator).isVisible()) {
      console.log(row2Locator + 'is visible');
      return;
    }
    else {
      throw new Error(`Row with details "User Input N/A Company name 95 or 85" is not visible on the page.`);
    }
  }

  async updatingCompanesdetails() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator);
    await this.fillingEmailDomainPlaceholder(CompaniesLocators.companyEmailPlaceholderLocator, 'customcompany1.com');
    await this.waitForTime(2000);
    await this.waitForTextStrict('Pink Dales');
    await this.clickOnTextStrict('Pink Dales');
    await this.waitForLocator('//div[@title="Pink Dales"]');
    await this.hoverOverElement('//div[@title="Pink Dales"]');
    await this.clickOnLocator('//div[@title="Pink Dales"]');
    await this.fillingLocator('//input[contains(@class,"c-input__input --medium")]', 'Amber burke');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForTime(2000);
    await this.waitForLocator('//div[@title="Pink Dales"]');
    await this.waitForLocator(ColumnSortingLocators.modalExitLocator);
    await this.clickOnLocator(ColumnSortingLocators.modalExitLocator);
  }

  async viewCompaniesUpdateTrackingAgain() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.updatesButtonLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.updatesButtonLocator);
    await this.waitForLinkButton(ColumnSortingLocators.CompanyUpdateTrackingButtonLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.CompanyUpdateTrackingButtonLocator);
    // await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[9]//span[text()="Amber Burke"] and  td[17]//a[text()="Not Updated"]]');
  }

  async changingSourceScoreAgainto95forCompanies() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.waitForLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.waitForLocator('//tr[td/span[text()="Company"] and td[text()="85"] and td[text()="3,000"]]')
    await this.page.getByRole('row', { name: 'User Input N/A Company name 85' }).locator('a').click();
    await this.fillingPlaceholder('50', '95');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//tr[td/span[text()="Company"] and td[text()="95"] and td[text()="3,000"]]')

  }





}
