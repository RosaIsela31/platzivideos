import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../Login';
import Home from '../../Home';
import Register from '../Register';
import NotFound from '../NotFound';
import Layout from '../Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
 