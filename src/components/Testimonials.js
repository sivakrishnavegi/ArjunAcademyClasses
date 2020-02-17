import React from 'react';
import {
  MDBContainer,

} from 'mdbreact';

const Testimonials = () => {
  return (
  <div>
  <section class="p-5 z-depth-1 milestoneSection">
                  
                  <h3 class="text-center font-weight-bold mb-5">Our Milestones</h3>
              
                  <div class="row d-flex justify-content-center">
              
                    <div class="col-md col-lg  text-center">
                      <h4 class="h1 font-weight-normal mb-2">
                        <i class="fas fa-file-alt red-text"></i>
                        <span class="d-inline-block count-up" data-from="0" data-to="14560" data-time="2000">14560</span>
                      </h4>
                      <p class="font-weight-normal text-muted">Complete Projects</p>
                    </div>
              
                    <div class="col-md col-lg  text-center">
                      <h4 class="h1 font-weight-normal mb-2">
                        <i class="fas fa-heart red-text"></i>
                        <span class="d-inline-block count1" data-from="0" data-to="11444" data-time="2000">11444</span>
                      </h4>
                      <p class="font-weight-normal text-muted">Happy Clients</p>
                    </div>
              
                    <div class="col-md col-lg  text-center">
                      <h4 class="h1 font-weight-normal mb-2">
                        <i class="fas fa-headset red-text"></i>
                        <span class="d-inline-block count2" data-from="0" data-to="148" data-time="2000">148</span>
                      </h4>
                      <p class="font-weight-normal text-muted">Super Advisor</p>
                    </div>
                    
                    <div class="col-md col-lg  text-center">
                        <h4 class="h1 font-weight-normal mb-2">
                          <i class="fas fa-smile  red-text"></i>
                          <span class="d-inline-block count3" data-from="0" data-to="99" data-time="2000">99 %</span>
                        </h4>
                        <p class="font-weight-normal text-muted">Client Satisfication</p>
                      </div>
                
                    
                    <div class="col-md col-lg  text-center">
                      <h4 class="h1 font-weight-normal mb-2">
                        <i class="fas fa-user red-text"></i>
                        <span class="d-inline-block count3" data-from="0" data-to="89" data-time="2000">89</span>
                      </h4>
                      <p class="font-weight-normal text-muted">Client Served</p>
                    </div>
              
                  </div>
              
                </section>
 <MDBContainer>
 <section class="team-section text-center my-5">

  
<h2 class="h1-responsive font-weight-bold my-5">Testimonials</h2>

<p class="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
  eum porro a pariatur veniam.</p>


<div class="row text-center">

  <div class="col-md-4 mb-md-0 mb-5">

    <div class="testimonial">
  
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid"  alt="images"/>
      </div>
 
      <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
      <h6 class="font-weight-bold blue-text my-3">Web Designer</h6>
      <p class="font-weight-normal dark-grey-text">
        <i class="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
        eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>

      <div class="orange-text">
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
        <i class="fas fa-star-half-alt"> </i>
      </div>
    </div>

  </div>
 
  <div class="col-md-4 mb-md-0 mb-5">

    <div class="testimonial">
   
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid" alt="images" />
      </div>
   
      <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
      <h6 class="font-weight-bold blue-text my-3">Web Developer</h6>
      <p class="font-weight-normal dark-grey-text">
        <i class="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
   
      <div class="orange-text">
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
      </div>
    </div>

  </div>

  <div class="col-md-4">

    <div class="testimonial">
 
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid" alt="images"/>
      </div>

      <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
      <h6 class="font-weight-bold blue-text my-3">Photographer</h6>
      <p class="font-weight-normal dark-grey-text">
        <i class="fas fa-quote-left pr-2"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti.</p>
   
      <div class="orange-text">
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
        <i class="fas fa-star"> </i>
        <i class="far fa-star"> </i>
      </div>
    </div>

  </div>

</div>


</section>

      </MDBContainer>            
  



  
                </div> );
};

export default Testimonials;