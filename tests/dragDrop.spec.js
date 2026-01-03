const { test, expect } = require('@playwright/test');

test('Verify Drag and Drop Slider', async ({ page }) => {

  // Step 1: Open LambdaTest Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Step 2: Click Drag & Drop Sliders
  await page.getByText('Drag & Drop Sliders').click();

  // Step 3: Locate slider (Default value 15)
  const slider = page.locator('input[value="15"]');
  const output = page.locator('#rangeSuccess');

  // Step 4: Drag slider to the right (increase value)
  await slider.focus();
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press('ArrowRight');
  }

  // Step 5: Verify value is changed (not 15)
  await expect(output).not.toHaveText('15');

  // Step 6: Optional log (for clarity)
  console.log('Slider value:', await output.textContent());
});

