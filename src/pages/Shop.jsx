import React from 'react'
import { useState } from 'react';
import '../styles/Shop.css'
import AdBanner from '../components/HomeComponents/AdBanner/AdBanner'
import ProductCard from '../components/ProductCard/ProductCard'
import products from '../assets/mockData/products'

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryColors, setCategoryColors] = useState({
        all: '#25CAAC',
        'pc-case': '#000000',
        motherboard: '#000000',
        processor: '#000000',
        ram: '#000000',
        rom: '#000000',
        vga: '#000000',
        monitor: '#000000',
    });

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCategoryColors((prevColors) => ({
            all: category === null ? '#25CAAC' : '#000000',
            'pc-case': category === 'pc-case' ? '#25CAAC' : '#000000',
            motherboard: category === 'motherboard' ? '#25CAAC' : '#000000',
            processor: category === 'processor' ? '#25CAAC' : '#000000',
            ram: category === 'ram' ? '#25CAAC' : '#000000',
            rom: category === 'rom' ? '#25CAAC' : '#000000',
            vga: category === 'vga' ? '#25CAAC' : '#000000',
            monitor: category === 'monitor' ? '#25CAAC' : '#000000',
        }));
    };

    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <section className="shop-section">
            <AdBanner/>
            <div className="product-container">
                <div className="product-content-left">
                    <div className="categories-title">
                        <h1>Categories</h1>
                    </div>
                    <div className="categories-link">
                        <ul>
                            <li onClick={() => handleCategoryClick(null)} style={{ color: categoryColors.all }}>All</li>
                            <li onClick={() => handleCategoryClick('pc-case')} style={{ color: categoryColors['pc-case'] }}>PC Case</li>
                            <li onClick={() => handleCategoryClick('motherboard')} style={{ color: categoryColors['motherboard'] }} >Motherboard</li>
                            <li onClick={() => handleCategoryClick('processor')} style={{ color: categoryColors['processor'] }}>Processor</li>
                            <li onClick={() => handleCategoryClick('ram')} style={{ color: categoryColors['ram'] }}>RAM</li>
                            <li onClick={() => handleCategoryClick('rom')} style={{ color: categoryColors['rom'] }}>ROM</li>
                            <li onClick={() => handleCategoryClick('vga')} style={{ color: categoryColors['vga'] }}>VGA Card</li>
                            <li onClick={() => handleCategoryClick('monitor')} style={{ color: categoryColors['monitor'] }}>Monitor</li>
                        </ul>
                    </div>
                </div>
                <div className="product-content-right">
                    <div className="product-filter">
                        <div className="product-searchbar">
                            <div className="searchbar-input">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="searchbar-icon">
                                <i class='bx bx-search'></i>
                            </div>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="product-card-wrapper">
                            {products
                            .filter((product) =>
                                (!selectedCategory || product.category === selectedCategory) &&
                                (searchTerm
                                    ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    : true)
                            )
                            .map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop
