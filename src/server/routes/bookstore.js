const router = require('express').Router()
const bookstoreDb = require('../../models/bookDbFunctions')

router.get('/search', (request, response) => {
  let query = request.query.q;
  bookstoreDb.searchBooks(query)
    .then((searchResult) => {
      response.render('searchResults', {query: query, searchResult: searchResult})
  }).catch(error => {
    console.error(error)
  })
})

router.get('/new-book', (request, response) => {
  response.render('newBookForm')
})

router.post('/new-book', (request, response) => {
  let book = {
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
    pages: request.body.pages,
    publisher: request.body.publisher
  }
  bookstoreDb.createBook(book)
    .then((newBook) => {
      response.redirect(`/bookstore/${newBook.id}`)
    })
})

router.get('/:id', (request, response) => {
  let id = request.params.id
  bookstoreDb.listSingleBook(id)
    .then(book => {response.render('book', {book: book})
  })
})

//can't edit through form! >:(
router.put('/:id', (request, response) => {
  let id = request.params.id
  let book = request.body
  bookstoreDb.updateBook(id, book)
    .then((book) => {
      response.redirect(`/bookstore/${id}`)
    }).catch(error => console.error(error.message))
})

router.delete('/:id', (request, response) => {
  let id = request.params.id
  bookstoreDb.deleteBook(id)
    .then(response.redirect('/'))
})


module.exports = router;
