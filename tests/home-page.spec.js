//home-page.spec.js
import { test, expect } from '@playwright/test';

// Describe block for Homepage tests
test.describe('Amazon Homepage Tests', () => {
 
  // Fixture to visit the Amazon homepage
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com', { timeout: 60000 });
  });

  test('should display Amazon logo', async ({ page }) => {
    const logo = page.locator('id=nav-logo-sprites');
    const logoExist = await logo.isEnabled();
    console.log(logoExist);

  });

  test('should display search input field', async ({ page }) => {
    const searchInput = page.locator('id=nav-search-submit-button');
    await expect(searchInput).toBeVisible();
  });

  test('should display "Today\'s Deals" link', async ({ page }) => {

    const selector = 'a[data-csa-c-content-id="nav_cs_gb"]'; // Example selector
    await expect(page.locator(selector)).toBeVisible();
  });

  test('should display "Cart" link', async ({ page }) => {
    const cartLink = page.locator('id=nav-cart-count-container');
    await expect(cartLink).toBeVisible();
  } ,{ timeout: 120000 });



 test('should display "GiftCard" link', async ({ page }) => {

    const giftCard = 'a[data-csa-c-content-id="nav_cs_gb"]'; // Example selector
    await expect(page.locator(giftCard)).toBeVisible();
  });

});
