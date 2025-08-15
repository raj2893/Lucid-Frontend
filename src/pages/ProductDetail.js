import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find(p => String(p.id) === String(id));
    setProduct(foundProduct || null);
  }, [id]);

  return (
    <div>
      {product ? <ProductCard product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductDetail;
