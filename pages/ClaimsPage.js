
class ClaimsPage {
    constructor(page) {
        this.page = page;

        this.claimLabel = 'h1.color-text-brand';
    }

    async getClaimLabel() {
        return this.page.locator(this.claimLabel);
    }
}

module.exports = ClaimsPage;