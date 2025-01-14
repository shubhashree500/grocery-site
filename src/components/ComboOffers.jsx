'use client';

const ComboOffers = () => {
  // Array of combo offers
  const comboOffers = [
    {
      id: 1,
      name: 'Rice & Daal Combo',
      image: '/rice/ricedaal.jpg',
      price: '$15.99',
      description: '5kg Rice & 2kg Daal Combo Pack',
    },
    {
      id: 2,
      name: 'Shampoo & Soap Combo',
      image: '/bathbody/samppo1.jpg',
      price: '$9.99',
      description: '1 Bottle Shampoo & 2 Bars of Soap',
    },
    {
      id: 3,
      name: 'Milk & Cookies Combo',
      image: '/breakfast/milkcookies.jpg',
      price: '$5.49',
      description: '1L Milk & 1 Pack of Cookies',
    },
    {
      id: 4,
      name: 'Bread & Jam Combo',
      image: '/breakfast/breadjam.jpg',
      price: '$3.99',
      description: '1 Loaf of Bread & 1 Jar of Jam',
    },
    {
      id: 5,
      name: 'Toothpaste & Toothbrush Combo',
      image: '/cleaning/paste1.jpg',
      price: '$4.99',
      description: '1 Tube of Toothpaste & 1 Toothbrush',
    },
    {
      id: 6,
      name: 'Coffee & Sugar Combo',
      image: '/breakfast/coffe.jpg',
      price: '$7.49',
      description: '1 Pack of Coffee & 1 Bag of Sugar',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Combo Offers</h2>

        {/* Combo Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {comboOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={offer.image}
                alt={offer.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800">{offer.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">{offer.price}</span>
                <button className="px-3 py-1 text-sm bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition w-24 sm:w-28">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComboOffers;
