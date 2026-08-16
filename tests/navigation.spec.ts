
/* 

 Importing two values from the Playwright Test Package.
  - Test defines the test case. Defines behavior.
  - Expect perform an action on the page. Verifies the behavior.

 Test name describes the behavior of the test case. It should be descriptive and meaningful:
 - 'User can navigate from home page to shop page' 
 
 First test case: Verify that the user can navigate from the home page to the shop page. 

 async - browser automation involves asynchronous operations.
 await - waits for the asynchronous operation to complete before moving on. (Used inside the async function)
 JavaScript should not blindly continue before each asynchronous operation finishes.

 page - represents a single tab or window in the browser. 
 goto - navigates to the specified URL. In this case, it navigates to the home page of the application.
      - it means navigate this Playwright-controlled browser page to the base URL root.
 URL was already configured in the playwright.config.ts file. So, we can use '/' to navigate to the home page.
 
 getByRole - finds an element by its role. In this case, it finds the first link with the role of 'link' and name 'Shop'. 
           - Find an accessible element whose role is link and whose accessible name is exactly Shop.
 .first() - selects the first element from the list of elements found by getByRole.
          - intentionally chooses the first matching Shop link.
 Playwright uses strict locators, so clicking a locator that resolves to multiple elements can cause:
 - strict mode violation

 Before clicking, it performs actionability checks such as whether the target is ready to receive interaction.

 The value: /\/shop\/?$/ is a regular expression that matches any URL that starts with '/shop/' and ends with an optional '?' character.
 URL assertion - navigation reach the expected URL. It verifies that the user has successfully navigated to the shop page.
 Heading assertion - verifies that the heading with the text 'Shop' is visible on the page.
 */

import {test, expect} from '@playwright/test';

test('User can navigate from home page to shop page', async ({page}) => {
    await page.goto('/');

    await page.getByRole('link', {name: 'Shop', exact: true}).first().click();

    await expect(page).toHaveURL(/\/shop\/?$/);
    await expect(page.getByRole('heading', {name: 'Shop', exact: true})).toBeVisible();
})