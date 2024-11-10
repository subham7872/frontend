// src/components/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import ProductData from "../Data/ProductData";

const Cart = () => {
  const { totalPrice, addToCart, selectedProduct, selectProduct } = useCart();

  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Header with 'YAY it's BOGO' */}
      <div className="flex items-center justify-center my-4">
        <hr className="flex-grow border-gray-300" />
        <h2 className="mx-4 text-center font-bold text-xl text-[#FF6B82]">
          YAY it's BOGO
        </h2>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Product Sections */}
      {ProductData.map((product) => (
        <div
          key={product.id}
          className="border p-4 my-4 rounded-lg hover:bg-green-200/30 hover:border-green-400 transition-colors"
        >
          {/* Product with radio button, name, and discount side by side */}
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="product"
                className="mr-2 text-red-500 checked:bg-red-500 hover:bg-red-500"
                onChange={() => selectProduct(product.id)}
                checked={selectedProduct?.id === product.id}
              />
              <p className="font-semibold mr-2">{product.name}</p>
              <p className="text-sm bg-[#FF6B82] text-white">
                {product.discount}% OFF
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-700">
                Price: ${product.price} USD
              </p>
              <p className="text-sm text-gray-500 line-through">
                Old Price: ${product.oldPrice} USD
              </p>
            </div>
          </div>

          {/* Dropdowns for size, color, quantity, material, and style */}
          {selectedProduct?.id === product.id && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {/* Headings for dropdowns */}
              <div className="col-span-2 grid grid-cols-2 gap-2">
                <p className="font-semibold">Size</p>
                <p className="font-semibold">Color</p>
              </div>

              {/* Dropdowns for each option with checks for undefined */}
              <select className="p-2 border rounded">
                {product.options?.sizes?.length > 0 ? (
                  product.options.sizes.map((size, index) => (
                    <option key={index}>{size}</option>
                  ))
                ) : (
                  <option>No sizes available</option>
                )}
              </select>
              <select className="p-2 border rounded">
                {product.options?.colors?.length > 0 ? (
                  product.options.colors.map((color, index) => (
                    <option key={index}>{color}</option>
                  ))
                ) : (
                  <option>No colors available</option>
                )}
              </select>
              <select className="p-2 border rounded">
                {product.options?.quantities?.length > 0 ? (
                  product.options.quantities.map((quantity, index) => (
                    <option key={index}>{quantity}</option>
                  ))
                ) : (
                  <option>No quantity options available</option>
                )}
              </select>
              <select className="p-2 border rounded">
                {product.options?.materials?.length > 0 ? (
                  product.options.materials.map((material, index) => (
                    <option key={index}>{material}</option>
                  ))
                ) : (
                  <option>No materials available</option>
                )}
              </select>
            </div>
          )}
        </div>
      ))}

      {/* Free delivery and total price */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-[#FF6B82] text-lg font-semibold">Free Delivery</p>
        <p className="text-lg">Total: $115.00 USD</p>
      </div>

      {/* Add to Cart Button */}
      <button
        className="w-full mt-4 p-2 bg-[#FF6B82] text-white rounded flex items-center justify-center gap-2"
        onClick={() => selectedProduct && addToCart(selectedProduct)}
      >
        <span className="text-xl mb-1">+</span>
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default Cart;
