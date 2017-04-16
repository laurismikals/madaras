import React, {Component} from 'react'

export default class Services extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {heading, services} = this.props.data
    return(
      <article className="container">
        <h1 className="heading-one width-100 bottom-margin--40">{heading}</h1>
        {services.map((service, i)=>{
          return(
            <div key={i} className="width-100 bottom-margin--40">
              <h2 className="heading-two width-100 bottom-margin--20">{service.heading}</h2>
              <div className="text-editor width-100" dangerouslySetInnerHTML={{__html: service.text}}/>
            </div>
          )
        })}
      </article>
    )
  }
}