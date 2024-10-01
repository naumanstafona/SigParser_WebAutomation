import { Page } from 'playwright';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { InteractionLocators } from '../../locators/34-Interactions/InteractionLocators';
import { expect } from '@playwright/test';

export class InteractionPage extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async verifyLegacyInteractionMetricsForContacts() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(CommonLocators.allValidContactsLocator);
    await this.clickOnLocator(CommonLocators.allValidContactsLocator);
    await this.waitForLocator(InteractionLocators.legacyInteractionLocator);
    await this.clickOnLocator(InteractionLocators.legacyInteractionLocator);
    await this.waitForLocator(InteractionLocators.dataPresentinLegacyInteraction);
  }

  async verifyLegacyInteractionMetricsForCompanies() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
    await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
    await this.waitForLocator(InteractionLocators.legacyInteractionComapniesLocator);
    await this.clickOnLocator(InteractionLocators.legacyInteractionComapniesLocator);
    await this.waitForLocator(InteractionLocators.dataPresentinLegacyInteraction);
  }

  async verifyLegacyInteractionMetricsForCoworkers() {
    await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.waitForLocator(InteractionLocators.allActiveCoworkersLocator);
    await this.clickOnLocator(InteractionLocators.allActiveCoworkersLocator);
    await this.waitForLocator(InteractionLocators.legacyInteractionLocator);
    await this.clickOnLocator(InteractionLocators.legacyInteractionLocator);
    await this.waitForLocator(InteractionLocators.dataPresentinLegacyInteraction);
  }

  async recalculateMetrics() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(InteractionLocators.adminSettingButtonLocator);
    await this.clickOnTextStrict(InteractionLocators.adminSettingButtonLocator);
    await this.waitForLinkButtonstrict(InteractionLocators.advancedSetting);
    await this.clickOnLinkButtonstrict(InteractionLocators.advancedSetting);
    await this.waitForButton(InteractionLocators.recalculateMetricsButton);
    await this.clickOnButton(InteractionLocators.recalculateMetricsButton);
    await this.waitForTime(50000);
    await this.waitForLocator('//p[normalize-space(text())="The job has completed!"]');
  }

  async VerifyInteractionMtericsForContact() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator('//a[normalize-space(text())="Emily Rodgers"]');
    await this.clickOnLocator('//a[normalize-space(text())="Emily Rodgers"]');
    await this.compareLocators('(//div[@class="u-d-flex u-justify-around"]//span)[1]', '(//div[contains(@class,"c-text --heading-md")])[1]');
    await this.compareLocators('(//div[@class="u-d-flex u-justify-around"]//span)[2]', '(//div[contains(@class,"c-text --heading-md")])[2]');
    await this.compareLocators('(//div[@class="u-d-flex u-justify-around"]//span)[3]', '(//div[contains(@class,"c-text --heading-md")])[4]');
  }

  async VerifyInteractionMtericsForCompanies() {
    await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForTextStrict('Honeywell');
    await this.clickOnTextStrict('Honeywell');
    await this.waitForLocatorBySpan('Interactions');
    await this.clickonLocatorBySpan('Interactions');
    await this.compareLocators('(//div[@class="u-d-flex u-justify-around"]//span)[1]', '(//div[contains(@class,"c-text --heading-md")])[1]');
    await this.compareLocators('(//div[@class="u-d-flex u-justify-around"]//span)[2]', '(//div[contains(@class,"c-text --heading-md")])[2]');
    await this.compareLocators('(//div[@class="u-d-flex u-justify-around"]//span)[3]', '(//div[contains(@class,"c-text --heading-md")])[4]');
  }

}

