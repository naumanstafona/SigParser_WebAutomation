import { APIRequestContext, expect } from '@playwright/test';

export class CompaniesAPI {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // Method to fetch company details with URL and API token as parameters
  async getCompanies(apiUrl: string, apiToken: string) {
    const response = await this.request.get(apiUrl, {
      headers: {
        'accept': 'text/plain',
        'x-api-key': apiToken,
      }
    });

    // Check if the response status is not 200, throw an error and exit
    if (response.status() !== 200) {
      console.error(`Failed to fetch company details: ${response.status()} - ${response.statusText()}`);
      process.exit(1); // Exit the process with a non-zero code
    }

    // Parse the response as JSON to handle the array of company objects
    const companies = await response.json();

    // Ensure that each company object includes the required fields
    companies.forEach((company: any) => {
      if (!company.name || !company.status || !company.lastmodified || !company.details_lastmodified) {
        console.error('Invalid company data format');
        process.exit(1); // Exit if a required field is missing
      }
    });

    return companies; // Return the validated companies data
  }
}
