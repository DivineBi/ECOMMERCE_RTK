import React from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice'; // action to add product to cart

const ProductList = () => {
  const dispatch = useDispatch();

  // Access the current cart items from global Redux state
  const cartItems = useSelector(state => state.cart.cartItems); 

  // Sample list of products
  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];
  
  // Function to handle adding a product to the cart
  const handleAddToCart = product => {
    dispatch(addItemToCart(product)); // Add product to cart
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => {
          const isAlreadyInCart = cartItems.some(item => item.id === product.id); // Check if product is already in cart

          return (
            <li key={product.id} className="product-list-item">
              <span>{product.name} - ${product.price}</span>
              <button
                className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={isAlreadyInCart} // Disable if already in cart
                >
                  {isAlreadyInCart ? 'Added' : 'Add to cart'}
              </button>
            </li>
          );
    })}
     
      </ul>
    </div>
  );
};

export default ProductList;
