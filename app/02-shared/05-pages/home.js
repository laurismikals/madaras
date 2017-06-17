import React, {Component} from 'react'

import Image from '../00-atoms/image/image'
import Text from '../00-atoms/text/text'

export default class Home extends Component {
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
        <div
          style={{
            float: 'left',
            width: '100%',
            maxWidth: '540px',
            margin: "0 20px 20px 0"
          }}
        >
          <Image
            src="/static/userfiles/krasaini_logo.jpg"
            x={1244}
            y={226}
            alt="EU logo"
          />
        </div>
        <div
          style={{
            float: 'left',
            width: '100%',
            maxWidth: '99px',
            margin: "0 20px 20px 0"
          }}
        >
          <Image
            src="/static/userfiles/leader.png"
            x={1}
            y={1}
            alt="Leader logo"
          />
        </div>
        <div
          style={{
            float: 'left',
            width: '100%',
            maxWidth: '225px'
          }}
        >
          <Image
            src="/static/userfiles/mnf_logo.png"
            x={229}
            y={101}
            alt="MNF logo"
          />
        </div>
      </article>
    )
  }
}