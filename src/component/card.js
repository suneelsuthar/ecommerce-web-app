import React from "react";
import './../container/home/Home.css'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn } from
    "mdbreact";
import Rating from './reviews'
const eCommercePage = (props) => {
    let dataObj ={
        discription:props.discription,
        title:props.title,
        img:props.img,
        price:props.price
    }
    console.log(props)
    return (
        <MDBCard onClick={()=>props.onclick(dataObj)} className="m-2 latestProduct" style={{ width: "100%",height:"600px",float:"left" }} cascade ecommerce wide>
            <MDBCardImage style={{height:"190px" , width:"240px", margin:"auto"}} cascade top src={props.img}
                waves />
            <MDBCardBody cascade className="text-center">
                <MDBCardTitle>
                    <a href="#!" style={{fontSize:"15px"}}><strong>{props.title}</strong></a>
                </MDBCardTitle>
                <ul className="rating">
                    <Rating />
                </ul>
                <MDBCardText style={{height:"130px"}}>
                    {props.discription}
        </MDBCardText>
                <MDBCardFooter style={{ float: "left", width: "100%" }}>
                    <span className="float-left">{props.price} PKR</span>
                    <span className="float-right">
                        <MDBTooltip placement="top" >
                            <MDBBtn tag="a" size="lg" className="p-1 m-0 mr-2 z-depth-0" style={{ float: "left", width: "40px" }}>
                                <MDBIcon icon="shopping-cart" />
                            </MDBBtn>
                            <div>Add to Cart</div>
                        </MDBTooltip>
                        <MDBTooltip placement="top">
                            <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" size="lg" className="p-1 m-0 mr-2 z-depth-0" style={{ float: "left", width: "40px" }} >
                                <MDBIcon icon="share-alt" />
                            </MDBBtn>
                            <div>Share</div>
                        </MDBTooltip>

                        <MDBTooltip placement="top">
                            <MDBBtn tag="a" size="lg" className="p-1 m-0 z-depth-0" style={{ float: "left", width: "40px" }} >
                                <MDBIcon icon="heart" className="red-text" />
                            </MDBBtn>
                            <div>Added to Wishlist</div>
                        </MDBTooltip>
                    </span>
                </MDBCardFooter>
            </MDBCardBody>
        </MDBCard>
    );
}

export default eCommercePage;