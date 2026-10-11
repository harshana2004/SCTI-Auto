class FAQsPage {
    constructor(page) {
        this.page = page;

        this.faqLabel = "//h1[contains(text(), 'I want to know more about...')]";
    }

    async getFaqLabel() {
        return this.page.locator(this.faqLabel);
    }
}

module.exports = FAQsPage;