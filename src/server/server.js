const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const bookstore = require('./routes/bookstore')
const app = express()

app.set('view engine', 'ejs');
app.set('views', 'src/views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

app.use('/', bookstore )

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
