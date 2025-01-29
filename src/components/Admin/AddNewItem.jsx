import React, { useState } from 'react';

const AddNewItem = () => {
  const [itemData, setItemData] = useState({
    name: '',
    quantity: '',
    supplier: '',
  });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Item Data:', itemData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Item Name</label>
          <input
            type="text"
            name="name"
            value={itemData.name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={itemData.quantity}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Supplier</label>
          <input
            type="text"
            name="supplier"
            value={itemData.supplier}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddNewItem;
