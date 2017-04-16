import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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

export default class Layout extends React.Component {
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
          </header>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </main>
      </div>
      </Router>
    )
  }
}
