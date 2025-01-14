"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Products = () => {
  const router = useRouter();

  const items = [
    { id: 1, name: 'Rice, Atta And Dal', image: '/rice/ricemain.jpg' },
    { id: 2, name: 'Fruits And Vegetables', image: '/fruits/fruit.jpg' },
    { id: 3, name: 'Oil, Masala, Sauces', image: '/oil/oil.jpg' },
    { id: 4, name: 'Breakfast Food', image: '/breakfast/dryfruits.jpg' },
    { id: 5, name: 'Eggs, Meats and Fish', image: '/nonveg/chicken.jpg' },
    { id: 6, name: 'Diet Nutrition', image: '/nutritions/nutrition1.jpg' },
    { id: 7, name: 'Cleaning Household', image: '/cleaning/cleaning1.jpg' },
    { id: 8, name: 'Hygiene and Personal', image: '/hygenic/hygenic.jpg' },
    { id: 9, name: 'Bath Body', image: '/bathbody/bathcare.jpg' },
    { id: 10, name: 'Baby Care', image: '/babycare/babycare.jpg' },
  ];

  const handleItemClick = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">All Items</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => handleItemClick(item.id)}
            >
              <Image
                src={item.image || '/placeholder.jpg'}
                alt={`Image of ${item.name}`}
                width={500}
                height={300}
                className="w-full h-40 sm:h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 truncate">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
