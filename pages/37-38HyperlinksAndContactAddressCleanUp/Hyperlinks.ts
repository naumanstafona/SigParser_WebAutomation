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
    await this.waitForTime(3000);
    await this.waitForLocator(HyperlinksLocators.pencilModalLocator);
    await this.clickOnLocator(HyperlinksLocators.pencilModalLocator);
    await this.waitForTime(2000);
    await this.waitForLocator('form > div:nth-child(5) > div > div > svg');
    await this.clickOnLocator('form > div:nth-child(5) > div > div > svg');
    await this.waitForLocator('(//label[normalize-space(text())="Personal LinkedIn"]/following::input)[1]');
    await this.fillingLocator('(//label[normalize-space(text())="Personal LinkedIn"]/following::input)[1]', 'linkedin.com/test');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(2000);
    await this.waitForLinkButton('linkedin.com/test');
    await this.waitForLocator(HyperlinksLocators.modalExitLocator);
    await this.clickOnLocator(HyperlinksLocators.modalExitLocator);
    await this.waitForLocator('(//a[contains(text(), "test") and contains(@class, "c-link")])[1]');
    await this.clickOnLocator('(//a[contains(text(), "test") and contains(@class, "c-link")])[1]');
    await this.waitForLocator(HyperlinksLocators.pencilModalLocator);
    await this.clickOnLocator(HyperlinksLocators.pencilModalLocator);
    await this.waitForLocator(HyperlinksLocators.websiteLocator);
    await this.fillingLocator(HyperlinksLocators.websiteLocator, 'linkedin.com/test');
    await this.waitForTime(2000);
    await this.waitForLocator('form > div:nth-child(3) > div > div > svg');
    await this.clickOnLocator('form > div:nth-child(3) > div > div > svg');
    await this.waitForLocator(HyperlinksLocators.companyLinkedInLocator);
    await this.fillingLocator(HyperlinksLocators.companyLinkedInLocator, 'linkedin.com/test');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(2000);
    await this.waitForLocator(HyperlinksLocators.modalExitLocator);
    await this.clickOnLocator(HyperlinksLocators.modalExitLocator);
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
    await this.waitForLocator('(//a[@title="linkedin.com/test"])[2]');
    await this.waitForLocator('(//a[@title="linkedin.com/test"])[3]');
    await this.clickOnLocator('(//a[@title="linkedin.com/test"])[1]');
    await this.closeCurrentTabAndSwitchToPrevious();
    await this.waitForTime(1000);
    await this.clickOnLocator('(//a[@title="linkedin.com/test"])[2]');
    await this.closeCurrentTabAndSwitchToPrevious();
    await this.waitForTime(1000);
    await this.clickOnLocator('(//a[@title="linkedin.com/test"])[3]');
    await this.closeCurrentTabAndSwitchToPrevious();
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
    await this.waitForLocator(HyperlinksLocators.pencilModalLocator);
    await this.clickOnLocator(HyperlinksLocators.pencilModalLocator);
    await this.waitForLocator('form > div:nth-child(4) > div > div > svg');
    await this.clickOnLocator('form > div:nth-child(4) > div > div > svg');
    await this.waitForLocator(HyperlinksLocators.phoneMobileLocator);
    await this.fillingLocator(HyperlinksLocators.phoneMobileLocator, '+1 425-555-1212');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
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
    await this.waitForLocator('(//span[@title="United States"])[3]');

  }


}
