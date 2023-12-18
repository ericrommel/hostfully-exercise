# Hostfully QA Engineer Cypress exercise

## Description of the Exercise

Write automated tests for the demo application available at <https://computerdatabase.gatling.io/computers>, focusing on, but not limited to, the following functionality:

- Adding a new computer

### Expectations

We expect you to spend 3 hours on the challenge. Please let us know if you spent
more time than that.

### Acceptance Criteria

- [x] Come up with at least two scenarios for automation.
- [x] Ensure that the tests cover the basic and edge cases for each functionality.
- [x] **[OPTIONAL]:** Extra points if you use Gherkin syntax to write the scenarios.

### Technical Criteria

- [x] Use Cypress and JavaScript to write the test scripts (extra points for TypeScript).
- [x] Your tests should run smoothly on a standard machine without requiring additional
software installations.

### How to Deliver Your Solution

- [X] Upload your solution to a GitHub repository.
- [x] Use descriptive commit messages and, preferably, create multiple commits to provide a clear history of your work.
- [x] Include a README file in your repository with clear instructions on how to run the tests.
- [x] **[OPTIONAL]:** Provide a summary of your findings, including any issues you encountered and how you resolved them.
- [x] **[OPTIONAL]:** Include a brief explanation of how you approached the task and why you made certain decisions.

## Description of the Solution

The solution was design in a simplest way to avoid spend more than 3h on it.

### General settings

Install and set configuration if needed for:

- [Node.js](https://nodejs.org/en/download/) (version used: v20.10.0)
- Cypress (version used: 13.6.1):

    `$ npm install cypress --save-dev`

- Install dependencies:

    `$ npm install`

### Manual execution

- Run the tests without final report (merged) generation:

    `npm run test`

- Generate final report after an execution (the final report generated is [cypress/report/mochareports/report_final.html](cypress/report/mochareports/report_final.html)):

    `npm run postest`

- Run the tests with final report generation (the final report generated is [cypress/report/mochareports/report_final.html](cypress/report/mochareports/report_final.html)):

    `npm run test-report`

- Open Cypress Runner IDE:

    `npm run cypress-open`

### CI Sample

You can see the a CI sample for the Cypress testing in [GitHub](https://github.com/ericrommel/hostfully-exercise/actions/workflows/main.yml)

### Deliveries

#### Summary of findings

##### Computers are not being real saved

- **Description:** The new computers are not being added even though the system shows that it was.
- **Severity:** Critical
- **Steps to Reproduce:**
  1. Add a new computer with an unique name
  2. From the list of computers page, right the new computer name and click on the Filter button
- **Actual Result:** System shows "Nothing to display"
- **Expected Result:** System should show the new computer added
- **Evidences:** After run the tests, watch [the video recorded](cypress/videos/) or see [the screenshot saved]('cypress/screenshots").

#### Approach used

The task asked to use Gherkin syntax to write the scenarios. Based on that, I decided to used Cypress with Cucumber to have everything integrated. Plus to it, the design POM was used to represent all the locators and functions (Components used for the automation) related to the particular pages (List computers page and Add computers page). Using POM is a great way to have code reusability and maintainability.
