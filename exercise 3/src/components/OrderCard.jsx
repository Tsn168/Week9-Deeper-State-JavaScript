import React from "react";

export default function OrderCard({ product, price, quantity }) {
  return (
    <div className="order-card">
      <h3>{product}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ${(price * quantity).toFixed(2)}</p>
    </div>
  );
}
