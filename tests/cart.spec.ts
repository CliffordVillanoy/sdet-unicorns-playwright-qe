import { test, expect } from '@playwright/test';

test('user adds Converse to the cart', async ({ page }) => {
  await page.goto('/shop');

  const addConverseToCartButton = page.getByRole('button', {
  name: 'Add to cart: “Converse”',
});

await addConverseToCartButton.click();

const viewCartLink = page.getByRole ('link', {
    name: 'View cart',
})

await expect(viewCartLink).toBeVisible();

});