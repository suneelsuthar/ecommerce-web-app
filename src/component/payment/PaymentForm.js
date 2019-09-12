import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AppBar from '../appbar'

export default class PaymentForm extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  
render(){
let {cardName,cardNumber,expDate,cvv,form2} = this.state
  return (
    <React.Fragment>
           <AppBar  data={this.props.location.state.detail} />

<main >

<Paper style={{ width: "60%", margin: "auto", padding: "20px", marginTop: "40px" }}>


      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth onChange={(e)=>this.setState({cardName:e.target.value})}  />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Card number" fullWidth onChange={(e)=>this.setState({cardNumber:e.target.value})} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth  onChange={(e)=>this.setState({expDate:e.target.value})} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            onChange={(e)=>this.setState({cvv:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="completed" />}
            label="Remember credit card details for next time"
            onChange={(e)=>this.setState({form2:e.target.value})}
          />
        </Grid>
      </Grid>
      <React.Fragment>
                    <div>
              {cardName && cardNumber && expDate && cvv && form2  ? 
              <Link to={{ pathname: '/review', state: { detail:this.props.location.state.detail,address:this.props.location.state.address,payment:this.state}}} ><Button variant="contained" color="primary">next</Button></Link>
           :
         <Button variant="contained" color="primary" disabled="false" >next</Button>
              }  

                    </div>
                  </React.Fragment>
                  </Paper>
                  
                  </main>
    </React.Fragment>
  )};
}