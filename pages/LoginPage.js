class LoginPage {
    constructor(page) {
        this.page = page;

        this.loginLabel = "//button[contains(text(), 'Log in')]";
    }

    async getLoginLabel() {
        return this.page.locator(this.loginLabel);
    }
}

module.exports = LoginPage;