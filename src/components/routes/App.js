import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../Login';
import Home from '../../Home';
import Register from '../Register';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
 