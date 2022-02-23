const BasicService = require('./basic.js');
const BookTypesRepository = require('../repositories/book-types.js');
const { BookType, BookTypeSchema } = require('../models/book-type.js');

const bookTypesRepository = new BookTypesRepository();

class BookTypesService extends BasicService {
  constructor() {
    super(bookTypesRepository, BookType, BookTypeSchema);
  }
}

module.exports = BookTypesService;
