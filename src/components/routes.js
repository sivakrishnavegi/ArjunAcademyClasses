import React from 'react';
import { Route, Switch } from 'react-router-dom';

import News from './news';
import CarouselPage from './slider';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={CarouselPage} />
        <Route exact path='/news' component={News} />
        
     
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
