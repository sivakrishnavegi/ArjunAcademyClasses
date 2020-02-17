import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CarouselPage from './slider';
import PostList from './PostList';
import ContactUS from "./ContactUS"
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={CarouselPage} />
       
        <Route exact path='/news' component={PostList} />
        <Route exact path='/contactus' component={ContactUS} />
     
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
      </Switch>
    );
  }
}

export default Routes;
