const environments = {
    production: {
        baseURL: 'https://scti.co.nz',
    },
};

const environmentName = process.env.TEST_ENV || 'production';

const environment = environments[environmentName];

if (!environment) {
    throw new Error(
        `Unknown TEST_ENV: ${environmentName}`
    );
}

module.exports = { environment };