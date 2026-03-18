const {test} = require('@playwright/test');


test('First Playwright test', async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
}
);
test.only('page Playwright test', async({page})=>
{
    await page.goto("https://google.com");
});
