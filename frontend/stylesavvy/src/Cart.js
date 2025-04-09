import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, decreaseQuantity, addToCart, totalPrice } = useCart(); 

  if (cartItems.length === 0) return <h2>Your cart is empty</h2>;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item.img} alt={item.name} className="cart-item-img" />
                {item.name}
              </td>
              <td>TND {item.price}</td>
              <td>
                <button onClick={() => decreaseQuantity(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </td>
              <td>TND {item.price * item.quantity}</td>
              <td>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: TND {totalPrice}</h3>
    </div>
  );
};

export default Cart;
