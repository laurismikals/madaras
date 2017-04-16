import React, {Component} from 'react'

import LogoMain from '../../01-molecules/logo-main/logo-main'
import NavMain from '../../01-molecules/nav-main/nav-main'

export default class HeaderMain extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <header className="header-main">
        <div className="container header-main__container">
          <div className="header-main__flex">
            <LogoMain />
            <NavMain />
          </div>
        </div>
      </header>
    )
  }
}