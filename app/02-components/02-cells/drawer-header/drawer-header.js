let React = require('react')

class DrawerHeader extends React.Component {
  constructor(props) {
    super(props)
  }
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

module.exports = DrawerHeader