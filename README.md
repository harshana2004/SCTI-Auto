# SCTI-Auto – Playwright Automation Framework

## Overview

SCTI-Auto is an end-to-end test automation framework developed using Playwright and JavaScript to test the travel insurance quote journey on the Southern Cross Travel Insurance (SCTI) New Zealand website.

The framework follows the **Page Object Model (POM)** design pattern to improve maintainability, reusability, and readability. It supports smoke testing, regression testing, responsive testing, and automated test reporting through Allure.

GitHub Actions is used to automate the test execution pipeline and generate a single combined Allure report containing results from the smoke, regression, and responsive test suites.

**Application under test:** https://scti.co.nz/

## Technology Stack

- **Programming language:** JavaScript
- **Automation tool:** Playwright
- **Runtime:** Node.js
- **Design pattern:** Page Object Model (POM)
- **Test reporting:** Allure
- **CI/CD:** GitHub Actions
- **Version control:** Git and GitHub

## Project Structure

```text
SCTI-Auto/
├── config/
│   └── urls.js
├── fixtures/
│   └── test-fixtures.js
├── pages/
│   ├── HomePage.js
│   └── QuotePage.js
├── test-data/
│   └── quote-data.js
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
├── .gitignore
└── README.md
```

*Note: The directory and file names above describe the intended structure. Keep them aligned with the actual files in the repository.*

## Framework Design

### Page Object Model

The framework uses the Page Object Model to separate page-specific interactions from test cases.

- **HomePage:** Contains methods for interacting with the homepage, selecting destinations, choosing travel purposes, entering travel dates, selecting travellers, and navigating through the quote journey.
- **QuotePage:** Contains methods for entering traveller details, confirming selections, and validating quote information.
- **Fixtures:** Provide reusable page objects to test cases.
- **Test data:** Stores reusable test inputs, such as destinations, travel dates, and traveller ages.
- **Configuration:** Maintains application URLs and Playwright test settings.

This approach reduces duplication and makes the framework easier to extend and maintain.

## Test Strategy

### 1. Smoke Testing

Smoke tests validate essential application functionality and help determine whether the main user journey is working.

Examples include:

- Verify that the homepage loads successfully.
- Validate key homepage content.
- Check essential navigation and quote-entry functionality.

Run smoke tests:

```bash
npm run test:smoke
```

### 2. Regression Testing

Regression tests validate the overseas travel insurance quote journey and check that existing functionality continues to work as expected.

Examples include:

- Select a travel destination.
- Enter departure and return dates.
- Select traveller details and ages.
- Navigate through the quote journey.
- Validate the displayed quote price.

The regression suite is configured to run across Chromium, Firefox, and WebKit in GitHub Actions.

Run regression tests:

```bash
npm run test:regression
```

### 3. Responsive Testing

Responsive tests check selected application functionality at different viewport sizes and help identify layout or usability issues on smaller screens.

The responsive suite is maintained separately from the main regression suite.

Run responsive tests:

```bash
npm run test:responsive
```

*The coverage described above depends on the test cases implemented in the repository.*

## Prerequisites

Install the following before running the project locally:

- Node.js and npm
- Git
- A supported operating system for Playwright
- Internet access to reach the application under test

Check your installation:

```bash
node --version
npm --version
git --version
```

