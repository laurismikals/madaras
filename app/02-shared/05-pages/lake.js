import React, {Component} from 'react'

import Image from '../00-atoms/image/image'
import Text from '../00-atoms/text/text'

export default class Lake extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {heading, text} = this.props.data
    const lang = this.props.match.params.lang

    return(
      <article className="container">
        <h1 className="heading-one width-100 bottom-margin--40">{heading[lang]}</h1>
        <Text
          className="width-100 bottom-margin--20"
        >
          {text}
        </Text>
        <Image
          src="/static/userfiles/kala_karte.png"
          x={972}
          y={928}
          alt="Kāla karte"
        />
      </article>
    )
  }
}