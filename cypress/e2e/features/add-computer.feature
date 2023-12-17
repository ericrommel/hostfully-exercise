Feature: Add a new computer

  Background:
    Given I go to the Computers Database page
    And I see "Add a new computer" button
    And I click on "Add a new computer" button

  Scenario: Add a computer with valid data
    Given I am on the "Add a computer" page
    When I fill out a valid "Computer name"
    And I fill out a valid "Introduce" date
    And I fill out a valid "Discontinued" date
    And I select a company from the "Company" list
    And I click on "Create this computer" button
    Then I am redirected to the computer list page
    And I see a notification "Done ! Computer <name> has been created"
