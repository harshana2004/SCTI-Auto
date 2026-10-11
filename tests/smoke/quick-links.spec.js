const { test, expect } = require('../../fixtures/test-fixtures');
const Navigation = require('../../pages/Navigation');
const ClaimsPage = require('../../pages/ClaimsPage');
const PayPolicyPage = require('../../pages/PayPolicyPage');
const CancelPolicyPage = require('../../pages/CancelPolicyPage');
const FAQsPage = require('../../pages/FAQsPage');
const ContactUsPage = require('../../pages/ContactUsPage');
const LoginPage = require('../../pages/LoginPage');

const { navigationData } = require('../../test-data/navigation-data');

test('Make a Claim page displays the expected label @smoke', async ({ page }) => {
    await page.goto('/');

    const navigation = new Navigation(page);
    const claimsTab = await navigation.ClaimPage();

    const claimsPage = new ClaimsPage(claimsTab);

    await expect(claimsTab).toHaveURL(navigationData.makeClaim.url);

    await expect(await claimsPage.getClaimLabel()).toHaveText(navigationData.makeClaim.expectedHeading);
});


test('Pay policy page displays the expected label @smoke', async ({ page }) => {
    await page.goto('/');

    const navigation = new Navigation(page);
    const payPolicyTab = await navigation.PayPolicyPage();

    const payPolicyPage = new PayPolicyPage(payPolicyTab);

    await expect(payPolicyTab).toHaveURL(navigationData.payPolicy.url);

    await expect(await payPolicyPage.getPaymentLabel()).toHaveText(navigationData.payPolicy.expectedHeading);
});

test('Cancel policy page displays the expected label @smoke', async ({ page }) => {
    await page.goto('/');

    const navigation = new Navigation(page);
    const cancelPolicyTab = await navigation.CancelPolicyPage();

    const cancelPolicyPage = new CancelPolicyPage(cancelPolicyTab);

    await expect(cancelPolicyTab).toHaveURL(navigationData.cancelPolicy.url);

    await expect(await cancelPolicyPage.getCancelPolicyLabel()).toHaveText(navigationData.cancelPolicy.expectedHeading);
});

test('FAQ page displays the expected label @smoke', async ({ page }) => {
    await page.goto('/');

    const navigation = new Navigation(page);
    const fAQTab = await navigation.FAQsPage();

    const fAQsPage = new FAQsPage(fAQTab);

    await expect(fAQTab).toHaveURL(navigationData.faqs.url);

    await expect(await fAQsPage.getFaqLabel()).toHaveText(navigationData.faqs.expectedHeading);
});

test('Contact us page displays the expected label @smoke', async ({ page }) => {
    await page.goto('/');

    const navigation = new Navigation(page);
    const contactUsTab = await navigation.ContactUsPage();

    const contactUsPage = new ContactUsPage(contactUsTab);

    await expect(contactUsTab).toHaveURL(navigationData.contactUs.url);

    await expect(await contactUsPage.getContactUsLabel()).toHaveText(navigationData.contactUs.expectedHeading);
});

test('Login page displays the expected label @smoke', async ({ page }) => {
    await page.goto('/');

    const navigation = new Navigation(page);
    const loginTab = await navigation.LoginPage();

    const loginPage = new LoginPage(loginTab);

    await expect(loginTab).toHaveURL(navigationData.login.url);

    await expect(await loginPage.getLoginLabel()).toHaveText(navigationData.login.expectedHeading);
});




