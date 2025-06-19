import React, { useRef } from 'react';
import './WishlistRecommendation';
import ProductCard from '../../ProductCard/ProductCard';
import products from '../../../assets/mockData/products';
import './WishlistRecommendation.css'

function WishlistRecommendation() {
  const selectedProductIndices = [13, 10, 11, 17, 15, 7, 12, 8];
  const selectedProducts = selectedProductIndices.map((index) => products[index]);

  const productWrapperRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 1000; // Adjust the scroll amount as needed
    const wrapper = productWrapperRef.current;

    if (wrapper) {
      if (direction === 'left') {
        wrapper.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        wrapper.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section className="wishlist-recommendation">
      <div className="wishlist-recommendation-container">
        <div className="wishlist-recommendation-title">
          <h1>You Might Also Like</h1>
          <div className="button-slider">
            <i className='bx bxs-chevron-left-circle' onClick={() => handleScroll('left')}></i>
            <i className='bx bxs-chevron-right-circle' onClick={() => handleScroll('right')}></i>
          </div>
        </div>
        <div className="product-card-wrapper" ref={productWrapperRef} style={{ scrollBehavior: 'smooth' }}>
          {selectedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WishlistRecommendation;
