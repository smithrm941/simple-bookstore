const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const routes = require('./server/routes')
const app = express()

app.set('view engine', 'ejs');
app.set('views', 'src/views')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use((request, response, next) => {
  response.locals.query = ''
  next()
})

app.use('/', routes ) //what does this do?

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
