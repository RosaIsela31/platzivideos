import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../Login';
import Home from '../../Home';
import Register from '../Register';
import NotFound from '../NotFound';
import Layout from '../Layout';
import Player from '../Player';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/player/:id" component={Player} /> 
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
 