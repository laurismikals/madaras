//component for displaying simple monochrome icons. for example used into button component and main navigation
import React, {Component} from 'react'
// import svg4everybody from 'svg4everybody'

export default class Icon extends Component {
  render() {
    return (
      <svg className={`icon ${this.props.className ? this.props.className : null}`}>
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={"/static/dist/icons-sprite.svg#" + this.props.icon}
        />
      </svg>
    )
  }
}