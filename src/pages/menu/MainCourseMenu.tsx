
import React from 'react';
import { beefDishes, lambDishes, chickenDishes, seafoodDishes, nasiLemak, briyani, specialtyDishes } from '@/data/foodMenu';

const MainCourseMenu = () => {
  // Combine all main course items
  const allMainCourses = [
    ...beefDishes,
    ...lambDishes, 
    ...chickenDishes,
    ...seafoodDishes,
    ...nasiLemak,
    ...briyani,
    ...specialtyDishes
  ];
  
  // Group dishes by category
  const categories = {
    "Beef": beefDishes,
    "Lamb": lambDishes,
    "Chicken": chickenDishes,
    "Seafood": seafoodDishes,
    "Nasi Lemak": nasiLemak,
    "Briyani": briyani,
    "Specialty Dishes": specialtyDishes
  };

  return (
    <div className="menu-section">
      <h1 className="menu-title">MAIN COURSE</h1>
      
      {Object.entries(categories).map(([category, items]) => (
        items.length > 0 && (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold text-restaurant-gold mb-6 text-center">{category.toUpperCase()}</h2>
            
            <div className="bg-black/30 rounded-lg p-6 mb-8">
              <div className="space-y-4">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className={`flex items-start py-4 border-b border-gray-700 ${item.isSpecial ? 'bg-restaurant-gold/10 rounded p-2' : ''}`}
                  >
                    <div className="text-restaurant-gold font-medium text-lg w-16">{item.id}</div>
                    <div className="flex-grow pr-4">
                      <h4 className="font-medium text-white flex items-center">
                        {item.name}
                        {item.isSpecial && (
                          <span className="ml-2 text-xs bg-restaurant-gold text-black px-2 py-1 rounded">Special</span>
                        )}
                      </h4>
                      {item.description && (
                        <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                      )}
                    </div>
                    <div className="text-right min-w-[80px] text-restaurant-gold font-medium whitespace-nowrap">
                      RM {item.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      ))}
      
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

export default MainCourseMenu;
