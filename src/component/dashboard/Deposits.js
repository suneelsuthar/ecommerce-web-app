import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(props) {
  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();

  var dateStr = date + "/" + month + "/" + year
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Deposits</Title>
      <Typography component="p" variant="h4">
        PKR {props.price}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        up to  {dateStr}
      </Typography>
     
    </React.Fragment>
  );
}