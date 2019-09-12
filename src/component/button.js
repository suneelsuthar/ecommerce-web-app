import React from "react";
import { MDBBtn } from "mdbreact";

const DropdownPage = (props) => {
  return (
    <MDBBtn onClick={()=>props.click(props.category)} caret color="primary" style={{borderRadius:"25px",width:"100%"}} >
      {props.icon} {props.category}
      </MDBBtn>
     
)}

export default DropdownPage;