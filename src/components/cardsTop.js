import React from "react";
import { MDBContainer, MDBRow, MDBCol ,MDBIcon} from "mdbreact";



const CardsTop = () => {
    
return (
<div>
  <MDBContainer>
  <section className="my-5 topOneSection">
        <h2 className="h1-responsive font-weight-bold text-center my-5 wow fadeInUp">
          Who we are?
        </h2>
        <p className="topOneSection w-responsive text-center mx-auto mb-5 wow fadeInLeft">
        It is one of the leading Classes Management System in India. Where you can register yourself for variours Programs and we will help you to make your dreams true.
        </p>

        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="flag-checkered"
                  size="2x"
                  className="deep-purple-text wow zoomedIn"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold">E-LEARNINGS</h5>
                <p className="wow slideInLeft">
                A Student Dashboard is avaiable for the the Students with attractive UI with multiple functions. Where you can check your achievement, results and upcoming classes shedule.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="flask" size="2x" className="deep-purple-text  wow zoomedIn" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">E-compiler</h5>
                <p className="wow slideInLeft">
               Hands on experience on code practise online on live compiler.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="glass-martini" size="2x" className="deep-purple-text  wow zoomedIn" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Best Faculty</h5>
                <p className="wow slideInLeft">
                Get trained from the experience faculty.in the industry.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
              alt=""
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="heart" size="2x" className="deep-purple-text  wow zoomedIn" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Beloved</h5>
                <p className="wow slideInRight">
                   Freiendly atomsphere classes
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="bolt" size="2x" className="deep-purple-text  wow zoomedIn" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Interactive UI</h5>
                <p className="wow slideInRight">
                Learn most trending cources online through our e-learning app.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="magic" size="2x" className="deep-purple-text  wow zoomedIn" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3 ">Certifications</h5>
                <p className="wow slideInRight">
                 Get certifed .
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>

  </MDBContainer>
</div>

);
}

export default CardsTop;