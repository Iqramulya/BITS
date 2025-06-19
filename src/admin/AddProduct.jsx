import React from 'react'
import '../styles/AddProduct.css'

function AddProduct() {
  return (
    <section className="add-product-section">
      <div className="add-product-title">
        <h1>ADD PRODUCT</h1>
      </div>
      <div className="add-product-form">
        <div className="first-form">
          {/* <h1 className='first-form-title'>Information Product</h1> */}
          <div className="content-left">
            <div className="product-name-input">
              <h3>Information Product</h3>
              <p>Nama Produk <span>*</span></p>
              <input type="text" />
            </div>
            <div className="product-category-input">
              <p>Kategori Produk <span>*</span></p>
              <input type="text" />
            </div>
            <div className="product-desc-input">
              <p>Deskripsi Produk <span>*</span></p>
              <input type="text" />
            </div>
          </div>
          <div className="content-right">
            <input type="file" accept='image/*'/>
            {/* <label For="file">Choose a Photo</label> */}
          </div>
        </div>
        <div className="second-form">
          <h3>Informasi Penjualan</h3>
          <div className="product-price-input">
            <p>Harga Produk</p>
            <input type="text" />
          </div>
          <div className="product-stock-input">
            <p>Stok Produk</p>
            <input type="text" />
          </div>
        </div>
        <div className="form-button">
          <button><i class='bx bx-plus-circle'></i>Add Product</button>
        </div>
      </div>
    </section>
  )
}

export default AddProduct
