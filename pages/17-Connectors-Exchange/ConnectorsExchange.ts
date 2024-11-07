import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { ConnectorExchangeLocators } from '../../locators/17-Connectors-Exchange/ConnecterExchange';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { Page } from 'playwright';

export class ConnecterExchange extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async connectMailbox() {
    await this.waitForLinkButtonstrict(CommonLocators.mailBoxedLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.mailBoxedLinkLocator);
  }

  async purchaseMailbox() {
    await this.waitForLinkButtonstrict(CommonLocators.mailBoxedLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.mailBoxedLinkLocator);
    await this.waitForLinkButtonstrict(ConnectorExchangeLocators.scanMoreEmailLocator);
    await this.clickOnLinkButtonstrict(ConnectorExchangeLocators.scanMoreEmailLocator);
    await this.waitForLocator(ConnectorExchangeLocators.twoYearsLocator);
    await this.clickOnLocator(ConnectorExchangeLocators.twoYearsLocator);
    await this.waitForButton(ConnectorExchangeLocators.nextButtonLocator);
    await this.clickOnButton(ConnectorExchangeLocators.nextButtonLocator);
    await this.waitForTime(5000);
    await this.fillingPlaceholder(ConnectorExchangeLocators.cardNumberLocator, '4242 4242 4242 4242');
    await this.waitForPlaceholder(ConnectorExchangeLocators.cardExpiryLocator);
    await this.fillingPlaceholder(ConnectorExchangeLocators.cardExpiryLocator, '12 / 24');
    await this.waitForPlaceholder(ConnectorExchangeLocators.cVCLocator);
    await this.fillingPlaceholder(ConnectorExchangeLocators.cVCLocator, '723');
    await this.waitForPlaceholder(ConnectorExchangeLocators.cardHolderName);
    await this.fillingPlaceholder(ConnectorExchangeLocators.cardHolderName, 'Pink Dale');
    await this.page.getByTestId('hosted-payment-submit-button').click();
    await this.waitForTime(20000);
    await this.waitForLocator('//h1[normalize-space(text())="Purchase complete!"]');
  }


  async validateAndExtractEmails() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator('//a[normalize-space(text())="Paul Mendoza"]');
    await this.clickOnLocator('//a[normalize-space(text())="Paul Mendoza"]');
    await this.waitForTime(2000);
    await this.waitForLocator('//span[normalize-space(text())="Interactions"]');
    await this.clickOnLocator('//span[normalize-space(text())="Interactions"]');
    await this.waitForLocator('(//div[contains(@class, "__text-mid-bold") and contains(@class, "u-m-b-half") and contains(@class, "u-mouse-default") and text() = "Email included with this Contact"])[1]');
    await this.waitForLocator('//div[contains(@class, "__text-mid-bold") and contains(@class, "u-m-t-2") and contains(@class, "u-m-b-2") and contains(text(), "2022")]');
    await this.waitForLocator('(//span[@class="c-link __text-md u-pointer" and @title="test@sigparser.hostpilot.com" and text()="Test Exchange"])[1]');
    await this.waitForLocator('//button[@class="c-modal__exit"]//i[1]');
    await this.clickOnLocator('//button[@class="c-modal__exit"]//i[1]');
  }

}
