// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30 * 1000, // 30 seconds per test
  expect: {
    timeout: 5000,
  },

  fullyParallel: true,

  retries: 1, // retry failed tests once
  workers: 2, // parallel workers

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: 'https://example.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
      viewport:{width:1536,height:730},
      screenshot:"on",
      video:"on",
      trace:"on"
    },
   /* {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },*/
  ],
});

