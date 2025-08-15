// import React, { useEffect, useState } from "react";
// import {
//   adminFetchProducts,
//   adminCreateProduct,
//   adminUpdateProduct,
//   adminDeleteProduct,
//   adminSearchProducts
// } from "../api/adminProductApi";
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [products, setProducts] = useState([]); // Always an array
//   const [searchTerm, setSearchTerm] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     composition: "",
//     box_size: "",
//     mrp: "",
//     image_url: "",
//     category: "",
//     type: "General"
//   });
//   const [editingId, setEditingId] = useState(null);

//   const normalizeProducts = (data) => {
//     if (Array.isArray(data)) return data;
//     if (data?.results && Array.isArray(data.results)) return data.results;
//     if (data?.products && Array.isArray(data.products)) return data.products;
//     return [];
//   };

//   const fetchProducts = () => {
//     adminFetchProducts()
//       .then((res) => setProducts(normalizeProducts(res.data)))
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleSearch = () => {
//     if (!searchTerm.trim()) {
//       fetchProducts();
//     } else {
//       adminSearchProducts(searchTerm)
//         .then((res) => setProducts(normalizeProducts(res.data)))
//         .catch((err) => console.error(err));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const resetForm = () => {
//       setFormData({
//         name: "",
//         composition: "",
//         box_size: "",
//         mrp: "",
//         image_url: "",
//         category: "",
//         type: "General"
//       });
//       setEditingId(null);
//     };

//     if (editingId) {
//       adminUpdateProduct(editingId, formData).then(() => {
//         resetForm();
//         fetchProducts();
//       });
//     } else {
//       adminCreateProduct(formData).then(() => {
//         resetForm();
//         fetchProducts();
//       });
//     }
//   };

//   const handleEdit = (product) => {
//     setEditingId(product.id);
//     setFormData({
//       name: product.name,
//       composition: product.composition,
//       box_size: product.box_size,
//       mrp: product.mrp,
//       image_url: product.image_url,
//       category: product.category,
//       type: product.type
//     });
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       adminDeleteProduct(id).then(() => fetchProducts());
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Panel</h1>

//       {/* Search */}
//       <div>
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Add/Edit Form */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />
//         <textarea
//           placeholder="Composition"
//           value={formData.composition}
//           onChange={(e) => setFormData({ ...formData, composition: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Box Size"
//           value={formData.box_size}
//           onChange={(e) => setFormData({ ...formData, box_size: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           step="0.01"
//           placeholder="MRP"
//           value={formData.mrp}
//           onChange={(e) => setFormData({ ...formData, mrp: e.target.value })}
//           required
//         />
//         <input
//           type="url"
//           placeholder="Image URL"
//           value={formData.image_url}
//           onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={formData.category}
//           onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Type"
//           value={formData.type}
//           onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//         />
//         <button type="submit">{editingId ? "Update" : "Add"} Product</button>
//       </form>

//       {/* Products List */}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>MRP</th>
//             <th>Category</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.length > 0 ? (
//             products.map((p) => (
//               <tr key={p.id}>
//                 <td>{p.name}</td>
//                 <td>₹{p.mrp}</td>
//                 <td>{p.category}</td>
//                 <td>{p.type}</td>
//                 <td>
//                   <button onClick={() => handleEdit(p)}>Edit</button>
//                   <button onClick={() => handleDelete(p.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" style={{ textAlign: "center" }}>
//                 No products found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;
