import {test,expect} from '@playwright/test';
import path from 'path';

const UI_URL = 'http://localhost:5173/';

test.beforeEach(async ({page}) => {
    await page.goto(UI_URL);

    //get the sign in button
    await page.getByRole("link",{name: "Sign In"}).click();
 
    await expect(page.getByRole("heading",{name: "Connect With"})).toBeVisible();
 
    await page.locator("[name=email]").fill("admin@gmail.com");
     await page.locator("[name=password]").fill("admin123");
 
     await page.getByRole("button",{name: "Sign In"}).click();
 
     await expect(page.getByText("Login success!")).toBeVisible();
})


test("should allow the user to add a pet",async ({page})=>{
    await page.goto(`${UI_URL}add-pet`);
    await page.locator("[name=name]").fill("test_pet");
    await page.selectOption("[name=age]",{label:"Puppy"});
    await page.selectOption("[name=size]",{label:"Small"});
    await page.selectOption("[name=gender]",{label:"Male"})
    await page.selectOption("[name=breed]",{label:"Pug"})
    await page.locator("[name=description]").fill("test_description");
    
    await page.setInputFiles("[name=imageFiles]",[
        path.join(__dirname,"files","1.png")
    ])
    
    await page.getByRole("button",{name:"Save"}).click();
    await expect(page.getByText("Pet added successfully")).toBeVisible();
})



test("should allow the user to view their pets",async ({page})=>{
    await page.goto(`${UI_URL}my-pets`);
    await expect(page.getByRole("heading",{name:"My Pets"})).toBeVisible();
    await expect(page.getByRole("link",{name:"Add Pet"})).toBeVisible();
    await expect(page.getByText("Drago")).toBeVisible();
    await expect(page.getByText("Golden Retriever")).toBeVisible();
})


test("should allow the user to edit a pet",async ({page})=>{
    await page.goto(`${UI_URL}my-pets`);
    await page.getByRole("link",{name:"View More about Drago"}).click();
    await page.locator("[name=name]").fill("Drago");
    await page.selectOption("[name=age]",{label:"Senior"});
    await page.selectOption("[name=size]",{label:"Large"});
    await page.selectOption("[name=gender]",{label:"Female"});

    await page.setInputFiles("[name=imageFiles]",[
        path.join(__dirname,"files","1.png")
    ])
    

    await page.getByRole("button",{name:"Save"}).click();

    await expect(page.getByText("Pet Saved!")).toBeVisible();
})