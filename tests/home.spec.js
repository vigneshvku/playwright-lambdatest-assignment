const { test, expect } = require('@playwright/test');

test('Verify LambdaTest Playground Home Page', async ({ page }) => {
  // Step 1: Open LambdaTest Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Step 2: Verify page title
  await expect(page).toHaveTitle(/Selenium Grid Online/);

  // Step 3: Verify Simple Form Demo link is visible
  await expect(page.getByText('Simple Form Demo')).toBeVisible();

  // Step 4: Verify Drag & Drop Sliders link is visible
  await expect(page.getByText('Drag & Drop Sliders')).toBeVisible();
});
