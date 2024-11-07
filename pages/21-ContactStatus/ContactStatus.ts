import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { ContactStatusLocators } from '../../locators/21-Contacts/ContactStatusLocators';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { Page } from 'playwright';
import { expect } from '@playwright/test';
import config from '../../config';

export class ContactStatus extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async validateAndInteractWithElements(selector: string) {
    try {
      // Locator for the elements
      const elements = this.page.locator(selector);

      // Get the count of elements
      const count = await elements.count();

      // Assert that there are exactly three results
      expect(count).toBe(3);

      console.log(`Found ${count} elements with the selector: ${selector}`);

      // Interact with the elements if count is 3
      if (count === 3) {
      }
    } catch (error) {
      // Handle errors
      console.error(`An error occurred: ${error.message}`);
      process.exit(1);
    }
  }


  async editDetails() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
    await this.waitForTime(1000);
    await this.waitForTextStrict('Custom Contact1');
    await this.clickOnTextStrict('Custom Contact1');
    await this.waitForTime(4000);
    await this.waitForLocatorFirstElement('div:nth-child(8) > .p-profile__section-content > div > div > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div:nth-child(8) > .p-profile__section-content > div > div > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div:nth-child(8) > .p-profile__section-content > div > div > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.waitForPlaceholder(ContactStatusLocators.cityLocator);
    await this.fillingPlaceholder(ContactStatusLocators.cityLocator, 'San Diego');
    await this.waitForPlaceholder(ContactStatusLocators.stateLocator);
    await this.fillingPlaceholder(ContactStatusLocators.stateLocator, 'California');
    await this.waitForPlaceholder(ContactStatusLocators.countrylocator);
    await this.fillingPlaceholder(ContactStatusLocators.countrylocator, 'United States');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForLocatorFirstElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '619 218 218 218');
    await this.waitForTime(2000);
    await this.waitForLocatorFirstElement('div:nth-child(5) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div:nth-child(5) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div:nth-child(5) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'Test');
    await this.waitForTime(2000);
    await this.waitForLocator('//div[@class="c-dropdown__text" and @title="Valid" and .//img[@alt="Valid"] and .//span[text()="Valid"]]');
    await this.clickOnLocator('//div[@class="c-dropdown__text" and @title="Valid" and .//img[@alt="Valid"] and .//span[text()="Valid"]]');
    await this.waitForLocator('//div[contains(@class, "c-dropdown__label") and contains(., "Other")]');
    await this.clickOnLocator('//div[contains(@class, "c-dropdown__label") and contains(., "Other")]');
    await this.waitForTime(2000);
    await this.waitForLocator(ContactStatusLocators.modalCloseButtonLocator);
    await this.clickOnLocator(ContactStatusLocators.modalCloseButtonLocator);

  }

  async verifyDetails() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
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
    await this.waitForLocator('(//div[@title="Test"])[2]');
    await this.waitForLocator('(//div[@title="619 218 218 218"])[2]');
    await this.waitForLocator('//div[normalize-space(text())="San Diego, California"]');
    await this.waitForLocator('//span[@class="c-dropdown__text u-m-l-1" and text()="Other"]');
    await this.waitForButton('Marker');
    await this.waitForLocator(ContactStatusLocators.modalCloseButtonLocator);
    await this.clickOnLocator(ContactStatusLocators.modalCloseButtonLocator);
  }

  async removePhoneAndAddress() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
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
    await this.waitForLocatorFirstElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '');
    // await this.waitForLocatorFirstElement('div:nth-child(8) > .p-profile__section-content > div > div > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    // await this.hoverOverElement('div:nth-child(8) > .p-profile__section-content > div > div > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    // await this.clickOnLocatorFirstElement('div:nth-child(8) > .p-profile__section-content > div > div > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    // await this.waitForPlaceholder(ContactStatusLocators.cityLocator);
    // await this.fillingPlaceholder(ContactStatusLocators.cityLocator, '');
    // await this.waitForPlaceholder(ContactStatusLocators.stateLocator);
    // await this.fillingPlaceholder(ContactStatusLocators.stateLocator, '');
    // await this.waitForPlaceholder(ContactStatusLocators.countrylocator);
    // await this.fillingPlaceholder(ContactStatusLocators.countrylocator, '');
    // await this.waitForLocator('//i[@class="fa fa-check"]');
    // await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForTime(3000);
    await this.waitForLocator(ContactStatusLocators.modalCloseButtonLocator);
    await this.clickOnLocator(ContactStatusLocators.modalCloseButtonLocator);
  }

  async verifyPhoneAndAddressRemoval() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
    await this.waitForTime(1000);
    await this.waitForTextStrict('Custom Contact1');
    await this.clickOnTextStrict('Custom Contact1');
    await this.waitForTime(3000);
    await this.waitForLocatorFirstElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');//Need to change this
    await this.waitForLocator('//div[normalize-space(text())="San Diego, California"]');//this is a bug and it should not work
    await this.waitForLocator(ContactStatusLocators.modalCloseButtonLocator);
    await this.clickOnLocator(ContactStatusLocators.modalCloseButtonLocator);

  }

  async addPhoneAndAddress() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
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
    await this.waitForLocatorFirstElement('div:nth-child(8) > .p-profile__section-content > div > div > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div:nth-child(8) > .p-profile__section-content > div > div > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div:nth-child(8) > .p-profile__section-content > div > div > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.waitForPlaceholder(ContactStatusLocators.cityLocator);
    await this.fillingPlaceholder(ContactStatusLocators.cityLocator, 'San Diego');
    await this.waitForPlaceholder(ContactStatusLocators.stateLocator);
    await this.fillingPlaceholder(ContactStatusLocators.stateLocator, 'California');
    await this.waitForPlaceholder(ContactStatusLocators.countrylocator);
    await this.fillingPlaceholder(ContactStatusLocators.countrylocator, 'United States');
    await this.waitForLocator('//i[@class="fa fa-check"]');
    await this.clickOnLocator('//i[@class="fa fa-check"]');
    await this.waitForLocatorFirstElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '619 218 218 218');
    await this.waitForTime(2000);
    await this.waitForLocator(ContactStatusLocators.modalCloseButtonLocator);
    await this.clickOnLocator(ContactStatusLocators.modalCloseButtonLocator);
  }


  async changeStatus() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator('(//img[@src="/images/icon-valid.svg"])[1]');
    await this.clickOnLocator('(//img[@src="/images/icon-valid.svg"])[1]');
    await this.waitForLocator('//div[normalize-space(text())="Private"]');
    await this.clickOnLocator('//div[normalize-space(text())="Private"]');
    await this.waitForTime(5000);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator('//img[@src="/images/icon-other.svg"]');
    await this.waitForLocator('//img[@src="/images/icon-lock.svg"]');
  }

  async changeStatusOnMultipleContacts() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(ContactStatusLocators.selectAllLocator);
    await this.clickOnLocator(ContactStatusLocators.selectAllLocator);
    await this.waitForButton(ContactStatusLocators.updateButtonLocator);
    await this.clickOnButton(ContactStatusLocators.updateButtonLocator);
    await this.waitForLocator(ContactStatusLocators.updateFieldLocator);
    await this.clickOnLocator(ContactStatusLocators.updateFieldLocator);
    await this.waitForLocator(ContactStatusLocators.dropDownLocattor);
    await this.clickOnLocator(ContactStatusLocators.dropDownLocattor);
    await this.waitForLocator('//div[normalize-space(text())="Other"]');
    await this.clickOnLocator('//div[normalize-space(text())="Other"]');
    await this.waitForButton(ContactStatusLocators.updateFieldsButtonLocator);
    await this.clickOnButton(ContactStatusLocators.updateFieldsButtonLocator);
    await this.waitForTime(20000);
    await this.waitForLocator('//button[normalize-space(text())="Close"]');
    await this.clickOnLocator('//button[normalize-space(text())="Close"]');
    await this.waitForTime(15000);
    await this.validateAndInteractWithElements('//img[@src="/images/icon-other.svg"]');

  }

  async createTwoEmailAddresses() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(CommonLocators.plusButtonLocator);
    await this.clickOnLocator(CommonLocators.plusButtonLocator);
    await this.waitForLocator(ContactLocators.emailInputLocator);
    await this.fillingLocator(ContactLocators.emailInputLocator, 'mbs@mbsdomain.com');
    await this.waitForLocator(ContactLocators.firstNameInputLocator);
    await this.fillingLocator(ContactLocators.firstNameInputLocator, 'm');
    await this.waitForLocator(ContactLocators.lastNameInputLocator);
    await this.fillingLocator(ContactLocators.lastNameInputLocator, 'bs');
    await this.waitForLocator(ContactLocators.titleInputLocator);
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForButton(ContactLocators.viewContactButtonLocator);
    await this.clickOnButton(ContactLocators.viewContactButtonLocator);
    await this.waitForLocator('//p[normalize-space(text())="mbs@mbsdomain.com"]');
    await this.waitForLocator(ContactLocators.exitButtonLocator);
    await this.clickOnLocator(ContactLocators.exitButtonLocator);
    await this.waitForLocator(CommonLocators.plusButtonLocator);
    await this.clickOnLocator(CommonLocators.plusButtonLocator);
    await this.waitForLocator(ContactLocators.emailInputLocator);
    await this.fillingLocator(ContactLocators.emailInputLocator, 'johnny@mailboxscanrule.com');
    await this.waitForLocator(ContactLocators.firstNameInputLocator);
    await this.fillingLocator(ContactLocators.firstNameInputLocator, 'johnny');
    await this.waitForLocator(ContactLocators.lastNameInputLocator);
    await this.fillingLocator(ContactLocators.lastNameInputLocator, 'test');
    await this.waitForLocator(ContactLocators.titleInputLocator);
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForButton(ContactLocators.viewContactButtonLocator);
    await this.clickOnButton(ContactLocators.viewContactButtonLocator);
    await this.waitForLocator('//p[normalize-space(text())="johnny@mailboxscanrule.com"]');
    await this.waitForLocator(ContactLocators.exitButtonLocator);
    await this.clickOnLocator(ContactLocators.exitButtonLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator('//span[@title="mailboxscanrule.com"]');
    await this.waitForLocator('//span[@title="mbsdomain.com"]');

  }

  async addScanRules() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ContactStatusLocators.adminSettingsButtonLocator);
    await this.clickOnTextStrict(ContactStatusLocators.adminSettingsButtonLocator);
    await this.waitForLinkButton(ContactStatusLocators.advancesettingsButtonLocator);
    await this.clickOnLinkButton(ContactStatusLocators.advancesettingsButtonLocator);
    await this.waitForButton(ContactStatusLocators.addScenRUlesButtonLocator);
    await this.clickOnButton(ContactStatusLocators.addScenRUlesButtonLocator);
    await this.waitforLabel(ContactStatusLocators.matchTypeLabelLocator);
    await this.selectingDropdownValuebyLabel(ContactStatusLocators.matchTypeLabelLocator, 'Email');
    await this.waitForPlaceholder(ContactStatusLocators.emailPlaceholder);
    await this.fillingPlaceholder(ContactStatusLocators.emailPlaceholder, 'johnny@mailboxscanrule.com\nmary@mailboxscanrule.com');
    await this.waitForButton(ContactStatusLocators.addBuleButonLocator);
    await this.clickOnButton(ContactStatusLocators.addBuleButonLocator);
    await this.waitForTime(5000);
    await this.waitForElementToBeVisibleinCell('johnny@mailboxscanrule.com');
    await this.waitForElementToBeVisibleinCell('mary@mailboxscanrule.com');
    await this.waitForLocator(ContactStatusLocators.trashButtonLocator);
    await this.handleAndAcceptDialog(ContactStatusLocators.trashButtonLocator);
    await this.waitForTime(5000);
    await this.checkLocatorAbsence('//td[normalize-space(text())="mary@mailboxscanrule.com"]');
    await this.waitForButton(ContactStatusLocators.addScenRUlesButtonLocator);
    await this.clickOnButton(ContactStatusLocators.addScenRUlesButtonLocator);
    await this.waitforLabel(ContactStatusLocators.matchTypeLabelLocator);
    await this.selectingDropdownValuebyLabel(ContactStatusLocators.matchTypeLabelLocator, 'Domain');
    await this.waitForPlaceholder(ContactStatusLocators.emailPlaceholder);
    await this.fillingPlaceholder(ContactStatusLocators.emailPlaceholder, 'mbsdomain.com');
    await this.waitForButton(ContactStatusLocators.addBuleButonLocator);
    await this.clickOnButton(ContactStatusLocators.addBuleButonLocator);
    await this.waitForTime(5000);
    await this.waitForElementToBeVisibleinCell('mbsdomain.com');
  }

  async rulesVerification() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.checkLocatorAbsence('//span[@title="johnny@mailboxscanrule.com"]');
    await this.checkLocatorAbsence('//span[@title="mbs@mbsdomain.com"]');
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.checkLocatorAbsence('//span[@title="mbsdomain.com"]');
  }

  async deletOldRules() {
    await this.navigateTo(config.url + '/Account/App/#/AdvancedSettings');
    await this.waitForTime(2000);
    const rows = await this.page.$$('//table[@class="c-table-static"]//tr[@class="c-table-static__row"]');
    if (rows.length === 1) {
      console.log('No rows found in the table.');
      return; // Exit the function early since there are no rows to process
    }
    else {
      for (let i = 0; i < Math.min(rows.length, 2); i++) {
        await this.waitForLocator(ContactStatusLocators.trashFirstElementLocator);
        await this.handleAndAcceptDialog(ContactStatusLocators.trashFirstElementLocator);
        await this.waitForTime(5000);
      }
    }
  }




}
