//component for displaying simple monochrome icons. for example used into button component and main navigation

import React from 'react'
import svg4everybody from 'svg4everybody'

svg4everybody() //plugin adds svg "sprite" support to IE

export default class Icon extends React.Component {
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