## Installation and Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd SCTI-Auto
```

Install the project dependencies:

```bash
npm ci
```

Install the Playwright browser engines:

```bash
npx playwright install
```

On Linux, install browser system dependencies if required:

```bash
npx playwright install --with-deps
```

Replace `<repository-url>` with the actual GitHub repository clone URL.

## Running Tests Locally

### Run all tests

```bash
npx playwright test
```

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

Chromium:

```bash
npx playwright test --grep "@regression" --project=chromium
```

Firefox:

```bash
npx playwright test --grep "@regression" --project=firefox
```

WebKit:

```bash
npx playwright test --grep "@regression" --project=webkit
```

### View the Playwright HTML report

If the Playwright HTML reporter is configured, run:

```bash
npx playwright show-report
```

## Allure Reporting

The framework uses the `allure-playwright` reporter to capture test results and the Allure command-line tool to generate an HTML report.

The GitHub Actions pipeline collects the results from the smoke, regression, and responsive test jobs and generates **one combined Allure report**.

### Download the combined report from GitHub Actions

1. Open the [SCTI-Auto GitHub repository](https://github.com/harshana2004/SCTI-Auto).
2. Select **Actions**.
3. Open the workflow run you want to review.
4. On the workflow run's Summary page, locate the **Artifacts** section.
5. Download `scti-combined-allure-report`.

The artifact contains the generated HTML report.

### Extract the report

Extract the downloaded ZIP file on your computer.

Open a terminal and navigate to the extracted report directory. For example, if the folder is in Downloads:

```bash
cd ~/Downloads/scti-combined-allure-report
```

Adjust the directory name if your extracted folder has a different name.

### Start a local HTTP server

Run:

```bash
python3 -m http.server 8000
```

Keep the terminal running while you view the report.

### Open the Allure dashboard

Open your browser and navigate to:

http://localhost:8000

The Allure dashboard should display the combined test results, including test statuses and individual test details.

If port 8000 is already in use, choose another port, such as 8001:

```bash
python3 -m http.server 8001
```

Then open http://localhost:8001.

### Stop the local server

When you finish reviewing the report, return to the terminal and press:

`Ctrl + C`

### Generate an Allure report locally

After running tests locally, generate the report from the local `allure-results` directory:

```bash
npm run report:generate
```

### Open the locally generated report

```bash
npm run report:open
```

These commands require the Allure dependencies and the corresponding npm scripts to be configured in `package.json`.

**Important:** The local `allure-results` directory contains results from tests executed locally. It does not automatically contain results from GitHub Actions. To review the combined CI results, download the `scti-combined-allure-report` artifact.

## Continuous Integration and Delivery

The project uses GitHub Actions to automate test execution and report generation.

The workflow is located at:

```text
.github/workflows/playwright.yml
```

### Pipeline stages

1. **Build and install:** Checks out the source code, installs npm dependencies, and validates Playwright test discovery.
2. **Smoke testing:** Executes tagged smoke tests in Chromium, Firefox, and WebKit.
3. **Regression testing:** Executes tagged regression tests in Chromium, Firefox, and WebKit.
4. **Responsive regression testing:** Executes tagged responsive tests in Chromium.
5. **Collect Allure results:** Uploads the Allure results from each test job as separate workflow artifacts.
6. **Generate combined report:** Downloads and merges the three sets of results and generates a single HTML report.
7. **Publish report artifact:** Uploads the combined report as `scti-combined-allure-report`.

### Workflow triggers

The pipeline is configured to run on:

- Pushes to the `main` or `master` branch.
- Pull requests targeting the `main` or `master` branch.
- Manual execution through the GitHub Actions interface.

### Accessing CI results

After a workflow run completes:

1. Open **GitHub → Actions**.
2. Select the relevant workflow run.
3. Review the individual job statuses and logs.
4. Locate `scti-combined-allure-report` under **Artifacts**.
5. Download and extract the report to review the combined test results.

The workflow artifact is configured to be retained for 14 days.

## Test Data Management

Test inputs are maintained separately from the test logic to improve maintainability and support future test scenarios.

Example test data may include:

- Destination: Singapore
- Departure date: 15/12/2026
- Return date: 22/12/2026
- Traveller ages: 35

These are sample test values. Update the data as needed, and verify that the dates and scenarios remain valid when executing tests.

## Author

**Harshana Premarathna**

## Disclaimer

This is an independent test automation project intended for learning and demonstrating software testing practices. It is not an official SCTI project and is not affiliated with Southern Cross Travel Insurance.

Test execution depends on the availability and behaviour of the application under test. Changes to the website may require updates to locators, page objects, test data, and assertions.
