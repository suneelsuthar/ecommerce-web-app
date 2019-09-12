import React from 'react';
import Appbar from '../../component/appbar'
import '../../App.css'
class About extends React.Component {
  render() {
  console.log(this.props.location.state.detail)
    return (
      <div>
            <Appbar data={this.props.location.state.detail}/>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       <h1>About</h1>
      </div>
    )
  }
}

export default About;
