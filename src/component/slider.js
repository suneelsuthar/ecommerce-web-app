import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <div style={{padding:"0px", width:"auto"}}>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
        
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.homeshopping.pk/templates/ResGarden/images/Your-best-shot-is-just-a-purchase-away!.gif"
                alt="First slide"
                height="500px"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.homeshopping.pk/templates/ResGarden/images/hs2016/studio-lights-landing-banner.jpg"
                alt="Second slide"
                height="500px"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.homeshopping.pk/templates/ResGarden/images/laptop-landing-banner-jan2019.png"
                alt="Third slide"
                height="500px"

              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default CarouselPage;