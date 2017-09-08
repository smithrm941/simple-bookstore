const router = require('express').Router()
const bookstoreDb = require('../../models/bookDbFunctions')

router.get('/bookstore', (request, response) => {
  bookstoreDb.listAllBooks()
    .then(data => {response.send(data.rows)})
})

module.exports = router;
