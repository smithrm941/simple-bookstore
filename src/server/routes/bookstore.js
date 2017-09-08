const router = require('express').Router()
const bookstoreDb = require('../../models/bookDbFunctions')

router.get('/bookstore', (request, response) => {
  bookstoreDb.listAllBooks()
    .then(data => {response.render('index', {books: data.rows})
  })
})

router.get('/bookstore/:id', (request, response) => {
  const id = request.params.id
  bookstoreDb.listSingleBook(id)
    .then(book => {response.send(book)})
})

module.exports = router;
