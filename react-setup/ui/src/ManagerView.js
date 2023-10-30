import React from 'react';
import {useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
//import axios from 'axios';
import './css/ManagerView.css';


function ManagerView() {

  // const [details, setDetails] = useState([]);

  // useEffect(() => {
  //   let data;
  //   axios.get('http://localhost:8000/').then(response => {
  //     data = response.data;
  //     setDetails(data);
  //   }).catch(err => {})
  // }, [])

  return (
    <div>
      <h1>Manager Login</h1>
      <div className='login-box'>
        <p>Home</p>
        <button>Login</button>
      </div>
    </div>

  );
}

export default ManagerView;
