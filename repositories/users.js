const BasicRepository = require('./basic.js');
const UserTypesRepository = require('./user-types.js');

const userTypesRepository = new UserTypesRepository();

class UsersRepository extends BasicRepository {
  getFullById(id) {
    const user = this.getById(id);
    const userType = userTypesRepository.getById(user.type);

    user.type = userType;

    return user;
  }
}

module.exports = UsersRepository;
