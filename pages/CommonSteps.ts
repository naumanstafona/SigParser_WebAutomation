import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { CompaniesLocators } from '../locators/CompaniesLocators';

export class CommonSteps {


  protected page: Page;
  protected readonly timeout_large: number = 180000;
  protected readonly timeout_small: number = 60000;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    try {
      console.log(`[${new Date().toISOString()}] Navigating to ${url}`);
      await this.page.goto(url, { timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error navigating to ${url}:`, error);
    }
  }

  async waitingForURL(expectedUrl: string) {
    try {
      console.log(`[${new Date().toISOString()}] Waiting for URL: ${expectedUrl}`);
      await this.page.waitForURL(expectedUrl, { timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for URL ${expectedUrl}:`, error);
    }
  }

  async waitForButton(buttonName: string) {
    try {
      console.log(`Waiting for button: ${buttonName}`);
      await expect(this.page.getByRole('button', { name: buttonName })).toBeVisible({ timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for button ${buttonName}:`, error);
    }
  }

  async clickOnButton(buttonName: string) {
    try {
      console.log(`Clicking on button: ${buttonName}`);
      await this.page.getByRole('button', { name: buttonName }).click();
    } catch (error) {
      console.error(`Error clicking on button ${buttonName}:`, error);
    }
  }

  async waitForPlaceholder(placeHolderName: string) {
    try {
      console.log(`Waiting for placeholder: ${placeHolderName}`);
      await expect(this.page.getByPlaceholder(placeHolderName)).toBeVisible({ timeout: this.timeout_small });
    } catch (error) {
      console.error(`Error waiting for placeholder ${placeHolderName}:`, error);
    }
  }


  async fillingPlaceholder(placeHolderName: string, expectedName: string) {
    try {
      console.log(`Filling placeholder: ${placeHolderName} with ${expectedName}`);
      await this.page.getByPlaceholder(placeHolderName).fill(expectedName);
    } catch (error) {
      console.error(`Error filling placeholder ${placeHolderName} with ${expectedName}:`, error);
    }
  }

  async waitForLinkButton(buttonName: string) {
    try {
      console.log(`Waiting for link button: ${buttonName}`);
      await expect(this.page.getByRole('link', { name: buttonName })).toBeVisible({ timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for button ${buttonName}:`, error);
    }
  }

  async clickOnLinkButton(buttonName: string) {
    try {
      console.log(`Clicking on link button: ${buttonName}`);
      await this.page.getByRole('link', { name: buttonName }).click();
    } catch (error) {
      console.error(`Error waiting for button ${buttonName}:`, error);
    }
  }

  async waitForChooseFileTextBox() {
    try {
      console.log(`Waiting for Choose File Text Box`);
      await expect(this.page.getByRole('textbox')).toBeVisible({ timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error Waiting for Choose File Text Box`, error);
    }
  }

  async clickOnChooseFileTextBox() {
    try {
      console.log(`Waiting for Choose File Text Box`);
      await this.page.getByRole('textbox').click()
    } catch (error) {
      console.error(`Error Waiting for Choose File Text Box`, error);
    }
  }

  async selectFilefromComputer(filename:string)
  {
    try {
      console.log(`Selecting File From Computer`);
      await this.page.waitForTimeout(3000);
      await this.page.getByRole('textbox').setInputFiles(filename)
    } catch (error) {
      console.error(`Error Selecting File From Computer`, error);
    }
  }


  async waitForHeading(headingName: string) {
    try {
      console.log(`Waiting for Heading: ${headingName}`);
      await expect(this.page.getByRole('heading', { name: headingName })).toBeVisible({ timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for button ${headingName}:`, error);
    }
  }

  async clickOnSelectFileButton() {
    try {
      console.log('Click On Select File Button');
      await this.page.locator('section').filter({ hasText: /^SelectImport from FileImport new or updated records from a CSV file\.$/ }).getByRole('link').click();
    } catch (error) {
      console.error('Error clicking on Select File button', error);
    }
  }

}