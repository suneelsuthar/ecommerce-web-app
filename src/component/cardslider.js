import React from "react";
import Card from './card'
import Grid from '@material-ui/core/Grid';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const MultiCarouselPage = (props) => {
  console.log(console.log(props))
  
  return (
    <div className="latestContainer">
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
     <Grid container justify="center"  spacing={1} style={{width:"100%",margin:"auto"}}>
        <Grid item lg={3} md={3}  sm={6} xs={12}> 
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"}/>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} /> 
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} /> 
        </Grid>
    </Grid>
          </MDBCarouselItem>



            <MDBCarouselItem itemId="2">
    <Grid container justify="center" spacing={1} style={{width:"100%",margin:"auto"}}>
        <Grid item lg={3} md={3} sm={6} xs={12} >
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} /> 
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} /> 
        </Grid>
    </Grid>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3">
    <Grid container justify="center"  spacing={1} style={{width:"100%",margin:"auto"}}>
        <Grid item lg={3} md={3} sm={6} xm={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} /> 
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Card onclick={()=>props.onclick()} discription ={"discription"} title={"title"} img={"image"} price={"price"} /> 
        </Grid>
    </Grid> 
            </MDBCarouselItem>

          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default MultiCarouselPage;