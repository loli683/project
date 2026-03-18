const { test } = require('@playwright/test');

test('Launch URL', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  
});