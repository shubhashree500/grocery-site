'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/products?query=${searchQuery}`);
        if (response.ok) {
          const data = await response.json();
          setItems(data.products);
        } else {
          console.error('Error fetching products');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    if (searchQuery) {
      fetchProducts();
    }
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>

      {isLoading && <p>Loading...</p>}

      {!isLoading && searchQuery && items.length === 0 && (
        <p>No products found for "{searchQuery}"</p>
      )}

      {!searchQuery && !isLoading && <p>Please enter a search query.</p>}

      {items.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-gray-600">{item.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
