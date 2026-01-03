const { test, expect } = require('@playwright/test');

test('Verify Simple Form Demo', async ({ page }) => {

  // Step 1: Open LambdaTest Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Step 2: Click Simple Form Demo
  await page.getByText('Simple Form Demo').click();

  // Step 3: Enter message
  const message = 'Welcome to LambdaTest';
  await page.getByPlaceholder('Please enter your Message').fill(message);

  // Step 4: Click Get Checked Value
  await page.getByRole('button', { name: 'Get Checked Value' }).click();

  // Step 5: Verify output message
  await expect(page.locator('#message')).toHaveText(message);
});
