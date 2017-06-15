let express = require('express')
let path = require('path')
let port = 8888

let app = express()

require('node-jsx').install()

let bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

require('./app/03-routes/routes.js')(app)

app.get('*', function(req, res){
  res.json({
    "route": "Sorry this page does not exist!"
  })
})

app.listen(port)

console.log(`Server is running on port ${port}`)