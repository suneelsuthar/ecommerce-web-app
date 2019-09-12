import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import firebase from './../../config/database/firebase'
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];



  export default class Orders extends React.Component {
    constructor() {
      super()
      this.state = {
        orderArray: [],
      }
    }


    componentDidMount() {
      let totalDeposit = 0;
      let { orderArray } = this.state
      firebase.firestore().collection("orders").get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let getOrders = doc.data()
            totalDeposit += getOrders.orderData[0].count * getOrders.orderData[0].price
            console.log(totalDeposit)
            orderArray.push(getOrders)
            
            this.setState({
              orderArray: orderArray,deposit:totalDeposit })
            })
            this.props.click(totalDeposit)

          })
        }
        

      // firebase.firestore().collection("orders").get()
      //     .then(snapshot => {
      //       snapshot.forEach(doc => {
      //         let getOrders = doc.data()
      //         array.push(getOrders)
      //  console.log(array)

      // })

      // })


render(){
  
        return (
          <React.Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Order No#</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell align="right">Sale Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.orderArray.map(row => (
                  <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.nameOncard}</TableCell>
                    <TableCell>#{row.orderId}</TableCell>
                    <TableCell>{row.orderData[0].count}</TableCell>
                    <TableCell align="right">{row.orderData[0].count * row.orderData[0].price }</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div>
              <Link color="primary" href="javascript:;">
                See more orders
        </Link>
            </div>
          </React.Fragment>
        )}}