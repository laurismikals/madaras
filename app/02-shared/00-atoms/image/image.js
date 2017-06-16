//component for displaying images. img tag is wrapped in figure tags
//this component has lazyloading functionality

import React, {Component} from 'react'
import LazyLoad from 'react-lazy-load' //lazy load plugin for loading images only when they are near or in the viewport.
//this improves page loading speed and prevents browser from downloading unnecessary images

export default class Image extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  loadHandler() {
    this.setState({
      loaded:!this.state.loaded
    })
  }

  render() {
    const {className, x, y, src, alt} = this.props
    return (
      <figure
        className={`
          ${className ? className : ''}
          image
          ${x && y ? 'image--aspect' : ''}
          ${this.state.loaded ? 'image--loaded' : 'image--loading'}
        `}
        style={x && y ? {padding: `0 0 ${y * 100 / x}% 0`} : null}
      >
        <LazyLoad
          offsetVertical={500}
        >
          <img
            src={src}
            alt={alt}
            onLoad={() => this.loadHandler()}
          />
        </LazyLoad>
        <span className="image__loading-animation"/>
      </figure>
    )
  }
}