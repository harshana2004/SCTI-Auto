
class QuotePage {
    constructor(page) {
        this.page = page;

        // Travel dates
        this.departureDateField = page
            .getByPlaceholder('DD/MM/YYYY')
            .nth(0);

        this.returnDateField = page
            .getByPlaceholder('DD/MM/YYYY')
            .nth(1);

        this.dateDoneButton = page.getByRole('button', {
            name: 'Done',
            exact: true,

        });

        // Traveller details
        this.travellersField = page.getByPlaceholder(
            'Add travellers'
        );

        this.ageFields = page.getByLabel(/age/i);

        this.travellerDoneButton = page.getByRole('button', {
            name: 'Done',
            exact: true,
        });

        this.quotePrice = page.locator(
            "span.display-medium-2-semibold.color-text-brand"
        );

        this.addAdultButton = page.locator("(//button[contains(text(), '+')])[1]");

        this.ageFields = page.locator("//input[@class='trav-age-input']");
    }

    async enterTravelDates(departureDate, returnDate) {
        // The date picker should already be opened by HomePage
        await this.departureDateField.fill(departureDate);
        await this.returnDateField.fill(returnDate);

        // Confirm date selection
        await this.dateDoneButton.click();
    }

    async openTravellers() {
        await this.travellersField.click();
    }

    async setTravellerAges(ages) {
        // Add an adult traveller first.
        await this.addAdultButton.click();

        // Wait for the age input to appear.
        await this.ageFields.first().waitFor({
            state: 'visible',
        });

        // Enter the age for each traveller.
        for (let i = 0; i < ages.length; i++) {
            await this.ageFields.nth(i).fill(String(ages[i]));
        }
    }

    async confirmTravellers() {
        await this.travellerDoneButton.click();
    }
}

module.exports = { QuotePage };
