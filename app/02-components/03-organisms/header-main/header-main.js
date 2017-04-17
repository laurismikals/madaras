import React, {Component} from 'react'
import UniqueIds from 'react-html-id' //lib that generates unique ids

import LogoMain from '../../01-molecules/logo-main/logo-main'
import NavMain from '../../01-molecules/nav-main/nav-main'
import Burger from '../../00-atoms/burger/burger'

export default class HeaderMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpened: false
    }

    UniqueIds.enableUniqueIds(this) //init unique ids
  }
  toggleNav(){
    this.setState({
      navOpened: !this.state.navOpened
    })
  }
  render(){
    const nextId = this.nextUniqueId() //generates new unique id
    const lastId = this.lastUniqueId() //accesses previous generated unique id. in this context id's are used to link label with input field

    return(
      <header className="header-main">
        <div className="container header-main__container">
          <div className="header-main__flex">
            <LogoMain lang={this.props.lang}/>
            <Burger
              navOpened={this.state.navOpened}
              onClick={() => this.toggleNav()}
              id={lastId}
            />
            <div
              className="header-main__drawer"
              id={lastId}
              aria-hidden={!this.state.navOpened}
            >
              <NavMain lang={this.props.lang}/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}