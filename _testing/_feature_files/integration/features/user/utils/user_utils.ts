// cypressUtils.ts
import { User, generateFakeUser } from models.js;

// Utility function to create a new user
export const createUser = (): User => {
  const user: User = generateFakeUser();
  cy.request('POST', `${Cypress.env("apiUrl")}/users`, user).as('createUserResponse');
  return user;
};

// Utility function to get user details by ID
export const getUserById = (userId: number): void => {
  cy.request('GET', `${Cypress.env("apiUrl")}/users/${userId}`).as('getUserByIdResponse');
};

// Utility function to get a user profile by username
export const getUserProfile = (username: string): void => {
  cy.request('GET', `${Cypress.env("apiUrl")}/users/profile/${username}`).as('getUserProfileResponse');
};

// Utility function to search for a user by query
export const searchUsers = (query: string): void => {
  cy.request('GET', `${Cypress.env("apiUrl")}/users/search`, { q: query }).as('searchUsersResponse');
};

// Utility function to update a user
export const updateUser = (userId: number, updatedFields: Partial<User>): void => {
  cy.request('PATCH', `${Cypress.env("apiUrl")}/users/${userId}`, updatedFields).as('updateUserResponse');
};

// Utility function to login
export const login = (username: string): void => {
  cy.request('POST', `${Cypress.env("apiUrl")}/login`, { username }).as('loginResponse');
};
