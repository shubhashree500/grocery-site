import React, { useState } from 'react';

const ModifyProduct = () => {
  const [productId, setProductId] = useState('');
  const [updatedData, setUpdatedData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
  });

  const handleProductIdChange = (e) => setProductId(e.target.value);

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Modify Product:', { productId, updatedData });
    // Add your API call for updating the product here
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Modify Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Product ID</label>
          <input
            type="text"
            value={productId}
            onChange={handleProductIdChange}
            className="border rounded p-2 w-full"
            placeholder="Enter Product ID"
          />
        </div>
        <div>
          <label className="block font-semibold">Updated Name</label>
          <input
            type="text"
            name="name"
            value={updatedData.name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Updated Price</label>
          <input
            type="number"
            name="price"
            value={updatedData.price}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Updated Description</label>
          <textarea
            name="description"
            value={updatedData.description}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Updated Category</label>
          <input
            type="text"
            name="category"
            value={updatedData.category}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default ModifyProduct;
