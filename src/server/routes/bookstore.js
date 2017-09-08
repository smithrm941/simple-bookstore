const router = require('express').Router()
const bookstoreDb = require('../../models/bookDbFunctions')

router.get('/bookstore', (request, response) => {
  bookstoreDb.listAllBooks()
    .then(data => {response.send(data.rows)})
})

router.get('/bookstore/:id', (request, response) => {
  const id = request.params.id
  bookstoreDb.listSingleBook(id)
    .then(data => {response.send(data)})
})

module.exports = router;
