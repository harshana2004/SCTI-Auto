
class Navigation {
    constructor(page) {
        this.page = page;

        // Navigation link selectors
        this.makeClaimLink = '(//a[contains(text(), "Make a claim")])[1]';
        this.payPolicyLink = '(//a[contains(text(), "Pay Policy")])[1]';
        this.cancelPolicyLink = '(//a[contains(text(), "Cancel Policy")])[1]';
        this.faqsLink = '(//a[contains(text(), "FAQs")])[1]';
        this.contactUsLink = '(//a[contains(text(), "Contact us")])[1]';
        this.loginLink = '(//a[contains(text(), "Login")])[1]';
    }

    // Common method for opening a link in a new tab
    async openLinkInNewPage(linkSelector) {
        const link = this.page.locator(`xpath=${linkSelector}`);
        const target = await link.getAttribute('target');

        if (target === '_blank') {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                link.click(),
            ]);

            await newPage.waitForLoadState('domcontentloaded');
            return newPage;
        }

        await link.click();
        await this.page.waitForLoadState('domcontentloaded');

        return this.page;
    }
    // Individual navigation methods
    async ClaimPage() {
        return this.openLinkInNewPage(this.makeClaimLink);
    }

    async PayPolicyPage() {
        return this.openLinkInNewPage(this.payPolicyLink);
    }

    async CancelPolicyPage() {
        return this.openLinkInNewPage(this.cancelPolicyLink);
    }

    async FAQsPage() {
        return this.openLinkInNewPage(this.faqsLink);
    }

    async ContactUsPage() {
        return this.openLinkInNewPage(this.contactUsLink);
    }

    async LoginPage() {
        return this.openLinkInNewPage(this.loginLink);
    }
}

module.exports = Navigation;
