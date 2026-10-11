
const { test, expect } = require('../../fixtures/test-fixtures');
const { HomePage } = require('../../pages/HomePage');
const { quoteData } = require('../../test-data/quote-data');

test.describe('Overseas travel quote @regression', () => {
    test('selects Singapore, enters travel details, and displays a quote price', async ({
        homePage,
        quotePage,
    }) => {
        // Step 1: Open the homepage.
        const response = await homePage.open();

        expect(response).not.toBeNull();
        expect(response.status()).toBe(200);

        // Step 2: Select Overseas travel.
        await homePage.selectTravelPurpose('Overseas travel');

        // Step 3: Select Singapore.
        await homePage.clickDestination();
        await expect(homePage.singaporeOption).toBeVisible();

        await homePage.selectSingapore();
        await homePage.confirmDestination();

        await expect(homePage.destinationField)
            .toHaveValue(/Singapore/i);

        // Step 4: Open the date selector and select dates.
        await homePage.clickDates();

        await quotePage.enterTravelDates(
            quoteData.departureDate,
            quoteData.returnDate
        );

        // Step 5: Open the traveller selector.
        await homePage.clickTravellers();

        // Step 6: Enter traveller ages and confirm.
        await quotePage.setTravellerAges(
            quoteData.travellerAges
        );

        await quotePage.confirmTravellers();

        // Step 7: Request the quote

        await homePage.clickGetQuote();

        await expect(quotePage.quotePrice.first()).toHaveText(
            /^\$\d[\d,]*\.\d{2}$/
        );
    });
});
