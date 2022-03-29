const BasicService = require('./basic.js');
const { UserTypesRepository } = require('../repositories/index.js');
const { UserType, UserTypeSchema } = require('../models/index.js');

const userTypesRepository = new UserTypesRepository();

class UserTypesService extends BasicService {
  constructor() {
    super(userTypesRepository, UserType, UserTypeSchema);
  }
}

module.exports = UserTypesService;
