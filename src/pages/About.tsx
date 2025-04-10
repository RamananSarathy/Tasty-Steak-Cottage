
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-restaurant-gold mb-8 text-center">About Us</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')] bg-cover bg-center"></div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-restaurant-gold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Established in 2010, Cottage Steak Cafe & Grill began as a small family-owned restaurant with a passion
                for bringing authentic Malaysian cuisine and premium steaks to our community. What started as a modest
                cafe has grown into a beloved dining destination over the years.
              </p>
              <p className="text-gray-300 mb-4">
                Our journey has been fueled by a commitment to quality, authenticity, and exceptional service.
                We believe in preserving traditional flavors while embracing innovation to create memorable
                dining experiences for our guests.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-restaurant-gold mb-4">Our Philosophy</h2>
              <p className="text-gray-300 mb-4">
                At Cottage Steak Cafe & Grill, we believe that good food brings people together. Our philosophy is
                simple: use the freshest ingredients, prepare them with care, and serve them with warmth and hospitality.
              </p>
              <p className="text-gray-300 mb-4">
                We take pride in sourcing our ingredients locally whenever possible, supporting local farmers and suppliers.
                Our meats are carefully selected for quality and flavor, and our recipes have been perfected over years
                of dedication to the culinary arts.
              </p>
            </div>
            
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070')] bg-cover bg-center"></div>
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529417305485-480f579e7578?q=80&w=2009')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-restaurant-gold mb-4">Meet Our Team</h2>
              <p className="text-gray-300 mb-4">
                Our team is made up of passionate individuals who share a love for food and hospitality. From our talented
                chefs to our friendly service staff, everyone at Cottage Steak Cafe & Grill plays a vital role in creating
                the warm and welcoming atmosphere we're known for.
              </p>
              <p className="text-gray-300 mb-4">
                Led by our head chef with over 20 years of experience in Malaysian and international cuisine, our culinary
                team takes pride in preparing each dish with precision and care. Our front-of-house staff is dedicated to
                ensuring that every guest leaves with a smile and a desire to return.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
