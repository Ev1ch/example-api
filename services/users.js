const BasicService = require('./basic.js');
const UsersRepository = require('../repositories/users.js');
const { User, UserSchema } = require('../models/user.js');

const usersRepository = new UsersRepository();

class UsersService extends BasicService {
  constructor() {
    super(usersRepository, User, UserSchema);
  }
}

module.exports = UsersService;
