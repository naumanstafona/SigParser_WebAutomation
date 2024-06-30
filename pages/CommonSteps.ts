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

  async waitForLocator(locatorName: string) {
    try {
      console.log(`Waiting for locator:${locatorName}`);
      await expect(this.page.locator(locatorName)).toBeVisible({ timeout: this.timeout_small });
    } catch (error) {
      console.error(`Waiting for Choose File Text Box`, error);
    }
  }

  async selectingDropdownValue(locatorName: string, value: string) {
    try {
      console.log(`Selecting value :${value} from dropdown:${locatorName}`);
      await this.page.locator(locatorName).selectOption(value)
    } catch (error) {
      console.error(`Error Selecting value ${value}:`, error);
    }
  }

  async uploadFile(locatorName: string, fileName: string) {
    try {
      console.log(`Uploading file : ${fileName}`);
      await this.page.setInputFiles(locatorName, fileName);
    } catch (error) {
      console.error(`Error Waiting for Choose File Text Box`, error);
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

  async waitForText(textName: string) {
    try {
      console.log(`Waiting for Text: ${textName}`);
      await expect(this.page.getByText(textName)).toBeVisible({ timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for button ${textName}:`, error);
    }
  }

  async clickOnText(textName: string) {
    try {
      console.log(`Clicking on Text: ${textName}`);
      await this.page.getByText(textName).click();
    } catch (error) {
      console.error(`Error waiting for button ${textName}:`, error);
    }
  }

  async waitingForEmailDomainPlaceholder(emailDomain: string) {
    try {
      console.log(`Waiting for Email Domain Placeholder: ${emailDomain}`);
      await expect(this.page.getByRole('cell', { name: emailDomain}).getByPlaceholder('Search...')).toBeVisible({ timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for  Email Domain Placeholder ${emailDomain}:`, error);
    }
  }

  async fillingEmailDomainPlaceholder(emailDomain: string, expectedName: string) {
    try {
      console.log(`Waiting for Email Domain Placeholder: ${emailDomain}`);
      await this.page.getByRole('cell', { name: emailDomain}).getByPlaceholder('Search...').fill(expectedName);
    } catch (error) {
      console.error(`Error waiting for  Email Domain Placeholder ${emailDomain}:`, error);
    }
  }

  async waitingForCellHavingTextforVerification(text: string) {
    try {
      console.log(`Waiting for text in row: ${text}`);
      await expect(this.page.getByRole('cell', { name: text }).first()).toBeVisible({ timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for  Email Domain Placeholder ${text}:`, error);
    }
  }

  async fillingLocator(locatorName: string, expectedValue) {
    try {
      console.log(`Filling loctator: ${locatorName} with value: ${expectedValue}:`);
    //  await this.page.locator('input[type="date"]').fill('2024-06-30');
      await this.page.locator(locatorName).fill(expectedValue);
    } catch (error) {
      console.error(`Error in Filling loctator: ${locatorName}: with value:${expectedValue}`, error);
    }
  }
}