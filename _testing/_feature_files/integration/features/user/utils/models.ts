// Abstracting out user details and generating fake data

// MUST match the database schema.

import { faker } from 'faker';

export class User {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  avatar: string;

  constructor({
    id,
    firstName,
    lastName,
    username,
    email,
    phoneNumber,
    avatar,
  }: Partial<User>) {
    this.id = id;
    this.firstName = firstName || faker.name.firstName();
    this.lastName = lastName || faker.name.lastName();
    this.username = username || faker.internet.userName();
    this.email = email || faker.internet.email();
    this.phoneNumber = phoneNumber || faker.phone.phoneNumber();
    this.avatar = avatar || faker.internet.avatar();
  }
}

// Utility function to generate a fake user
export const generateFakeUser = (): User => {
  return new User({});
};
