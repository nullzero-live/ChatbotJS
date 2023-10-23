Feature: Users list

  Scenario: Getting a list of users
    Given I am logged in as a user
    When I send a GET request to "/users"
    Then I should receive a 200 status code
    And The user list should have more than one user