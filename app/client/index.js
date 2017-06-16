import {render} from 'react-dom'
import React from 'react'
import Layout from '../shared/04-layout/layout'
import {BrowserRouter as Router} from 'react-router-dom'

render((
  <Router>
    <Layout />
  </Router>
), document.getElementById('app'))
