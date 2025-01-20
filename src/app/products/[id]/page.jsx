'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import React from 'react';

const ProductDetail = ({ params }) => {
  // Use React.use() to unwrap the params object
  const { id } = React.use(params); // Unwrap the params to access 'id'
  
  const router = useRouter();

  // State to store product data and related products
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const productData = {
    1: { id: 1, name: 'Rice, Atta And Dal', price: '$20', images: [
      '/rice/rice1.jpg', '/rice/rice2.jpg','/rice/rice3.jpg','/rice/rice4.jpg',
    '/rice/daal1.jpg','/rice/daal2.jpg','/rice/daal3.jpg',
    '/rice/atta1.jpg','/rice/atta2.jpg','/rice/atta3.jpg'
  ], 
    description: 'High quality rice and dal package.', category: 'Rice' },

    2: { id: 2, name: 'Fruits And Vegetables', price: '$15', images: [
      '/fruits/apple.jpg', '/fruits/banana.jpg', '/fruits/orange.jpg',
      '/fruits/carrot.jpg', '/fruits/lettuce.jpg', '/fruits/potato.jpg',
      '/fruits/tomato.jpg',
    ],
     description: 'Fresh and organic fruits and vegetables.', category: 'Fruits' },

    3: { id: 3, name: 'Oil, Masala, Sauces', price: '$18', images: [
      '/oil/oil1.jpg', '/oil/oil2.jpg', '/oil/oil3.jpg'
    ], 
      description: 'Essential oils, spices, and sauces for your cooking needs.', category: 'Spices' },

    4: { id: 4, name: 'Breakfast Food', price: '$25', images: [
      '/breakfast/dryfruits.jpg', '/breakfast/Oats1.jpg', '/breakfast/milkcookies.jpg'
    ],
     description: 'Healthy breakfast options.', category: 'Breakfast' },

    5: { id: 5, name: 'Egg Meats Fish', price: '$25', images: ['/nonveg/chicken.jpg', '/nonveg/breakfast2.jpg'], description: 'Healthy breakfast options.', category: 'Nonveg' },

    6: { id: 6, name: 'Diet Nutrition', price: '$30', images: ['/nutritions/energydrink.jpeg'], description: 'Premium diet and nutrition products.', category: 'Health' },
    7: { id: 7, name: 'Cleaning Household', price: '$12', images: ['/cleaning/wash.webp','/cleaning/surf1.jpg'], description: 'Effective cleaning household supplies.', category: 'Cleaning' },
    8: { id: 8, name: 'Hygiene and Personal', price: '$10', images: ['/hygenic/hygenic.jpg'], description: 'Top-notch hygiene and personal care products.', category: 'Hygiene' },
    9: { id: 9, name: 'Bath Body', price: '$18', images: ['/bathbody/bathing.webp','/bathbody/samppo1.jpg'], description: 'Luxury bath and body essentials.', category: 'Body Care' },
    10: { id: 10, name: 'Baby Care', price: '$22', images: ['/babycare/babycare.webp'], description: 'Gentle and safe baby care products.', category: 'Baby Care' },
  };

  const relatedProductsData = {
    Rice: [1, 3, 4],
    Fruits: [2, 1],
    Spices: [3, 1, 2],
    Breakfast: [4, 1],
    Nonveg: [5, 3],
    Health: [6, 4],
    Cleaning: [7, 8],
    Hygiene: [8, 9],
    "Body Care": [9, 10],
    "Baby Care": [10, 1],
  };

  useEffect(() => {
    const fetchProductData = async () => {
      const product = productData[id];
      if (product) {
        setProduct(product);
        const related = relatedProductsData[product.category] || [];
        setRelatedProducts(related);
      } else {
        notFound(); // Redirect to 404 if no product found
      }
    };

    fetchProductData();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; // Show loading state if product data isn't available yet
  }

  const handleRelatedProductClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="space-y-6">
      {product.images.map((image, index) => (
        <div key={index} className="w-full flex flex-col md:flex-row items-center gap-6 p-4 bg-white shadow-md rounded-lg">
          <div className="w-full md:w-1/2 h-64 relative">
            <Image
              src={image}
              alt={`${product.name}-image-${index}`}
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <p className="text-xl font-semibold text-gray-800 mb-2">Price: {product.price}</p>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition text-sm w-full md:w-auto"
              onClick={() => console.log('Add to cart clicked')}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {relatedProducts.map((relatedId) => {
            const relatedProduct = productData[relatedId];
            return (
              <div
                key={relatedId}
                className="p-4 bg-white shadow-md rounded-lg cursor-pointer"
                onClick={() => handleRelatedProductClick(relatedId)}
              >
                <Image
                  src={relatedProduct.images[0]}
                  alt={`${relatedProduct.name}-image`}
                  width={200}
                  height={200}
                  className="object-contain rounded-lg"
                />
                <p className="text-lg font-semibold text-gray-800 mt-2">{relatedProduct.name}</p>
                <p className="text-gray-600">{relatedProduct.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
