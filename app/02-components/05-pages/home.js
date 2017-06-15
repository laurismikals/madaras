let React = require('react')

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="width-100">
        <div className="container">
          Mājas
        </div>
      </div>
    )
  }
}

module.exports = Home