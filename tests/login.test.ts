import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://beta-app.sigparser.com/');
  await page.getByRole('button', { name: 'Envelope Login with Email' }).click();
  await page.getByPlaceholder('Enter your email address').click();
  await page.getByPlaceholder('Enter your email address').fill('test+stafona+haseeb@dragnettech.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('Panda@2024');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.goto('https://beta-app.sigparser.com/Account/App/#/Dashboard');
  await page.getByRole('link', { name: 'Contacts', exact: true }).click();
  await page.getByRole('button', { name: 'Import' }).click();
  await page.locator('section').filter({ hasText: /^SelectImport from FileImport new or updated records from a CSV file\.$/ }).getByRole('link').click();
  await page.goto('https://beta-app.sigparser.com/Account/App/#/Contacts');
  await page.getByRole('link', { name: 'Contacts' }).click();
  await page.getByRole('button', { name: 'Import' }).click();
  await expect(page.getByRole('heading', { name: 'Import Contact Data' })).toBeVisible();
  await page.locator('section').filter({ hasText: /^SelectImport from FileImport new or updated records from a CSV file\.$/ }).getByRole('link').click();
  await page.locator('input[name="customerCSV"]').click();
});