
const { test, expect } = require('../../fixtures/test-fixtures');
const { homepageData } = require('../../test-data/homepage-data');

test('SCTI homepage responds successfully @smoke', async ({ homePage }) => {
    const response = await homePage.open();

    expect(response).not.toBeNull();
    expect(response.status()).toBe(homepageData.expectedHttpStatus);

    await expect(homePage.page).toHaveTitle(
        homepageData.expectedTitlePattern
    );

    await expect(homePage.mainHeading).toHaveText(
        homepageData.expectedHeading
    );

    await expect(homePage.purposeQuestion).toBeVisible();


});