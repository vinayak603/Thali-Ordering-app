import React from 'react';

const Checkout = ({ items, totalPrice }) => {
  return (
    <div className="checkout">
      <h3>Checkout</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            {item.name}: {calculateItemPrice(item)}
          </li>
        ))}
      </ul>
      <p>Total Price: {totalPrice}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
