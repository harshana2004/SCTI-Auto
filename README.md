# SCTI Playwright Automation Framework

## Overview

This project automates the travel insurance quote journey on the SCTI New Zealand website using Playwright and JavaScript.

The framework follows the Page Object Model (POM) to separate page locators and actions from test scripts.

## Tech Stack

- JavaScript
- Playwright
- Node.js and npm
- Page Object Model (POM)
- Allure Report
- GitHub Actions

## Project Structure

```text
scti-Auto/
├── config/
├── fixtures/
├── pages/
├── test-data/
├── tests/
│   ├── smoke/
│   ├── regression/
│   └── responsive/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Test Coverage

### Smoke Testing

Validates critical application functionality, such as opening the SCTI website and checking that the home page loads successfully.

### Regression Testing

Verifies the overseas travel insurance quote journey, including destination selection, travel dates, traveller details, and displayed quote prices.

Regression tests are intended to run across Chromium, Firefox, and WebKit.

### Responsive Testing

Checks the travel quote journey at mobile viewport sizes to identify layout and usability issues on smaller screens.

## Installation

Clone the repository and navigate to the project directory.

```bash
git clone <repository-url>
cd scti-Auto
npm ci
npx playwright install
```

Replace `<repository-url>` with your GitHub repository URL.

## Running Tests

### Run smoke tests

```bash
npm run test:smoke
```

### Run regression tests

```bash
npm run test:regression
```

### Run responsive tests

```bash
npm run test:responsive
```

### Run regression tests in a specific browser

```bash
npx playwright test --grep "@regression" --project=chromium
```

Replace `chromium` with `firefox` or `webkit` to run against another configured browser project.

## Allure Reporting

Generate the Allure HTML report:

```bash
npm run report:generate
```

Open the generated report:

```bash
npm run report:open
```

Allure result files are generated in the `allure-results/` directory when the Allure Playwright reporter is configured.

## CI/CD Pipeline

GitHub Actions automates test execution through the workflow defined in `.github/workflows/playwright.yml`.

The pipeline follows this sequence:

1. Build and install dependencies.
2. Run smoke tests across Chromium, Firefox, and WebKit.
3. Run regression tests across Chromium, Firefox, and WebKit.
4. Run responsive regression tests.
5. Collect test results and reporting artifacts.

Each stage depends on the successful completion of the preceding stage.

## Author

Harshana Premarathna