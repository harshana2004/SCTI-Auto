
const { urls } = require('../config/urls');

class HomePage {
    constructor(page) {
        this.page = page;

        this.mainHeading = page.getByRole('heading', {
            name: 'Find the right travel insurance for you',
            exact: true,
        });

        this.purposeQuestion = page.getByText(
            "What's the purpose of your trip?",
            { exact: true }
        );

        this.overseasTravelOption = page.getByText(
            'Overseas travel',
            { exact: true }
        );

        // Destination
        this.destinationField = page.locator(
            "input[id='ji-destinations']"
        );

        this.singaporeOption = page.getByRole('button', {
            name: 'Singapore',
            exact: true,
        });

        this.destinationDoneButton = page.getByRole('button', {
            name: 'Done',
            exact: true,
        });

        // Travel dates
        this.datesField = page.locator(
            "input[id='ji-dates']"
        );

        // Traveller selection
        this.travellersField = page.locator(
            "//input[@id='ji-travellers']"
        );

        this.getQuoteButton = this.page.locator(
            "//button[@id='ji-cta-btn']"
        );
    }

    async open() {
        return this.page.goto(urls.home);
    }

    async getTitle() {
        return this.page.title();
    }

    async getCurrentUrl() {
        return this.page.url();
    }

    async selectTravelPurpose(purposeName) {
        await this.page.getByText(purposeName, {
            exact: true,
        }).click();
    }

    async clickDestination() {
        await this.destinationField.click();
    }

    async selectSingapore() {
        await this.singaporeOption.click();
    }

    async confirmDestination() {
        await this.destinationDoneButton.click();
    }

    async clickDates() {
        await this.datesField.click();
    }

    async clickTravellers() {
        await this.travellersField.click();
    }
    async clickGetQuote() {
        await this.getQuoteButton.click();
    }
}

module.exports = { HomePage };
