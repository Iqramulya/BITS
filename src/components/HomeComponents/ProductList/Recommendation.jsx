import React, { useRef } from 'react';
import './Recommendation.css';
import ProductCard from '../../ProductCard/ProductCard';
import products from '../../../assets/mockData/products';

function Recommendation() {
  const selectedProductIndices = [14, 4, 12, 8, 10, 11, 7];
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
    <section className="recommendation-product">
      <div className="recommendation-product-container">
        <div className="recommendation-product-title">
          <h1>Recommendation Product</h1>
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

export default Recommendation;
