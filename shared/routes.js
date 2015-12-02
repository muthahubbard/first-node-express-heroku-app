import React from 'react';
import { Route } from 'react-router';


import ReactApp from './main';
import Home from './components/Home';


export default (
  <Route component={ReactApp} path='/'>
    <Route component={Home} path='home' />
  </Route>
);