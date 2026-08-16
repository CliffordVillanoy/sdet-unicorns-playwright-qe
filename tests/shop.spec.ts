/*  */

import {test, expect} from '@playwright/test';

test('Shop displays available products', async ({page}) => {
    await page.goto('/shop');

    await expect(
     page.getByRole('heading', {name: 'Shop', exact: true})
    ).toBeVisible();

    await expect (
     page.getByRole('link', {name: 'Converse Converse $'})        
    ).toBeVisible();

    await expect (
      page.getByRole('link', {name: 'Headphone Headphone $'})  
    ).toBeVisible();

});