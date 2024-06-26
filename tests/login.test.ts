import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await expect(page.getByRole('button', { name: 'Import' })).toBeVisible();
  await page.getByRole('button', { name: 'Import' }).click();
  await expect(page.getByRole('heading', { name: 'Import from File' })).toBeVisible();
  await page.locator('section').filter({ hasText: /^SelectImport from FileImport new or updated records from a CSV file\.$/ }).getByRole('link').click();
  await expect(page.getByRole('heading', { name: 'Import From File' })).toBeVisible();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').setInputFiles('Company - DomainTag.csv');
  await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.locator('#dropdown0')).toBeVisible();
  await expect(page.locator('#dropdown0')).toBeVisible();
  await expect(page.locator('#dropdown0')).toBeVisible();
  await page.getByRole('cell', { name: 'Email Domain' }).click();
  await page.locator('#body').click();
  await expect(page.getByRole('cell', { name: 'Tag', exact: true })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Email Domain' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Import File' })).toBeVisible();
  await page.getByRole('button', { name: 'Import File' }).click();
  await page.goto('https://beta-app.sigparser.com/Account/App/#/ImportUploadProgress?listuploadid=1f6d0e4b-752b-4f4e-a8f0-f7d788eb63f6');
  await expect(page.getByText('Queued')).toBeVisible();
  await expect(page.getByText('Queued')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contacts', exact: true })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await expect(page.getByText('Finished', { exact: true })).toBeVisible();
});