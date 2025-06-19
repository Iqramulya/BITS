import React from 'react'
import './ProductCard.css'

const ProductCard = ({ id, name, img, price, category, rating }) => {
  return (
    <div key={id} className="product-card">
      <div className="card-image">
        <img src={img} alt={name} />
      </div>
      <div className="card-desc">
        <div className="card-row1">
          <div className="product-name">
            <p>{name}</p>
          </div>
          <i className="bx bx-heart"></i>
        </div>
        <div className="card-desc">
          <div className="card-row1">
            <div className="product-name">
              <p>{name}</p>
            </div>
            <i className="bx bx-heart"></i>
          </div>
          <div className="card-row2">
            <h1>{price}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
