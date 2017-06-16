import express from 'express'
import React from 'react'
import Layout from '../shared/04-layout/layout'
import NoMatch from '../shared/05-pages/errors/NoMatch'
import Error from '../shared/05-pages/errors/Error'
import {StaticRouter as Router, matchPath} from 'react-router'
import render from './render'

const routes = [
  '/'
]

const app = express()
app.use('/static', express.static('./public'))

app.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, {exact: true}) || acc, null)

  if (!match) {
    res.status(404).send(render(<NoMatch />))
    return
  }

  res.status(200).send(
    render(
      <Router context={{}} location={req.url}>
        <Layout/>
      </Router>
    )
  )
})

app.listen(3000, () => console.log('Demo app listening on port 3000'))
