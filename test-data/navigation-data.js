const navigationData = {
    makeClaim: {
        url: 'https://insure.scti.co.nz/claims',
        expectedHeading: 'Make a claim',
    },

    payPolicy: {
        url: 'https://insure.scti.co.nz/payment',
        expectedHeading: 'Complete your Payment',
    },

    cancelPolicy: {
        url: 'https://insure.scti.co.nz/cancel-policy',
        expectedHeading: 'Cancel my policy',
    },

    faqs: {
        url: 'https://scti.co.nz/faqs',
        expectedHeading: 'I want to know more about...',
    },

    contactUs: {
        url: 'https://scti.co.nz/help-support',
        expectedHeading: "Contact us",
    },

    login: {
        url: 'https://scti.online/dashboard',
        expectedHeading: "Log in",
    },
};

module.exports = { navigationData };