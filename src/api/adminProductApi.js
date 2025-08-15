// frontend/src/api/adminProductApi.js
import axios from 'axios';

const API_BASE = "http://localhost:8000/api"; // add /api

const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`
  }
});

export const adminFetchProducts = () =>
  axios.get(`${API_BASE}/admin/products`, getAuthHeaders());

export const adminCreateProduct = (productData) =>
  axios.post(`${API_BASE}/admin/products/create`, productData, getAuthHeaders());

export const adminUpdateProduct = (id, productData) =>
  axios.put(`${API_BASE}/admin/products/${id}/update`, productData, getAuthHeaders());

export const adminDeleteProduct = (id) =>
  axios.delete(`${API_BASE}/admin/products/${id}/delete`, getAuthHeaders());

export const adminSearchProducts = (query) =>
  axios.get(`${API_BASE}/admin/products?search=${encodeURIComponent(query)}`, getAuthHeaders());
