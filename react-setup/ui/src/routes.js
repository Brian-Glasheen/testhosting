import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import ManagerMenuView from './ManagerMenuView';


export default (
  <Route path="/" component={ManagerMenuView}>
    {/* <IndexRoute component={ManagerMenuView} /> */}
    <Route path="/inventory" component={App} />
  </Route>
);