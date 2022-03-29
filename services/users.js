const BasicService = require('./basic.js');
const { UsersRepository } = require('../repositories/index.js');
const { User, UserSchema } = require('../models/index.js');

const usersRepository = new UsersRepository();

class UsersService extends BasicService {
  constructor() {
    super(usersRepository, User, UserSchema);
  }
}

module.exports = UsersService;
