import React from 'react'
import '../styles/UpdateProduct.css'
import { useNavigate } from 'react-router-dom'

function UpdateProduct() {
    const navigate = useNavigate();
  return (
    <section className="update-product-section">
        <div className="update-product-title">
            <h1>UPDATE PRODUCT</h1>
            <div className="back-button">
                <button onClick={()=>navigate("/product")}>
                    <i class='bx bx-left-arrow-alt'></i>
                    <p>Back</p>
                </button>
            </div>
        </div>
        <div className="update-product-form">
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
                    <p>Image Input</p>
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
                <button className='delete-button'><i class='bx bx-trash-alt'></i>Delete</button>
                <button className='add-button'><i class='bx bx-plus-circle'></i>Add Product</button>
            </div>
        </div>
    </section>
  )
}

export default UpdateProduct
