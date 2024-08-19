//profilepage.spec.js
import { test, expect } from '@playwright/test';

// Describe block for Profile Page tests
test.describe('Amazon Profile Page Tests', () => {

  // Fixture to navigate to the profile page
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com/gp/css/homepage.html?ref_=nav_AccountFlyout_ya', { timeout: 60000 });
  });

  test('should display profile heading', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Your Account');
  });
  

  test('should display orders link', async ({ page }) => {
    const ordersLink = page.locator('img[alt="Your Orders"]');
    await expect(ordersLink).toBeVisible();
  });


  test('should display addresses link', async ({ page }) => {
    const addressesLink = page.locator('img[alt="Your Addresses"]');
    await expect(addressesLink).toBeVisible();
  });

  test('Prime subscription link', async ({ page }) => {
    const settingsLink = page.locator('img[alt="Prime"]');
    await expect(settingsLink).toBeVisible();
  });


  test('should display payment methods link', async ({ page }) => {
    const paymentMethodsLink = page.locator('img[alt="Login & security"]');
    await expect(paymentMethodsLink).toBeVisible();
  });

});
