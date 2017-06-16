import React, {Component} from 'react'

import Text from '../00-atoms/text/text'

export default class Services extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {heading, services} = this.props.data
    const lang = this.props.match.params.lang

    return(
      <article className="container">
        <h1 className="heading-one width-100 bottom-margin--40">{heading[lang]}</h1>
        {services.map((service, i)=>{
          return(
            <div key={i} className="width-100 bottom-margin--40">
              <h2 className="heading-two width-100 bottom-margin--20">{service.heading}</h2>
              <Text
                className="width-100"
              >
                {service.text}
              </Text>
            </div>
          )
        })}
      </article>
    )
  }
}