"use client";

import Image from 'next/image';

const About = () => {
  const aboutContent = {
    title: "About Us",
    description:
      "Welcome to our store! We take pride in offering high-quality products across a wide range of categories to meet your everyday needs. From fresh groceries to personal care, we've got you covered. Our mission is to deliver exceptional value and convenience to our customers.",
    image: "/about/about-us.jpg",
    highlights: [
      "Wide range of categories including groceries, personal care, and more.",
      "Carefully selected products to ensure quality and reliability.",
      "Dedicated to delivering the best shopping experience.",
    ],
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{aboutContent.title}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {aboutContent.description}
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src={aboutContent.image || '/placeholder.jpg'}
              alt="About Us"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {aboutContent.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
