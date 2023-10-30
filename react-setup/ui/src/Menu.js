// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
    const [jsonData, setJsonData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const weatherApiKey = '1927c85cb52bc4610c023263a7b8a293';
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/menus/?format=json') // Replace with your API URL
        .then((response) => response.json())
        .then((data) => setJsonData(data))
        .catch((error) => console.error('Error fetching data:', error));

        axios.get(`http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=College Station`)
      .then((data) => setWeatherData(data))
      .catch((error) => console.error('Error fetching weather data:', error));
    }, []);
    
    if (!jsonData || ! weatherData) {
        return <div>Loading data...</div>;
        // return ;
    }

  // Group the data by category
  const groupedData = jsonData.reduce((result, item) => {
    const category = item.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(item);
    return result;
  }, {});

  return (
    <div>
      <h1>Menu</h1>
        <div>
          <h2>Weather Information</h2>
          <p>City: {weatherData.location.name}</p>
          <p>Temperature: {weatherData.current.temperature} &deg;C</p>
          <p>Weather: {weatherData.current.weather_descriptions[0]}</p>
        </div>
      {Object.entries(groupedData).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="item-container">
            {items.map((item) => (
              <div key={item.id} className="item-box">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="description">{item.description}Description</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

    }

export default Menu;