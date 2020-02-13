import React, { Component } from 'react'
import { MDBBtn, MDBCard,MDBContainer,MDBRow ,MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import axios from 'axios';
export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            articles: [],
            isLoaded: false
        }
    }
    componentDidMount(){
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=a2f39b1fb611435caaf709ba7aa5f86e`)
        .then(res => {
          const articles = res.data.articles;
          // Set state with result
          console.log(articles);
          this.setState({ articles: articles , isLoaded: true});
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
       // const {posts, errorMsg}= this.state
        const { isLoaded, posts } = this.state;

        if (!isLoaded)
            return <div><center>Hey babe news is Loading ;)</center></div>;
        return (
         
            <div className="cardsContainer">
            {this.state.articles.map((news, i) => {
              return (
                <div className="card" key={i}>
                  
          
          <MDBContainer>
             <MDBRow key={i}>
                <MDBCol size="4"> <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src={news.urlToImage} waves />
              <MDBCardBody>
                <MDBCardTitle href={news.url}>{news.title}</MDBCardTitle>
                <MDBCardText>
                {news.description}
                      <p>{this.formatDate(news.publishedAt)}</p>
                </MDBCardText>
                <MDBBtn href={news.url}>view more..</MDBBtn>
              </MDBCardBody>
            </MDBCard></MDBCol>
              </MDBRow>
           </MDBContainer>
                </div>

                
              );
            })}
          </div>
        )
    }
}

export default PostList
