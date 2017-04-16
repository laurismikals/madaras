import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

export default class NavMain extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <nav className="nav-main">
        <ul className="nav-main__list">
          <li className="nav-main__item">
            <NavLink
              to="/lake"
              activeClassName="active"
              className="nav-main__link"
            >
              Kāla ezers
            </NavLink>
          </li>
          <li className="nav-main__item">
            <NavLink
              to="/services"
              activeClassName="active"
              className="nav-main__link"
            >
              Pakalpojumi
            </NavLink>
          </li>
          <li className="nav-main__item">
            <NavLink
              to="/contacts"
              activeClassName="active"
              className="nav-main__link"
            >
              Kontakti
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}