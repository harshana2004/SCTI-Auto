class PayPolicyPage {
    constructor(page) {
        this.page = page;

        this.paymentLabel = "//div[@class='two-column-page-hero']";
    }

    async getPaymentLabel() {
        return this.page.locator(this.paymentLabel);
    }
}

module.exports = PayPolicyPage;