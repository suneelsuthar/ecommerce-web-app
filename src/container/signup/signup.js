import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import Appbar from '../../component/appbar'
import {signup} from '../../config/function'
import firebase from '../../config/database/firebase'
import {Link} from 'react-router-dom'

class FormPage extends React.Component {
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


  signup = async ()=>{
    let {email,password} = this.state
    try{
      let user = await signup(email,password)
      console.log(user,'==>Singup')
      firebase.firestore().collection('users').doc(user.uid).set(user).then(
        this.props.history.push('/')
      )
    }
    catch(err){
      console.log(err)

    }


  }




  render() {



    return (
      <div>


<Appbar data={this.props.location.state.detail} />

        <div style={{ marginLeft: "30%" }}>

          <br />
          <br />


          {/* <PrimarySearchAppBar myCart={this.state.myCart} path={this.props.history} /> */}

          <br />
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">Sign up</p>
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
                        <MDBBtn color="cyan" type="button" onClick={this.signup}>
                          SignUp
                      </MDBBtn>

                      <Link to="/login">
                         <MDBBtn color="cyan" type="button">
                          login
                         </MDBBtn>
                         </Link>

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
export default FormPage;