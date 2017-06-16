import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

export default class NavMain extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {lang, data} = this.props

    return(
      <nav className="nav-main">
        <ul className="nav-main__list">
          {Object.keys(data).map((page, i) => {
            if(page !== "home"){
              return(
                <li key={i} className="nav-main__item">
                  <NavLink
                    to={`/${lang}/${page}`}
                    activeClassName="active"
                    className="nav-main__link"
                  >
                    {data[page].heading[lang]}
                  </NavLink>
                </li>
              )
            }
          })}
        </ul>
      </nav>
    )
  }
}