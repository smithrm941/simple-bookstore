const expect = require ('chai').expect
const query = require('../src/models/bookDbFunctions.js')

describe(`listAllBooks`, () => {
  it.only(`should return 211 rows`, () => {
    return query.listAllBooks()
      .then(data => {
        console.log(data.rows)
        expect(data.rows).to.have.lengthOf(211)
      })
  })
})

describe(`listSingleBook`, () => {
  it.only(`should return a single book based on id`, () => {
    return query.listSingleBook(3)
      .then(data => {
        console.log(data)
        expect(data.title).to.deep.equal('God Created the Integers')
      })
  })
})

describe(`searchByTitle`, () => {
  it(`should return 3 rows when searching for Batman`, () => {
    return query.searchByTitle('Batman')
      .then(data => {
        console.log(data)
        expect(data).to.have.lengthOf(3)
      })
  })
})

describe(`searchByAuthor`, () => {
  it(`should return 7 rows when searching for William`, () => {
    return query.searchByAuthor('William')
      .then(data => {
        console.log(data)
        expect(data).to.have.lengthOf(7)
      })
  })
  it(`should return 3 rows when searching for Capra`, () => {
    return query.searchByAuthor('Capra')
      .then(data => {
        console.log(data)
        expect(data).to.have.lengthOf(3)
      })
  })
})

describe(`searchByGenre`, () => {
  it(`should return 30 rows when searching for nonfiction`, () => {
    return query.searchByGenre('nonfiction')
      .then(data => {
        console.log(data)
        expect(data).to.have.lengthOf(30)
      })
  })
})
