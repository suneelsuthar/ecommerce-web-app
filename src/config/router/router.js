import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Home,Product,About,Shop, Contact,Card,ViewCart,CartCard,Checkout,Addressform,PaymentForm,Review,Dashboard,Addcart,Listitems,Signup,Login,Customers,Editproduct} from '../../component/index'
import History from '../../history.js'
import { mainListItems, secondaryListItems } from '../../component/dashboard/listItems';

function AppRouter() {
    return (
      <Router history={History}>
        <div>
         <Route path="/" exact component={Home} />
         <Route path="/product" component={Product} />
         <Route path="/about" component={About} />
         <Route path="/shop" component={Shop} />
         <Route path="/contact" component={Contact} />
         <Route path="/Card" component={Card} />
         <Route path="/cartcard" component={CartCard} />
         <Route path="/viewcart" component={ViewCart} />
         <Route path="/checkout" component={Checkout} />
         <Route path="/address" component={Addressform} />
         <Route path="/payment" component={PaymentForm} />
         <Route path="/review" component={Review} />
         <Route path="/admin" component={Dashboard} />
         <Route path="/addcart" component={Addcart} />
         <Route path="/listitems" component={mainListItems} />
         <Route path="/listitems" component={secondaryListItems} />
         <Route path="/signup" component={Signup} />
         <Route path="/login" component={Login} />
         <Route path="/customers" component={Customers} />
         <Route path="/editproduct" component={Editproduct} />
         
         

         
        </div>
      </Router>
    );
  }
  
  export default AppRouter;