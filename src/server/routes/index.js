const router = require('express').Router();
const bookstore = require('./bookstore.js')
const bookstoreDb = require('../../models/bookDbFunctions')


router.get('/', (request, response) => {
  bookstoreDb.listAllBooks()
    .then(books => {response.render('index', {books: books.rows})
  })
})

router.use('/bookstore', bookstore);

module.exports = router;
