import React, {Component} from 'react'

export default class DrawerHeader extends Component {
  render(){
    const {children, id, isVisible, onClose} = this.props
    return(
    <div
      className="drawer-header"
      id={id}
      aria-hidden={isVisible}
    >
      <div className="drawer-header__scroll">
        {children}
      </div>
      <div
        className="drawer-header__close"
        onClick={onClose}
      />
    </div>
    )
  }
}