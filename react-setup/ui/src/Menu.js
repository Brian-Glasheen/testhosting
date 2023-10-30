// import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';

function Menu() {
    const [jsonData, setJsonData] = useState(null);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/menus/?format=json') // Replace with your API URL
        .then((response) => response.json())
        .then((data) => setJsonData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
    
    if (!jsonData) {
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
    <div class="menu-div">
      <h1>Menu</h1>
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