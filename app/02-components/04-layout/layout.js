let React = require('react')
let {Route, Redirect} = require('react-router-dom')

let HeaderMain = require('../03-organisms/header-main/header-main')
let FooterMain = require('../03-organisms/footer-main/footer-main')
let home = require('../05-pages/home')
let lake = require('../05-pages/lake')
let services = require('../05-pages/services')
let contacts = require('../05-pages/contacts')


// const renderMergedProps = (component, ...rest) => {
//   const finalProps = Object.assign({}, ...rest)
//   return (
//     React.createElement(component, finalProps)
//   )
// }
//
// const PropsRoute = ({ component, ...rest }) => {
//   return (
//     <Route exact {...rest} render={routeProps => {
//       return renderMergedProps(component, routeProps, rest)
//     }}/>
//   )
// }

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }

    if(typeof document !== "undefined"){
      this.html = document.querySelector('html')
      this.lang = this.html.getAttribute('lang')
    }

    this.home = home
    this.lake = lake
    this.services = services
    this.contacts = contacts
  }
  render() {
    return (
      <div className="site__layout-wrap">
        <HeaderMain lang={this.lang}/>
        <main id="main">
          {/*<Route exact {...rest} render={routeProps => {*/}
            {/*return renderMergedProps(component, routeProps, rest)*/}
          {/*}}/>*/}
          {/*{Object.keys(data).map((page, i) => {*/}
            {/*return(*/}
              {/*<PropsRoute*/}
                {/*component={this[page]}*/}
                {/*key={i}*/}
                {/*path={page === "home" ? `/:${this.lang}/` : `/:lang/${page}`}*/}
                {/*data={data[page]}*/}
              {/*/>*/}
            {/*)*/}
          {/*})}*/}
        </main>
        <FooterMain/>
        {/*<Redirect to={{*/}
          {/*pathname: `/${this.lang}/`*/}
        {/*}}/>*/}
      </div>
    )
  }
}

module.exports.Layout = Layout