import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
// import PrimarySearchAppBar from "./../../contenor/Appbar/appbar"

import { login } from '../../config/function'
import firebase from '../../config/database/firebase'
import { Link } from "react-router-dom";
import Appbar from '../../component/appbar'




class LoginFormPage extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      myCart: [],
      email: "",
      password: ""
    }

  }
  componentDidMount() {
    let data = localStorage.getItem('myCart')
    if (data) {
      this.setState({
        myCart: JSON.parse(data),
      })
    }

  }

  login = async ()=>{
    let {email,password} = this.state
    try{
      let user = await login(email,password)
      console.log(user,'==>Login')
      firebase.firestore().collection('users').doc(user.uid).set(user).then(
        this.props.history.push('/')
      )
    }
    catch(err){
      console.log(err)

    }


  }
  render() {
      console.log(this.state)
    return (

      <div>
        {/* <PrimarySearchAppBar myCart={this.state.myCart} path={this.props.history} /> */}
        {/* <PrimarySearchAppBar/> */}
        <Appbar data={this.props.location.state.detail}/>


        <div style={{ marginLeft: "30%" }}>

          <br />
          <br />

          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">Sign in</p>
                      <div className="grey-text">

                        <MDBInput
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          onChange={(e) => this.setState({ email: e.target.value })}

                          validate
                          error="wrong"
                          success="right"
                        />

                        <MDBInput
                          label="Your password"
                          icon="lock"
                          group
                          type="password"
                          onChange={(e) => this.setState({ password: e.target.value })}

                          validate
                        />
                      </div>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn color="cyan" type="button" onClick={this.login}>
                          Login
                         </MDBBtn>


                      <Link to={{ pathname: '/signup', state: { detail: this.props.location.state.detail } }}><MDBBtn color="cyan" type="button">SignUp</MDBBtn></Link>


                         
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <br />
          <br />
        </div>
      </div>

    );
  };
}
export default LoginFormPage;