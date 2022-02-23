const { v4: uuid } = require('uuid');
const Joi = require('joi');
const Basic = require('./basic.js');

const UserTypeSchema = Joi.object({
  name: Joi.string().trim().length().min(1).max(200).required(),
});

class UserType extends Basic {
  constructor({ name }) {
    super();
    this.id = uuid();
    this.name = name;
  }
}

module.exports = {
  UserType,
  UserTypeSchema,
};