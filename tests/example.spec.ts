import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://beta-app.sigparser.com/');
  await page.getByRole('button', { name: 'Envelope Login with Email' }).click();
  await page.getByPlaceholder('Enter your email address').click();
  await page.getByPlaceholder('Enter your email address').fill('test+stafona+haseeb@dragnettech.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('Panda@2024');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.goto('https://beta-app.sigparser.com/Account/App/#/Default');
  await page.goto('https://beta-app.sigparser.com/Account/App/#/Dashboard');
  await page.getByRole('link', { name: 'Contacts', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('cell', { name: 'Email Address' }).getByPlaceholder('Search...').click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('cell', { name: 'Email Address' }).getByPlaceholder('Search...').click();
  await page.getByRole('cell', { name: 'Email Address joe.doe@csvtest' }).getByPlaceholder('Search...').click();
  await page.getByRole('cell', { name: 'Email Address joe.doe@csvtest' }).getByPlaceholder('Search...').fill('jot.com ');
  await page.getByRole('cell', { name: 'Email Address joe.doe@csvtest' }).getByPlaceholder('Search...').press('ControlOrMeta+ArrowRight');
  await page.getByRole('cell', { name: 'Email Address joe.doe@csvtest' }).getByPlaceholder('Search...').press('Enter');
  await page.getByText('Jonathan Doehopper').click();
  await page.getByRole('cell', { name: 'Ignore' }).click();
});