// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";
import ProductData from "../Data/ProductData";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Store added products
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Calculate total price based on the cart items
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * (1 - product.discount / 100); // Price after discount
  }, 0);

  // Add selected product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Set selected product when radio button is clicked
  const selectProduct = (productId) => {
    setSelectedProduct(ProductData.find((p) => p.id === productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, totalPrice, addToCart, selectedProduct, selectProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
