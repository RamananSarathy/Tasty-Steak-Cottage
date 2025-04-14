
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu/drinks' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-restaurant-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2bf04877-6789-472a-a1c2-d3c422452dae.png" 
              alt="Steak Cottage Logo" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-restaurant-red">
                COTTAGE STEAK CAFE & GRILL
              </h1>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-restaurant-gold",
                  location.pathname === item.path ? "text-restaurant-gold" : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "block text-lg font-medium transition-colors hover:text-restaurant-gold",
                      location.pathname === item.path ? "text-restaurant-gold" : "text-white"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
