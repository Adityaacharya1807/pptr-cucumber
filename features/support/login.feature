Feature: Login
  As a user
  I can login to application


  Scenario: User can login to the application
    Given I open login page
    When I fill the login page
    And  I click on submit button
    Then I expect to see application content