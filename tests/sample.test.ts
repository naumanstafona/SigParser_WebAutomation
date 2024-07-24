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
  await page.getByTitle('Columns', { exact: true }).click();
  await page.getByText('Custom Fields(1)').click();
  await expect(page.locator('span').filter({ hasText: 'Test Contact Text Area' })).toBeVisible();
  await expect(page.getByText('Description for Custom')).toBeVisible();
  await expect(page.locator('#modal').getByText('Test Contact Text Area')).toBeVisible();
});