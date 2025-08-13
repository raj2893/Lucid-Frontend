import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <h2>{product.name}</h2>
    <p><strong>Composition:</strong> {product.composition}</p>
    <p><strong>Box Size:</strong> {product.box_size}</p>
    <p><strong>MRP:</strong> ₹{product.mrp}</p>
    <p><strong>Type:</strong> {product.type}</p>
    {product.image_url && <img src={product.image_url} alt={product.name} />}
  </div>
);

export default ProductCard;
