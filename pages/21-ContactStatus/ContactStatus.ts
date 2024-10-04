import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { ContactStatusLocators } from '../../locators/21-Contacts/ContactStatusLocators';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { Page } from 'playwright';
import { expect } from '@playwright/test';

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
    await this.waitForTime(2000);
    await this.waitForLocator(ContactStatusLocators.statusPencilLocator);
    await this.clickOnLocator(ContactStatusLocators.statusPencilLocator);
    await this.waitForLocator('select[name="status"]');
    await this.selectingDropdownValue('select[name="status"]', 'Other');
    await this.waitForLocator(ContactStatusLocators.expandAddressLocator);
    await this.clickOnLocator(ContactStatusLocators.expandAddressLocator);
    await this.waitForLocator('input[name="full_address"]');
    await this.fillingLocator('input[name="full_address"]', 'San Diego, CA');
    await this.waitForLocator(ContactStatusLocators.expandPhoneLocator);
    await this.clickOnLocator(ContactStatusLocators.expandPhoneLocator);
    await this.waitForLocator('input[name="mobile_phone"]');
    await this.fillingLocator('input[name="mobile_phone"]', '619 218 218 218');
    await this.waitForLocator(ContactStatusLocators.expandCOmpanyLocator);
    await this.clickOnLocator(ContactStatusLocators.expandCOmpanyLocator);
    await this.waitForLocator('input[name="title"]');
    await this.fillingLocator('input[name="title"]', 'Test');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
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
    await this.waitForLocator('//div[@class="p-profile__field-group"][div[1][text()="Job Title"] and div[2][text()="Test"]]');
    await this.waitForLocator('//div[@class="p-profile__field-group u-w-third"][div[1][text()="Status"] and div[2][text()="Other"]]');
    await this.waitForLocator('//div[@class="p-profile__field-group"][div[1][text()="Phone - Mobile"] and div[2][text()="619 218 218 218"]]');
    await this.waitForLocator('//div[@class="p-profile__field-group"][div[1][text()="Location"] and div[2][text()="San Diego, California, United States"]]');
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
    await this.waitForLocator(ContactStatusLocators.statusPencilLocator);
    await this.clickOnLocator(ContactStatusLocators.statusPencilLocator);
    await this.waitForLocator(ContactStatusLocators.expandPhoneLocator);
    await this.clickOnLocator(ContactStatusLocators.expandPhoneLocator);
    await this.waitForLocator('input[name="mobile_phone"]');
    await this.fillingLocator('input[name="mobile_phone"]', '');
    await this.waitForLocator(ContactStatusLocators.expandAddressLocator);
    await this.clickOnLocator(ContactStatusLocators.expandAddressLocator);
    await this.waitForLocator('input[name="full_address"]');
    await this.fillingLocator('input[name="full_address"]', '');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
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
    await this.waitForTime(2000);
    await this.waitForLocator(ContactStatusLocators.statusPencilLocator);
    await this.clickOnLocator(ContactStatusLocators.statusPencilLocator);
    await this.waitForLocator(ContactStatusLocators.expandPhoneLocator);
    await this.clickOnLocator(ContactStatusLocators.expandPhoneLocator);
    await this.waitForLocator('//input[@name="mobile_phone" and @value=""]');
    await this.waitForLocator(ContactStatusLocators.expandAddressLocator);
    await this.clickOnLocator(ContactStatusLocators.expandAddressLocator);
    //await this.waitForLocator('//input[@name="full_address" and @value=""]');
    await this.waitForLocator(ContactStatusLocators.editFormCloseLocator);
    await this.clickOnLocator(ContactStatusLocators.editFormCloseLocator);
    await this.waitForTime(3000);
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
    await this.waitForLocator(ContactStatusLocators.statusPencilLocator);
    await this.clickOnLocator(ContactStatusLocators.statusPencilLocator);
    await this.waitForLocator(ContactStatusLocators.expandPhoneLocator);
    await this.clickOnLocator(ContactStatusLocators.expandPhoneLocator);
    await this.waitForLocator('input[name="mobile_phone"]');
    await this.fillingLocator('input[name="mobile_phone"]', '619 218 218 218');
    await this.waitForLocator(ContactStatusLocators.expandAddressLocator);
    await this.clickOnLocator(ContactStatusLocators.expandAddressLocator);
    await this.waitForLocator('input[name="full_address"]');
    await this.fillingLocator('input[name="full_address"]', 'San Diego, CA');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(3000);
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
    await this.waitForTime(5000);
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




}
