import React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios';
import './css/App.css';

function ManagerMenuView() {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    let data;
    axios.get('http://localhost:8000/').then(response => {
      // console.log(response);
      data = response.data;
      setDetails(data);
    }).catch(err => {})
  }, [])

  return (
    <div>
      {/* <div class="topnav">
        <a class="active" href="index.html">Home</a>
        <a href="index.html">Menu</a>
      </div> */}
      <link to="/inventory"></link>
      {details.map((output, id) => (
        <div key={id}>
          <h3>{output.id} | {output.name}</h3>
        </div>
      ))}
    </div>

  );
}

export default ManagerMenuView;
