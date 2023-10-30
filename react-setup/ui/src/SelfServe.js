// import React from 'react';
import React, { useState, useEffect } from 'react';
import DisplayMenu from './DisplayMenu';

function SelfServe() {

  // const [dineInTogo, setDineInTogo] = useState(''); // Use state to track Dine In or To Go
  // const [employeeRole, setEmployeeRole] = useState('');
  // const [employeeName, setEmployeeName] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  // const handleLogin = () => {
    
  // };

  // const handleDineInTogo = (orderType) => {
  //   setDineInTogo(orderType);
  // };

  const handleMenuSelections = async (category) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/menus/?format=json`);
      if (response.status === 200) {
        const data = await response.json();
        console.log('API response:', data); // Log the response data
        setMenuItems(data);
      } else {
        console.error('Failed to fetch menu items');
      }
    } 
    catch (error) {
      console.error('Error during menu item fetch:', error);
    }
  };
  

  const handleAddToOrder = (menuItem) => {
    const quantity = 1; // You can use a quantity input field
    const price = menuItem.price; // Adjust this based on your data
    const itemTotal = price * quantity;
    const newOrderItem = {
      name: menuItem.name,
      quantity: quantity,
      total: itemTotal,
    };

    setOrder([...order, newOrderItem]);
    setSubtotal(subtotal + itemTotal);
    setTax(subtotal * 0.0825);
    setTotalPrice(subtotal + tax);
  };

  return (
    <div>
      <div>
        <h2>Order Summary</h2>
        <div>Subtotal: ${subtotal.toFixed(2)}</div>
        <div>Tax: ${tax.toFixed(2)}</div>
        <div>Total: ${totalPrice.toFixed(2)}</div>
      </div>

      <div>
        <h2>Current Order</h2>
        <ul>
          {order.map((item, index) => (
            <li key={index}>{`${item.name} x${item.quantity}`}</li>
          ))}
        </ul>
      </div>

      <DisplayMenu
        menuItems={menuItems}
        selectedItem={selectedItem}
        onSelectItem={setSelectedItem}
        onAddToOrder={handleAddToOrder}
      />
    </div>
  );
}

export default SelfServe;