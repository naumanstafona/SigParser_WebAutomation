import { Page } from 'playwright';
import { LoginLocators } from '../locators/LoginLocators'; 
import { CommonSteps } from './CommonSteps';
import config from '../config';

export class LoginPage extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  async login(email: string, password: string, url: string,expectedUrl?: string) {
    await this.navigateTo(url);
    await this.waitForButton(LoginLocators.loginWithEmailButtonLocator);
    await this.clickOnButton(LoginLocators.loginWithEmailButtonLocator);
    await this.waitForPlaceholder(LoginLocators.enterYourEmailInputFieldLocator);
    await this.fillingPlaceholder(LoginLocators.enterYourEmailInputFieldLocator, email);
    await this.waitForPlaceholder(LoginLocators.enterYourPasswordInputFieldLocator);
    await this.fillingPlaceholder(LoginLocators.enterYourPasswordInputFieldLocator, password);
    await this.clickOnButton(LoginLocators.loginButtonLocator);
    await this.waitingForURL(expectedUrl=config.url+'/Account/App/#/Dashboard');
    await this.waitForTime(5000);
  }
}