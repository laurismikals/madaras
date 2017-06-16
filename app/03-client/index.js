import {render} from 'react-dom'
import React from 'react'
import Layout from '../02-shared/04-layout/layout'
import {BrowserRouter as Router} from 'react-router-dom'

render((
  <Router>
    <Layout />
  </Router>
), document.getElementById('app'))
