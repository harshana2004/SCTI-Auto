
const { test: base, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { QuotePage } = require('../pages/QuotePage');

const test = base.extend({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    quotePage: async ({ page }, use) => {
        await use(new QuotePage(page));
    },
});

module.exports = { test, expect };
