import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
} from 'react-router-dom'

import Layout from './02-components/04-layout/layout'

render(
  <Router>
    <Layout />
  </Router>
  , document.getElementById('app')
)