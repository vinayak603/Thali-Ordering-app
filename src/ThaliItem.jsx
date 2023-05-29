import React from 'react';

const ThaliItem = ({ item, quantity, onChangeQuantity, onRemoveItem }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Quantity: {quantity}</p>
      <button onClick={() => onChangeQuantity(item, quantity - 1)}>-</button>
      <button onClick={() => onChangeQuantity(item, quantity + 1)}>+</button>
      <button onClick={() => onRemoveItem(item)}>Remove</button>
    </div>
  );
};

export default ThaliItem;
