
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-restaurant-gold mb-4">Cottage Steak Cafe & Grill</h3>
            <p className="mb-2">Serving authentic Malaysian cuisine</p>
            <p className="mb-2">Established since 2010</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-restaurant-gold mb-4">Hours</h3>
            <p className="mb-2">Monday - Friday: 10am - 10pm</p>
            <p className="mb-2">Saturday - Sunday: 9am - 11pm</p>
            <p className="mb-2">Public Holidays: 9am - 10pm</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-restaurant-gold mb-4">Contact</h3>
            <p className="mb-2">Pusat Pembangunan Usahawan,</p>
            <p className="mb-2">Jabatan Perkhidmatan Veterinar,</p>
            <p className="mb-2">Jalan Tuanku Antah, Off Jalan Rahang,</p>
            <p className="mb-2">70100 Seremban, Negeri Sembilan</p>
            <p className="mb-2">Phone: +60 12-345 6789</p>
            <p className="mb-2">Email: info@cottagesteak.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Cottage Steak Cafe & Grill. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-restaurant-gold transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-restaurant-gold transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
