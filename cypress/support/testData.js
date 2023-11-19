import { faker } from '@faker-js/faker';

export const validUserData = Object.freeze({
    validUserName: faker.word.adjective(6),
    validPassword: faker.string.alpha(10) + faker.number.binary(2),
    validEmail: faker.internet.email(),
    validFullName: faker.person.fullName(),
})

export const invalidUserData = Object.freeze({
    invalidFullName: faker.string.alpha(3),
    invalidPassword: faker.string.alpha(3),
})

export const tableInputData = Object.freeze({
    ID: faker.number.int({ max: 1000 }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    age: faker.number.int({ max: 100 }),
})
