const { v4: uuid } = require('uuid');
const Joi = require('joi');
const Basic = require('./basic.js');

const UserSchema = Joi.object({
  firstName: Joi.string().trim().length().min(1).max(100).required(),
  lastName: Joi.string().trim().length().min(1).max(100).required(),
  birthDate: Joi.string().isoDate().required(),
  login: Joi.string().trim().length().min(1).max(20).required(),
  password: Joi.string().trim().length().min(1).max(20).required(),
});

class User extends Basic {
  constructor({ firstName, lastName, birthDate, type }) {
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }
}

module.exports = { User, UserSchema };
