import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const itemPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  return (
    <div className="cart-items bg-info p-2 me-1 text-white">
      <h6>Cart Items: {cart.length} </h6>
      <p>Price: ${itemPrice}</p>
    </div>
  );
};

export default Cart;
