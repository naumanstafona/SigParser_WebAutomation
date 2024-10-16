import { CommonSteps } from '../CommonSteps';
import { Page } from 'playwright';
import { ConnetorsCSVImportsLocators } from '../../locators/20-Connectors-CSVImports/ConnectorsCSVImports';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { CompaniesLocators } from '../../locators/30-CSV-Imports/CompaniesLocators';
import { CommonLocators } from '../../locators/CommonLocators';
import config from '../../config';


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

  async csvImportPermissionCompanyAndContact() {

    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ConnetorsCSVImportsLocators.userSLocator);
    await this.clickOnTextStrict(ConnetorsCSVImportsLocators.userSLocator);
    await this.waitForLinkButtonstrict(ConnetorsCSVImportsLocators.rolesLocator);
    await this.clickOnLinkButtonstrict(ConnetorsCSVImportsLocators.rolesLocator);
    await this.waitForLinkButtonstrict(ConnetorsCSVImportsLocators.mailBoxAdminButtonLocator);
    await this.clickOnLinkButtonstrict(ConnetorsCSVImportsLocators.mailBoxAdminButtonLocator);
    await this.waitForButtonByRow('Enabled Can Manage Coworkers');
    await this.clickOnButtonByRow('Enabled Can Manage Coworkers');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(5000);
    await this.navigateTo(config.url + '/Account/App/#/Contacts');
    await this.waitForLocator('//button[normalize-space(text())="Import"]');
    await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    await this.waitForLocator('//button[normalize-space(text())="Import"]');
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.checkLocatorAbsence('//button[normalize-space(text())="Import"]');
    await this.navigateTo(config.url + '/Account/App#/ImportList?origin=Coworker');
    await this.waitForLocator(ConnetorsCSVImportsLocators.importContactDataDropdownLocator);
    await this.checkLocatorAbsence(ConnetorsCSVImportsLocators.coworkerOptionLocator);
    await this.navigateTo(config.url + '/Account/App#/ImportList');
    await this.waitForLocator(ConnetorsCSVImportsLocators.contactOptionLocator);
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.navigateTo(config.url + '/Account/App#/ImportList?origin=Contact');
    await this.waitForLocator(ConnetorsCSVImportsLocators.contactOptionLocator);
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.navigateTo(config.url + '/Account/App#/ImportList?origin=Company');
    await this.waitForLocator(ConnetorsCSVImportsLocators.companyOptionLocator);
  }

  async enableCanManageCoworkers() {
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ConnetorsCSVImportsLocators.userSLocator);
    await this.clickOnTextStrict(ConnetorsCSVImportsLocators.userSLocator);
    await this.waitForLinkButtonstrict(ConnetorsCSVImportsLocators.rolesLocator);
    await this.clickOnLinkButtonstrict(ConnetorsCSVImportsLocators.rolesLocator);
    await this.waitForLinkButtonstrict(ConnetorsCSVImportsLocators.mailBoxAdminButtonLocator);
    await this.clickOnLinkButtonstrict(ConnetorsCSVImportsLocators.mailBoxAdminButtonLocator);
    await this.clickAllButtons();
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(5000);

  }

  async clickAllButtons() {
    await this.waitForTime(5000);
    const buttonLocator = '//button[normalize-space(text())="Disabled"]';

    try {
      // Find all buttons matching the locator
      const buttons = await this.page.locator(buttonLocator);

      // Get the count of matching buttons
      const buttonCount = await buttons.count();

      // Loop through each button and click it
      for (let i = 0; i < buttonCount; i++) {
        // Click each button by index
        await buttons.nth(0).click();
        console.log(`Button ${i + 1} clicked successfully.`);
        // Optionally, wait for some action to occur after the click
        await this.page.waitForTimeout(500); // Adjust the timeout as needed
      }

      console.log('All buttons clicked successfully.');
    } catch (error) {
      // Handle any errors that occur during the check or click
      console.error('An error occurred:', error);
      process.exit(1);
    }
  }


  async csvImportPermissionCoworkers() {
    await this.waitForButton(CommonLocators.settingButtonLocator);
    await this.clickOnButton(CommonLocators.settingButtonLocator);
    await this.waitForTextStrict(ConnetorsCSVImportsLocators.userSLocator);
    await this.clickOnTextStrict(ConnetorsCSVImportsLocators.userSLocator);
    await this.waitForLinkButtonstrict(ConnetorsCSVImportsLocators.rolesLocator);
    await this.clickOnLinkButtonstrict(ConnetorsCSVImportsLocators.rolesLocator);
    await this.waitForLinkButtonstrict(ConnetorsCSVImportsLocators.mailBoxAdminButtonLocator);
    await this.clickOnLinkButtonstrict(ConnetorsCSVImportsLocators.mailBoxAdminButtonLocator);
    await this.waitForButtonByRow('Enabled Can Manage Coworkers');
    await this.clickOnButtonByRow('Enabled Can Manage Coworkers');
    await this.waitForButtonByRow('Enabled Can Import Contact &');
    await this.clickOnButtonByRow('Enabled Can Import Contact &');
    await this.waitForButton(CommonLocators.saveLocator);
    await this.clickOnButton(CommonLocators.saveLocator);
    await this.waitForTime(5000);
    await this.navigateTo(config.url + '/Account/App/#/Contacts');
    await this.checkLocatorAbsence('//button[normalize-space(text())="Import"]');
    await this.waitForLinkButton(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButton(CommonLocators.companiesLinkLocator);
    await this.checkLocatorAbsence('//button[normalize-space(text())="Import"]');
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.checkLocatorAbsence('//button[normalize-space(text())="Import"]');
    await this.navigateTo(config.url + '/Account/App#/ImportList');
    await this.waitForLocator('//select[contains(.,"Please contact Administrator to grant account import permissions")]');
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.navigateTo(config.url + '/Account/App#/ImportList?origin=Contact');
    await this.waitForLocator('//select[contains(.,"Please contact Administrator to grant account import permissions")]');
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.navigateTo(config.url + '/Account/App#/ImportList?origin=Coworker');
    await this.waitForLocator('//select[contains(.,"Please contact Administrator to grant account import permissions")]');
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.navigateTo(config.url + '/Account/App#/ImportList?origin=Company%C2%A0');
    await this.waitForLocator('//select[contains(.,"Please contact Administrator to grant account import permissions")]');
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.navigateTo(config.url + '/Account/App#/ImportHistory');
    await this.waitForLocator('//div[normalize-space(text())="Please contact an administrator to grant your user role permissions"]');
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.enableCanManageCoworkers();
    await this.waitForLinkButton(CommonLocators.coworkersLinkLocator);
    await this.clickOnLinkButton(CommonLocators.coworkersLinkLocator);
    await this.waitForLocator('//button[normalize-space(text())="Import"]');
    await this.checkHistory();

  }

  async checkHistory() {
    const contactLocator = '(//span[@title="Contact"])';
    const companyLocator = '(//span[@title="Company"])';

    try {
      // Find all buttons matching the locators
      const contacts = await this.page.locator(contactLocator);
      const companies = await this.page.locator(companyLocator);

      // Get the count of matching buttons
      const contactCount = await contacts.count();
      const companyCount = await companies.count();

      if (contactCount > 0) {
        throw new Error(`Test failed: ${contactCount} "Contact" buttons found.`);
      }

      if (companyCount > 0) {
        throw new Error(`Test failed: ${companyCount} "Company" buttons found.`);
      }

      console.log('No "Contact", or "Company" buttons found. Test passed.');
    } catch (error) {
      // If any error occurs or test fails, log the error and fail the test
      console.error('An error occurred:', error);
      throw error; // Throwing the error will fail the test
    }
  }

  async company_CRM_Account_to_Domain_Override() {
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForButton(CommonLocators.importButtonLocator);
    await this.clickOnButton(CommonLocators.importButtonLocator);
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.clickOnSelectFileButton();
    await this.waitForHeading(CommonLocators.importFromFileHeadingLocator);
    await this.waitForLocator(CommonLocators.ChooseFileTextBoxLocator);
    await this.uploadFile(CommonLocators.ChooseFileTextBoxLocator, 'Uploads/20-Connector-CSVImports/csv crm account to domain override - Copy of Template 3.csv');
    await this.waitForButton(CommonLocators.nextButtonLocator);
    await this.clickOnButton(CommonLocators.nextButtonLocator);
    await this.waitForHeading(CommonLocators.mapDataFieldLocators);
    await this.selectingDropdownValue(CommonLocators.mappingFirstdropdownLocator, 'Email Domain');
    await this.waitForLocator(CommonLocators.mappingSeconddropdownLocator);
    await this.selectingDropdownValue(CommonLocators.mappingSeconddropdownLocator, 'CRM Company ID');
    await this.waitForButton(CommonLocators.importFileLocator);
    await this.clickOnButton(CommonLocators.importFileLocator);
    await this.waitForTextStrict(CommonLocators.statusQueuedNameLocator);
    await this.waitForTime(20000);
    await this.waitForTextStrict(CommonLocators.statusFinishedNameLocator);
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
    await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
    await this.waitForLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.clickOnLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ConnetorsCSVImportsLocators.crmCompanyMatchTypeLocator);
    await this.fillingEmailDomainPlaceholder(ConnetorsCSVImportsLocators.crmCompanyMatchTypeLocator, 'Blocked');
    await this.waitForTime(2000);
    await this.waitForLocator('//span[@title="phrazor.com"]');
    await this.waitForLocator('//span[@title="hrtechoutlook.com"]');
    await this.waitForLocator('//span[@title="gnemmigioielli.it"]');
    await this.waitForLocator('//span[@title="katmex.co.uk"]');
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
    await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
    await this.waitForLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.clickOnLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ConnetorsCSVImportsLocators.crmCompanyMatchTypeLocator);
    await this.fillingEmailDomainPlaceholder(ConnetorsCSVImportsLocators.crmCompanyMatchTypeLocator, 'approved');
    await this.waitForTime(2000);
    await this.waitForLocator('//span[@title="sccombank.com"]');
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
    await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
    await this.waitForLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.clickOnLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore);
    await this.fillingEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore, 'dell.com');
    await this.waitForTime(2000);
    await this.waitForLocator('//td[contains(.,"None")]');
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
    await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
    await this.waitForLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.clickOnLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore);
    await this.fillingEmailDomainPlaceholder(CompaniesLocators.emailDomainPLaceholderLocatore, 'movitex.com');
    await this.waitForTime(2000);
    await this.waitForLocator('//td[contains(.,"None")]');
    await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
    await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
    await this.waitForLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.clickOnLocator('//span[normalize-space(text())="CRM Connector"]');
    await this.waitForButton(CommonLocators.searchButtonLocator);
    await this.clickOnButton(CommonLocators.searchButtonLocator);
    await this.waitingForEmailDomainPlaceholder(ConnetorsCSVImportsLocators.crmCompanyMatchTypeLocator);
    await this.fillingEmailDomainPlaceholder(ConnetorsCSVImportsLocators.crmCompanyMatchTypeLocator, 'auto');
    await this.waitForTime(2000);
    await this.waitForLocator('//span[@title="mode-sf.com"]');
  }


}
