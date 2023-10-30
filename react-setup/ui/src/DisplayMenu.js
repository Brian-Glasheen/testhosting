import React, { useState, useEffect } from 'react';

function DisplayMenu({ selectedItem, onSelectItem, onAddToOrder }) {
    const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Simulate fetching menu items from an API
    fetch('http://127.0.0.1:8000/api/menus/?format=json') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);

  const itemButtonStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setUpdateMenuItemChoice(0);
  };

  const groupedData = menuItems.reduce((result, item) => {
    const category = item.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(item);
    return result;
  }, {});

  return (
    <div>
  
      {Object.entries(groupedData).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="menu-grid">
            {items.map((item) => (
              <button
                key={item.id}
                style={itemButtonStyle}
                onClick={() => {
                  onSelectItem(item);
                  onAddToOrder(item);
                }}
              >
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="description">{item.description}Description</div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}  

export default DisplayMenu;