import React, {Component} from 'react'

export default class Contacts extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {heading, address, hosts, requisites} = this.props.data
    return(
      <article className="container">
        <h1 className="heading-one width-100 bottom-margin--40">{heading}</h1>
        <h2 className="heading-two width-100 bottom-margin--20">{address.heading}</h2>
        <div
          className="text-editor width-100 bottom-margin--40"
          dangerouslySetInnerHTML={{__html: address.text}}
        />
        <h2 className="heading-two width-100 bottom-margin--20">{hosts.heading}</h2>
        {hosts.hosts.map((host, i)=>{
          return(
            <div className="text-editor width-100 bottom-margin--40" key={i}>
              <p dangerouslySetInnerHTML={{__html: host.name}} />
              <p><strong>E-pasts:</strong> <a href={`mailto:${host.email}`}>{host.email}</a></p>
              <p><strong>Telefons:</strong> <a href={`tel:${host.phone}`}>{host.phone}</a></p>
            </div>
          )
        })}
        <h2 className="heading-two width-100 bottom-margin--20">{requisites.heading}</h2>
        <div
          className="text-editor width-100 bottom-margin--40"
          dangerouslySetInnerHTML={{__html: requisites.text}}
        />
      </article>
    )
  }
}