'use client';

const WhyShopWithUs = () => {
  const features = [
    { title: 'Fresh Produce', description: 'We offer farm-fresh fruits and vegetables to meet all your dietary needs.' },
    { title: 'Affordable Prices', description: 'Enjoy unbeatable discounts and deals on all your favorite products.' },
    { title: 'Fast Delivery', description: 'Experience quick and reliable delivery to your doorstep.' },
    { title: 'Wide Variety', description: 'Choose from a vast selection of grocery and household items.' },
    { title: 'Easy Returns', description: 'Not satisfied? Enjoy hassle-free returns with no questions asked.' },
    { title: 'Customer Support', description: 'We are here to help with any queries or concerns, 24/7.' },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-md text-center">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyShopWithUs;
