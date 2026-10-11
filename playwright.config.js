const { defineConfig, devices } = require('@playwright/test');
const { environment } = require('./config/environment');

module.exports = defineConfig({
    testDir: './tests',

    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : undefined,

    reporter: [
        ['list'],
        ['allure-playwright'],
    ],

    use: {
        baseURL: environment.baseURL,
        headless: true,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'mobile-chrome',
            testMatch: '**/responsive/**/*.spec.js',
            use: { ...devices['Pixel 7'] },
        },
        {
            name: 'mobile-safari',
            testMatch: '**/responsive/**/*.spec.js',
            use: { ...devices['iPhone 13'] },
        },
    ],
});