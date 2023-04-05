import { Component } from 'react'
import withRouter from '../helpers/withRouter'

class ClassComponentExample extends Component {
  render() {
    return (
      <div>
        <h1>CIAO</h1>
        <p>La rotta corrente è: {this.props.router.location.pathname}</p>
      </div>
    )
  }
}

export default withRouter(ClassComponentExample)
