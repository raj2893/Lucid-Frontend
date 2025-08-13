import axios from 'axios';

const BASE_URL = "http://localhost:8000";

export const fetchAllProducts = async (category = null, type = null) => {
  let url = `${BASE_URL}/api/products`;

  const params = [];
  if (category && category !== 'All') params.push(`category=${encodeURIComponent(category)}`);
  if (type && type !== 'All') params.push(`type=${encodeURIComponent(type)}`);

  if (params.length > 0) url += `?${params.join('&')}`;

  return axios.get(url);
};

export const fetchProductById = async (id) => {
  return axios.get(`${BASE_URL}/api/products/${id}`);
};
