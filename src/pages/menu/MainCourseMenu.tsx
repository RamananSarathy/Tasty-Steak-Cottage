
import React from 'react';
import { mainCourse } from '@/data/foodMenu';

const MainCourseMenu = () => {
  return (
    <div className="menu-section">
      <h1 className="menu-title">MAIN COURSE</h1>
      
      <div className="bg-black/30 rounded-lg p-6 mb-8">
        <div className="space-y-4">
          {mainCourse.map((item) => (
            <div 
              key={item.id} 
              className={`flex items-start py-4 border-b border-gray-700 ${item.isSpecial ? 'bg-restaurant-gold/10 rounded p-2' : ''}`}
            >
              <div className="text-restaurant-gold font-medium text-lg w-16">{item.id}</div>
              <div className="flex-grow pr-4">
                <h4 className="font-medium text-white flex items-center">
                  {item.name}
                  {item.isSpecial && (
                    <span className="ml-2 text-xs bg-restaurant-gold text-black px-2 py-1 rounded">Chef's Special</span>
                  )}
                </h4>
                {item.description && (
                  <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                )}
              </div>
              <div className="text-right min-w-[80px] text-restaurant-gold font-medium">
                RM {item.price.toFixed(2)}
              </div>
            </div>
          ))}
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

export default MainCourseMenu;
