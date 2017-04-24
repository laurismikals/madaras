import React, {Component} from 'react'

export default class DrawerHeader extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const {children, id, isVisible} = this.props
    return(
    <div
      className="drawer-header"
      id={id}
      aria-hidden={isVisible}
    >
      <div className="drawer-header__scroll">
        {children}
      </div>
      <div className="drawer-header__close"/>
    </div>
    )
  }
}