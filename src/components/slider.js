import React from 'react';
import {
  MDBCarousel,
//  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
 // MDBMask,
 // MDBContainer
} from 'mdbreact';
//import DocsLink from '../components/docs';
//import SectionContainer from './section';

const CarouselPage = () => {
  return (
  <div>
   
        <MDBCarousel
          interval={1500}
          activeItem={1}
          length={3}
          showControls
          showIndicators
          className='z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg'
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(132).jpg'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
     
  
  </div>
     

   
  );
};

export default CarouselPage;
