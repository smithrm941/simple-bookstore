const router = require('express').Router()
const bookstoreDb = require('../../models/bookDbFunctions')

// router.get('/search', (request, response => {
//   const query = request.query.q;
//   bookstoreDb.searchByTitle(query)
//     .then(searchResult => {response.render('searchResults', {query})})
//     // .then(searchResult => {console.log(searchResult), {query: query}})
// })

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
  const id = request.params.id
  bookstoreDb.listSingleBook(id)
    .then(book => {response.render('book', {book: book})})
})



module.exports = router;
