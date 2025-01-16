"use client";

import Image from 'next/image';

const Shop = () => {
  const shopCategories = [
    { id: 1, name: 'Groceries', image: '/shop/groceries.jpg' },
    { id: 2, name: 'Fruits & Vegetables', image: '/shop/fruits.jpg' },
    { id: 3, name: 'Personal Care', image: '/shop/personal-care.jpg' },
    { id: 4, name: 'Household Items', image: '/shop/household.jpg' },
    { id: 5, name: 'Snacks & Beverages', image: '/shop/snacks.jpg' },
    { id: 6, name: 'Baby Products', image: '/shop/baby-products.jpg' },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop Categories</h2>
        <p className="text-center text-lg text-gray-700 mb-12">
          Explore our wide range of categories to find the products you need.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {shopCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <Image
                src={category.image || '/placeholder.jpg'}
                alt={`Category: ${category.name}`}
                width={500}
                height={300}
                className="w-full h-40 sm:h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center truncate">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
