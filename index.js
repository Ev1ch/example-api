const AuthorsService = require('./services/authors.js');
const UsersService = require('./services/users.js');
const UserTypesService = require('./services/user-types.js');
const BooksService = require('./services/books.js');
const BookTypesService = require('./services/book-types.js');

const authors = new AuthorsService();
const users = new UsersService();
const userTypes = new UserTypesService();
const books = new BooksService();
const bookTypes = new BookTypesService();
