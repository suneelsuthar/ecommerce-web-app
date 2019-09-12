import React from 'react';
import Appbar from '../../component/appbar'
import '../../App.css'

class Contact extends React.Component {
  render() {
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
       <h1>Contact page</h1>
      </div>
    )
  }
}

export default Contact;
