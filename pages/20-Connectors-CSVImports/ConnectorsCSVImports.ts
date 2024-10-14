import { CommonSteps } from '../CommonSteps';
import { Page } from 'playwright';
import { ConnetorsCSVImportsLocators } from '../../locators/20-Connectors-CSVImports/ConnectorsCSVImports';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { CompaniesLocators } from '../../locators/30-CSV-Imports/CompaniesLocators';
import { CommonLocators } from '../../locators/CommonLocators';


export class ConnectorsCSVImports extends CommonSteps {
  constructor(page: Page) {
    super(page);
  }


  async contactListUpload() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.importButtonLocator);
    await this.clickOnButton(CommonLocators.importButtonLocator);
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.clickOnSelectFileButton();
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/20-Connector-CSVImports/csv sample contacts (6).csv');
    await this.waitForButton(CommonLocators.nextButtonLocator);
    await this.clickOnButton(CommonLocators.nextButtonLocator);
    await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'First Name');
    await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Last Name');
    await this.waitForLocator(CommonLocators.mappingthirddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingthirddropdownLocator, 'Mobile Phone');
    await this.waitForLocator(CommonLocators.mappingfourthdropdownLocator,);
    await this.selectingDropdownValue(CommonLocators.mappingfourthdropdownLocator, 'Address - Street');
    await this.waitForLocator('#dropdown4');
    await this.selectingDropdownValue('#dropdown4', 'Address - City');
    await this.waitForLocator('#dropdown5');
    await this.selectingDropdownValue('#dropdown5', 'Address - State');
    await this.waitForLocator('#dropdown6');
    await this.selectingDropdownValue('#dropdown6', 'Address - Postal Code');
    await this.waitForLocator('#dropdown7');
    await this.selectingDropdownValue('#dropdown7', 'Email Address');
    await this.waitForLocator('#dropdown10');
    await this.selectingDropdownValue('#dropdown10', 'Address - Region');
    await this.waitForLocator('#dropdown11');
    await this.selectingDropdownValue('#dropdown11', 'Address - Country');
    await this.waitForLocator('#dropdown12');
    await this.selectingDropdownValue('#dropdown12', 'Address - Continent');
    await this.waitForLocator('#dropdown14');
    await this.selectingDropdownValue('#dropdown14', 'Job Title');
    await this.waitForLocator('#dropdown17');
    await this.selectingDropdownValue('#dropdown17', 'Tag');
    await this.waitForButton(CommonLocators.importFileLocator);
    await this.clickOnButton(CommonLocators.importFileLocator);
    await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
    await this.waitForTime(20000);
    await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator('//a[normalize-space(text())="CSVContact1 Smith"]');
    await this.waitForLocator('//a[normalize-space(text())="CSVContact2 Jones"]');
    await this.waitForLocator('//span[@title="csvcontact1@binkmail.com"]');
    await this.waitForLocator('//span[@title="csvcontact1@binkmail.com"]');
    await this.waitForLocator('//div[normalize-space(text())="VP of Operations"]');
    await this.waitForLocator('//div[normalize-space(text())="Group Vice President, Procurement"]');

  }

  async csvlistUploadErrorChecking() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.importButtonLocator);
    await this.clickOnButton(CommonLocators.importButtonLocator);
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.clickOnSelectFileButton();
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/20-Connector-CSVImports/csv crm account to domain override (3).xlsx');
    await this.waitForTime(3000);
    await this.waitForButton(CommonLocators.nextButtonLocator);
    await this.handleAndAcceptDialog('//button[contains(@class,"c-btn --secondary")]');
  }

  async companiesListUpload() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForButton(CommonLocators.importButtonLocator);
    await this.clickOnButton(CommonLocators.importButtonLocator);
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.clickOnSelectFileButton();
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/20-Connector-CSVImports/csv sample companies (4).csv');
    await this.waitForButton(CommonLocators.nextButtonLocator);
    await this.clickOnButton(CommonLocators.nextButtonLocator);
    await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
    await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Company Status');
    await this.waitForLocator(CommonLocators.mappingthirddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingthirddropdownLocator, 'Company Name');
    await this.waitForLocator(CommonLocators.mappingfourthdropdownLocator,);
    await this.selectingDropdownValue(CommonLocators.mappingfourthdropdownLocator, 'Company Website');
    await this.waitForLocator('#dropdown4');
    await this.selectingDropdownValue('#dropdown4', 'Company LinkedIn');
    await this.waitForLocator('#dropdown5');
    await this.selectingDropdownValue('#dropdown5', 'Company Phone');
    await this.waitForLocator('#dropdown6');
    await this.selectingDropdownValue('#dropdown6', 'Company Industry');
    await this.waitForLocator('#dropdown11');
    await this.selectingDropdownValue('#dropdown11', 'Company Employees');
    await this.waitForLocator('#dropdown13');
    await this.selectingDropdownValue('#dropdown13', 'Location Name');
    await this.waitForLocator('#dropdown15');
    await this.selectingDropdownValue('#dropdown15', 'Tag');
    await this.waitForButton(CommonLocators.importFileLocator);
    await this.clickOnButton(CommonLocators.importFileLocator);
    await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
    await this.waitForTime(20000);
    await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator('//a[normalize-space(text())="Straus Digital"]');
    await this.waitForLocator('(//div[@class="c-dropdown__text" and text()="transportation/trucking/railroad"])[1]');
    await this.waitForLocator('//span[@title="loginextsolutions.com"]');
    await this.waitForLocator('//div[normalize-space(text())="legal services"]');
    await this.waitForLocator('//a[normalize-space(text())="Mumbai, Maharashtra, India"]');
    await this.waitForLocator('//a[normalize-space(text())="SYMblAI"]');
    await this.waitForLocator('//span[@title="symbl.ai"]');
    await this.waitForLocator('//a[normalize-space(text())="Seattle, Washington, United States"]');
  }


  async coWorkersListUpload() {
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.waitForButton(CommonLocators.importButtonLocator);
    await this.clickOnButton(CommonLocators.importButtonLocator);
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.clickOnSelectFileButton();
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/20-Connector-CSVImports/coworker - import (2).csv');
    await this.waitForButton(CommonLocators.nextButtonLocator);
    await this.clickOnButton(CommonLocators.nextButtonLocator);
    await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
    await this.waitForLocator(CommonLocators.mappingthirddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingthirddropdownLocator, 'Full Name');
    await this.waitForLocator(CommonLocators.mappingfourthdropdownLocator,);
    await this.selectingDropdownValue(CommonLocators.mappingfourthdropdownLocator, 'Job Title');
    await this.waitForLocator('#dropdown4');
    await this.selectingDropdownValue('#dropdown4', 'Coworker Status');
    await this.waitForButton(CommonLocators.importFileLocator);
    await this.clickOnButton(CommonLocators.importFileLocator);
    await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
    await this.waitForTime(20000);
    await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Nate Mosco"])[1]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Nate Mosco"])[2]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Nate Mosco"])[3]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Nate Mosco"])[4]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Paul Mendoza"])[1]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Paul Mendoza"])[2]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Paul Mendoza"])[3]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Paul Mendoza"])[4]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Ryan Watts"])');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Landry Chris"])');
  }

  async contactListUploadSemicolonVersion() {
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForButton(CommonLocators.importButtonLocator);
    await this.clickOnButton(CommonLocators.importButtonLocator);
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.clickOnSelectFileButton();
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/20-Connector-CSVImports/contacts_semicolon_test.csv');
    await this.waitForButton(CommonLocators.nextButtonLocator);
    await this.clickOnButton(CommonLocators.nextButtonLocator);
    await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
    await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Full Name');
    await this.waitForButton(CommonLocators.importFileLocator);
    await this.clickOnButton(CommonLocators.importFileLocator);
    await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
    await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLocator('//span[@title="marcus.ddario@guitars.com"]');

  }

  async coWorkersMergeUpload() {
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.waitForButton(CommonLocators.importButtonLocator);
    await this.clickOnButton(CommonLocators.importButtonLocator);
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.clickOnSelectFileButton();
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/20-Connector-CSVImports/coworker - merge (1).csv');
    await this.waitForButton(CommonLocators.nextButtonLocator);
    await this.clickOnButton(CommonLocators.nextButtonLocator);
    await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
    await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Merge into Email Address');
    await this.waitForLocator(CommonLocators.mappingthirddropdownLocator,);
    await this.selectingDropdownValue(CommonLocators.mappingthirddropdownLocator, 'Full Name');
    await this.waitForLocator(CommonLocators.mappingfourthdropdownLocator,);
    await this.selectingDropdownValue(CommonLocators.mappingfourthdropdownLocator, 'Job Title');
    await this.waitForLocator('#dropdown4');
    await this.selectingDropdownValue('#dropdown4', 'Coworker Status');
    await this.waitForButton(CommonLocators.importFileLocator);
    await this.clickOnButton(CommonLocators.importFileLocator);
    await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
    await this.waitForTime(20000);
    await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Nate Mosco"])[1]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Paul Mendoza"])[1]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Ryan Watts"])[1]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Chris Landry"])[1]');
    await this.waitForLocator('//span[@title="paul@dragnet.com, paul.mendoza@thinktank.com, paul_mendoza@thinktank.com, pmendoza@founderco.com"]');
    await this.waitForLocator('//span[@title="nate@dragnet.com, nate.mosco@dragnet.com, nate_mosco@dragnet.com, nmosco@dragnet.com"]');
    await this.waitForLocator('(//span[@title="watts_ryan@sigparser.com"])[2]');
    await this.waitForLocator('(//span[@title="landry_chris@sigparser.com"])[2]');
  }

  async coWorkersCherryPickUpload() {
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.waitForButton(CommonLocators.importButtonLocator);
    await this.clickOnButton(CommonLocators.importButtonLocator);
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.clickOnSelectFileButton();
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/20-Connector-CSVImports/coworker - cherrypick (1).csv');
    await this.waitForButton(CommonLocators.nextButtonLocator);
    await this.clickOnButton(CommonLocators.nextButtonLocator);
    await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
    await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Merge into Email Address');
    await this.waitForLocator(CommonLocators.mappingthirddropdownLocator,);
    await this.selectingDropdownValue(CommonLocators.mappingthirddropdownLocator, 'Full Name');
    await this.waitForLocator(CommonLocators.mappingfourthdropdownLocator,);
    await this.selectingDropdownValue(CommonLocators.mappingfourthdropdownLocator, 'Job Title');
    await this.waitForLocator('#dropdown4');
    await this.selectingDropdownValue('#dropdown4', 'Coworker Status');
    await this.waitForButton(CommonLocators.importFileLocator);
    await this.clickOnButton(CommonLocators.importFileLocator);
    await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
    await this.waitForTime(20000);
    await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Nate Mosco"])[1]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Nate Mosco"])[2]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Paul Mendoza"])[1]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Ryan Watts"])[1]');
    await this.waitForLocator('(//a[@class="c-link --sm" and text()="Chris"])[1]');
    await this.waitForLocator('//span[@title="watts_ryan@sigparser.com, paul_mendoza@thinktank.com, pmendoza@founderco.com"]');
    await this.waitForLocator('(//span[@title="landry_chris@sigparser.com"])[2]');
    await this.waitForLocator('(//span[@title="nate.mosco@dragnet.com"])[2]');
    await this.waitForLocator('(//span[@title="nate@dragnet.com"])[2]');
    await this.waitForLocator('//span[normalize-space(text())="paul@dragnet.com, paul.mendoza@thinktank.com"]');

  }

  async coWorkersConsumerUpload() {
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.waitForButton(CommonLocators.importButtonLocator);
    await this.clickOnButton(CommonLocators.importButtonLocator);
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.clickOnSelectFileButton();
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/20-Connector-CSVImports/coworker - consume (2).csv');
    await this.waitForButton(CommonLocators.nextButtonLocator);
    await this.clickOnButton(CommonLocators.nextButtonLocator);
    await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    await this.waitForLocator(CommonLocators.mappingFirstdropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Address');
    await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'Merge into Email Address');
    await this.waitForLocator(CommonLocators.mappingthirddropdownLocator,);
    await this.selectingDropdownValue(CommonLocators.mappingthirddropdownLocator, 'Full Name');
    await this.waitForLocator(CommonLocators.mappingfourthdropdownLocator,);
    await this.selectingDropdownValue(CommonLocators.mappingfourthdropdownLocator, 'Job Title');
    await this.waitForLocator('#dropdown4');
    await this.selectingDropdownValue('#dropdown4', 'Coworker Status');
    await this.waitForButton(CommonLocators.importFileLocator);
    await this.clickOnButton(CommonLocators.importFileLocator);
    await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
    await this.waitForTime(20000);
    await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.coworkersLinkLocator);
    await this.waitForLocator('//a[normalize-space(text())="Chris"]');
    await this.clickOnLocator('//a[normalize-space(text())="Chris"]');
    await this.waitForTextStrict(CommonLocators.modalFileDetailsButtonLocator);
    await this.clickOnTextStrict(CommonLocators.modalFileDetailsButtonLocator);
    await this.waitForLocator('//td[normalize-space(text())="landry_chris@sigparser.com"]');
    await this.waitForLocator('//td[normalize-space(text())="watts_ryan@sigparser.com"]');
    await this.waitForLocator('//td[normalize-space(text())="nate@dragnet.com"]');
    await this.waitForLocator('//td[normalize-space(text())="paul@dragnet.com"]');
    await this.waitForLocator('(//i[contains(@class,"c-modal__exit-icon fa")])[1]');
    await this.clickOnLocator('(//i[contains(@class,"c-modal__exit-icon fa")])[1]');

  }






}
