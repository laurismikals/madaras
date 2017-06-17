import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../../00-atoms/icon/icon'

export default class LogoMain extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <NavLink
        to={`/${this.props.lang}/home`}
        className="logo-main"
      >
        <span className="logo-main__icon">
          <Icon
            icon="fish"
            className="logo-main__symbol"
          />
        </span>
        <span className="logo-main__text">Madaras</span>
      </NavLink>
    )
  }
}