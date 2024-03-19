import { test, expect } from '@playwright/test';

const UI_URL = 'http://localhost:5173/';

test('should allow the user to sign in', async ({ page }) => {
   await page.goto(UI_URL);

   //get the sign in button
   await page.getByRole("link",{name: "Sign In"}).click();

   await expect(page.getByRole("heading",{name: "Connect With"})).toBeVisible();

   await page.locator("[name=email]").fill("admin@gmail.com");
    await page.locator("[name=password]").fill("admin123");

    await page.getByRole("button",{name: "Sign In"}).click();

    await expect(page.getByText("Login success!")).toBeVisible();

    await expect(page.getByRole("link",{name:"My Pets"})).toBeVisible();
    await expect(page.getByRole("link",{name:"My Orders"})).toBeVisible();
    await expect(page.getByRole("button",{name:"Sign Out"})).toBeVisible();

});



test("should allow the user to sign up",async ({page})=>{
    const testEmail = `test_register_${Date.now()}@test.com`
    await page.goto(UI_URL);

    await page.getByRole("link",{name:"Sign In"}).click();
    await page.getByRole("link",{name:"Create Account here"}).click();
    await expect(page.getByRole("heading",{name:"Connect With"})).toBeVisible();

    await page.locator("[name=userName]").fill("test_lastName");
    await page.locator("[name=email]").fill(testEmail);
    await page.locator("[name=password]").fill("password123");
    await page.locator("[name=confirmPassword]").fill("password123");

    await page.getByRole("button",{name:"Create Account"}).click();

    await expect(page.getByText("Registration Success!")).toBeVisible();

    // await expect(page.getByRole("link",{name:"My Orders"})).toBeVisible();
    // await expect(page.getByRole("link",{name:"My Pets"})).toBeVisible();
    // await expect(page.getByRole("button",{name:"Sign Out"})).toBeVisible();
})