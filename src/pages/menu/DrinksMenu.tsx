import React from 'react';
import { malaysianDrinks, otherDrinks, fruitJuices, detoxSignature } from '@/data/drinksMenu';

const DrinksMenu = () => {
  return (
    <div className="menu-section">
      <h1 className="menu-title">DRINK</h1>
      
      {/* Malaysian Favorites - Starting from 001 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-restaurant-gold mb-6 text-center">MALAYSIAN FAVORITE</h2>
        
        <div className="bg-black/30 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            {malaysianDrinks.map((item) => (
              <div key={item.id} className="flex items-center py-4 border-b border-gray-700">
                <div className="text-restaurant-gold font-medium text-lg w-16">{item.id}</div>
                <div className="flex-grow pr-4">
                  <h4 className="font-medium text-white">{item.name}</h4>
                  {item.description && (
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right min-w-[80px] text-restaurant-gold font-medium">
                    {item.hotPrice && (
                      <div className="flex items-center">
                        <span className="mr-2 text-sm text-white">HOT</span>
                        RM {item.hotPrice.toFixed(2)}
                      </div>
                    )}
                  </div>
                  <div className="text-right min-w-[80px] text-restaurant-gold font-medium">
                    {item.coldPrice && (
                      <div className="flex items-center">
                        <span className="mr-2 text-sm text-white">COLD</span>
                        RM {item.coldPrice.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Fruit Juices - Continue from 014 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-restaurant-gold mb-6 text-center">FRUIT JUICE</h2>
        
        <div className="bg-black/30 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            {fruitJuices.map((item) => (
              <div key={item.id} className="flex items-start py-4 border-b border-gray-700">
                <div className="text-restaurant-gold font-medium text-lg w-16">{item.id}</div>
                <div className="flex-grow pr-4">
                  <h4 className="font-medium text-white">{item.name}</h4>
                  {item.description && (
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  )}
                </div>
                <div className="text-right min-w-[80px] text-restaurant-gold font-medium">
                  {item.coldPrice && `RM ${item.coldPrice.toFixed(2)}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Detox Signature - Continue from 019 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-restaurant-gold mb-6 text-center">DETOX SIGNATURE</h2>
        
        <div className="bg-black/30 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            {detoxSignature.map((item) => (
              <div key={item.id} className="flex items-start py-4 border-b border-gray-700">
                <div className="text-restaurant-gold font-medium text-lg w-16">{item.id}</div>
                <div className="flex-grow pr-4">
                  <h4 className="font-medium text-white">{item.name}</h4>
                  {item.description && (
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  )}
                </div>
                <div className="text-right min-w-[80px] text-restaurant-gold font-medium">
                  {item.coldPrice && `RM ${item.coldPrice.toFixed(2)}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Other Drinks - Continue from 025 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-restaurant-gold mb-6 text-center">OTHER DRINKS</h2>
        
        <div className="bg-black/30 rounded-lg p-6">
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
          src="/lovable-uploads/2bf04877-6789-472a-a1c2-d3c422452dae.png" 
          alt="Steak Cottage Logo" 
          className="w-20 h-20 mx-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default DrinksMenu;
