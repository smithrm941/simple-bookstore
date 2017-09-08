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

module.exports = {
  listAllBooks
}
