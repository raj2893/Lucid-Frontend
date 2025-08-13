import React, { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/productApi';
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
    fetchAllProducts(selectedCategory, selectedType)
      .then(res => {
        const productList = res.data.results || res.data;
        setProducts(productList);

        // Populate dropdown options from fetched data
        if (selectedCategory === 'All' && selectedType === 'All') {
          const categories = ['All', ...new Set(productList.map(p => p.category).filter(Boolean))];
          const types = ['All', ...new Set(productList.map(p => p.type).filter(Boolean))];
          setAllCategories(categories);
          setAllTypes(types);
        }
      })
      .catch(err => console.error(err));
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
