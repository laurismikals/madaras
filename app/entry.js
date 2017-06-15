let React = require('react')
let { render } = require('react-dom')
let {HashRouter} = require('react-router-dom')

let Layout = React.createFactory(require('./02-components/04-layout/layout').Layout)

let mountNode = document.getElementById('app')

render(
  <HashRouter>
    <Layout />
  </HashRouter>
  , mountNode
)