import React, { Component } from 'react';
import {  MDBCol } from 'mdbreact';
import axios from 'axios';
import {
  MDBCarousel,

  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,

  MDBContainer
} from 'mdbreact';
class Poster extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: [],
      isLoaded: false
    };

   
  }

  componentDidMount() {

 
    // Make HTTP reques with Axios
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=a2f39b1fb611435caaf709ba7aa5f86e`)
      .then(res => {
        const articles = res.data.articles;
      
        console.log(articles);
        this.setState({ articles: articles ,  isLoaded: true });
      })
      .catch(error => {
        console.log(error);
      });
}

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  

  render() {
    const { isLoaded} = this.state;

    if (!isLoaded)
        return <div><center>Loading.....</center></div>;
    return (
      <div>
<br  />

<MDBContainer header='With Captions'>
   <MDBCol className="cardsContainer  newsSlider">
   <MDBCarousel
              interval={1800}
              activeItem={1}
              length={20}
          
              className='z-depth-1'
            >
        {this.state.articles.map((news, i) => {
          
          return (
            <div>
   
           
              <MDBCarouselInner>
                <MDBCarouselItem itemId={i} >

                  <MDBView>
               
  <div class="card-body card-body-cascade text-center">

  
        
  
    <h5 class="blue-text pb-2"><strong>{news.title}</strong></h5>
  
    <p class="card-text">{news.description} </p>

  
  
  </div>
                 <br       />
                  
                  </MDBView>
              
                </MDBCarouselItem>
              </MDBCarouselInner>
          
       
    
      
      </div>
         
    
        );
        
        })}
          </MDBCarousel>
      </MDBCol>
</MDBContainer>
      </div>
   
    );
  }
}

export default Poster;




