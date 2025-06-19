import React from 'react';
import '../styles/Product.css';
import { useNavigate } from 'react-router-dom'

const products = [
    { id: 1, name: 'PC Case ATX Size', img: 'case1.png', price: 'RP 920.000', category: 'pc-case'},
    { id: 2, name: 'Asus ROG STRIX', img: 'motherboard1.png', price: 'Rp 4.799.000', category: 'motherboard'},
    { id: 3, name: 'Intel Core I9', img: 'processor1.png', price: 'Rp 7.659.000', category: 'processor'},
    { id: 4, name: 'AMD Ryzen 9', img: 'processor2.png', price: 'Rp 6.090.000', category: 'processor'},
    { id: 5, name: 'Samsung 55 Inch', img: 'monitor1.png', price: 'Rp 33.929.000', category: 'monitor'},
    { id: 6, name: 'PC Case ATX Size', img: 'case2.png', price: 'Rp 1.350.000', category: 'pc-case'},
    { id: 7, name: 'ROG STRIX Z490', img: 'motherboard2.png', price: 'Rp 3.890.000', category: 'motherboard'},
    { id: 8, name: 'AMD Ryzen 7', img: 'processor3.png', price: 'Rp 3.175.000', category: 'processor'},
    { id: 9, name: 'Intel Core I7', img: 'processor4.png', price: 'Rp 4.924.000', category: 'processor'},
    { id: 10, name: 'Alienware 34 Inch', img: 'monitor2.png', price: 'Rp 12.296.000', category: 'monitor'},
    { id: 11, name: 'RTX 3090 ASUS ROG', img: 'vga.png', price: 'Rp 39.500.000', category: 'vga'},
    { id: 12, name: 'NZXT H510 ATX-Case', img: 'case3.png', price: 'Rp 1.950.000', category: 'pc-case'},
    { id: 13, name: 'Geforce RTX 3050', img: 'vga3.png', price: 'Rp 3.760.000', category: 'vga'},
    { id: 14, name: 'NZXT H7 ATX Case', img: 'case4.png', price: 'Rp 1.860.000', category: 'pc-case'},
    { id: 15, name: 'GTX 1050 TI', img: 'vga2.png', price: 'Rp 5.369.000', category: 'vga'},
    { id: 16, name: 'AOC 27GS2PU', img: 'monitor3.png', price: 'Rp 2.160.000', category: 'monitor'},
    { id: 17, name: 'T-Force RGB 16GB', img: 'ram1.png', price: 'Rp 760.000', category: 'ram'},
    { id: 18, name: 'APACER NOX RGB 32GB', img: 'ram2.png', price: 'Rp 1.360.000', category: 'ram'},
    { id: 19, name: 'APACER XPG Lancer 2x16GB', img: 'ram3.png', price: 'Rp 1.893.000', category: 'ram'},
    { id: 20, name: 'Zotac RTX 3060', img: 'vga4.png', price: 'Rp 5.300.000', category: 'vga'},
    { id: 21, name: 'ZGskill DDR4 TridentZ Neo RGB 16GB', img: 'ram4.png', price: 'Rp 1.050.000', category: 'ram'},
    { id: 22, name: 'TEAM T-FORCE NIGHT HAWK RGB 16GB', img: 'ram5.png', price: 'Rp 950.000', category: 'ram'},
];

function Product() {
    const navigate = useNavigate();
  return (
    <section className="product-section">
        <div className="product-section-wrapper">
            <div className="product-section-title">
                <h1>LIST PRODUCT</h1>
                <button onClick={()=>navigate("/add-product")}><i className='bx bx-plus-circle'></i>Add Product</button>
            </div>
            <div className="product-table">
                <table className="table">
                    <thead className='thead'>
                        <tr>
                            <th style={{width: '20%'}} className='product-image'>Foto Product</th>
                            <th style={{width: '40%'}} className='product-name'>Nama Product</th>
                            <th style={{width: '20%'}} className='product-category'>Kategori</th>
                            <th style={{width: '30%'}} className='product-price'>Harga</th>
                            <th style={{width: '30%'}} className='product-button'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.img}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td className='action-button'>
                                <button onClick={()=>navigate("update-product")}>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}

export default Product;
