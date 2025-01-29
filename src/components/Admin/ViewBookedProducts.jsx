import React, { useEffect, useState } from 'react';

const ViewBookedProducts = () => {
  const [bookedProducts, setBookedProducts] = useState([]);

  useEffect(() => {
    // Fetch booked products from the backend API
    fetch('/api/booked-products')
      .then((response) => response.json())
      .then((data) => setBookedProducts(data))
      .catch((error) => console.error('Error fetching booked products:', error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">View Booked Products</h1>
      <ul className="space-y-4">
        {bookedProducts.map((product) => (
          <li key={product.id} className="border p-4 rounded">
            <p><strong>Product Name:</strong> {product.name}</p>
            <p><strong>Booked By:</strong> {product.bookedBy}</p>
            <p><strong>Booking Date:</strong> {product.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBookedProducts;
