import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/productApi';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      {product ? <ProductCard product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductDetail;
