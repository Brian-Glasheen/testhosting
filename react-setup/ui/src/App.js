import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManagerView from './ManagerView';
import './App.css';
import './css/App.css';

import Menu from './Menu.js';
import SelfServe from './SelfServe';
import Home from './Home';

function App() {
  // return (
  //   <div>
  //       <ManagerView />
  
  return (
    <div className="App">
      <div><h1>im always here</h1></div>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/menu' element={ <Menu/> } />
            <Route path='/selfserve' element={ <SelfServe/> } />
        </Routes>
    </div>
  );
}

export default App;
