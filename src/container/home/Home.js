import React from 'react';
import '../../App.css';
import './Home.css'
import Appbar from '../../component/appbar'
import Slider from '../../component/slider'
import Button from '../../component/button'
import Footer from '../../component/footer'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Cardslider from '../../component/cardslider'
import Card from '../../component/card'
// import Resultcart from '../../component/resultCard'
import Chekout from '../../component/payment/Checkout'
import Cartcard from '../../component/addtocart/cartCard'
import Dashboard from '../../component/dashboard/Dashboard'
import { IoMdLaptop } from "react-icons/io";
import { IoMdCamera } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosMusicalNotes } from "react-icons/io";
import firebase from '../../config/database/firebase'
// import { array } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/@types/prop-types';



class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      cartArray: [],
      product: [],
    }
    this.passCartData = this.passCartData.bind(this)
    this.filter = this.filter.bind(this)
  }

  addproduct = (data) => {
    alert("working")
    console.log(data)
    this.props.history.push("/cartcard", { data })
  }


  passCartData(props) {
    let { cartArray } = this.state
    // let cartArray = []
    // console.log(props.location.state.name)
    let data = {
      title: props.location.state.name.title,
      img: props.location.state.name.product,
      price: props.location.state.name.price,
      count: this.state.count,
    }
    cartArray.push(data)
    localStorage.setItem("cartArray", JSON.stringify(cartArray))
    console.log(cartArray)
    this.setState({
      cartArray: this.state.cartArray
    })
  }
  componentDidMount() {
    let { product } = this.state
    firebase.firestore().collection("products").get()
    // .where("category" , "==" ,"mobile phoen")
    
      .then(snapshot => {
        snapshot.forEach(doc => {
          let getproduct = doc.data()
          product.push(getproduct)
          this.setState({
            product: product
          })
        })
      })

    var productData = localStorage.getItem('cartArray')
    if (productData) {
      this.setState({
        cartArray: JSON.parse(productData)
      })
    }
  }

  filter =(data)=>{

    alert(data)
     var array =[]
      firebase.firestore().collection('products').where("category", "==", data).get().then(
        value => {
          
          value.forEach(doc => {
            let products = doc.data()
            array.push(products)
            console.log(products)
            this.setState({
              product :array
            })
          })
        }
      )

    }
    

  
  render() {
    let product = this.state.product
    console.log(this.state.product)
    return (
      <div>
        <Appbar data={this.state.cartArray} />


        <Slider />
        <Grid justify="center" container justify="center" spacing={1} style={{ margin: "auto" }}>
          <Grid justify="center" item lg={3} md={4} sm={3} xs={12} >
            <Button click={this.filter} category="phone & tablate" icon={<IoIosPhonePortrait />} />
          </Grid>
          <Grid justify="center" item lg={3} md={4} sm={3} xs={12}>
            <Button click={this.filter} category="camera & accessories" icon={<IoMdCamera />} />
          </Grid>
          <Grid justify="center" item lg={3} md={4} sm={3} xs={12}>
            <Button click={this.filter} category="computer & laptop" icon={<IoMdLaptop />} />
          </Grid>
          <Grid justify="center" item lg={3} md={4} sm={3} xs={12}>
            <Button click={this.filter} category="musical instruments" icon={<IoIosMusicalNotes />} />
          </Grid>

        </Grid>
        <br /><br /><br />
        {/* <h1 style={{textAlign:"center"}}>LATEST PRODUCTS</h1> */}
        {/* <Cardslider onclick={this.addproduct}/> */}
        <br /><br /><br /><br /><br /><br />
        <h1 style={{ textAlign: "center" }}>SEE ALL PRODUCTS</h1>





        <Grid justify="center" container justify="center" spacing={1} style={{ margin: "auto" }}>

          {this.state.product.map((val, i) => { return <Grid justify="center" item lg={3} md={4} sm={3} xs={12} ><Card onclick={this.addproduct} discription={val.discription} title={val.title} img={val.productimage} price={val.price} /></Grid> })}
        </Grid>

        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

        <Footer />
      </div>
    )
  }
}

export default Home;
