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
    <div>
      {/* <div class="topnav">
        <a class="active" href="index.html">Home</a>
        <a href="index.html">Menu</a>
      </div> */}
      {/* <Link to="/">Menu view</Link> */}
      {details.map((output, id) => (
        <div key={id}>
          <h3>{output.ingredient_id} | {output.ingredient_name}</h3>
        </div>
      ))}
    </div>

  );
}

export default App;
