import React, { useState } from 'react';
import './CartProduct.css';

function CartProduct() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart-product-container">
      <div className="cart-product-col1">
        <div className="cart-product-image">
          <img src="case.png" alt="" />
        </div>
        <div className="cart-product-name">
          <p>PC Case ATX Size</p>
          <h1>Rp 920.000</h1>
          <button className='delete-mobile'>Delete Product</button>
        </div>
      </div>
      <div className="cart-product-col2">
        <i className='bx bx-plus-circle' onClick={incrementQuantity}></i>
        <p>{quantity}</p>
        <i className='bx bx-minus-circle' onClick={decrementQuantity}></i>
        <div className="cart-product-col3">
          <i className='bx bx-trash-alt'></i>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
