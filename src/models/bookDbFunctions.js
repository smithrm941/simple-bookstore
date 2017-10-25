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

const listByOffset = (limit, offset) => {
  return db.result(`
    SELECT
      *
    FROM
      book
    ORDER BY
      title
    LIMIT $1
    OFFSET $2`, [limit, offset])
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
    WHERE id = ${id}`)
    .catch(error=> {
      console.error({message: "error while trying to retrieve book",
                     arguments: arguments})
      throw error})
}

const searchBooks = (title) => {
  return db.any(`
    SELECT
      *
    FROM
      book
    WHERE
      lower(title) LIKE $1`, [`%${title.toLowerCase().replace(/\s+/,'%')}%`])
    .catch(error => {
      console.error({message: "error while trying to retrieve books by title",
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

const updateBook = (id, title, author, genre, pages, publisher) => {
  return db.one(`
    UPDATE
      book
    SET
      title = $/title/, author = 'plucky ssduck', genre = 'bugsssss bunny', pages = 192, publisher = 'office max'
    WHERE
      id = ${id}
    `)
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
  searchBooks,
  createBook,
  updateBook,
  deleteBook,
  listByOffset
}
