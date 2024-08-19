// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  retries: 2, // Retry failed tests up to 2 times
  timeout: 60000, // Global timeout for each test
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  workers: 2, // Number of parallel workers
});
