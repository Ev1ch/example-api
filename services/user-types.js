const BasicService = require('./basic.js');
const UserTypesRepository = require('../repositories/user-types.js');
const { UserType, UserTypeSchema } = require('../models/user-type.js');

const userTypesRepository = new UserTypesRepository();

class UserTypesService extends BasicService {
  constructor() {
    super(userTypesRepository, UserType, UserTypeSchema);
  }
}

module.exports = UserTypesService;
