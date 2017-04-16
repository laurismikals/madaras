import React, {Component} from 'react'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import HeaderMain from '../03-organisms/header-main/header-main'
import Home from '../05-pages/home'
import Lake from '../05-pages/lake'
import Services from '../05-pages/services'
import Contacts from '../05-pages/contacts'

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const {home, lake, contacts, services} = data

    return (
      <Router>
      <div className="site__layout-wrap">
        <HeaderMain/>
        <main id="main">
          <Route exact path="/" render={(routerProps) => (
            <Home
              data={home}
              {...routerProps}
            />
          )}/>
          <Route exact path="/lake" render={(routerProps) => (
            <Lake
              data={lake}
              {...routerProps}
            />
          )}/>
          <Route exact path="/services" render={(routerProps) => (
            <Services
              data={services}
              {...routerProps}
            />
          )}/>
          <Route exact path="/contacts" render={(routerProps) => (
            <Contacts
              data={contacts}
              {...routerProps}
            />
          )}/>

        </main>
      </div>
      </Router>
    )
  }
}
