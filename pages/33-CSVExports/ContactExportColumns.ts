import { Page } from 'playwright';
import * as fs from 'fs';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import { parse } from 'csv-parse/sync';
import { ContactExportColumLocators } from '../../locators/33-CSVExports/ContactExportColumns';

export class ContactExportsColumns extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }

  deleteFile(filePath: string) {
    try {
      console.log('Deleting file');
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`File ${filePath} deleted successfully.`);
      } else {
        console.warn(`File ${filePath} does not exist.`);
      }
    } catch (error) {
      console.error(`Error deleting file: ${error.message}`);
    }
  }

  async downloadFile() {
    const page1Promise = this.page.waitForEvent('popup');
    const downloadPromise = this.page.waitForEvent('download');
    await this.clickOnTextStrict(ContactExportColumLocators.downloadLocator);
    const page1 = await page1Promise;
    const download = await downloadPromise;
    const filePath = 'Downloaded_files/' + download.suggestedFilename();
    await download.saveAs(filePath);
    await this.waitForTime(2000);
    return filePath;
  }

  async readAndValidateCount(filePath: string, columnCount: number) {
    try {
      console.log('Reading file:', filePath);

      // Read the file content and remove BOM if present
      let fileContent = fs.readFileSync(filePath, 'utf8');
      fileContent = fileContent.replace(/^\uFEFF/, '');

      // Parse the CSV data
      const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
      });

      // Extract headers from the first record
      const actualColumns = Object.keys(records[0]);

      // Verify the column count and throw error if it doesn't match the expected count
      if (actualColumns.length > columnCount) {
        console.log(`CSV column count is greater than ${columnCount}.`);
      } else {
        console.error(`CSV column count is less than or equal to ${columnCount}.`);
        process.exit(1); // Exit the process if column count is <= expected count
      }

      console.log('Finished reading CSV file.');
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit the process in case of an error
    }
  }

  async deleteAllExceptFirst(page: Page) {
    try {
      // Locate all buttons using the appropriate CSS selector
      const buttons = page.locator('//button[contains(@class, "c-btn") and contains(@class, "--sm") and contains(@class, "--disabled")]/i[@class="fa fa-close"]');

      // Get the number of matched buttons
      const count = await buttons.count();

      // Ensure more than one button is found
      if (count > 1) {
        // Loop through all buttons starting from the last one down to index 1
        for (let i = count - 1; i > 0; i--) {
          try {
            await buttons.nth(i).click();
            await this.waitForTime(500);
          } catch (clickError) {
            console.error(`Error clicking button at index ${i}:`, clickError);
          }
        }
      } else {
        console.log('No buttons found or only one button exists.');
      }
    } catch (error) {
      console.error('Error in locating or interacting with buttons:', error);
    }
  }

  async readAndValidateCountOfColumnsAndRestrictColumns(filePath: string) {
    try {
      console.log('Reading file:', filePath);

      // Read the file content and remove BOM if present
      let fileContent = fs.readFileSync(filePath, 'utf8');
      fileContent = fileContent.replace(/^\uFEFF/, '');

      // Parse the CSV data
      const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
      });

      if (records.length === 0) {
        throw new Error('CSV file is empty.');
      }

      // Extract headers from the first record
      const actualColumns = Object.keys(records[0]);

      // Required columns
      const requiredColumns = ["Contact Status", "Full Name", "Company Name", "Email Address"];

      // Verify the file contains exactly the 4 required columns
      const hasRequiredColumns = requiredColumns.every(column => actualColumns.includes(column));
      const hasExactColumnCount = actualColumns.length === 4;

      if (!hasRequiredColumns || !hasExactColumnCount) {
        console.error('CSV file does not contain the required columns or has incorrect column count.');
        process.exit(1); // Exit the process if column names are wrong
      }

      // Check if the email column contains the restricted emails
      const restrictedEmails = ['customcontact2@test.com', 'customcontact3@test.com'];
      const invalidEmails = records
        .filter(record => restrictedEmails.includes(record.Email))
        .map(record => record.Email);

      if (invalidEmails.length > 0) {
        console.error(`CSV file contains restricted email addresses: ${invalidEmails.join(', ')}`);
        process.exit(1); // Exit the process if restricted email addresses are found
      }

      console.log('CSV file contains the required columns and no restricted email addresses.');
      console.log('Finished reading CSV file.');
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit the process in case of an error
    }
  }

  async readFileValidateColumnsAndRows(filePath: string, rowCount: number, requiredColumns: string[]) {
    try {
      console.log('Reading file:', filePath);

      // Read the file content and remove BOM if present
      let fileContent = fs.readFileSync(filePath, 'utf8');
      fileContent = fileContent.replace(/^\uFEFF/, '');

      // Parse the CSV data
      const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
      });

      // Check if the number of rows matches the provided rowCount (excluding headers)
      if (records.length !== rowCount) {
        console.error(`CSV file does not contain exactly ${rowCount} rows of data. Found: ${records.length}`);
        process.exit(1); // Exit if the row count is not as expected
      }

      // Extract headers from the first record
      const actualColumns = Object.keys(records[0]);

      // Verify the file contains the required columns
      const hasRequiredColumns = requiredColumns.every(column => actualColumns.includes(column));
      const hasExactColumnCount = actualColumns.length === requiredColumns.length;

      if (!hasRequiredColumns || !hasExactColumnCount) {
        console.error(`CSV file does not contain the required columns (${requiredColumns.join(", ")}) or has incorrect column count.`);
        process.exit(1); // Exit the process if column count or names are wrong
      }

      console.log(`CSV file contains ${rowCount} rows of data and the required columns.`);
      console.log('Finished reading CSV file.');
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit the process in case of an error
    }
  }

  async allContactsAllColumns() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(CommonLocators.allValidContactsLocator);
    await this.clickOnLocator(CommonLocators.allValidContactsLocator);
    await this.waitForButton(ContactExportColumLocators.addButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.addButtonLocator);
    await this.waitforLabel(ContactExportColumLocators.nameLabalLocator);
    await this.fillingLabel(ContactExportColumLocators.nameLabalLocator, 'test');
    await this.waitForButton(ContactExportColumLocators.saveButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.saveButtonLocator);
    await this.waitForLocator('//span[text()="test"]');
    await this.waitForTitle('Columns');
    await this.clickOnTitle('Columns');
    await this.deleteAllExceptFirst(this.page);
    await this.waitForButton(ContactExportColumLocators.saveButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.saveButtonLocator);
    await this.waitForButton(ContactExportColumLocators.exportButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.exportButtonLocator);
    await this.waitForButtonByRow(ContactExportColumLocators.selectButtonLocator);
    await this.clickOnButtonByRow(ContactExportColumLocators.selectButtonLocator);
    await this.waitforLabel(ContactExportColumLocators.exportAllColumnLocator);
    await this.checkLabel(ContactExportColumLocators.exportAllColumnLocator);
    await this.waitforLabel('Export to CSV file');
    await this.checkLabel('Export to CSV file');
    await this.waitForButton(ContactExportColumLocators.exportNowButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.exportNowButtonLocator);
    await this.waitForHeading(ContactExportColumLocators.csvReadyHeadingLocator);
    const filePath = await this.downloadFile();
    await this.readAndValidateCount(filePath, 4);
    await this.deleteFile(filePath);
    await this.waitForTime(1000);
    await this.waitForLocator(ContactExportColumLocators.fileCloseButton);
    await this.clickOnLocator(ContactExportColumLocators.fileCloseButton);
    await this.waitForLocator('//span[text()="test"]');
    await this.clickOnLocator('//span[text()="test"]');
    await this.waitForButton(ContactExportColumLocators.manageButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.manageButtonLocator);
    await this.handleAndAcceptDialog(ContactExportColumLocators.deleteTestLocator);
    await this.waitForTime(3000);

  }

  async allContactsSomeColumns() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(CommonLocators.allValidContactsLocator);
    await this.clickOnLocator(CommonLocators.allValidContactsLocator);
    await this.waitForButton(ContactExportColumLocators.addButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.addButtonLocator);
    await this.waitforLabel(ContactExportColumLocators.nameLabalLocator);
    await this.fillingLabel(ContactExportColumLocators.nameLabalLocator, 'test');
    await this.waitForButton(ContactExportColumLocators.saveButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.saveButtonLocator);
    await this.waitForLocator('//span[text()="test"]');
    await this.waitForTitle('Columns');
    await this.clickOnTitle('Columns');
    await this.deleteAllExceptFirst(this.page);
    await this.waitForButton(ContactExportColumLocators.saveButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.saveButtonLocator);
    await this.waitForLocator('(//input[@type="checkbox"])[1]');
    await this.clickOnLocator('(//input[@type="checkbox"])[1]');
    await this.waitForLocator('(//input[@type="checkbox"])[2]');
    await this.clickOnLocator('(//input[@type="checkbox"])[2]');
    await this.waitForLocator('(//input[@type="checkbox"])[3]');
    await this.clickOnLocator('(//input[@type="checkbox"])[3]');
    await this.waitForButton(ContactExportColumLocators.exportButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.exportButtonLocator);
    await this.waitForButtonByRow(ContactExportColumLocators.selectButtonLocator);
    await this.clickOnButtonByRow(ContactExportColumLocators.selectButtonLocator);
    await this.waitforLabel(ContactExportColumLocators.exportVisibleColumnLocator);
    await this.checkLabel(ContactExportColumLocators.exportVisibleColumnLocator);
    await this.waitforLabel('Export to CSV file');
    await this.checkLabel('Export to CSV file');
    await this.waitForButton(ContactExportColumLocators.exportNowButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.exportNowButtonLocator);
    await this.waitForHeading(ContactExportColumLocators.csvReadyHeadingLocator);
    const filePath = await this.downloadFile();
    await this.readAndValidateCount(filePath, 3);
    await this.readAndValidateCountOfColumnsAndRestrictColumns(filePath);
    await this.deleteFile(filePath);
    await this.waitForTime(1000);
    await this.waitForLocator(ContactExportColumLocators.fileCloseButton);
    await this.clickOnLocator(ContactExportColumLocators.fileCloseButton);
    await this.waitForLocator('//span[text()="test"]');
    await this.clickOnLocator('//span[text()="test"]');
    await this.waitForButton(ContactExportColumLocators.manageButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.manageButtonLocator);
    await this.handleAndAcceptDialog(ContactExportColumLocators.deleteTestLocator);
    await this.waitForTime(3000);
  }

  async exportSomeContactsVerifications() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator(CommonLocators.allValidContactsLocator);
    await this.clickOnLocator(CommonLocators.allValidContactsLocator);
    await this.waitForButton(ContactExportColumLocators.addButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.addButtonLocator);
    await this.waitforLabel(ContactExportColumLocators.nameLabalLocator);
    await this.fillingLabel(ContactExportColumLocators.nameLabalLocator, 'test');
    await this.waitForButton(ContactExportColumLocators.saveButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.saveButtonLocator);
    await this.waitForLocator('//span[text()="test"]');
    await this.waitForTitle('Columns');
    await this.clickOnTitle('Columns');
    await this.deleteAllExceptFirst(this.page);
    await this.waitForButton(ContactExportColumLocators.saveButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.saveButtonLocator);
    await this.waitForLocator('(//input[@type="checkbox"])[2]');
    await this.clickOnLocator('(//input[@type="checkbox"])[2]');
    await this.waitForLocator('(//input[@type="checkbox"])[3]');
    await this.clickOnLocator('(//input[@type="checkbox"])[3]');
    await this.waitForButton(ContactExportColumLocators.exportButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.exportButtonLocator);
    await this.waitForButtonByRow(ContactExportColumLocators.selectButtonLocator);
    await this.clickOnButtonByRow(ContactExportColumLocators.selectButtonLocator);
    await this.waitforLabel(ContactExportColumLocators.exportVisibleColumnLocator);
    await this.checkLabel(ContactExportColumLocators.exportVisibleColumnLocator);
    await this.waitforLabel('Export to CSV file');
    await this.checkLabel('Export to CSV file');
    await this.waitForButton(ContactExportColumLocators.exportNowButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.exportNowButtonLocator);
    await this.waitForHeading(ContactExportColumLocators.csvReadyHeadingLocator);
    const filePath = await this.downloadFile();
    await this.readFileValidateColumnsAndRows(filePath, 2, ["Contact Status", "Full Name", "Company Name", "Email Address"]);
    await this.deleteFile(filePath);
    await this.waitForTime(1000);
    await this.waitForLocator(ContactExportColumLocators.fileCloseButton);
    await this.clickOnLocator(ContactExportColumLocators.fileCloseButton);
    await this.waitForLocator('//span[text()="test"]');
    await this.clickOnLocator('//span[text()="test"]');
    await this.waitForButton(ContactExportColumLocators.manageButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.manageButtonLocator);
    await this.handleAndAcceptDialog(ContactExportColumLocators.deleteTestLocator);
    await this.waitForTime(3000);
  }

  async exportCompanyPageData() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
    await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
    await this.waitForButton(ContactExportColumLocators.addButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.addButtonLocator);
    await this.waitforLabel(ContactExportColumLocators.nameLabalLocator);
    await this.fillingLabel(ContactExportColumLocators.nameLabalLocator, 'test');
    await this.waitForButton(ContactExportColumLocators.saveButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.saveButtonLocator);
    await this.waitForLocator('//span[text()="test"]');
    await this.waitForTitle('Columns');
    await this.clickOnTitle('Columns');
    await this.deleteAllExceptFirst(this.page);
    await this.waitForButton(ContactExportColumLocators.saveButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.saveButtonLocator);
    await this.waitForLocator('(//input[@type="checkbox"])[2]');
    await this.clickOnLocator('(//input[@type="checkbox"])[2]');
    await this.waitForLocator('(//input[@type="checkbox"])[3]');
    await this.clickOnLocator('(//input[@type="checkbox"])[3]');
    await this.waitForButton(ContactExportColumLocators.exportButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.exportButtonLocator);
    await this.waitForButtonByRow(ContactExportColumLocators.selectButtonLocator);
    await this.clickOnButtonByRow(ContactExportColumLocators.selectButtonLocator);
    await this.waitforLabel(ContactExportColumLocators.exportVisibleColumnLocator);
    await this.checkLabel(ContactExportColumLocators.exportVisibleColumnLocator);
    await this.waitforLabel('Export to CSV file');
    await this.checkLabel('Export to CSV file');
    await this.waitForButton(ContactExportColumLocators.exportNowButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.exportNowButtonLocator);
    await this.waitForHeading(ContactExportColumLocators.csvReadyHeadingLocator);
    const filePath = await this.downloadFile();
    await this.readFileValidateColumnsAndRows(filePath, 2, ["Company Status", "Email Domain", "Company Name",]);
    await this.deleteFile(filePath);
    await this.waitForTime(1000);
    await this.waitForLocator(ContactExportColumLocators.fileCloseButton);
    await this.clickOnLocator(ContactExportColumLocators.fileCloseButton);
    await this.waitForLocator('//span[text()="test"]');
    await this.clickOnLocator('//span[text()="test"]');
    await this.waitForButton(ContactExportColumLocators.manageButtonLocator);
    await this.clickOnButton(ContactExportColumLocators.manageButtonLocator);
    await this.handleAndAcceptDialog(ContactExportColumLocators.deleteTestLocator);
    await this.waitForTime(3000);
  }




}