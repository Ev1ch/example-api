const {
  AuthorsService,
  UsersService,
  UserTypesService,
  BooksService,
  BookTypesService,
} = require('./services/index.js');

const authors = new AuthorsService();
const users = new UsersService();
const userTypes = new UserTypesService();
const books = new BooksService();
const bookTypes = new BookTypesService();
