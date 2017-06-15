let React = require('react')

class Burger extends React.Component {
  render(){
    return(
      <button
        className="burger js-burger"
        aria-label="Atvērt navigāciju"
        aria-controls={`#${this.props.id}`}
        aria-expanded={this.props.navOpened}
        onClick={this.props.onClick}
      >
        <span className="burger__flex">
          <span className="burger__bars">
            <span className="burger-bar burger-bar--1"/>
            <span className="burger-bar burger-bar--2"/>
            <span className="burger-bar burger-bar--3"/>
          </span>
        </span>
      </button>
    )
  }
}

module.exports = Burger