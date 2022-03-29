const Joi = require('joi');
const Basic = require('./basic.js');

const UserSchema = Joi.object({
  firstName: Joi.string().trim().min(1).max(100).required(),
  lastName: Joi.string().trim().min(1).max(100).required(),
  birthDate: Joi.string().isoDate().required(),
  login: Joi.string().trim().min(1).max(20).required(),
  password: Joi.string().trim().min(1).max(20).required(),
});

class User extends Basic {
  constructor({ firstName, lastName, birthDate, type }) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.type = type;
  }
}

module.exports = { User, UserSchema };
