import { BrowserContext, Page } from 'playwright';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { CompanyLocationLocators } from '../../locators/22-Companies/ComapanyLocationLocators';

  export class CompanyLocations extends CommonSteps {
    constructor(page: Page) {
      super(page);
    }

  async locationFromPhoneNumber() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);

  }


}
