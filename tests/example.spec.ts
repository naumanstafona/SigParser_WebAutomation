import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://beta-app.sigparser.com/');
  await page.getByRole('button', { name: 'Envelope Login with Email' }).click();
  await page.getByPlaceholder('Enter your email address').click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByPlaceholder('Enter your email address').fill('test+stafona+haseeb@dragnettech.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('Panda@2024');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.goto('https://beta-app.sigparser.com/Account/App/#/Dashboard');
  await page.getByRole('button', { name: 'Settings ' }).click();
  await page.getByText('Updates').click();
  await page.getByRole('link', { name: 'Contact Update Tracking' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('cell', { name: 'Contact Email Address' }).getByPlaceholder('Search...').fill('delete@csv-delete-test.com');
  await page.getByRole('cell', { name: 'Contact Email Address' }).getByPlaceholder('Search...').click();
  await page.getByRole('row', { name: 'Jul 10 2024 Jul 09 2024 Jul 09 2024 Delete delete@csv-delete-test.com csv-delete-test.com Valid work_phone +1 888-444-5555 888-444-5555 file_import File Import Contact-DeleteFieldValue-1.csv 80 80 Jul 10 2024 Updated', exact: true }).locator('a').first().click();
  await page.getByRole('button', { name: '' }).click();
  await expect(page.locator('td:nth-child(5)').first()).toBeVisible();
  await page.locator('td:nth-child(5)').first().click();
  await page.locator('td:nth-child(5)').first().click();
  await expect(page.getByRole('row', { name: 'Jul 10 2024 Jul 09 2024 Jul 09 2024 Delete delete@csv-delete-test.com csv-delete-test.com Valid work_phone +1 888-444-5555 888-444-5555 file_import File Import Contact-DeleteFieldValue-1.csv 80 80 Jul 10 2024 Updated', exact: true }).locator('a').first()).toBeVisible();
  await page.getByRole('row', { name: 'Jul 10 2024 Jul 09 2024 Jul 09 2024 Delete delete@csv-delete-test.com csv-delete-test.com Valid work_phone +1 888-444-5555 888-444-5555 file_import File Import Contact-DeleteFieldValue-1.csv 80 80 Jul 10 2024 Updated', exact: true }).locator('a').first().click();
  await page.getByText('Details', { exact: true }).click();
  await expect(page.locator('#modal-contact').getByText('+1 888-444-').first()).toBeVisible();
  await page.locator('#modal-contact').getByText('+1 888-444-').nth(1).click({
    button: 'right'
  });
});