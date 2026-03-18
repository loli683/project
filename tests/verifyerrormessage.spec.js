const { test,expect} = require('@playwright/test');
test.use({viewport:{width:1536,height:730}})
test('verify error message', async ({page}) =>

{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Enter Email").type("teju@gmail.combjhjh");
    await page.getByPlaceholder("Enter Password").type("1234567888gcgc");
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL(/dashboard/);
  // const errorMessage= await page.locator("//h2[@class='errorMessage']").textContent();

   // console.log("Error message is" +errorMessage);
   // expect(errorMessage.includes("Email")).toBeTruthy()
});