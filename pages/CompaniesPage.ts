import { Page } from 'playwright';
import { CompaniesLocators } from '../locators/CompaniesLocators';
import { CommonLocators } from '../locators/CommonLocators';
import { CommonSteps } from './CommonSteps';

export class CompaniesPage extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }



    async companiesParserVerification() {
        await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
        await this.waitForButton(CompaniesLocators.importButtonLocator);
        await this.clickOnButton(CompaniesLocators.importButtonLocator);
        await this.waitForHeading(CompaniesLocators.importFromFileHeadingLocator);
        await this.clickOnSelectFileButton();
        await this.waitForHeading(CompaniesLocators.importFromFileHeadingLocator);
        await this.waitForChooseFileTextBox();
        await this.clickOnChooseFileTextBox();
        await this.selectFilefromComputer(CompaniesLocators.fileNameLocator);


    }

}