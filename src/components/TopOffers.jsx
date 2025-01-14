'use client';
import React from "react";

const TopOfferProducts = () => {
  const products = [
    {
      id: 1,
      name: "Veggie Clean Vegetable & Fruit",
      image: "/fruits/lettuce.jpg", 
      originalPrice: 159.0,
      discountedPrice: 25.0,
      discount: "84.3%",
      size: "400 ml",
    },
    {
      id: 2,
      name: "Veggie Clean Vegetable & Fruit",
      image: "/fruits/carrot.jpg",
      originalPrice: 199.0,
      discountedPrice: 99.5,
      discount: "50.0%",
      size: "400 ml",
    },
    {
      id: 3,
      name: "Saffola Gold Refined Oil 5 Ltr Jar",
      image: "/oil/oil2.jpg", 
      originalPrice: 1198.0,
      discountedPrice: 1174.04,
      discount: "2.0%",
      size: "5 Ltr",
    },
    {
      id: 4,
      name: "Surf Excel Easy Wash 4kg",
      image: "/cleaning/surf1.jpg", 
      originalPrice: 496.0,
      discountedPrice: 399.0,
      discount: "19.6%",
    },
    {
      id: 5,
      name: "Kellogg's Quick Cooking Oats Combo",
      image: "/breakfast/Oats1.jpg",
      originalPrice: 475.0,
      discountedPrice: 171.5,
      discount: "2.0%",
    },
    {
      id: 6,
      name: "Kellogg's Quick Cooking Oats Combo",
      image: "/path-to-image5.png", // Replace with the actual image path
      originalPrice: 475.0,
      discountedPrice: 171.5,
      discount: "2.0%",
    },
    {
      id: 7,
      name: "Kellogg's Quick Cooking Oats Combo",
      image: "/path-to-image5.png", // Replace with the actual image path
      originalPrice: 475.0,
      discountedPrice: 171.5,
      discount: "2.0%",
    },
    {
      id: 8,
      name: "Kellogg's Quick Cooking Oats Combo",
      image: "/path-to-image5.png", // Replace with the actual image path
      originalPrice: 475.0,
      discountedPrice: 171.5,
      discount: "2.0%",
    },
    {
      id: 9,
      name: "Kellogg's Quick Cooking Oats Combo",
      image: "/path-to-image5.png", // Replace with the actual image path
      originalPrice: 475.0,
      discountedPrice: 171.5,
      discount: "2.0%",
    },
  ];

  return (
    <div className="top-offer-products">
      <div className="header">
        <h2>TOP OFFER PRODUCTS</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span className="discount-badge">{product.discount} OFF</span>
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              {product.size && <p className="size">{product.size}</p>}
              <p className="prices">
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discounted-price">₹{product.discountedPrice}</span>
              </p>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .top-offer-products {
          padding: 20px;
          background-color: #fff;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .header h2 {
          font-size: 24px;
          font-weight: bold;
        }
        .view-all-btn {
          background-color: #ff0000;
          color: #fff;
          padding: 10px 15px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }
        .product-list {
          display: flex;
          gap: 15px;
          overflow-x: auto;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .product-card {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          width: 200px;
          text-align: center;
          flex-shrink: 0;
          margin-bottom: 20px;
        }
        .product-image {
          position: relative;
        }
        .product-image img {
          max-width: 100%;
          height: auto;
        }
        .discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #ff0000;
          color: #fff;
          font-size: 12px;
          padding: 3px 5px;
          border-radius: 3px;
        }
        .product-details h3 {
          font-size: 16px;
          font-weight: bold;
          margin: 10px 0;
        }
        .product-details .size {
          font-size: 14px;
          color: #555;
        }
        .product-details .prices {
          margin: 10px 0;
        }
        .original-price {
          text-decoration: line-through;
          color: #888;
          margin-right: 10px;
        }
        .discounted-price {
          font-weight: bold;
          color: #ff0000;
        }
        .add-to-cart-btn {
          background-color: #ff0000;
          color: #fff;
          padding: 6px 8px; /* Reduced padding */
          font-size: 12px; /* Reduced font size */
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .product-list {
            flex-direction: column;
            align-items: center;
          }
          .product-card {
            width: 100%;
            max-width: 320px;
            margin-bottom: 15px;
          }
        }

        @media (max-width: 480px) {
          .header h2 {
            font-size: 20px;
          }
          .view-all-btn {
            font-size: 14px;
            padding: 8px 12px;
          }
          .product-details h3 {
            font-size: 14px;
          }
          .add-to-cart-btn {
            font-size: 10px;
            padding: 4px 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default TopOfferProducts;
