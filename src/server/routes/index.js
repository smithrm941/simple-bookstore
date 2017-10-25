const router = require('express').Router();
const bookstore = require('./bookstore.js')
const bookstoreDb = require('../../models/bookDbFunctions')


router.get('/', (request, response) => {
  let page = request.query.page || 1
  page = parseInt(page)
  //limit = # of items to display at a time
  const limit = 10
  //if page is 1: offset = 1-1*10 = 0, not skipping any of the results, getting 10 rows
  //if page is 2: offset = 2-1*10 = 10, skipping first 10 results, get 11-20
  //if page is 3: offset = 3-1*10 = 20, skipping first 20 results, get 21-30
  //offset  = what number do we start at? multiple of limit to eliminate overlap
  const offset = (page - 1) * limit
  const pageStart = page
  //numPages = number of pages we want links to in our pagination strip
  const numPages = 10
  //const isMoreRows = numRowsAfterOffset(offset, numPages * limit) //use this to end the pagination somehow
  bookstoreDb.listByOffset(limit, offset)
    .then(books => {response.render('index', {books: books.rows, page, pageStart, numPages})
  })
})

router.use('/bookstore', bookstore);

module.exports = router;
