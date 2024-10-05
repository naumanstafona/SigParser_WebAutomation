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
    await this.waitForLocator(ColumnSortingLocators.statusPencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.statusPencilLocator);
    await this.waitForLocator(ColumnSortingLocators.fullNamePencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.fullNamePencilLocator);
    await this.waitForLocator(ColumnSortingLocators.firstNameLocator);
    await this.waitForLocator(ColumnSortingLocators.lastNameLocator);
    await this.fillingLocator(ColumnSortingLocators.firstNameLocator, 'John');
    await this.fillingLocator(ColumnSortingLocators.lastNameLocator, 'Smith');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//div[@class="c-text --heading-lg u-m-0" and text()="John Smith"]');
    await this.waitForLocator(ColumnSortingLocators.statusPencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.statusPencilLocator);
    await this.waitForLocator(ColumnSortingLocators.fullNamePencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.fullNamePencilLocator);
    await this.waitForLocator(ColumnSortingLocators.firstNameLocator);
    await this.waitForLocator(ColumnSortingLocators.lastNameLocator);
    await this.fillingLocator(ColumnSortingLocators.firstNameLocator, 'Test');
    await this.fillingLocator(ColumnSortingLocators.lastNameLocator, 'User');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//div[@class="c-text --heading-lg u-m-0" and text()="Test User"]');
    await this.waitForLocator(ColumnSortingLocators.statusPencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.statusPencilLocator);
    await this.waitForLocator(ColumnSortingLocators.fullNamePencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.fullNamePencilLocator);
    await this.waitForLocator(ColumnSortingLocators.firstNameLocator);
    await this.waitForLocator(ColumnSortingLocators.lastNameLocator);
    await this.fillingLocator(ColumnSortingLocators.firstNameLocator, 'Paul');
    await this.fillingLocator(ColumnSortingLocators.lastNameLocator, 'Gibbs');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//div[@class="c-text --heading-lg u-m-0" and text()="Paul Gibbs"]');
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
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[11]//span[text()="Custom Contact1"] and  td[18]//a[text()="Updated"]]')
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[11]//span[text()="John Smith"] and  td[18]//a[text()="Updated"]]')
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[11]//span[text()="Test User"] and  td[18]//a[text()="Updated"]]')

  }

  async changingSourceScore() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.waitForLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and td[1]//a[text()="User Input"] and td[3]//span[text()="Contact"] and td[4]//span[text()="name"] and td[5][text()="90"] and td[6][text()="3,000"]]')
    await this.page.getByRole('row', { name: 'User Input N/A Contact name 90' }).locator('a').click();
    await this.waitForPlaceholder('50');
    await this.fillingPlaceholder('50', '85');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and td[1]//a[text()="User Input"] and td[3]//span[text()="Contact"] and td[4]//span[text()="name"] and td[5][text()="85"] and td[6][text()="3,000"]]')

  }

  async updatingContactFIrstName() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
    await this.waitForTime(1000);
    await this.waitForTextStrict('Paul Gibbs');
    await this.clickOnTextStrict('Paul Gibbs');
    await this.waitForTime(2000);
    await this.waitForLocator(ColumnSortingLocators.statusPencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.statusPencilLocator);
    await this.waitForLocator(ColumnSortingLocators.fullNamePencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.fullNamePencilLocator);
    await this.waitForLocator(ColumnSortingLocators.firstNameLocator);
    await this.fillingLocator(ColumnSortingLocators.firstNameLocator, 'Arnold');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//div[@class="c-text --heading-lg u-m-0" and text()="Paul Gibbs"]');
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
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[10]//span[text()="Arnold Gibbs"] and  td[18]//a[text()="Not Updated"]]');
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
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and td[1]//a[text()="User Input"] and td[3]//span[text()="Contact"] and td[4]//span[text()="name"] and td[5][text()="90"] and td[6][text()="3,000"]]')

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
    await this.waitForLocator(ColumnSortingLocators.statusPencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.statusPencilLocator);
    await this.waitForLocator('//input[@value="customcompany1"]');
    await this.fillingLocator('//input[@value="customcompany1"]', 'Peter Parker');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//div[@class="c-text --heading-lg u-m-0" and text()="Peter Parker"]');
    await this.waitForLocator(ColumnSortingLocators.statusPencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.statusPencilLocator);
    await this.waitForLocator('//input[@value="Peter Parker"]');
    await this.fillingLocator('//input[@value="Peter Parker"]', 'Harry Potter');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//div[@class="c-text --heading-lg u-m-0" and text()="Harry Potter"]');
    await this.waitForLocator(ColumnSortingLocators.statusPencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.statusPencilLocator);
    await this.waitForLocator('//input[@value="Harry Potter"]');
    await this.fillingLocator('//input[@value="Harry Potter"]', 'Pink Dales');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//div[@class="c-text --heading-lg u-m-0" and text()="Pink Dales"]');
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
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[10]//span[text()="customcompany1"] and  td[17]//a[text()="Updated"]]');
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[10]//span[text()="Peter Parker"] and  td[17]//a[text()="Updated"]]');
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[10]//span[text()="Harry Potter"] and  td[17]//a[text()="Updated"]]');

  }

  async changingSourceScoreCompanies() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.waitForLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and td[1]//a[text()="User Input"] and td[3]//span[text()="Company"] and td[4]//span[text()="name"] and td[5][text()="95"] and td[6][text()="3,000"]]')
    await this.page.getByRole('row', { name: 'User Input N/A Company name 95' }).locator('a').click();
    await this.waitForPlaceholder('50');
    await this.fillingPlaceholder('50', '85');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and td[1]//a[text()="User Input"] and td[3]//span[text()="Company"] and td[4]//span[text()="name"] and td[5][text()="85"] and td[6][text()="3,000"]]')

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
    await this.waitForLocator(ColumnSortingLocators.statusPencilLocator);
    await this.clickOnLocator(ColumnSortingLocators.statusPencilLocator);
    await this.waitForLocator('//input[@value="Pink Dales"]');
    await this.fillingLocator('//input[@value="Pink Dales"]', 'Amber Burke');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//div[@class="c-text --heading-lg u-m-0" and text()="Pink Dales"]');
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
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and  td[9]//span[text()="Amber Burke"] and  td[17]//a[text()="Not Updated"]]');
  }

  async changingSourceScoreAgainto95forCompanies() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.clickOnTextStrict(ColumnSortingLocators.adminSettingsLocator);
    await this.waitForLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.clickOnLinkButton(ColumnSortingLocators.sourceScoreLocator);
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and td[1]//a[text()="User Input"] and td[3]//span[text()="Company"] and td[4]//span[text()="name"] and td[5][text()="85"] and td[6][text()="3,000"]]')
    await this.page.getByRole('row', { name: 'User Input N/A Company name 85' }).locator('a').click();
    await this.fillingPlaceholder('50', '95');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
    await this.waitForLocator('//tr[@class="c-table-dynamic__row" and td[1]//a[text()="User Input"] and td[3]//span[text()="Company"] and td[4]//span[text()="name"] and td[5][text()="95"] and td[6][text()="3,000"]]')

  }





}
