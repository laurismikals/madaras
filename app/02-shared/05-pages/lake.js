import React, {Component} from 'react'

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
        <div
          className="text-editor width-100"
          dangerouslySetInnerHTML={{__html: text}}
        />
      </article>
    )
  }
}