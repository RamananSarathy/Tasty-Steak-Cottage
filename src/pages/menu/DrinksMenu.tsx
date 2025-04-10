
import React from 'react';
import { malaysianDrinks, otherDrinks } from '@/data/drinksMenu';

const DrinksMenu = () => {
  return (
    <div className="menu-section">
      <h1 className="menu-title">DRINK</h1>
      
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-restaurant-gold mb-6 text-center">MALAYSIAN FAVORITE</h2>
        
        <div className="bg-black/30 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-right">
              <h3 className="text-xl font-medium text-white">HOT</h3>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-medium text-white">COLD</h3>
            </div>
          </div>
          
          <div className="space-y-4">
            {malaysianDrinks.map((item) => (
              <div key={item.id} className="flex items-start py-4 border-b border-gray-700">
                <div className="text-restaurant-gold font-medium text-lg w-16">{item.id}</div>
                <div className="flex-grow pr-4">
                  <h4 className="font-medium text-white">{item.name}</h4>
                  {item.description && (
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  )}
                </div>
                <div className="text-right min-w-[80px] text-restaurant-gold font-medium">
                  {item.hotPrice && `RM ${item.hotPrice.toFixed(2)}`}
                </div>
                <div className="text-right min-w-[80px] text-restaurant-gold font-medium">
                  {item.coldPrice && `RM ${item.coldPrice.toFixed(2)}`}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-black/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-restaurant-gold mb-4">Other Drinks</h2>
          
          <div className="space-y-4">
            {otherDrinks.map((item) => (
              <div key={item.id} className="flex items-start py-4 border-b border-gray-700">
                <div className="text-restaurant-gold font-medium text-lg w-16">{item.id}</div>
                <div className="flex-grow pr-4">
                  <h4 className="font-medium text-white">{item.name}</h4>
                  {item.description && (
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  )}
                </div>
                {item.hotPrice && (
                  <div className="text-right min-w-[80px] text-restaurant-gold font-medium">
                    RM {item.hotPrice.toFixed(2)}
                  </div>
                )}
                <div className="text-right min-w-[80px] text-restaurant-gold font-medium">
                  {item.coldPrice && `RM ${item.coldPrice.toFixed(2)}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <img 
          src="/lovable-uploads/15405470-7910-4d2b-87db-993e260b5cf3.png" 
          alt="Steak Cottage Logo" 
          className="w-20 h-20 mx-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default DrinksMenu;
