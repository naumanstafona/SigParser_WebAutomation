import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { CommonLocators } from '../../locators/CommonLocators';
import { CommonSteps } from '../CommonSteps';
import config from '../../config';
import { GridLocators } from '../../locators/25-Grids/GridLocators';
import * as fs from 'fs';
import { parse } from 'csv-parse/sync';

export class Grids extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }

    async downloadFile() {
        const page1Promise = this.page.waitForEvent('popup');
        const downloadPromise = this.page.waitForEvent('download');
        await this.clickOnTextStrict(GridLocators.downloadLocator);
        const page1 = await page1Promise;
        const download = await downloadPromise;
        const filePath = 'Downloaded_files/' + download.suggestedFilename();
        await download.saveAs(filePath);
        await this.waitForTime(2000);
        return filePath;
    }

    async compareCSVResultWithThePageExported(number: string) {
        try {
            console.log('in Coparing file results file');
            await this.navigateTo(config.url + '/Account/App/#/ExportHistory');

            const elementHandle = await this.page.locator('//table[@id="table"]/tbody[1]/tr[1]/td[4]');
            const textContent = await elementHandle.innerText();
            if (number !== textContent) {
                throw new Error(`Mismatch: Expected ${number} but got ${textContent}`);
            }
        } catch (error) {
            console.error('An error occurred during the comparison:', error);
            process.exit(1);
        }
    }

    async readAndPrintCSV(filePath: string, expectedColumns: string[]) {
        try {
            console.log('in reading file');
            // Read the file content and remove BOM if present
            let fileContent = fs.readFileSync(filePath, 'utf8');
            fileContent = fileContent.replace(/^\uFEFF/, '');

            // Parse the CSV data
            const records = parse(fileContent, {
                columns: true,
                skip_empty_lines: true
            });
            console.log(records);
            // Extract headers from the first record
            const actualColumns = Object.keys(records[0]);

            // Verify that the actual columns match the expected columns
            if (expectedColumns.every(column => actualColumns.includes(column))) {
                console.log('CSV columns are as expected.');
            } else {
                console.error('CSV columns do not match expected columns.');
            }
            console.log('Finished reading CSV file.');
            return (records.length);
        } catch (error) {
            console.error(`Error reading CSV file: ${error.message}`);
        }
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

    async exportColumns(expectedVisibleColumns: string[], exportType: boolean) {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForButton(GridLocators.exportButtonLocator);
        await this.clickOnButton(GridLocators.exportButtonLocator);
        await this.waitForButtonByRow(GridLocators.selectButtonLocator);
        await this.clickOnButtonByRow(GridLocators.selectButtonLocator);
        if (exportType) {
            await this.waitforLabel(GridLocators.exportVisibleColumnLocator);
            await this.checkLabel(GridLocators.exportVisibleColumnLocator);
        }
        else {
            await this.waitforLabel(GridLocators.exportAllColumnLocator);
            await this.checkLabel(GridLocators.exportAllColumnLocator);
        }

        await this.waitforLabel('Export to CSV file');
        await this.checkLabel('Export to CSV file');
        await this.waitForButton(GridLocators.exportNowButtonLocator);
        await this.clickOnButton(GridLocators.exportNowButtonLocator);
        await this.waitForHeading(GridLocators.csvReadyHeadingLocator);
        const filePath = await this.downloadFile();
        const number = String(await this.readAndPrintCSV(filePath, expectedVisibleColumns));
        await this.compareCSVResultWithThePageExported((number));
        await this.waitForLocator('(//span[@title="CSV"])[1]');
        await this.deleteFile(filePath);
    }

    async exportColumnsWithSelectedRows(expectedVisibleColumns: string[], selectedRows: number) {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(GridLocators.firstRowSelectorLocator);
        await this.clickOnLocator(GridLocators.firstRowSelectorLocator);
        await this.waitForLocator(GridLocators.SecondRowSelectorLocator);
        await this.clickOnLocator(GridLocators.SecondRowSelectorLocator);
        await this.waitForButton(GridLocators.exportButtonLocator);
        await this.clickOnButton(GridLocators.exportButtonLocator);
        await this.waitForButtonByRow(GridLocators.selectButtonLocator);
        await this.clickOnButtonByRow(GridLocators.selectButtonLocator);
        await this.waitforLabel(GridLocators.exportVisibleColumnLocator);
        await this.checkLabel(GridLocators.exportVisibleColumnLocator);
        await this.waitforLabel('Export to CSV file');
        await this.checkLabel('Export to CSV file');
        await this.waitForButton(GridLocators.exportNowButtonLocator);
        await this.clickOnButton(GridLocators.exportNowButtonLocator);
        await this.waitForHeading(GridLocators.csvReadyHeadingLocator);
        const filePath = await this.downloadFile();
        expect(selectedRows == await this.readAndPrintCSV(filePath, expectedVisibleColumns));
        const number = String(await this.readAndPrintCSV(filePath, expectedVisibleColumns));
        await this.compareCSVResultWithThePageExported((number));
        await this.waitForLocator('(//span[@title="CSV"])[1]');
        await this.deleteFile(filePath);
    }

    async createTestView() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.allValidContactsLocator);
        await this.clickOnLocator(CommonLocators.allValidContactsLocator);
        await this.waitForButton(GridLocators.addButtonLocator);
        await this.clickOnButton(GridLocators.addButtonLocator);
        await this.waitforLabel(GridLocators.nameLabalLocator);
        await this.fillingLabel(GridLocators.nameLabalLocator, 'test');
        await this.waitForButton(GridLocators.saveButtonLocator);
        await this.clickOnButton(GridLocators.saveButtonLocator);
        await this.waitForTime(3000);
        await this.waitForTitle(GridLocators.filtersTitleLocator);
        await this.clickOnTitle(GridLocators.filtersTitleLocator);
        await this.waitForLocator(GridLocators.addFilterButtonLocator);
        await this.clickOnLocator(GridLocators.addFilterButtonLocator);
        await this.waitForTextStrict(GridLocators.selectFieldButtonLocator);
        await this.clickOnTextStrict(GridLocators.selectFieldButtonLocator);
        await this.waitForTextStrict('Overview');
        await this.clickOnTextStrict('Overview');
        await this.waitForElementByTextWithin('#dropdown', 'Contact Status');
        await this.clickElementByTextWithin('#dropdown', 'Contact Status');
        await this.selectingDropdownValue('select[name="value1"]', 'Valid');
        await this.waitForLocator(GridLocators.addPropertyLocator);
        await this.clickOnLocator(GridLocators.addPropertyLocator);
        await this.waitForTextStrict(GridLocators.selectFieldButtonLocator);
        await this.clickOnTextStrict(GridLocators.selectFieldButtonLocator);
        await this.waitForTextStrict('Person');
        await this.clickOnTextStrict('Person');
        await this.waitForElementByTextWithin('#dropdown', 'Full Name');
        await this.clickElementByTextWithin('#dropdown', 'Full Name');
        await this.fillingLocator('input[name="value1"]', 'Custom Contact2');
        await this.waitForButton(GridLocators.saveButtonLocator);
        await this.clickOnButton(GridLocators.saveButtonLocator);
        await this.waitForTime(3000);
        await this.waitForTextStrict('customcontact2@test.com');
        await this.waitForTextStrict('Custom Contact2');
        await this.waitForLocator('//span[text()="test"]');
        await this.clickOnLocator('//span[text()="test"]');
        await this.waitForButton(GridLocators.manageButtonLocator);
        await this.clickOnButton(GridLocators.manageButtonLocator);
        await this.handleAndAcceptDialog(GridLocators.deleteTestLocator);
        await this.waitForTime(3000);
    }


    async manageColumns() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLocator(CommonLocators.allValidContactsLocator);
        await this.clickOnLocator(CommonLocators.allValidContactsLocator);
        await this.waitForLocator('//span[text()="Test View"]');
        await this.clickOnLocator('//span[text()="Test View"]');
        await this.waitForTitle('Columns');
        await this.clickOnTitle('Columns');
        await this.waitForTextStrict('Overview');
        await this.clickOnTextStrict('Overview');
        await this.waitForElementByTextWithin('#modal', 'Date Created');
        await this.clickElementByTextWithin('#modal', 'Date Created');
        await this.waitForElementByTextWithin('#modal', 'Date Last Updated (Details)');
        await this.clickElementByTextWithin('#modal', 'Date Last Updated (Details)');
        await this.waitForButton(GridLocators.saveButtonLocator);
        await this.clickOnButton(GridLocators.saveButtonLocator);
        await this.waitForLocator('(//div[@title="Date Created : Click to Sort"]//div)[1]');
        await this.waitForLocator('(//div[@title="Date Last Updated (Details) : Click to Sort"]//div)[1]');
        await this.waitForTitle('Columns');
        await this.clickOnTitle('Columns');
        await this.waitForLocator('div:nth-child(10) > .c-box__draggable > .c-btn');
        await this.clickOnLocator('div:nth-child(10) > .c-box__draggable > .c-btn');
        await this.waitForLocator('div:nth-child(9) > .c-box__draggable > .c-btn');
        await this.clickOnLocator('div:nth-child(9) > .c-box__draggable > .c-btn');
        await this.waitForButton(GridLocators.saveButtonLocator);
        await this.clickOnButton(GridLocators.saveButtonLocator);
        await this.waitForTime(5000);
        await this.checkLocatorAbsence('(//div[@title="Date Created : Click to Sort"]//div)[1]');
        await this.checkLocatorAbsence('(//div[@title="Date Last Updated (Details) : Click to Sort"]//div)[1]');
    }
}