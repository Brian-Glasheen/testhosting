// import React from 'react';
import React, { useState, useEffect } from 'react';
import './css/menu.css';

const weatherStyle = {
  marginTop: '20px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f0f0f0',
};

function Menu() {
    const [jsonData, setJsonData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/menus/?format=json') // Replace with your API URL
        .then((response) => response.json())
        .then((data) => setJsonData(data))
        .catch((error) => console.error('Error fetching data:', error)),

        fetch('https://api.openweathermap.org/data/2.5/weather?q=College%20Station&appid=e960783c4dc87e3ab3e06ac0b23ea5dd&units=imperial')
        .then((response) => response.json())
        .then((data) => setWeatherData(data)) // Add this console.log)
        .catch((error) => console.error('Error fetching weather data:', error));
    }, []);
    
    if (!jsonData) {
        return <div className="menu-div" style={{paddingTop: 50}}>Loading data...</div>;
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
    <div className="menu-div">
      <h1>Menu</h1>
        <div style = {weatherStyle}>
          <h2>Weather Information</h2>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp} &deg;F</p>
          <p>Weather: {weatherData.weather[0].description}</p>
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