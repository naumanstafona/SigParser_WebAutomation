import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { ConnectorPSTLocators } from '../../locators/19-Connector-PST/ConnecterPST';
import { Page } from 'playwright';
import config from '../../config';

export class ConnectorsPST extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async uploadPSTFile() {
    await this.navigateTo(config.url + '/Account/App/#/PstFiles');
    await this.waitForTime(5000);
    await this.waitForButton(ConnectorPSTLocators.uploadButtonLocator);
    await this.clickOnButton(ConnectorPSTLocators.uploadButtonLocator);
    await this.waitForButton(ConnectorPSTLocators.goTONextStepButtonLocator);
    await this.clickOnButton(ConnectorPSTLocators.goTONextStepButtonLocator);
    await this.waitForLocator(ConnectorPSTLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(ConnectorPSTLocators.ChooseFileTextBoxLocator, 'Uploads/19-Connectors-PST/SamplePST.pst');
    await this.waitForTime(3000);
    await this.waitForButton(ConnectorPSTLocators.uploadButtonLocator);
    await this.clickOnButton(ConnectorPSTLocators.uploadButtonLocator);
    await this.waitForTime(100000);
  }

  async purchasePSTFile() {
    await this.waitForButton(ConnectorPSTLocators.purchasePSTScanLocatoor);
    await this.clickOnButton(ConnectorPSTLocators.purchasePSTScanLocatoor);
    await this.waitForTime(7000);
    //await this.page.getByTestId('card-accordion-item-button').click();
    await this.waitForPlaceholder(ConnectorPSTLocators.cardNumberLocator);
    await this.fillingPlaceholder(ConnectorPSTLocators.cardNumberLocator, '4242 4242 4242 4242');
    await this.waitForPlaceholder(ConnectorPSTLocators.cardExpiryLocator);
    await this.fillingPlaceholder(ConnectorPSTLocators.cardExpiryLocator, '12 / 24');
    await this.waitForPlaceholder(ConnectorPSTLocators.cVCLocator);
    await this.fillingPlaceholder(ConnectorPSTLocators.cVCLocator, '723');
    await this.waitForPlaceholder(ConnectorPSTLocators.cardHolderName);
    await this.fillingPlaceholder(ConnectorPSTLocators.cardHolderName, 'Pink Dale');
    await this.page.getByTestId('hosted-payment-submit-button').click();
    await this.waitForTime(90000);
    //await this.waitForTextStrict('PST file purchase and scan complete!');
  }


  async verifyFileName() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(CommonLocators.allValidContactsLocator);
    await this.clickOnLocator(CommonLocators.allValidContactsLocator);
    await this.waitForLocator(ConnectorPSTLocators.pstColumnLocator);
    await this.clickOnLocator(ConnectorPSTLocators.pstColumnLocator);
    await this.waitForTime(2000);
    await this.waitForLocator('//tr[contains(.,"Outlook Testersalesforceemailoutlook.tester@salesforceemail.com(1) SamplePST.pst")]');

  }






}
