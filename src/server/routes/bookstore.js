const router = require('express').Router()
const bookstoreDb = require('../../models/bookDbFunctions')

router.get('/bookstore', (request, response) => {
  bookstoreDb.listAllBooks()
    .then(books => {response.render('index', {books: books.rows})
  })
})

router.get('/bookstore/:id', (request, response) => {
  const id = request.params.id
  bookstoreDb.listSingleBook(id)
    .then(book => {response.render('book', {book: book})})
})

module.exports = router;
