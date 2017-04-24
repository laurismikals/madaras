import React, {Component} from 'react'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import HeaderMain from '../03-organisms/header-main/header-main'
import FooterMain from '../03-organisms/footer-main/footer-main'
import home from '../05-pages/home'
import lake from '../05-pages/lake'
import services from '../05-pages/services'
import contacts from '../05-pages/contacts'


const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route exact {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }}/>
  )
}

export default class Layout extends Component {
  constructor(props) {
    super(props)

    this.html = document.querySelector('html')
    this.lang = this.html.getAttribute('lang')

    this.home = home
    this.lake = lake
    this.services = services
    this.contacts = contacts
  }

  render() {
    return (
      <Router>
        <div className="site__layout-wrap">
          <HeaderMain lang={this.lang}/>
          <main id="main">
            {Object.keys(data).map((page, i) => {
              return(
                <PropsRoute
                  component={this[page]}
                  key={i}
                  path={page === "home" ? "/:language/" : `/:lang/${page}`}
                  data={data[page]}
                />
              )
            })}
          </main>
          <FooterMain/>
        </div>
      </Router>
    )
  }
}
