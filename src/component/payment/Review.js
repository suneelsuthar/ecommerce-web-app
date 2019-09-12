import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AppBar from '../appbar'
import firebase from '../../config/database/firebase'
const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];



const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();
console.log(props.location.state.detail)
console.log(props.location.state.address)
console.log(props.location.state.payment)

let detail = props.location.state.detail
let address = props.location.state.address
let payment = props.location.state.payment

let cardType = payment.cvv
let cardHolder = payment.cardName
let cardNum = payment.cardNumber
let expDate = payment.expDate


let sumOfQuantity =0;
let totalQuantity = 0;

detail.map((value,i)=> sumOfQuantity += (value.price * value.count))
detail.map((value,i)=> totalQuantity += value.count)

  const payments = [
    { name: 'Card type', detail: cardType },
    { name: 'Card holder', detail: cardHolder },
    { name: 'Card number', detail: cardNum },
    { name: 'Expiry date', detail: expDate },
  ];
let orderNumber=Math.floor(Math.random() * 2000) + 1  
var d = new Date();
 
var date = d.getDate();
var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
var year = d.getFullYear();
 
var dateStr = date + "/" + month + "/" + year
console.log(dateStr)
let obj ={
  about:props.location.state.detail,
  address:props.location.state.address,
  payment:props.location.state.address,
  orderNum:orderNumber,
  date:dateStr
}

function oderplace(){
  firebase.firestore().collection("orders").add(obj)
  localStorage.removeItem("cartArray")
}

  return (
    <React.Fragment>
  <AppBar  data={props.location.state.detail} />
<main >
<Paper style={{ width: "60%", margin: "auto", padding: "20px", marginTop: "40px" }}>


      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {detail.map(product => (
          <ListItem className={classes.listItem}><img src={product.img} height="50px" width="50px" />
            <ListItemText primary={product.title} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            PKR {sumOfQuantity}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{cardHolder}</Typography>
          <Typography gutterBottom>{address.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <React.Fragment>
                    <div style={{textAlign:"right"}}>
                  <Link to={{ pathname: '/checkout', state: { detail:props.location.state.detail,orderId:orderNumber} }}><Button variant="contained" color="primary" onClick={()=>oderplace()}>PLACE ORDER</Button></Link>
                    </div>
                  </React.Fragment>
                </Paper>
                  </main>
    </React.Fragment>
  );
}