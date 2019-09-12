import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer } from "mdbreact";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { MdShoppingCart } from "react-icons/md";
import IconButton from '@material-ui/core/IconButton';
import Popup from "reactjs-popup";
import Badge from '@material-ui/core/Badge';
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom"
import './../App.css'

class NavbarPage extends Component {

state = {
  collapseID: "",
  disable:true,
  // propslegth:this.props.length,
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));
func=(length)=>{
if(length === 0){
this.setState({name:"empty cart", disable:false})
}
}
render() {
console.log(this.state)

  
  return (
    // <Router>
        <MDBNavbar color="secondary-color" dark expand="md" style={{padding:"6px"}}>
          <MDBNavbarBrand >
            <strong className="white-text">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="50" height="50"
              viewBox="0 0 172 172"
              style={{ fill: '#000000' }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M22.36,46.44c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z" fill="#ee3e54"></path><path d="M132.44,20.64c-0.94993,0 -1.72,0.77007 -1.72,1.72c0,0.94993 0.77007,1.72 1.72,1.72c0.94993,0 1.72,-0.77007 1.72,-1.72c0,-0.94993 -0.77007,-1.72 -1.72,-1.72z" fill="#f1bc19"></path><path d="M86,22.36c-35.1474,0 -63.64,28.4926 -63.64,63.64c0,35.1474 28.4926,63.64 63.64,63.64c35.1474,0 63.64,-28.4926 63.64,-63.64c0,-35.1474 -28.4926,-63.64 -63.64,-63.64z" fill="#fce0a2"></path><path d="M142.76,18.92c-3.79972,0 -6.88,3.08028 -6.88,6.88c0,3.79972 3.08028,6.88 6.88,6.88c3.79972,0 6.88,-3.08028 6.88,-6.88c0,-3.79972 -3.08028,-6.88 -6.88,-6.88z" fill="#f1bc19"></path><path d="M149.64,37.84c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z" fill="#ee3e54"></path><path d="M139.32,127.28c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM25.8,101.48c-3.79972,0 -6.88,3.08028 -6.88,6.88c0,3.79972 3.08028,6.88 6.88,6.88c3.79972,0 6.88,-3.08028 6.88,-6.88c0,-3.79972 -3.08028,-6.88 -6.88,-6.88z" fill="#fbcd59"></path><path d="M43,146.2c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z" fill="#ee3e54"></path><path d="M31.82,87.72c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3z" fill="#ffffff"></path><path d="M36.12,113.52c-0.94993,0 -1.72,0.77007 -1.72,1.72c0,0.94993 0.77007,1.72 1.72,1.72c0.94993,0 1.72,-0.77007 1.72,-1.72c0,-0.94993 -0.77007,-1.72 -1.72,-1.72z" fill="#f1bc19"></path><path d="M137.6,56.76c-0.94993,0 -1.72,0.77007 -1.72,1.72c0,0.94993 0.77007,1.72 1.72,1.72c0.94993,0 1.72,-0.77007 1.72,-1.72c0,-0.94993 -0.77007,-1.72 -1.72,-1.72z" fill="#ffffff"></path><path d="M49.88,122.636c-0.28552,0 -0.516,-0.2322 -0.516,-0.516v-39.7836l36.636,-27.16052l36.636,27.16052v39.7836c0,0.2838 -0.23048,0.516 -0.516,0.516z" fill="#fdfcee"></path><path d="M86,56.67572l35.432,26.26612v38.49016h-70.864v-38.48844l35.432,-26.26784M86,53.67776l-37.84,28.0532v40.38904c0,0.95116 0.77056,1.72 1.72,1.72h72.24c0.94944,0 1.72,-0.76884 1.72,-1.72v-40.38904z" fill="#000000"></path><path d="M74.82,121.475v-31.67724c0,-0.67252 0.50052,-1.21776 1.118,-1.21776h20.124c0.61748,0 1.118,0.54524 1.118,1.21776v31.67724" fill="#ffffff"></path><path d="M75.68,121.475v-31.67724l0.10148,-0.27864l0.15652,-0.07912h20.124l0.15652,0.07912l0.10148,0.27864v31.67724h1.72v-31.67724c0,-0.5504 -0.20468,-1.06124 -0.55384,-1.44308c-0.34572,-0.38012 -0.85828,-0.6364 -1.42416,-0.63468h-20.124c-0.56588,-0.00172 -1.07844,0.25456 -1.42416,0.63468c-0.34916,0.38184 -0.55384,0.89268 -0.55384,1.44308v31.67724h1.72z" fill="#000000"></path><path d="M123.84,81.73096v6.04752l-37.80388,-28.05148l-37.80388,28.05148v-6.04752l37.80388,-28.0532z" fill="#000000"></path><path d="M44.43276,73.11204l41.56724,-31.83204l41.56724,31.83204v12.24296l-41.56724,-31.83204l-41.56724,31.83204z" fill="#cccccc"></path><path d="M44.43276,73.11204l0.73272,0.95632l40.83452,-31.27132l40.36152,30.91012v9.2106l-39.6288,-30.35112c-0.43344,-0.33196 -1.03028,-0.33196 -1.46372,0l-39.63224,30.3494v-9.804h-1.204l0.73272,0.95632l-0.73272,-0.95632h-1.204v12.24296c0,0.45752 0.26144,0.8772 0.6708,1.08016c0.40936,0.20296 0.903,0.1548 1.2642,-0.12384l40.83624,-31.27132l40.83452,31.27132c0.36292,0.27692 0.85484,0.3268 1.2642,0.12384c0.40936,-0.20296 0.6708,-0.62264 0.6708,-1.08016v-12.24296c0,-0.37324 -0.17544,-0.72928 -0.47128,-0.95632l-41.56552,-31.83204c-0.43344,-0.33196 -1.03028,-0.33196 -1.46372,0l-41.56724,31.83204c-0.29756,0.22704 -0.47128,0.58136 -0.47128,0.95632z" fill="#000000"></path><path d="M122.96108,42.80564v5.19096c0,0.36292 -0.2752,0.64844 -0.62608,0.64844l-2.7176,0.03612v21.4054c0,0.24768 -0.1376,0.46612 -0.35088,0.58308l-0.2752,0.06536l-0.37496,-0.129l-7.50436,-5.8394c-0.1634,-0.11524 -0.25112,-0.31132 -0.25112,-0.51944v-15.56772l-2.7176,-0.03612c-0.35088,0 -0.62608,-0.28552 -0.62608,-0.64844v-5.19096c0,-0.36292 0.2752,-0.64844 0.62608,-0.64844h14.19c0.3526,0.00172 0.6278,0.28724 0.6278,0.65016z" fill="#fefdef"></path><path d="M114.39204,66.23032l-2.76576,-2.15172l-0.01548,-0.01204l-0.129,0.18232h0.2408l-0.1118,-0.18232l-0.129,0.18232h0.2408v-16.41568l-3.56556,-0.04816h-0.01204v0.24252l0.17544,-0.16856l-0.17544,-0.07396v0.24252l0.17544,-0.16856l-0.14276,0.1376h0.20124l-0.0602,-0.1376l-0.14276,0.1376h0.20124v-5.19096h-0.20124l0.14104,0.1376l0.0602,-0.1376h-0.20124l0.14104,0.1376l-0.17544,-0.16856v0.24252l0.17544,-0.07396l-0.17544,-0.16856v0.24252h14.19v-0.24252l-0.17544,0.16856l0.17544,0.07396v-0.24252l-0.17544,0.16856l0.14104,-0.1376h-0.20124l0.0602,0.1376l0.14104,-0.1376h-0.20124v5.19096h0.20124l-0.14104,-0.1376l-0.0602,0.1376h0.20124l-0.14104,-0.1376l0.17544,0.16856v-0.24252l-0.17544,0.07396l0.17544,0.16856v-0.24252h-0.01548l-3.56212,0.04816v22.25508h0.19264l-0.0946,-0.172l-0.09804,0.172h0.19264l-0.0946,-0.172l0.41108,0.75508l-0.19436,-0.83936l-0.03268,0.00688l-0.00344,-0.00172l-1.31408,-1.0234c-0.37496,-0.2924 -0.91504,-0.2236 -1.20744,0.15136c-0.2924,0.37496 -0.2236,0.91504 0.15136,1.20744l1.5394,1.19712l0.50912,0.17544l0.23564,0.08084l0.51944,-0.12384l0.1118,-0.02752l0.10148,-0.05504c0.47644,-0.258 0.79808,-0.7654 0.79808,-1.33816v-20.55228l1.86792,-0.0258l-0.01204,-0.86v0.86c0.41108,0.00172 0.79808,-0.17372 1.06296,-0.45064c0.26832,-0.27692 0.42312,-0.65704 0.42312,-1.0578v-5.19096c0,-0.40076 -0.1548,-0.78088 -0.42312,-1.0578c-0.26488,-0.27692 -0.65188,-0.45236 -1.06296,-0.45064h-14.19c-0.41108,-0.00172 -0.79808,0.17372 -1.06296,0.45064c-0.26832,0.27692 -0.42312,0.65704 -0.42312,1.0578v5.19096c0,0.40076 0.1548,0.78088 0.42312,1.0578c0.26488,0.27692 0.65188,0.45236 1.06296,0.45064v-0.86l-0.01204,0.86l1.86792,0.0258v14.71976c-0.00172,0.44204 0.1892,0.91848 0.61232,1.21948l0.4988,-0.70004l-0.52804,0.6794l2.752,2.1414c0.37496,0.2924 0.91504,0.2236 1.20744,-0.15136c0.2924,-0.37496 0.22532,-0.91676 -0.14964,-1.20744zM90.3,106.64h3.44c0.47472,0 0.86,-0.38528 0.86,-0.86c0,-0.47472 -0.38528,-0.86 -0.86,-0.86h-3.44c-0.47472,0 -0.86,0.38528 -0.86,0.86c0,0.47472 0.38528,0.86 0.86,0.86" fill="#000000"></path></g></g></svg>
            </strong>
          </MDBNavbarBrand>

          <div className="md-form my-0" style={{width:"25%" ,marginLeft:"40px"}}>
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              </div>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")}  />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar >
            <MDBNavbarNav left>
              <MDBNavItem active style={{marginLeft:"3%"}}>
              <Link to={{ pathname: '/', state: { detail: this.props.data } }} ><div style={{width:"100px",textAlign:"center",color:"white"}}>Home</div></Link>
              </MDBNavItem>
              
              <MDBNavItem>
              <Link to={{ pathname: '/about', state: { detail: this.props.data } }}><div style={{width:"100px",textAlign:"center",color:"white"}}>About</div></Link>
              </MDBNavItem>

              <MDBNavItem>
                <Link to={{ pathname: '/contact', state: { detail: this.props.data } }}><div style={{width:"100px",textAlign:"center",color:"white"}}>Contact</div></Link>
              </MDBNavItem>

              <MDBNavItem>
                <Link to='/admin'><div style={{width:"100px",textAlign:"center",color:"white"}}>Admin</div></Link>
              </MDBNavItem>
              <MDBNavItem>
              <Link to={{ pathname: '/login', state: { detail: this.props.data } }}><div style={{width:"100px",textAlign:"center",color:"white"}}>Login</div></Link>
              </MDBNavItem>
              
            </MDBNavbarNav>

            
            <MDBNavbarNav right>
             
           


              <IconButton aria-label="show 17 new notifications" color="inherit" style={{ marginRight: "0px", color: "white",borderRadius:"0px"}}>
              <Popup className="popup-content" trigger={
                <Badge badgeContent={this.props.data.length} color="secondary" style={{textAlign:"left"}}>
                  <MdShoppingCart onClick={()=>this.func(this.props.data.length)} />
                </Badge>} position="bottom right" >
                <div  style={{ color: "black"}}>
                   {this.props.data.map((value, i) => { return <p className="popup-div" style={{ fontSize: "15px" }}> <img src={value.img} style={{ width: "40px", height: "40px", verticalAlign: "middle", marginRight:"10px" }} />
                   {value.title} Quantity:{value.count} </p> })}
{this.state.disable ? 
  <Link to={{ pathname: '/viewcart', state: { detail: this.props.data } }}><button className="btn btn-primary" disabled={this.state.disable} >view cart<i className="fas fa-cart-plus ml-2" aria-hidden="true"></i> </button></Link>
:
<button className="btn btn-primary" disabled={this.state.disable} >empty cart<i className="fas fa-cart-plus ml-2" aria-hidden="true"></i> </button>

}             

                   
                   </div>
              </Popup>
            </IconButton>


            <IconButton aria-label="show 4 new mails" color="inherit" style={{ marginRight: "20px", borderRadius: "2px",float:"left",color:"white"}}>
              <Badge badgeContent={4} color="secondary">
                <IoMdHeart />
              </Badge>
            </IconButton>             





            <IconButton aria-label="show 17 new notifications" color="inherit" style={{borderRadius:"0px"}}>
              <Popup style={{ border: "1px solid black"}} trigger={
                <AccountCircleIcon fontSize="large" />
              } position="bottom right" >
                <div style={{ color: "black" }}>

                <Link to={{ pathname: '/logout', state: { detail: this.props.data } }}><button className="btn btn-default"> Logout</button></Link>

                   </div>
              </Popup>
            </IconButton>
              </MDBNavbarNav>










            
          </MDBCollapse>
        </MDBNavbar>
        
    // </Router>
    );
  }
}

export default NavbarPage;