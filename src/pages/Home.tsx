
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974')] bg-cover bg-center"
          ></div>
          
          <div className="container mx-auto px-4 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="text-restaurant-gold">COTTAGE STEAK</span> CAFE & GRILL
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Authentic Malaysian Cuisine & Premium Steaks
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/menu/main-course"
                className="bg-restaurant-gold text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                View Our Menu
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Menu Section */}
        <section className="py-16 bg-restaurant-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-restaurant-gold mb-12 text-center">Featured Menu Items</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Item 1 */}
              <div className="bg-black/40 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2070')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-restaurant-gold">Premium T-Bone Steak</h3>
                  <p className="text-gray-300 mb-4">Perfectly grilled premium T-bone steak served with two sides of your choice.</p>
                  <p className="text-restaurant-gold font-semibold text-lg">RM 48.00</p>
                </div>
              </div>
              
              {/* Featured Item 2 */}
              <div className="bg-black/40 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('/lovable-uploads/5a02bd4a-a1db-41d3-8cb4-df838a6e4a56.png')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-restaurant-gold">Teh Tarik</h3>
                  <p className="text-gray-300 mb-4">Classic Malaysian pulled milk tea, a perfect companion to any meal.</p>
                  <p className="text-restaurant-gold font-semibold text-lg">Hot: RM 5.00 | Cold: RM 6.00</p>
                </div>
              </div>
              
              {/* Featured Item 3 */}
              <div className="bg-black/40 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-restaurant-gold">GO GO Burger</h3>
                  <p className="text-gray-300 mb-4">Delicious burger with your choice of chicken or beef patty and fresh toppings.</p>
                  <p className="text-restaurant-gold font-semibold text-lg">RM 9.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-black/80">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-restaurant-gold mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  Established in 2010, Cottage Steak Cafe & Grill has been serving authentic Malaysian cuisine
                  and premium steaks to our valued customers for over a decade.
                </p>
                <p className="text-gray-300 mb-6">
                  Our passion for quality food and exceptional service has made us one of the most beloved
                  dining establishments in the area. We take pride in using only the freshest ingredients
                  and traditional cooking methods to deliver an unforgettable dining experience.
                </p>
                <Link
                  to="/about"
                  className="inline-block bg-restaurant-gold text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-restaurant-gold text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Cuisine?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join us for breakfast, lunch, or dinner. We're looking forward to serving you
              the best Malaysian cuisine and premium steaks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/menu/main-course"
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View Menu
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-black text-black px-6 py-3 rounded-lg font-medium hover:bg-black/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
