import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { MDBBtn } from "mdbreact";
import { Fragment } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  Navbar from './appbar'
import {Link} from "react-router-dom"

const StyledTableCell = withStyles(theme => ({
  head: {
    
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      // backgroundColor: theme.palette.background.default,
      // border:"2px solid "
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    padding:"30px",
    margin:"20px;"
  },
  table: {
    // minWidth: 400,
  },
}));

export default function CustomizedTables(props) {
  const classes = useStyles();

  let localData = localStorage.getItem("cartArray");
  localData = JSON.parse(localData)
  console.log(localData)
  let sumOfQuantity =0;
  let totalQuantity = 0;

 localData.map((value,i)=> sumOfQuantity += (value.price * value.count))
 localData.map((value,i)=> totalQuantity += value.count)

  console.log(sumOfQuantity)
  console.log(totalQuantity)


  
  return (
<div>
<Navbar  data={props.location.state.detail} />


    <Paper className={classes.root} boxShadow={5}>
      <Table className={classes.table}>
        <TableHead >
          <TableRow style={{marginTop:"10px"}}>
            <StyledTableCell style={{ backgroundColor:"rgb(208,214,226)",color:"black",fontWeight:"bold"}}> </StyledTableCell>
            <StyledTableCell style={{ backgroundColor:"rgb(208,214,226)",color:"black",fontWeight:"bold"}} align="left">PRODUCT</StyledTableCell>
            <StyledTableCell style={{ backgroundColor:"rgb(208,214,226)",color:"black",fontWeight:"bold"}} align="left">PRICE&nbsp;(PKR)</StyledTableCell>
            <StyledTableCell style={{ backgroundColor:"rgb(208,214,226)",color:"black",fontWeight:"bold"}} align="left">QUA&nbsp;</StyledTableCell>
            <StyledTableCell style={{ backgroundColor:"rgb(208,214,226)",color:"black",fontWeight:"bold"}} align="left">TOTAL&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        {localData.map((value,i)=>{return  <StyledTableRow > 
            <StyledTableCell align="left"><img src={value.img} height="100px" width="100px" /></StyledTableCell> 
            <StyledTableCell align="left">{value.title}</StyledTableCell>
            <StyledTableCell align="left">{value.price }</StyledTableCell>
            <StyledTableCell align="left">{value.count}</StyledTableCell>
            <StyledTableCell align="left">{value.price * value.count }</StyledTableCell>

            </StyledTableRow> 
        })}

            <StyledTableRow style={{backgroundColor:"cornflowerblue"}} >
              <StyledTableCell style={{fontWeight:"bold"}} component="th" scope="row"></StyledTableCell>
              <StyledTableCell style={{fontWeight:"bold"}} component="th" scope="row">-- </StyledTableCell>
              <StyledTableCell style={{fontWeight:"bold"}} component="th" scope="row">-- </StyledTableCell>
              <StyledTableCell style={{fontWeight:"bold"}} component="th" scope="row">{totalQuantity} </StyledTableCell>
              <StyledTableCell style={{fontWeight:"bold"}} component="th" scope="row"> TOTAL: {sumOfQuantity} /= </StyledTableCell>
              
            </StyledTableRow>
        </TableBody>
      </Table>
      <Link to={{pathname:"/address",state:{detail:props.location.state.detail}}}><MDBBtn style={{float:"right",borderRadius:"50px",minWidth:"300px", marginTop:"4%"}} color="secondary">checkout</MDBBtn></Link>
    </Paper>
    </div>
  );
}
