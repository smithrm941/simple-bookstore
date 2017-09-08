const expect = require ('chai').expect
const query = require('../src/models/bookDbFunctions.js')

describe(`listAllBooks`, () => {
  it(`should return 211 rows`, () => {
    return query.listAllBooks()
      .then(data => {
        console.log(data.rows)
        expect(data.rows).to.have.lengthOf(211)
      })
  })
})
