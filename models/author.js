const { v4: uuid } = require('uuid');
const Basic = require('./basic.js');

const AuthorSchema = Joi.object({
  firstName: Joi.string().trim().length().min(1).max(100).required(),
  lastName: Joi.string().trim().length().min(1).max(100).required(),
  birthDate: Joi.string().isoDate().required(),
  deathDate: Joi.string().isoDate(),
});

class Author extends Basic {
  constructor({ firstName, lastName, birthDate, deathDate = null }) {
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.deathDate = deathDate;
  }
}

module.exports = {
  Author,
  AuthorSchema,
};
