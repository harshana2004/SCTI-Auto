
const quoteData = {
    destination: 'Singapore',

    // Use future dates in DD/MM/YYYY format.
    departureDate: '15/12/2026',
    returnDate: '22/12/2026',

    // Start with one traveller.
    travellerCount: 1,
    travellerAges: [35],

    // Validate a displayed currency amount, not a fixed premium.
    expectedPricePattern: /(?:NZD|NZ\$|\$)\s?\d[\d,]*(?:\.\d{2})?/,
};

module.exports = { quoteData };
