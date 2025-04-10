
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const MenuLayout: React.FC = () => {
  const location = useLocation();
  
  const menuCategories = [
    { name: 'Drinks', path: '/menu/drinks' },
    { name: 'Appetizers', path: '/menu/appetizers' },
    { name: 'Main Course', path: '/menu/main-course' },
    { name: 'Desserts', path: '/menu/desserts' },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 md:space-x-8 justify-center min-w-max">
              {menuCategories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-colors",
                    location.pathname === category.path
                      ? "bg-restaurant-gold text-black font-medium"
                      : "bg-gray-800/50 text-white hover:bg-gray-700"
                  )}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <Outlet />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MenuLayout;
