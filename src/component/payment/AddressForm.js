import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AppBar from '../appbar'

// export default function AddressForm() {
export default class AddressForm extends React.Component{
  constructor(){
    super()
    this.state={
   
    }
  }
  render(){
console.log(this.state)
let {fname,lname,address,city,state,zipcode,country,form1} = this.state
  return (
      
    <React.Fragment>
           <AppBar  data={this.props.location.state.detail} />

<main >
<Paper style={{ width: "60%", margin: "auto", padding: "20px", marginTop: "40px" }}>

      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            onChange={(e)=>this.setState({fname:e.target.value}) }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            onChange={(e)=>this.setState({lname:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            onChange={(e)=>this.setState({address:e.target.value})}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            onChange={(e)=>this.setState({city:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth onChange={(e)=>this.setState({state:e.target.value})} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            onChange={(e)=>this.setState({zipcode:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            onChange={(e)=>this.setState({country:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="true" />}
            label="Use this address for payment details"
            onChange={(e)=>this.setState({form1:"completed"})}
          />
        </Grid>
      </Grid>
      <React.Fragment>
                    <div>

            {fname && lname && address && city && state && zipcode && country && form1 ? 
         <Link to={{ pathname: '/payment', state: { detail: this.props.location.state.detail,address:this.state}}} ><Button variant="contained" color="primary">next</Button></Link>
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