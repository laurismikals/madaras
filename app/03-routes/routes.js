let React = require('react')
var ReactDOMServer = require('react-dom/server')
let Layout = React.createFactory(require('../02-components/04-layout/layout').Layout)

module.exports = function(app){
  app.get('/', function(req, res){
    let reactHtml = ReactDOMServer.renderToString(Layout({}))
    res.render('index.ejs', {reactOutput: reactHtml})
  })
}