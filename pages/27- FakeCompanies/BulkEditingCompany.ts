import { Page } from 'playwright';
import { CommonLocators } from '../../locators/CommonLocators';
import { ContactLocators } from '../../locators/30-CSV-Imports/ContactLocators';
import { FakeCompaniesLocators } from '../../locators/27-FakeCompanies/FakeCompaniesLocators';
import { CommonSteps } from '../CommonSteps';
import config from '../../config';

export class BulkEditingCompany extends CommonSteps {
    constructor(page: Page) {
        super(page);
    }


    async updatingCompaniesStatusFieldtoEmptyValue() {
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        // await this.waitForLocator(FakeCompaniesLocators.selecftAllContactsLocator);
        // await this.clickOnLocator(FakeCompaniesLocators.selecftAllContactsLocator);
        // await this.waitForLocator(FakeCompaniesLocators.updateButtonLocator);
        // await this.clickOnLocator(FakeCompaniesLocators.updateButtonLocator);
        // await this.waitForLocator(FakeCompaniesLocators.updateFieldLocator);
        // await this.clickOnLocator(FakeCompaniesLocators.updateFieldLocator);
        // await this.waitForLocator(FakeCompaniesLocators.contactStatusDropDown);
        // await this.clickOnLocator(FakeCompaniesLocators.contactStatusDropDown);
        // await this.waitForLocator(FakeCompaniesLocators.igonreStatusLocator);
        // await this.clickOnLocator(FakeCompaniesLocators.igonreStatusLocator);
        // await this.waitForLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        // await this.clickOnLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        // await this.waitForLocator(FakeCompaniesLocators.loadingtextLocator);
        // await this.waitForTime(20000);
        // await this.waitForLocator(FakeCompaniesLocators.updatesCompleteLocator);
        // await this.clickOnLocator(FakeCompaniesLocators.updatesCompleteLocator);
        // await this.waitForLocator(FakeCompaniesLocators.closeButtonLocator);
        // await this.clickOnLocator(FakeCompaniesLocators.closeButtonLocator);
        // await this.navigateTo(config.url + '/Account/App/#/BulkFieldUpdates');
        // await this.waitForLocator('(//a[contains(@class,"c-link --sm")])[1]');
        // await this.clickOnLocator('(//a[contains(@class,"c-link --sm")])[1]');
        // await this.waitForLocator('//div[@class="p-profile__field-group u-w-third"]//b[text()="Status"]/following-sibling::div[contains(@class, "c-message") and contains(text(), "Success")]');
        // await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        // await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        // await this.waitForLocator('(//div[@title="Ignore"]//img)[1]');
        // await this.waitForLocator('(//div[@title="Ignore"]//img)[2]');
        // await this.waitForLocator('(//div[@title="Ignore"]//img)[3]');

    }


