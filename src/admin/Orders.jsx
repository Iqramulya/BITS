import React from 'react';
import '../styles/Orders.css';

const products = [
    { id: 1, date: '08/11/2023 - 20:00', customer_name: 'Tifa', total_order: 'Rp 1.900.000', status: 'Belum Dibayar'},
    { id: 2, date: '08/11/2023 - 11:25', customer_name: 'Iqra', total_order: 'Rp 950.000', status: 'Process'},
    { id: 3, date: '08/11/2023 - 10:00', customer_name: 'Raihky', total_order: 'Rp 1.450.000', status: 'Cancelled'},
    { id: 4, date: '08/11/2023 - 09:15', customer_name: 'Hanan', total_order: 'Rp 1.880.000', status: 'Completed'},
];

function Orders() {
  return (
    <section className="orders-section">
        <div className="orders-section-wrapper">
            <div className="orders-section-title">
                <h1>ORDERS</h1>
            </div>
            <div className="orders-table">
                <table className="table">
                    <thead className='thead'>
                        <tr>
                            <th style={{width: '10%'}} className='product-image'>Date</th>
                            <th style={{width: '30%'}} className='product-name'>ID Order</th>
                            <th style={{width: '30%'}} className='product-category'>Customer Name</th>
                            <th style={{width: '20%'}} className='product-price'>Total Order</th>
                            <th style={{width: '30%'}} className='product-button'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {products.map(product => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.date}</td>
                            <td>{product.customer_name}</td>
                            <td>{product.total_order}</td>
                            <td>{product.status}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}

export default Orders;
