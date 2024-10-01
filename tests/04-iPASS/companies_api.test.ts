import { test, expect, APIRequestContext } from '@playwright/test';
import { CompaniesAPI } from '../../pages/04-iPASS/CompaniesAPI';

test('Login via UI and use API', async ({ playwright }) => {
    // Load the storage state for authenticated API requests
    const requestContext: APIRequestContext = await playwright.request.newContext({
        //   storageState: 'storageState.json'  // Use the saved state from login
    });

    // Instantiate the CompaniesAPI with the authenticated request context
    const companiesAPI = new CompaniesAPI(requestContext);

    // Fetch companies after login
    const companies = await companiesAPI.getCompanies('https://beta-app-ipaas.sigparser.com/api/Companies?lastmodified_after=100', 'SV/lhr/Fg6Az+EDwU/IqaddANwyjdCvWVZs+KJZEfZWH1FlKw6MWko+MG9OZCvqLRn9h72+aNxlYj7dgucG40Q==');

    // Log the companies details to the console
    console.log(companies);

    // Extract and log the lastmodified value for the second company
    const secondCompanyLastModified = companies.length > 1 ? companies[1].lastmodified : null;
    const secondCompanyName = companies.length > 1 ? companies[1].name : null;

    if (secondCompanyLastModified !== null && secondCompanyName !== null) {
        console.log(`The lastmodified value for the second company is ${secondCompanyLastModified}.`);

        // Construct new URL with the secondCompanyLastModified value
        const newUrl = `https://beta-app-ipaas.sigparser.com/api/Companies?lastmodified_after=${secondCompanyLastModified}`;

        // Fetch companies with the new URL
        const companies2 = await companiesAPI.getCompanies(newUrl, 'SV/lhr/Fg6Az+EDwU/IqaddANwyjdCvWVZs+KJZEfZWH1FlKw6MWko+MG9OZCvqLRn9h72+aNxlYj7dgucG40Q==');

        // Log the second set of companies details to the console
        console.log(companies2);

        // Check if any company in the second response matches the second company name
        const companyNameExists = companies2.some((company: any) => company.name === secondCompanyName);

        // Assert if the second company name is found in the new companies list
        expect(companyNameExists).toBe(true);

        const firstCompanyDomain = companies2.length > 0 ? companies2[0].domain : null;
        const firstCompanyName = companies2.length > 0 ? companies2[0].name : null;
        if (firstCompanyDomain !== null && firstCompanyName !== null) {
            console.log(`The domain of the first company (${firstCompanyName}) is ${firstCompanyDomain}.`);

            // Construct new URL using the domain
            const domainUrl = `https://beta-app-ipaas.sigparser.com/api/Companies?domain=${firstCompanyDomain}`;

            // Fetch companies with the domain URL
            const companiesByDomain = await companiesAPI.getCompanies(
                domainUrl,
                'SV/lhr/Fg6Az+EDwU/IqaddANwyjdCvWVZs+KJZEfZWH1FlKw6MWko+MG9OZCvqLRn9h72+aNxlYj7dgucG40Q=='
            );

            // Log the companies details filtered by domain
            console.log(companiesByDomain);

            const companyDomainExists = companies2.some((company: any) => company.domain === firstCompanyDomain);

            // Assert if the second company name is found in the new companies list
            expect(companyDomainExists).toBe(true);

            // You can further process companiesByDomain here if needed
        } else {
            console.error('Domain or company name is not available for the first company.');
        }

    } else {
        console.error('Second company data is not available.');
        process.exit(1);
    }

    // Close the request context when done
    await requestContext.dispose();
});
