
const { test, expect } = require('../../fixtures/test-fixtures');
const { quoteData } = require('../../test-data/quote-data');

test.describe('Overseas travel responsive @responsive', () => {
    test('displays the travel quote journey on mobile', async ({
        page,
        homePage,
        quotePage,
    }) => {
        // Set mobile viewport.
        await page.setViewportSize({
            width: 390,
            height: 844,
        });

        // Open the home page.
        const response = await homePage.open();

        expect(response).not.toBeNull();
        expect(response.status()).toBe(200);

        // Select travel purpose.
        await homePage.selectTravelPurpose('Overseas travel');

        // Select destination.
        await homePage.clickDestination();
        await expect(homePage.singaporeOption).toBeVisible();

        await homePage.selectSingapore();
        await homePage.confirmDestination();

        await expect(homePage.destinationField)
            .toHaveValue(/Singapore/i);

        // Enter travel dates.
        await homePage.clickDates();

        await quotePage.enterTravelDates(
            quoteData.departureDate,
            quoteData.returnDate
        );

        // Add traveller and enter age.
        await homePage.clickTravellers();

        await quotePage.setTravellerAges(
            quoteData.travellerAges
        );

        await quotePage.confirmTravellers();

        // Request a quote from the home page.
        await homePage.clickGetQuote();

        // Verify a quote price is displayed.
        await expect(quotePage.quotePrice.first())
            .toBeVisible({ timeout: 30000 });
    });
});
