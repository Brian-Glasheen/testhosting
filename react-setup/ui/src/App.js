// import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import React from 'react';
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/App.css';

function App() {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    let data;
    axios.get('http://localhost:8000/inventory/').then(response => {
      // console.log(response);
      data = response.data;
      setDetails(data);
    }).catch(err => {})
  }, [])

  return (
    <div className="App">
        <Menu />
    </div>

  );
}



export default App;
