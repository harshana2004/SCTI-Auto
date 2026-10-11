class CancelPolicyPage {
    constructor(page) {
        this.page = page;

        this.cancelPolicyLabel = "//div[@class='two-column-page-hero']";
    }

    async getCancelPolicyLabel() {
        return this.page.locator(this.cancelPolicyLabel);
    }
}

module.exports = CancelPolicyPage;