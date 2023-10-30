import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './Menu.js';
import SelfServe from './SelfServe';
import Home from './Home';
import ManagerView from './ManagerView.js';

export default (
  <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/menu' element={ <Menu/> } />
    <Route path='/selfserve' element={ <SelfServe/> } />
    <Route path='/manager' element={ <ManagerView/> }/>
  </Routes>
);