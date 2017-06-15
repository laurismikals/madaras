//component for displaying simple monochrome icons. for example used into button component and main navigation

let React = require('react')
let svg4everybody = require('svg4everybody')

class Icon extends React.Component {
  componentDidMount(){
    svg4everybody() //plugin adds svg "sprite" support to IE
  }
  render() {
    return (
      <svg className={`icon ${this.props.className ? this.props.className : null}`}>
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={"/dist/icons-sprite.svg#" + this.props.icon}
        />
      </svg>
    )
  }
}

module.exports = Icon