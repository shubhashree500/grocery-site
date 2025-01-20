import HeroSection from '../components/Herosection';
import ComboOffers from '../components/ComboOffers';
import TopOfferProducts from '../components/TopOffers';
import Products from './products/page';
import WhyShopWithUs from '../components/WhyShopWithUs';

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Products />
        </div>
      </section>
      {/* Combo Offers */}
      <section className="bg-blue-100 py-8">
        <div className="container mx-auto px-4">
         
          <ComboOffers />
        </div>
      </section>

      {/* Top Offers */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Top Offers</h2>
          <TopOfferProducts />
        </div>
      </section>

       {/* Why Shop With Us*/}
       <section className="py-8">
        <div className="container mx-auto px-4">
          <WhyShopWithUs />
        </div>
      </section>
    </main>
  );
}
