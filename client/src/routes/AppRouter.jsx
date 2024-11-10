import React from "react";
import Cart from "../pages/Cart";
import { CartProvider } from "../context/CartContext";
const AppRouter = () => {
  return (
    <>
      <CartProvider>
        <div className="App">
          <Cart />
        </div>
      </CartProvider>
    </>
  );
};

export default AppRouter;
