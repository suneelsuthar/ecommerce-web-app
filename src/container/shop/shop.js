import React from 'react';
import Appbar from '../../component/appbar'
class Shop extends React.Component {
  render() {
    return (
      <div>
            <Appbar data={this.props.location.state.detail}/>


            
       <h1>shop page</h1>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default Shop;
