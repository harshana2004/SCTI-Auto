class ContactUsPage {
    constructor(page) {
        this.page = page;

        this.contactUsLabel = "//h1[contains(text(), 'Contact us')]";
    }

    async getContactUsLabel() {
        return this.page.locator(this.contactUsLabel);
    }
}

module.exports = ContactUsPage;