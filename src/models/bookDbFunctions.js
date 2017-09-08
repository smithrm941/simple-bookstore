const db = require('./db')

const listAllBooks = () => {
  return db.result(`
    SELECT
      *
    FROM
      book`)
    .catch(error => {
      console.error({message: "error while trying to retrieve books",
                     arguments: arguments})
      throw error})
}

const listSingleBook = (id) => {
  return db.one( `
    SELECT
      *
    FROM
      book
    WHERE id = $1`, [id])
    .catch(error=> {
      console.error({message: "error while trying to retrieve book",
                     arguments: arguments})
      throw error})
}

const searchByTitle = (title) => {
  return db.any(`
    SELECT
      *
    FROM
      book
    WHERE
      title
    LIKE
      $1`, ['%' + title + '%'])
    .catch(error => {
      console.error({message: "error while trying to retrieve books by title",
                     arguments: arguments})
      throw error})
}

const searchByAuthor = (author) => {
  return db.any(`
    SELECT
      *
    FROM
      book
    WHERE
      author
    LIKE
      $1`, ['%' + author + '%'])
    .catch(error => {
      console.error({message: "error while trying to retrieve books by author",
                     arguments: arguments})
      throw error})
}

const searchByGenre = (genre) => {
  return db.any(`
    SELECT
      *
    FROM
      book
    WHERE
      genre = $1`, [genre])
    .catch(error => {
      console.error({message: "error while trying to retrieve books by genre",
                     arguments: arguments})
      throw error})
}

// const createBook = (book) => {
//   return db.one(`
//     INSERT INTO
//       books (name, author, genre, pages, publisher)
//     VALUES
//       $1, $2, `)
// }

module.exports = {
  listAllBooks,
  listSingleBook,
  searchByTitle,
  searchByAuthor,
  searchByGenre
}
