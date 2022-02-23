const BasicService = require('./basic.js');
const BooksRepository = require('../repositories/books.js');
const { Book, BookSchema } = require('../models/book.js');

const booksRepository = new BooksRepository();

class BooksService extends BasicService {
  constructor() {
    super(booksRepository, Book, BookSchema);
  }
}

module.exports = BooksService;
