import React, { Component } from 'react';
import { MDBBtn,  MDBCardBody, MDBCardImage,  MDBCardText, MDBCol } from 'mdbreact';
import axios from 'axios';
import Poster from './Poster'
class PostList extends Component {
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
<Poster />

           <MDBCol className="cardsContainerNews">
        
        {this.state.articles.map((news, i) => {
          
          return (
            <div className="cardNews" key={i}>

     
              <div className="contentNews">
                
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <MDBCardBody>{news.description}</MDBCardBody>
                <div className="author">
                  <MDBCardText>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </MDBCardText>
                  <MDBCardText>{this.formatDate(news.publishedAt)}</MDBCardText>
                  <MDBBtn href={news.url}>view</MDBBtn>
                 
                </div>
              </div>
              <div className="imageNews">
                <MDBCardImage src={news.urlToImage} alt="" />
              </div>
            </div>
          );
        })}
      </MDBCol>

      </div>
   
    );
  }
}

export default PostList;




