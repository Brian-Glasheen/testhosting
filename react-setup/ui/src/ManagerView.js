import React from 'react';
// import {useState, useEffect } from 'react';
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

  const onAction = () => (
    console.log("Hello, world!")
  );

  return (
    <div>
      <h1>Manager Login</h1>
      <div className='login-box'>
        <button onClick={onAction}>Login</button>
      </div>
    </div>

  );
}

export default ManagerView;
