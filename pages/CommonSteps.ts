import { Page } from 'playwright';
import { expect } from '@playwright/test';
import config from '../config';
import { CommonLocators } from '../locators/CommonLocators';
import { ContactLocators } from '../locators/30-CSV-Imports/ContactLocators';
import { CompaniesLocators } from '../locators/30-CSV-Imports/CompaniesLocators';

export class CommonSteps {
  protected page: Page;
  protected readonly timeout_large: number = 120000;
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
      process.exit(1);
    }
  }

  async waitingForURL(expectedUrl: string) {
    try {
      console.log(`[${new Date().toISOString()}] Waiting for URL: ${expectedUrl}`);
      await this.page.waitForURL(expectedUrl, { timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for URL ${expectedUrl}:`, error);
      process.exit(1);
    }
  }

  async waitForButton(buttonName: string) {
    try {
      console.log(`Waiting for button: ${buttonName}`);
      await this.page.getByRole('button', { name: buttonName }).waitFor({ state: 'visible', timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for button ${buttonName}:`, error);
      process.exit(1);
    }
  }

  async clickOnButton(buttonName: string) {
    try {
      console.log(`Clicking on button: ${buttonName}`);
      await this.page.getByRole('button', { name: buttonName }).click();
    } catch (error) {
      console.error(`Error clicking on button ${buttonName}:`, error);
      process.exit(1);
    }
  }

  async waitForPlaceholder(placeHolderName: string) {
    try {
      console.log(`Waiting for placeholder: ${placeHolderName}`);
      await this.page.getByPlaceholder(placeHolderName).waitFor({ state: 'visible', timeout: this.timeout_small });
    } catch (error) {
      console.error(`Error waiting for placeholder ${placeHolderName}:`, error);
      process.exit(1);
    }
  }

  async fillingPlaceholder(placeHolderName: string, expectedName: string) {
    try {
      console.log(`Filling placeholder: ${placeHolderName} with ${expectedName}`);
      await this.page.getByPlaceholder(placeHolderName).fill(expectedName);
    } catch (error) {
      console.error(`Error filling placeholder ${placeHolderName} with ${expectedName}:`, error);
      process.exit(1);
    }
  }

  async waitForLinkButtonstrict(buttonName: string) {
    try {
      console.log(`Waiting for link button: ${buttonName}`);
      await this.page.getByRole('link', { name: buttonName, exact: true }).waitFor({ state: 'visible', timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for button ${buttonName}:`, error);
      process.exit(1);
    }
  }

  async waitForLinkButton(buttonName: string) {
    try {
      console.log(`Waiting for link button: ${buttonName}`);
      await this.page.getByRole('link', { name: buttonName }).waitFor({ state: 'visible', timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for button ${buttonName}:`, error);
      process.exit(1);
    }
  }

  async clickOnLinkButton(buttonName: string) {
    try {
      console.log(`Clicking on link button: ${buttonName}`);
      await this.page.getByRole('link', { name: buttonName }).click();
    } catch (error) {
      console.error(`Error waiting for button ${buttonName}:`, error);
      process.exit(1);
    }
  }

  async clickOnLinkButtonstrict(buttonName: string) {
    try {
      console.log(`Clicking on link button: ${buttonName}`);
      await this.page.getByRole('link', { name: buttonName, exact: true }).click();
    } catch (error) {
      console.error(`Error waiting for button ${buttonName}:`, error);
      process.exit(1);
    }
  }

  async waitForLocator(locatorName: string) {
    try {
      console.log(`Waiting for locator:${locatorName}`);
      await this.page.locator(locatorName,).waitFor({ state: 'visible', timeout: this.timeout_small });
    } catch (error) {
      console.error(`Waiting for Choose File Text Box`, error);
      process.exit(1);
    }
  }

  async clickOnLocator(locatorName: string) {
    try {
      console.log(`Clicking on locator:${locatorName}`);
      await this.page.locator(locatorName).click();
    } catch (error) {
      console.error(`Waiting for Choose File Text Box`, error);
      process.exit(1);
    }
  }

  async selectingDropdownValue(locatorName: string, value: string) {
    try {
      console.log(`Selecting value :${value} from dropdown:${locatorName}`);
      await this.page.locator(locatorName).selectOption(value);
    } catch (error) {
      console.error(`Error Selecting value ${value}:`, error);
      process.exit(1);
    }
  }

  async selectingDropdownValuebyLabel(locatorName: string, value: string) {
    try {
      console.log(`Selecting value :${value} from dropdown:${locatorName}`);
      await this.page.getByLabel(locatorName).selectOption(value);
    } catch (error) {
      console.error(`Error Selecting value ${value}:`, error);
      process.exit(1);
    }
  }

  async uploadFile(locatorName: string, fileName: string) {
    try {
      console.log(`Uploading file : ${fileName}`);
      await this.page.setInputFiles(locatorName, fileName);
    } catch (error) {
      console.error(`Error Waiting for Choose File Text Box`, error);
      process.exit(1);
    }
  }

  async waitForHeading(headingName: string) {
    try {
      console.log(`Waiting for Heading: ${headingName}`);
      await this.page.getByRole('heading', { name: headingName }).waitFor({ state: 'visible', timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for button ${headingName}:`, error);
      process.exit(1);
    }
  }

  async clickOnSelectFileButton() {
    try {
      console.log('Click On Select File Button');
      await this.page.locator('section').filter({ hasText: /^SelectImport from FileImport new or updated records from a CSV file\.$/ }).getByRole('link').click();
    } catch (error) {
      console.error('Error clicking on Select File button', error);
      process.exit(1);
    }
  }

  async waitForTextStrict(textName: string) {
    try {
      console.log(`Waiting for Text strict: ${textName}`);
      await this.page.getByText(textName, { exact: true }).waitFor({ state: 'visible', timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for button ${textName}:`, error);
      process.exit(1);
    }
  }

  async clickOnTextStrict(textName: string) {
    try {
      console.log(`Clicking on Text strict: ${textName}`);
      await this.page.getByText(textName, { exact: true }).click();
    } catch (error) {
      console.error(`Error waiting for Text ${textName}:`, error);
      process.exit(1);
    }
  }

  async waitingForEmailDomainPlaceholder(emailDomain: string) {
    try {
      console.log(`Waiting for Email Domain Placeholder: ${emailDomain}`);
      await this.page.getByRole('cell', { name: emailDomain, exact: true }).getByPlaceholder('Search...').waitFor({ state: 'visible', timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for  Email Domain Placeholder ${emailDomain}:`, error);
      process.exit(1);
    }
  }

  async fillingEmailDomainPlaceholder(emailDomain: string, expectedName: string) {
    try {
      console.log(`Filling Email Domain Placeholder: ${emailDomain} with ${expectedName}`);
      await this.page.getByRole('cell', { name: emailDomain, exact: true }).getByPlaceholder('Search...').fill(expectedName);
    } catch (error) {
      console.error(`Error waiting for  Email Domain Placeholder ${emailDomain}:`, error);
      process.exit(1);
    }
  }

  async waitingForCellHavingTextforVerification(text: string) {
    try {
      console.log(`Waiting for text in row: ${text}`);
      await this.page.getByRole('cell', { name: text }).first().waitFor({ state: 'visible', timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for  Email Domain Placeholder ${text}:`, error);
      process.exit(1);
    }
  }

  async waitForTitle(titleName: string) {
    try {
      console.log(`Waiting for Title: ${titleName}`);
      await this.page.getByTitle(titleName, { exact: true }).waitFor({ state: 'visible', timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error Waiting for Title ${titleName}:`, error);
      process.exit(1);
    }
  }

  async clickOnTitle(titleName: string) {
    try {
      console.log(`Clicking On Title: ${titleName}`);
      await this.page.getByTitle(titleName, { exact: true }).click();
    } catch (error) {
      console.error(`Error Clicking On Title ${titleName}:`, error);
      process.exit(1);
    }
  }

  async fillingLocator(locatorName: string, expectedValue: string) {
    try {
      console.log(`Filling locator: ${locatorName} with value: ${expectedValue}:`);
      await this.page.locator(locatorName).fill(expectedValue);
    } catch (error) {
      console.error(`Error in Filling locator: ${locatorName}: with value:${expectedValue}`, error);
      process.exit(1);
    }
  }

  async getNextDayDate(): Promise<string> {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  async hoverOverElement(selector: string) {
    try {
      console.log(`Hovering over element: ${selector}`);
      const element = await this.page.$(selector);
      if (element) {
        await element.hover({ timeout: this.timeout_large });
      } else {
        throw new Error(`Element not found: ${selector}`);
      }
    } catch (error) {
      console.error(`Error hovering over element ${selector}:`, error);
      process.exit(1);
    }
  }

  async waitForElementByTextWithin(selector: string, textName: string) {
    try {
      console.log(`Waiting for text: '${textName}' within element: '${selector}'`);
      const element = this.page.locator(selector).getByText(textName);
      await element.waitFor({ state: 'visible', timeout: this.timeout_large });
    } catch (error) {
      console.error(`Error waiting for text '${textName}' within element '${selector}':`, error);
      process.exit(1);
    }
  }

  async clickElementByTextWithin(selector: string, textName: string) {
    try {
      console.log(`Clicking text: '${textName}' within element: '${selector}'`);
      const element = this.page.locator(selector).getByText(textName, { exact: true });
      await element.waitFor({ state: 'visible', timeout: this.timeout_large });
      await element.click();
    } catch (error) {
      console.error(`Error clicking text '${textName}' within element '${selector}':`, error);
      process.exit(1);
    }
  }

  private dialogHandled = false;

  async handleAndAcceptDialog(triggerSelector: string) {
    if (!this.dialogHandled) {
      this.page.on('dialog', async (dialog) => {
        try {
          console.log(`Dialog message: ${dialog.message()}`);
          await dialog.accept(); // Automatically accepts the dialog
          console.log('Dialog accepted');
        } catch (error) {
          console.error('Error accepting dialog:', error);
          process.exit(1);
        }
      });
      this.dialogHandled = true;
    }

    try {
      console.log(`Clicking on element: '${triggerSelector}' to trigger dialog`);
      await this.page.click(triggerSelector);
    } catch (error) {
      console.error(`Error clicking element '${triggerSelector}':`, error);
      process.exit(1);
    }
  }

  async fillingLocatorbyGettingRoleTextboxandPressingEnter(locatorName: string, expectedValue: string) {
    try {
      console.log(`Filling locator by Getting Role Textbox: ${locatorName} with value: ${expectedValue}`);
      await this.page.locator(locatorName).getByRole('textbox').fill(expectedValue);
      await this.page.locator(locatorName).getByRole('textbox').press('Enter');
    } catch (error) {
      console.error(`Error in filling locator: ${locatorName} with value: ${expectedValue}`, error);
      process.exit(1);
    }
  }

  async waitForElementToBeVisibleinCell(name: string, exact: boolean = true) {
    try {
      console.log(`Waiting for element with role: cell, name: ${name}, exact: ${exact} to be visible.`);
      await this.page.getByRole('cell', { name: name, exact: exact }).waitFor({ state: 'visible', timeout: this.timeout_large });
      console.log(`Element with role: cell, name: ${name}, exact: ${exact} is visible.`);
    } catch (error) {
      console.error(`Error waiting for element with role: cell, name: ${name}, exact: ${exact} to be visible.`, error);
      process.exit(1);
    }
  }

  async waitForTime(number: number) {
    console.log(`Waiting for ${number} Milli Second`);
    await this.page.waitForTimeout(number);
  }

  async waitForLocatorByRole() {
    try {
      console.log('waiting For spinbutton');
      await this.page.getByRole('spinbutton');
    } catch (error) {
      console.error('Error in waiting For spinbutton', error);
      process.exit(1);
    }
  }


  async fillingLocatorByRole(expectedValue: string) {
    try {
      console.log('waiting For spinbutton');
      await this.page.getByRole('spinbutton').fill(expectedValue);
      await this.page.getByRole('spinbutton').click();
    } catch (error) {
      console.error('Error in waiting For spinbutton', error);
      process.exit(1);
    }
  }
};