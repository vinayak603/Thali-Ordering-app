import React, { useState } from 'react';
import ThaliItem from './ThaliItem';
import Checkout from './Checkout';

const ThaliCustomizer = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Chapati', quantity: 0, price: 10, image: 'chapati.jpg' },
    { id: 2, name: 'Pickle', quantity: 0, price: 5, image: 'pickle.jpg' },
    { id: 3, name: 'Curd', quantity: 0, price: 15, image: 'curd.jpg' },
    { id: 4, name: 'Sweet', quantity: 0, price: 20, image: 'sweet.jpg' },
    { id: 5, name: 'Daal', quantity: 0, price: 25, image: 'daal.jpg' },
    { id: 6, name: 'Paneer Dish', quantity: 0, price: 30, image: 'paneer.jpg' },
  ]);

  const handleChangeQuantity = (item, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: newQuantity };
        }
        return i;
      });
      setItems(updatedItems);
    }
  };

  const handleRemoveItem = (item) => {
    const updatedItems = items.filter((i) => i.id !== item.id);
    setItems(updatedItems);
  };

  const calculateItemPrice = (item) => {
    return item.quantity * item.price;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += calculateItemPrice(item);
    });
    return totalPrice;
  };

  const isThaliEmpty = () => {
    return items.every((item) => item.quantity === 0);
  };

  return (
    <div>
      <h2>Customize Your Thali</h2>
      <div className="thali-items">
        {items.map((item) => (
          <ThaliItem
            key={item.id}
            item={item}
            quantity={item.quantity}
            onChangeQuantity={handleChangeQuantity}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      {!isThaliEmpty() && <Checkout items={items} totalPrice={calculateTotalPrice()} />}
    </div>
  );
};

export default ThaliCustomizer;
