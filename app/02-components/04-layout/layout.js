import React, {Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PageLake from '../05-pages/lake'
import PageContacts from '../05-pages/contacts'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Router>
      <div className="site__layout-wrap">
        <main id="main">
          <header>
            <Link to="/">
              Home
            </Link>
            <Link to="about">
              About
            </Link>
            <Link to="lake">
              Ezers
            </Link>
            <Link to="contacts">
              Kontakti
            </Link>
          </header>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/lake" component={PageLake}/>
          <Route path="/contacts" component={PageContacts}/>
        </main>
      </div>
      </Router>
    )
  }
}
