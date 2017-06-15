let React = require('react')
let { NavLink } = require('react-router-dom')

let Icon = require('../../00-atoms/icon/icon')

class LogoMain extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <NavLink
        to={`/${this.props.lang}/`}
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

module.exports = LogoMain