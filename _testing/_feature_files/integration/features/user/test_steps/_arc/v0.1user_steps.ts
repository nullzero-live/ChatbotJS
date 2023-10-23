// Cucumber Cypress User Steps

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import faker from 'faker';

let apiUrl = Cypress.env('apiUrl');
let users;
let authenticatedUser;
let searchUser;

Given('I am logged in as a user', () => {
  cy.task('db:seed');
  cy.database('filter', 'users').then((userList) => {
    authenticatedUser = userList[0];
    searchUser = userList[1];
    cy.loginByApi(authenticatedUser.username);
  });
});

When('I request a list of users', () => {
  cy.request('GET', `${apiUrl}/users`).as('response');
});

Then('I should receive a list of users', () => {
  cy.get('@response').should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.results.length).to.be.greaterThan(1);
  });
});

When('I request a specific user by id', () => {
  cy.request('GET', `${apiUrl}/users/${authenticatedUser.id}`).as('response');
});

Then('I should receive the user details', () => {
  cy.get('@response').should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.user).to.have.property('firstName');
  });
});

When('I request a user with an invalid id', () => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}/users/1234`,
    failOnStatusCode: false,
  }).as('response');
});

Then('I should receive an error with status code {int}', (statusCode) => {
  cy.get('@response').should((response) => {
    expect(response.status).to.eq(statusCode);
    expect(response.body.errors.length).to.eq(1);
  });
});

When('I request a user profile by username', () => {
    cy.request('GET', `${apiUrl}/users/profile/${authenticatedUser.username}`).as('response');
  });
  
  Then('I should receive the user profile excluding the balance', () => {
    cy.get('@response').should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.user).to.deep.equal({
        firstName: authenticatedUser.firstName,
        lastName: authenticatedUser.lastName,
        avatar: authenticatedUser.avatar,
      });
      expect(response.body.user).not.to.have.property('balance');
    });
  });
  
  When('I search for users by email', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/users/search`,
      qs: { q: searchUser.email },
    }).as('response');
  });
  
  Then('I should find users that match the email', () => {
    cy.get('@response').should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results[0]).to.contain({
        firstName: searchUser.firstName,
      });
    });
  });
  
  // continue for phone numbers and usernames
  
  When('I create a new user', () => {
    const newUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      // ... other fields
    };
    cy.request('POST', `${apiUrl}/users`, newUser).as('response');
  });
  
  Then('I should get a confirmation that the user was created', () => {
    cy.get('@response').should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.user).to.contain({ firstName: newUser.firstName });
    });
  });
  
