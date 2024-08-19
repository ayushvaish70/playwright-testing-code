// bestsellerspage.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Amazon Best Sellers Page', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the Best Sellers page and ensure it's fully loaded
    await page.goto('https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2', { timeout: 60000 });
    await page.waitForLoadState('networkidle'); // Wait for the page to be fully loaded
  });

    test('Display Amazon Bestsellers', async ({ page }) => {
    const heading = page.locator('id=zg_banner_text');
    await expect(heading).toHaveText('Amazon Bestsellers');
  });

  test('should verify the "Hot New Releases" link is visible and navigates correctly', async ({ page }) => {
    const hotNewReleasesLink = page.locator('a[href="/gp/new-releases/ref=zg_bs_tab_bsnr"]');
    await expect(hotNewReleasesLink).toBeVisible({ timeout: 10000 });
    await expect(hotNewReleasesLink).toHaveText('Hot New Releases');
    await hotNewReleasesLink.click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/new-releases/);
});

  test('should verify the "Movers and Shakers" link is visible and navigates correctly', async ({ page }) => {
    const moversAndShakersLink = page.locator('a[href="/gp/movers-and-shakers/ref=zg_bs_tab_bsms"]');
    await expect(moversAndShakersLink).toBeVisible({ timeout: 10000 });
    await expect(moversAndShakersLink).toHaveText('Movers and Shakers');
    await moversAndShakersLink.click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/movers-and-shakers/);
  });

test('should verify the "Most Wished For" link is visible and navigates correctly', async ({ page }) => {
  const mostWishedForLink = page.locator('a[href="/gp/most-wished-for/ref=zg_bs_tab_mw"]');
  await expect(mostWishedForLink).toBeVisible({ timeout: 10000 });
  await expect(mostWishedForLink).toHaveText('Most Wished For');
  await mostWishedForLink.click();
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/most-wished-for/);
});

test('should verify the "Most Gifted" link is visible and navigates correctly', async ({ page }) => {
  const mostGiftedLink = page.locator('a[href="/gp/most-gifted/ref=zg_bs_tab_mg"]');
  await expect(mostGiftedLink).toBeVisible({ timeout: 10000 });
  await expect(mostGiftedLink).toHaveText('Most Gifted');
  await mostGiftedLink.click();
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/most-gifted/);
});

});