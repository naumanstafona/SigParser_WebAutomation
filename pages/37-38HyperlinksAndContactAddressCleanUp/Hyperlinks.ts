import { BrowserContext, Page } from 'playwright';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { HyperlinksLocators } from '../../locators/37-38HyperlinksAndContactAddressCleanUp/HyperlinksLocators';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';

export class Hyperlinks extends CommonSteps {
  private context: BrowserContext; // Add a property for context

  constructor(page: Page, context: BrowserContext) {
    super(page);
    this.context = context; // Store the passed context
  }

  async closeCurrentTabAndSwitchToPrevious(): Promise<void> {
    try {
      const pages = this.context.pages(); // Use the passed context to get pages

      if (pages.length > 1) {
        const currentPage: Page = pages[pages.length - 1]; // Last opened page (current tab)
        const previousPage: Page = pages[pages.length - 2]; // Second last page (previous tab)

        // Close the current page
        await currentPage.close();

        // Bring the previous page to the front
        await previousPage.bringToFront();
      } else {
        console.log('No previous tab to switch to.');
      }
    } catch (error) {
      console.error('Error occurred while closing the current tab or switching to the previous tab:', error);
    }
  }

  async addLinksToContacts() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
    await this.waitForTime(2000);
    await this.waitForLocator('(//a[@class="c-link --sm"])[1]');
    await this.clickOnLocator('(//a[@class="c-link --sm"])[1]');
    await this.waitForTime(2000);
    await this.waitForLocatorFirstElement('div:nth-child(6) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div:nth-child(6) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'linkedin.com/test');
    await this.waitForTime(2000);
    await this.waitForLocator('//a[@title="linkedin.com/test"]');
    await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(CommonLocators.allValidContactsLocator);
    await this.clickOnLocator(CommonLocators.allValidContactsLocator);
    await this.waitForLocator('//span[normalize-space(text())="Hyperlink"]');
    await this.clickOnLocator('//span[normalize-space(text())="Hyperlink"]');
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
    await this.waitForTime(2000);
    await this.waitForLocator('(//a[@title="linkedin.com/test"])[1]');
    await this.clickOnLocator('(//a[@title="linkedin.com/test"])[1]');
    await this.closeCurrentTabAndSwitchToPrevious();
    await this.waitForTime(3000);
  }

  async addLinksToCompanies() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
    await this.waitForTime(2000);
    await this.waitForLocator('//a[normalize-space(text())="test"]');
    await this.clickOnLocator('//a[normalize-space(text())="test"]');
    await this.waitForTime(2000);
    await this.waitForLocator('//a[@title="linkedin.com/company/xyz_2"]');
    await this.hoverOverElement('//a[@title="linkedin.com/company/xyz_2"]');
    await this.clickOnLocator('.c-dropdown__value > div:nth-child(2) > .fa');
    await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'linkedin.com/test');
    await this.waitForTime(2000);
    await this.waitForLocator('//a[@title="test.com"]');
    await this.hoverOverElement('//a[@title="test.com"]');
    await this.clickOnLocator('.c-dropdown__value > div:nth-child(2) > .fa');
    await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', 'linkedin.com/test');
    await this.waitForTime(2000);
    await this.waitForLocator('(//a[@title="linkedin.com/test"])[1]');
    await this.waitForLocator('(//a[@title="linkedin.com/test"])[2]');
    await this.waitForLocator('//button[@class="c-modal__exit"]//i[1]');
    await this.clickOnLocator('//button[@class="c-modal__exit"]//i[1]');
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(CommonLocators.allValidContactsLocator);
    await this.clickOnLocator(CommonLocators.allValidContactsLocator);
    await this.waitForLocator('//span[normalize-space(text())="Hyperlink"]');
    await this.clickOnLocator('//span[normalize-space(text())="Hyperlink"]');
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact1@test.com');
    await this.waitForTime(2000);
    await this.waitForLocator('(//a[@title="linkedin.com/test"])[1]');
    await this.clickOnLocator('(//a[@title="linkedin.com/test"])[1]');
    await this.closeCurrentTabAndSwitchToPrevious();
    await this.waitForLocator('(//a[@title="linkedin.com/test"])[2]');
    await this.clickOnLocator('(//a[@title="linkedin.com/test"])[2]');
    await this.closeCurrentTabAndSwitchToPrevious();
    await this.waitForLocator('(//a[@title="linkedin.com/test"])[3]');
    await this.clickOnLocator('(//a[@title="linkedin.com/test"])[3]');
    await this.closeCurrentTabAndSwitchToPrevious();
    await this.waitForTime(3000);

  }

  async locationFromPhoneNumber() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ContactLocators.emailAddressLocator);
    await this.fillingEmailDomainPlaceholder(ContactLocators.emailAddressLocator, 'customcontact3@test.com');
    await this.waitForTime(2000);
    await this.waitForLocator('(//a[@class="c-link --sm"])[1]');
    await this.clickOnLocator('(//a[@class="c-link --sm"])[1]');
    await this.waitForTime(3000);
    await this.waitForLocatorFirstElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.hoverOverElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.clickOnLocatorFirstElement('div:nth-child(2) > div:nth-child(2) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value');
    await this.fillingLocatorbyGettingRoleTextboxandPressingEnter('#dropdown', '+1 425-555-1212');
    await this.waitForTime(2000);
    await this.waitForTime(3000);
    await this.waitForLocator(HyperlinksLocators.modalExitLocator);
    await this.clickOnLocator(HyperlinksLocators.modalExitLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(CommonLocators.allValidContactsLocator);
    await this.clickOnLocator(CommonLocators.allValidContactsLocator);
    await this.waitForLocator('//span[normalize-space(text())="Contact Address Cleanup"]');
    await this.clickOnLocator('//span[normalize-space(text())="Contact Address Cleanup"]');
    await this.waitForLocator('//span[@title="Bellevue"]');
    await this.waitForLocator('//span[@title="Washington"]');
    await this.waitForLocator('//span[@title="United States"]');

  }


}

// await page.locator('div:nth-child(6) > .u-pos-rel > div > .c-dropdown__editable-value > .c-dropdown__value').first().click();
// await page.locator('#dropdown').getByRole('textbox').click({
//   modifiers: ['ControlOrMeta']
// });
// await page.locator('#dropdown').getByRole('textbox').fill('linkedin.com/test');
// await page.getByRole('button', { name: '' }).click();
// await page.getByRole('button', { name: '' }).click();
// await page.getByText('Custom Contact1').click();
// await expect(page.locator('div').filter({ hasText: /^linkedin\.com\/test$/ }).nth(4)).toBeVisible();
