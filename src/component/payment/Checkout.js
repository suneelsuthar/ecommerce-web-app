import React from 'react';
import AppBar from '../appbar'
// import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Steper from '../steper'

export default class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      activeStep: 0,
      steps: ['Shipping address', 'Payment details', 'Review your order'],
    }
  }

  addressfunc(data){
    console.log(data)
    alert("worinog")
  }


  

  
  


  render() {
    console.log(this.props.location.state.orderId)



    return (
      <React.Fragment>
     <AppBar  data={this.props.location.state.detail} />

        <main >
        
          <Paper style={{ width: "60%", margin: "auto", padding: "20px", marginTop: "40px" }}>
            <React.Fragment>
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                </Typography>
                  <Typography variant="subtitle1">
                    Your order number is <b> #{this.props.location.state.orderId}</b>. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                </Typography>
                </React.Fragment>
               
                  
            </React.Fragment>

          </Paper>
        </main>
      </React.Fragment>
    );
  }
}