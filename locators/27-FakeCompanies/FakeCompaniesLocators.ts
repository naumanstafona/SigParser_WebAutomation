export const FakeCompaniesLocators = {
    locationMarkerLocators: '//div[contains(@class,"c-input --horizontal")]//button[1]',
    locationZoomLocator: '//span[normalize-space(text())="+"]',
    removeLocationLocator: '(//div[contains(@class,"c-input --horizontal")]//button)[2]',
    applyButtonLocator: '//button[text()="Apply"]',
    locationVerificationLocator: '(//span[@title="Kansas City, Missouri, United States"])[1]',
    ukScotlandLocator: '(//span[@title="Scotland, United Kingdom"])[1]',
    nebraskaLocator: '(//span[@title="Nebraska, United States"])[1]',
    netherlandsLocator: '(//span[@title="Emmeloord, Flevoland, Netherlands"])[1]',
    logoutLocator: '//a[normalize-space(text())="Log Out"]',
    exportButtonLocator: 'Export',
    exportToCSVHeadingLocator: 'Export to CSV file',
    selectButtonLocator: 'Select Export to CSV file',
    exportNowButtonLocator: '//button[normalize-space(text())="Export Now"]',
    csvReadyHeadingLocator: 'CSV File Ready to Download',
    downloadLocator: 'Download',
    exportVisibleColumnLocator: 'Export visible columns',
    exportAllColumnLocator: 'Export all columns',
    exportModalCloseButton: '//i[contains(@class,"c-modal__exit-icon fa")]',
    noDataLocator: '//div[@class="c-screen__title"][span[text()="Contacts"] and span[3][text()="0"]]',
    mailBoxLocator: '//th[@title="Source Mailboxes"]//input[@type="text" and @placeholder="Search..." and contains(@class, "c-input__input")]',
    fullNameLocator: '//th[@title="Full Name"]//input[@type="text" and @placeholder="Search..." and contains(@class, "c-input__input")]',
    adminLocator: '//a[normalize-space(text())="Admin"]',
    latestSignatureEnabled: '//tr[@class="c-table-static__row" and .//td/b[text()="Can View Latest Email Signatures"]]//button[text()="Enabled"]',
    latestSignatureDisabled: '//tr[@class="c-table-static__row" and .//td/b[text()="Can View Latest Email Signatures"]]//button[text()="Disabled"]',
    emailSignatureEnabledLocator: '//div[text()="Email Signature"]/following-sibling::div[@class="p-profile__section u-m-t-0 u-flex-c-c u-justify-between u-m-b-5"]//div[contains(., "Dob dobbie") and contains(., "Principal Dobber") and contains(., "Dob@Dob.com")]',
    contactModalClose: '//i[contains(@class,"c-modal__exit-icon fa")]',
    firstContactCoworkerLocator: '(//img[@alt="Active"])[1]',
    verifyInactiveStatus: '(//img[@alt="Inactive"])[1]',
    verifyIgnoreStatus: '(//img[@alt="Ignore"])[1]',
    activeLocator: '//*[text()="Active"]',
    inactiveLocator: '//*[text()="Inactive"]',
    ignoreLocator: '//*[text()="Ignore"]',
    jimCheckBoxLocator: '(//input[@type="checkbox"])[2]',
    updateButtonLocator: '//button[normalize-space(text())="Update"]',
    primaryEmailLocator: '//tr[@class="c-table-static__row" and .//td[@class="c-table-static__item" and text()="jim.halpert@fakecompany.com"] and .//img[contains(@src, "icon-green-check.svg")]]',
    plusButtonLocatoe: '//i[contains(@class,"fa fa-plus")]',
    searchInputLocator: '(//input[@placeholder="Search"])[2]',
    searchButtonLocator: '//button[@type="submit"]',
    dwightCheckboxLocator: '(//input[@type="checkbox"])[3]',
    addSelectedButtonLocator: '//button[normalize-space(text())="Add Selected"]',
    dwightemailLocator: '//a[normalize-space(text())="dschrute@fakecompany.com"]',
    trashLocator: '(//i[contains(@class,"c-btn --sm")])[1]',
    contactTabinModalLocator: '//span[normalize-space(text())="Contacts"]',
    companiesTabinModalLocator: '//span[normalize-space(text())="Companies"]',
    cworkersTabinModalLocator: '(//span[normalize-space(text())="Coworkers"])[2]',
    contactColumnInContacts: '//th[normalize-space(text())="Contact"]',
    companyColumnInComapnies: '//th[normalize-space(text())="Company"]',
    coworkerColumnInCoworkers: '(//th[text()="Coworker"]/following-sibling::th)[1]',
    errorMessageLocator: '//p[@class="c-message --error u-p-b-3" and contains(text(), "Sorry, you dont have the \'Access Team Metrics\' permission.")]',
    logOutLocator: '//a[normalize-space(text())="Log Out"]',
    hasDataLocator: '(//table[@class="c-table-static"]/tbody/tr[count(td) > 0])[1]',
    janetteContactLocator: '//span[normalize-space(text())="Janette Piecha"]',
    janetteContactModalLocator: '//p[normalize-space(text())="janette.piecha@hydeparkumc.org"]',
    novastyleCompanyLocator: '//span[normalize-space(text())="Novasyte Llc"]',
    jnovaCompanyModalLocator: '//p[normalize-space(text())="novasyte.com"]',
    searchNavLocator: '//input[@placeholder="Search"]',
    integromatLocator: '//div[normalize-space(text())="Integromat User"]',
    companyNameSearchLocator: '(//input[@placeholder="Search..."])[1]',
    genCompanyLocator: '//div[normalize-space(text())="Generalitat de Catalunya"]',
    tobyCompanyLocator: '//div[normalize-space(text())="Toby Flenderson"]',
    changeCRMButtonLocator: 'Change CRM Company Match',
    originalCRMValue: '//div[normalize-space(text())="001NS00000V9O1GYAV"]',
    agileCMSelector: '//tr[@class="c-table-static__row" and .//td[contains(text(), "airtable.com")] and .//td[contains(text(), "001NS00000V9IruYAF")]]//img[@alt="Radio Button"]',
    fakeCRMValue: '//div[normalize-space(text())="001NS00000V9IruYAF"]',
    approveButtonLocator: 'Approve',
    clearButtonLocator: 'Clear',
    editableContactFields: '//div[@title="Editable Contact Field"]//span[1]',
    editableCompanyFields: '//div[@title="Editable Company Field"]//span[1]',
    editableCoworkerFields: '//div[@title="Editable Coworker Field"]//span[1]',
    allActiveCoworkersLocator: '//span[text()="All Active Coworkers"]',
    selecftAllContactsLocator: '(//input[@type="checkbox"])[1]',
    updateFieldLocator: '(//button[contains(@class,"c-btn --secondary")])[2]',
    contactStatusDropDown: '(//i[contains(@class,"fa fa-angle-down")])[3]',
    igonreStatusLocator: '//div[normalize-space(text())="Ignore"]',
    validStatusLocator: '//div[normalize-space(text())="Valid"]',
    updateFieldsSubmitlocator: '//button[contains(text(),"Update Fields")]',
    loadingtextLocator: '//p[normalize-space(text())="You can close this window and the fields will still be updated."]',
    updatesCompleteLocator: '//div[normalize-space(text())="Updates Complete"]',
    closeButtonLocator: '//button[normalize-space(text())="Close"]',
    selectfieldsButtonlocator: '//div[normalize-space(text())="Select Fields to Update"]',
    emailAddressTypeLocator: '//div[normalize-space(text())="Email Address Type"]',
    emailAddressTypeDropdownLocator: '//select[contains(.,"PersonNon-Person")]',
    oneContactLocator: '(//input[@type="checkbox"])[2]',

};