    async updatingCompaniesStatusFieldtoIgnore() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.selecftAllContactsLocator);
        await this.clickOnLocator(FakeCompaniesLocators.selecftAllContactsLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateFieldLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateFieldLocator);
        await this.waitForLocator(FakeCompaniesLocators.contactStatusDropDown);
        await this.clickOnLocator(FakeCompaniesLocators.contactStatusDropDown);
        await this.waitForLocator(FakeCompaniesLocators.igonreStatusLocator);
        await this.clickOnLocator(FakeCompaniesLocators.igonreStatusLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        await this.waitForLocator(FakeCompaniesLocators.loadingtextLocator);
        await this.waitForTime(20000);
        await this.waitForLocator(FakeCompaniesLocators.updatesCompleteLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updatesCompleteLocator);
        await this.waitForLocator(FakeCompaniesLocators.closeButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.closeButtonLocator);
        await this.navigateTo(config.url + '/Account/App/#/BulkFieldUpdates');
        await this.waitForLocator('(//a[contains(@class,"c-link --sm")])[1]');
        await this.clickOnLocator('(//a[contains(@class,"c-link --sm")])[1]');
        await this.waitForLocator('//div[@class="p-profile__field-group u-w-third"]//b[text()="Status"]/following-sibling::div[contains(@class, "c-message") and contains(text(), "Success")]');
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator('(//div[@title="Ignore"]//img)[1]');
        await this.waitForLocator('(//div[@title="Ignore"]//img)[2]');
        await this.waitForLocator('(//div[@title="Ignore"]//img)[3]');

    }

    async updatingoneCompanyStatusFieldtoIgnore() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.oneContactLocator);
        await this.clickOnLocator(FakeCompaniesLocators.oneContactLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateFieldLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateFieldLocator);
        await this.waitForLocator(FakeCompaniesLocators.contactStatusDropDown);
        await this.clickOnLocator(FakeCompaniesLocators.contactStatusDropDown);
        await this.waitForLocator(FakeCompaniesLocators.igonreStatusLocator);
        await this.clickOnLocator(FakeCompaniesLocators.igonreStatusLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        await this.waitForLocator(FakeCompaniesLocators.loadingtextLocator);
        await this.waitForTime(20000);
        await this.waitForLocator(FakeCompaniesLocators.updatesCompleteLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updatesCompleteLocator);
        await this.waitForLocator(FakeCompaniesLocators.closeButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.closeButtonLocator);
        await this.navigateTo(config.url + '/Account/App/#/BulkFieldUpdates');
        await this.waitForLocator('(//a[contains(@class,"c-link --sm")])[1]');
        await this.clickOnLocator('(//a[contains(@class,"c-link --sm")])[1]');
        await this.waitForLocator('//div[@class="p-profile__field-group u-w-third"]//b[text()="Status"]/following-sibling::div[contains(@class, "c-message") and contains(text(), "Success")]');
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator('(//div[@title="Ignore"]//img)[1]');
        await this.checkLocatorAbsence('(//div[@title="Ignore"]//img)[2]')

    }

    async updatingEmailAddressTypetoNonPerson() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.selecftAllContactsLocator);
        await this.clickOnLocator(FakeCompaniesLocators.selecftAllContactsLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateFieldLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateFieldLocator);
        await this.waitForLocator(FakeCompaniesLocators.contactStatusDropDown);
        await this.clickOnLocator(FakeCompaniesLocators.contactStatusDropDown);
        await this.waitForLocator(FakeCompaniesLocators.igonreStatusLocator);
        await this.clickOnLocator(FakeCompaniesLocators.igonreStatusLocator);
        await this.waitForLocator(FakeCompaniesLocators.selectfieldsButtonlocator);
        await this.clickOnLocator(FakeCompaniesLocators.selectfieldsButtonlocator);
        await this.waitForLocator(FakeCompaniesLocators.emailAddressTypeLocator);
        await this.clickOnLocator(FakeCompaniesLocators.emailAddressTypeLocator);
        await this.waitForLocator('//select[@class="c-input__input" and @name="Email Address Type" and not(option[@selected])]')
        await this.page.selectOption('//select[@class="c-input__input" and @name="Email Address Type"]', 'Non-Person');
        await this.waitForLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        await this.waitForLocator(FakeCompaniesLocators.loadingtextLocator);
        await this.waitForTime(20000);
        await this.waitForLocator(FakeCompaniesLocators.updatesCompleteLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updatesCompleteLocator);
        await this.waitForLocator(FakeCompaniesLocators.closeButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.closeButtonLocator);
        await this.navigateTo(config.url + '/Account/App/#/BulkFieldUpdates');
        await this.waitForLocator('(//a[contains(@class,"c-link --sm")])[1]');
        await this.clickOnLocator('(//a[contains(@class,"c-link --sm")])[1]');
        await this.waitForLocator('//div[@class="p-profile__field-group u-w-third"]//b[text()="Status"]/following-sibling::div[contains(@class, "c-message") and contains(text(), "Success")]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.allValidCompaniesLocator);
        await this.clickOnLocator(CommonLocators.allValidCompaniesLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableCompanyFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableCompanyFields);
        await this.waitForLocator('(//div[@title="Non-Person"])[1]');
        await this.waitForLocator('(//div[@title="Non-Person"])[2]');
        await this.waitForLocator('(//div[@title="Non-Person"])[3]');

    }

    async restoreAll() {
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(FakeCompaniesLocators.selecftAllContactsLocator);
        await this.clickOnLocator(FakeCompaniesLocators.selecftAllContactsLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateButtonLocator);
        await this.waitForLocator(FakeCompaniesLocators.updateFieldLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateFieldLocator);
        await this.waitForLocator(FakeCompaniesLocators.contactStatusDropDown);
        await this.clickOnLocator(FakeCompaniesLocators.contactStatusDropDown);
        await this.waitForLocator(FakeCompaniesLocators.validStatusLocator);
        await this.clickOnLocator(FakeCompaniesLocators.validStatusLocator);
        await this.waitForTime(2000);
        await this.waitForLocator(FakeCompaniesLocators.selectfieldsButtonlocator);
        await this.clickOnLocator(FakeCompaniesLocators.selectfieldsButtonlocator);
        await this.page.selectOption('//select[@class="c-input__input" and @name="Email Address Type"]', 'Person');
        await this.waitForLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        await this.clickOnLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
        await this.waitForLocator(FakeCompaniesLocators.loadingtextLocator);
        await this.waitForTime(20000);
        await this.waitForLocator(FakeCompaniesLocators.updatesCompleteLocator);
        await this.clickOnLocator(FakeCompaniesLocators.updatesCompleteLocator);
        await this.waitForLocator(FakeCompaniesLocators.closeButtonLocator);
        await this.clickOnLocator(FakeCompaniesLocators.closeButtonLocator);
        await this.navigateTo(config.url + '/Account/App/#/BulkFieldUpdates');
        await this.waitForLocator('(//a[contains(@class,"c-link --sm")])[1]');
        await this.clickOnLocator('(//a[contains(@class,"c-link --sm")])[1]');
        await this.waitForLocator('//div[@class="p-profile__field-group u-w-third"]//b[text()="Status"]/following-sibling::div[contains(@class, "c-message") and contains(text(), "Success")]');
        await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
        await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
        await this.waitForLocator(CommonLocators.allValidContactsLocator);
        await this.clickOnLocator(CommonLocators.allValidContactsLocator);
        await this.waitForLocator(FakeCompaniesLocators.editableContactFields);
        await this.clickOnLocator(FakeCompaniesLocators.editableContactFields);
        await this.waitForLocator('(//div[@title="Person"])[1]');
        await this.waitForLocator('(//div[@title="Person"])[2]');
        await this.waitForLocator('(//div[@title="Person"])[3]');
        await this.waitForLocator('(//div[@title="Valid"]//img)[1]');
        await this.waitForLocator('(//div[@title="Valid"]//img)[2]');
        await this.waitForLocator('(//div[@title="Valid"]//img)[3]');

    }

    // async updatingOneEmailAddressTypetoNonPerson() {
    //     await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForLocator(FakeCompaniesLocators.oneContactLocator);
    //     await this.clickOnLocator(FakeCompaniesLocators.oneContactLocator);
    //     await this.waitForLocator(FakeCompaniesLocators.updateButtonLocator);
    //     await this.clickOnLocator(FakeCompaniesLocators.updateButtonLocator);
    //     await this.waitForLocator(FakeCompaniesLocators.updateFieldLocator);
    //     await this.clickOnLocator(FakeCompaniesLocators.updateFieldLocator);
    //     await this.waitForLocator(FakeCompaniesLocators.contactStatusDropDown);
    //     await this.clickOnLocator(FakeCompaniesLocators.contactStatusDropDown);
    //     await this.waitForLocator(FakeCompaniesLocators.igonreStatusLocator);
    //     await this.clickOnLocator(FakeCompaniesLocators.igonreStatusLocator);
    //     await this.waitForLocator(FakeCompaniesLocators.selectfieldsButtonlocator);
    //     await this.clickOnLocator(FakeCompaniesLocators.selectfieldsButtonlocator);
    //     //  await this.waitForLocator(FakeCompaniesLocators.emailAddressTypeLocator);
    //     //  await this.clickOnLocator(FakeCompaniesLocators.emailAddressTypeLocator);
    //     await this.waitForLocator('//select[@class="c-input__input" and @name="Email Address Type" and not(option[@selected])]')
    //     await this.page.selectOption('//select[@class="c-input__input" and @name="Email Address Type"]', 'Non-Person');
    //     await this.waitForLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
    //     await this.clickOnLocator(FakeCompaniesLocators.updateFieldsSubmitlocator);
    //     await this.waitForLocator(FakeCompaniesLocators.loadingtextLocator);
    //     await this.waitForTime(20000);
    //     await this.waitForLocator(FakeCompaniesLocators.updatesCompleteLocator);
    //     await this.clickOnLocator(FakeCompaniesLocators.updatesCompleteLocator);
    //     await this.waitForLocator(FakeCompaniesLocators.closeButtonLocator);
    //     await this.clickOnLocator(FakeCompaniesLocators.closeButtonLocator);
    //     await this.navigateTo(config.url + '/Account/App/#/BulkFieldUpdates');
    //     await this.waitForLocator('(//a[contains(@class,"c-link --sm")])[1]');
    //     await this.clickOnLocator('(//a[contains(@class,"c-link --sm")])[1]');
    //     await this.waitForLocator('//div[@class="p-profile__field-group u-w-third"]//b[text()="Status"]/following-sibling::div[contains(@class, "c-message") and contains(text(), "Success")]');
    //     await this.waitForLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.companiesLinkLocator);
    //     await this.waitForLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.clickOnLinkButtonstrict(CommonLocators.contactsLinkLocator);
    //     await this.waitForLocator(CommonLocators.allValidContactsLocator);
    //     await this.clickOnLocator(CommonLocators.allValidContactsLocator);
    //     await this.waitForLocator(FakeCompaniesLocators.editableContactFields);
    //     await this.clickOnLocator(FakeCompaniesLocators.editableContactFields);
    //     await this.waitForLocator('(//div[@title="Non-Person"])[1]');
    //     await this.checkLocatorAbsence('(//div[@title="Non-Person"])[2]');
    // }


}