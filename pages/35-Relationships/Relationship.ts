import { Page } from 'playwright';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { expect } from '@playwright/test';
import { RelationshipLocators } from '../../locators/35-Relationships/RelationshipLocators';

export class RelationshipPage extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }



  async compareLocatorsWithTotalCount(firstLocator: string, secondLocatorXPath: string) {
    try {
      // Get the first text based on the provided first locator
      const firstText = await this.page.locator(firstLocator).textContent();

      // Evaluate the second XPath to get the count of rows as a string
      const secondText = await this.page.evaluate((xpath) => {
        const count = document.evaluate(xpath, document, null, XPathResult.NUMBER_TYPE, null).numberValue;
        return String(count); // Convert the count to a string
      }, secondLocatorXPath);

      // Ensure both texts are not null or undefined and trim extra spaces
      expect(firstText?.trim()).toBe(secondText?.trim());

      console.log('Text comparison successful!');
    } catch (error) {
      console.error('Error during text comparison:', error);
      process.exit(1); // Exit the process with a non-zero code to indicate failure
    }
  }

  async verifyRelationshipMetricsinContacts() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator('//a[normalize-space(text())="Leo Kowalski"]');
    await this.clickOnLocator('//a[normalize-space(text())="Leo Kowalski"]');
    await this.waitForTime(3000);
    await this.waitForLocator('//span[normalize-space(text())="Relationships"]');
    await this.clickOnLocator('//span[normalize-space(text())="Relationships"]');
    await this.waitForTime(4000);
    await this.compareLocatorsWithTotalCount('(//span[@class="u-bold"])[1]', 'count((//tbody)[2]//tr[@class="c-table-static__row"])');
    await this.compareLocatorsWithTotalCount('(//span[@class="u-bold"])[2]', 'count((//tbody)[3]//tr[@class="c-table-static__row"])');
    await this.compareLocatorsWithTotalCount('(//span[@class="u-bold"])[3]', 'count((//tbody)[4]//tr[@class="c-table-static__row"])');
    await this.waitForLocator(RelationshipLocators.contactModalCloseButton);
    await this.clickOnLocator(RelationshipLocators.contactModalCloseButton);
  }

  async verifyRelationshipMetricsinCompanies() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator('//a[normalize-space(text())="Hendrick Manufacturing"]');
    await this.clickOnLocator('//a[normalize-space(text())="Hendrick Manufacturing"]');
    await this.waitForTime(3000);
    await this.waitForLocator('//span[normalize-space(text())="Relationships"]');
    await this.clickOnLocator('//span[normalize-space(text())="Relationships"]');
    await this.waitForTime(4000);
    await this.compareLocatorsWithTotalCount('(//span[@class="u-bold"])[1]', 'count(//div[contains(@class, "c-table-container")][1][preceding-sibling::div[contains(text(), "Coworker Relationships")]]//table[@class="c-table-static"]/tbody/tr) - 1');
    // await this.compareLocatorsWithTotalCount('(//span[@class="u-bold"])[2]', 'count((//tbody)[3]//tr[@class="c-table-static__row"])');
    await this.compareLocatorsWithTotalCount('(//span[@class="u-bold"])[3]', 'count(//div[contains(@class, "c-table-container")][preceding-sibling::div[contains(text(), "Other Relationships")]][1]//table[@class="c-table-static"]/tbody/tr) - 1');
    await this.waitForLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
    await this.clickOnLocator('//i[contains(@class,"c-modal__exit-icon fa")]');
  }

  async verifyRelationshipMetricsinCoworkers() {
    await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.waitForLocator('//a[normalize-space(text())="Steve Harris"]');
    await this.clickOnLocator('//a[normalize-space(text())="Steve Harris"]');
    await this.waitForTime(3000);
    await this.waitForLocator('//span[normalize-space(text())="Contacts"]');
    await this.clickOnLocator('//span[normalize-space(text())="Contacts"]');
    await this.waitForTime(4000);
    await this.compareLocatorsWithTotalCount('(//span[@class="u-bold"])[1]', 'count((//tbody)[2]//tr[@class="c-table-static__row"][position() >= 2])');
    await this.waitForLocator('//span[normalize-space(text())="Companies"]');
    await this.clickOnLocator('//span[normalize-space(text())="Companies"]');
    await this.compareLocatorsWithTotalCount('(//span[@class="u-bold"])[2]', 'count((//tbody)[2]//tr[@class="c-table-static__row"][position() >= 2])');
    await this.waitForLocator('(//span[text()="Details"]/following-sibling::span)[3]');
    await this.clickOnLocator('(//span[text()="Details"]/following-sibling::span)[3]');
    await this.compareLocatorsWithTotalCount('(//span[@class="u-bold"])[3]', 'count((//tbody)[2]//tr[@class="c-table-static__row"][position() >= 2])');
  }

}

