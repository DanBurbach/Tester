import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Results from './Results';
import Error404 from './ERROR404';

import * as ROUTES from '../constants/routes';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home}/>
            <Route exact path={ROUTES.RESULTS} component={Results}/>
            <Route component={Error404}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
