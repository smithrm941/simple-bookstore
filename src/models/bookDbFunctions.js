const db = require('./db')

const listAllBooks = () => {
  return db.result(`
    SELECT
      *
    FROM
      book
    ORDER BY
      title`)
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

const createBook = (book) => {
  return db.one(`
    INSERT INTO
      book (title, author, genre, pages, publisher)
    VALUES
      ($/title/, $/author/, $/genre/, $/pages/, $/publisher/)
    RETURNING
      *
    `, book)
    .catch(error => {
      console.error({message: "error while trying to create new book",
                     arguments: arguments})
      throw error})
}

const updateBook = (id) => {
  return db.one(`
    UPDATE
      book (title, author, genre, pages, publisher)
    SET
      (title = $/title/, author = $/author/, genre = $/genre/, pages = $/pages/, publisher = $/publisher/)
    WHERE
      id = $1
    `, [id])
    .catch(error => {
      console.error({message: "error while trying to update book",
                     arguments: arguments})
      throw error})
}

const deleteBook = (id) => {
  return db.query(`
    DELETE FROM
      book
    WHERE
      id = ${id}
  `)
  .catch(error => {
    console.error({message: "error while trying to delete book",
                   arguments: arguments})
    throw error})
}

module.exports = {
  listAllBooks,
  listSingleBook,
  searchByTitle,
  searchByAuthor,
  searchByGenre,
  createBook,
  updateBook,
  deleteBook
}
