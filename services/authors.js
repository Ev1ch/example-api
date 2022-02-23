const BasicService = require('./basic.js');
const AuthorsRepository = require('../repositories/authors.js');
const { Author, AuthorSchema } = require('../models/author.js');

const authorsRepository = new AuthorsRepository();

class AuthorsService extends BasicService {
  constructor() {
    super(authorsRepository, Author, AuthorSchema);
  }
}

module.exports = AuthorsService;
