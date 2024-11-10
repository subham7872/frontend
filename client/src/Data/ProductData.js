const ProductData = [
  {
    id: 1,
    name: "Product 1",
    price: 20,
    oldPrice: 40,
    discount: 50,
    options: {
      sizes: ["S", "M", "L"],
      colors: ["Red", "Blue"],
      materials: ["Cotton", "Polyester"],
      quantities: [1, 2, 3, 4, 5], // Example: available quantities for selection
    },
  },
  {
    id: 2,
    name: "Product 2",
    price: 30,
    oldPrice: 60,
    discount: 50,
    options: {
      sizes: ["M", "L", "XL"],
      colors: ["Green", "Yellow"],
      materials: ["Wool", "Silk"],
      quantities: [1, 2, 3, 4, 5], // Example: available quantities for selection
    },
  },
  {
    id: 3,
    name: "Product 3",
    price: 65,
    oldPrice: 55,
    discount: 40,
    options: {
      sizes: ["S", "M", "L", "XL"],
      colors: ["Green", "Yellow", "RED", "BLUE"],
      materials: ["Wool", "Silk"],
      quantities: [1, 2, 3, 4, 5], // Example: available quantities for selection
    },
  },
  // More products
];

export default ProductData;
