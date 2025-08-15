import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import './ProductList.css';
import CustomDropdown from '../components/CustomDropdown';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [allCategories, setAllCategories] = useState([]);
  const [allTypes, setAllTypes] = useState([]);

  useEffect(() => {
    let filteredProducts = productsData;
    if (selectedCategory !== 'All') {
      filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
    }
    if (selectedType !== 'All') {
      filteredProducts = filteredProducts.filter(p => p.type === selectedType);
    }
    setProducts(filteredProducts);
 
    if (allCategories.length === 0 && allTypes.length === 0) {
      const categories = ['All', ...new Set(productsData.map(p => p.category).filter(Boolean))];
      const types = ['All', ...new Set(productsData.map(p => p.type).filter(Boolean))];
      setAllCategories(categories);
      setAllTypes(types);
    }
  }, [selectedCategory, selectedType]);

  return (
    <div className="product-list">
      <div className="product-list-header">
        <h1 className="product-title">💊 Our Trusted Medicines & Healthcare Solutions</h1>
        <p className="product-subtitle">
          Explore our range of high-quality pharmaceutical products, crafted with care for better health.
        </p>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>

      <div className="filters-container">
        <CustomDropdown
          options={allCategories}
          value={selectedCategory}
          onChange={(val) => setSelectedCategory(val)}
        />
      
        <CustomDropdown
          options={allTypes}
          value={selectedType}
          onChange={(val) => setSelectedType(val)}
        />

      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
