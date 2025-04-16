
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isSpecial?: boolean;
}

// Beef dishes
export const beefDishes: FoodItem[] = [
  {
    id: "01",
    name: "AUST SIRLION STEAK WITH MASHED POTATOES",
    description: "A juicy, tender cut with rich flavor, grilled to perfection",
    price: 48.00,
    category: "Beef",
    isSpecial: true
  },
  {
    id: "02",
    name: "AUST BRAISED BEEF SHORT RIB",
    description: "Slow-cooked for tenderness, coated in a rich, savory sauce",
    price: 31.00,
    category: "Beef"
  },
  {
    id: "03",
    name: "AUST BEEF SKEWERS",
    description: "Beef slices on skewers grilled and topped with your favourite flavours",
    price: 15.00,
    category: "Beef"
  }
];

// Lamb dishes
export const lambDishes: FoodItem[] = [
  {
    id: "04",
    name: "AUST GRILLED LAMB WITH MASHED POTATOES",
    description: "Tender Lamb cuts, seasoned and grilled for a smoky flavor",
    price: 32.00,
    category: "Lamb"
  },
  {
    id: "05",
    name: "AUST LAMB SHANK WITH MASHED POTATOES",
    description: "Slow-cooked to perfection, falling off the bone with rich flavors",
    price: 48.00,
    category: "Lamb",
    isSpecial: true
  }
];

// Chicken dishes
export const chickenDishes: FoodItem[] = [
  {
    id: "06",
    name: "GRILLED CHICKEN WITH MASHED POTATOES",
    description: "Grilled chicken, served with your choice of sauce",
    price: 15.00,
    category: "Chicken"
  },
  {
    id: "07",
    name: "HOT KOREAN CHICKEN WINGS",
    description: "Crispy, juicy wings coated in a sweet and spicy honey chili glaze",
    price: 16.00,
    category: "Chicken"
  }
];

// Seafood dishes
export const seafoodDishes: FoodItem[] = [
  {
    id: "08",
    name: "BATTERED PERCH FISH & CHIPS",
    description: "Crispy battered delicious fish perch fillet with golden fries and coleslaw",
    price: 24.00,
    category: "Seafood"
  },
  {
    id: "09",
    name: "OCEANIC SALMON",
    description: "A healty and flavorful choice, served with mashed potatoes and fresh salad",
    price: 32.00,
    category: "Seafood"
  }
];

// Pasta dishes - Reorganized to be 10-13
export const pastaDishes: FoodItem[] = [
  {
    id: "10",
    name: "SPAGHETTI IN ALFREDO SAUCE",
    description: "Rich and creamy Alfredo sauce with your choice of protein",
    price: 19.00,
    category: "Pasta"
  },
  {
    id: "11",
    name: "SPAGHETTI IN AGLIO OLIO SAUCE",
    description: "Classic garlic and olive oil sauce with your choice of protein",
    price: 19.00,
    category: "Pasta"
  },
  {
    id: "12",
    name: "SPAGHETTI IN NAPOLITANA SAUCE",
    description: "Traditional tomato-based sauce with your choice of protein",
    price: 19.00,
    category: "Pasta"
  },
  {
    id: "13",
    name: "CREAMY CILI PADI SPAGHETTI",
    description: "Spicy creamy sauce with local cili padi flavor and your choice of protein",
    price: 19.00,
    category: "Pasta"
  }
];

// Local favorites - Renumbered to start at 14
export const localFavorites: FoodItem[] = [
  {
    id: "14",
    name: "CURRY MEE",
    description: "Spicy curry noodle soup with choice of protein (Beef, Chicken, or Lamb)",
    price: 8.00,
    category: "Local Favorites"
  },
  {
    id: "15",
    name: "SOUP NOODLE",
    description: "Clear broth noodle soup with choice of protein (Beef, Chicken, Lamb, or Beef Shank)",
    price: 10.00,
    category: "Local Favorites"
  }
];

// Soup items - Numbered as 16 and 17
export const soupDishes: FoodItem[] = [
  {
    id: "16",
    name: "MUSHROOM SOUP WITH GARLIC BREAD",
    description: "Creamy mushroom soup served with toasted garlic bread",
    price: 12.00,
    category: "Soup"
  },
  {
    id: "17",
    name: "PUMPKIN SOUP WITH GARLIC BREAD",
    description: "Rich and creamy pumpkin soup served with toasted garlic bread",
    price: 17.00,
    category: "Soup",
    isSpecial: true
  }
];

// Briyani Rice - Numbered 18-20
export const briyani: FoodItem[] = [
  {
    id: "18",
    name: "BRIYANI RICE WITH GRILLED LAMB CHOP",
    description: "Fragrant briyani rice served with grilled lamb chop, salad and papadum",
    price: 33.00,
    category: "Briyani"
  },
  {
    id: "19",
    name: "BRIYANI RICE WITH BEEF SKEWERS",
    description: "Fragrant briyani rice served with beef skewers, salad and papadum",
    price: 18.00,
    category: "Briyani"
  },
  {
    id: "20",
    name: "BRIYANI RICE WITH GRILLED CHICKEN",
    description: "Fragrant briyani rice served with grilled chicken, salad and papadum",
    price: 19.00,
    category: "Briyani"
  }
];

// Meatballs - Numbered as 21 and 22
export const meatballDishes: FoodItem[] = [
  {
    id: "21",
    name: "MEATBALLS",
    description: "Choice of chicken or beef meatballs in rich gravy",
    price: 10.00,
    category: "Meatballs"
  },
  {
    id: "22",
    name: "MEATBALLS WITH FRIES",
    description: "Choice of chicken or beef meatballs served with golden fries",
    price: 14.00,
    category: "Meatballs"
  }
];

// Light bites - Numbered 23-28
export const lightBites: FoodItem[] = [
  {
    id: "23",
    name: "FRIES WITH SAUCE",
    description: "Golden fried potato fries served with dipping sauce",
    price: 8.00,
    category: "Light Bites"
  },
  {
    id: "24",
    name: "NACHOS",
    description: "Crispy tortilla chips topped with melted cheese, salsa, and jalapenos",
    price: 14.00,
    category: "Light Bites"
  },
  {
    id: "25",
    name: "VEGE SAMOSA WITH SAUCE",
    description: "Crispy pastry filled with spiced vegetables, served with dipping sauce",
    price: 8.00,
    category: "Light Bites"
  },
  {
    id: "26",
    name: "VEGE SPRING ROLL WITH SAUCE",
    description: "Crispy vegetable spring rolls served with sweet chili sauce",
    price: 8.00,
    category: "Light Bites"
  },
  {
    id: "27",
    name: "CHICKEN NUGGETS WITH SAUCE",
    description: "Crispy chicken nuggets served with dipping sauce",
    price: 8.00,
    category: "Light Bites"
  },
  {
    id: "28",
    name: "SET VEGE SAMOSA AND VEGE SPRING ROLL",
    description: "Combination of vegetable samosas and spring rolls with dipping sauces",
    price: 13.00,
    category: "Light Bites"
  }
];

// Burgers - Numbered 29-31
export const burgers: FoodItem[] = [
  {
    id: "29",
    name: "GOGO BURGER",
    description: "Choice of chicken or beef patty with fresh vegetables",
    price: 9.00,
    category: "Burgers"
  },
  {
    id: "30",
    name: "SLOPPY JOES",
    description: "Signature burger with rich meat sauce and melted cheese",
    price: 18.00,
    category: "Burgers",
    isSpecial: true
  },
  {
    id: "31",
    name: "BURGER",
    description: "Simple burger with choice of chicken or beef patty",
    price: 5.00,
    category: "Burgers"
  }
];

// Specialty dishes - Starting from 32 (Shifted "Creamy Alio Seafood" from 31 to 32)
export const specialtyDishes: FoodItem[] = [
  {
    id: "32",
    name: "CREAMY ALIO SEAFOOD",
    description: "Seafood medley in a rich, creamy garlic sauce",
    price: 28.00,
    category: "Specialty Dishes"
  },
  {
    id: "33",
    name: "BEEF SHENITZEL",
    description: "Thinly pounded beef, breaded and fried to golden perfection",
    price: 48.00,
    category: "Specialty Dishes",
    isSpecial: true
  },
  {
    id: "34",
    name: "SMOKE DUCK GRILLED WITH MASHED POTATOES",
    description: "Smoked duck breast, grilled and served with creamy mashed potatoes",
    price: 22.00,
    category: "Specialty Dishes"
  },
  {
    id: "35",
    name: "SOBA MEDITERRANEAN WITH SALMON",
    description: "Buckwheat noodles with Mediterranean herbs and grilled salmon",
    price: 38.00,
    category: "Specialty Dishes"
  },
  {
    id: "36",
    name: "SPAGHETTI ARABIATA CHICKEN FILLET",
    description: "Spicy tomato pasta sauce with grilled chicken fillet",
    price: 19.00,
    category: "Specialty Dishes"
  },
  {
    id: "37",
    name: "SOBA MEATBALLS",
    description: "Buckwheat noodles topped with savory meatballs in rich sauce",
    price: 22.00,
    category: "Specialty Dishes"
  },
  {
    id: "38",
    name: "FRESH PITAGALO SALAD",
    description: "Fresh mixed greens with signature Pitagalo dressing",
    price: 22.00,
    category: "Specialty Dishes"
  },
  {
    id: "39",
    name: "SEAFOOD PIZZA",
    description: "Wood-fired pizza topped with fresh seafood and herbs",
    price: 30.00,
    category: "Specialty Dishes"
  },
  {
    id: "40",
    name: "PIDA PIZZA",
    description: "Traditional Turkish style flatbread pizza with toppings",
    price: 25.00,
    category: "Specialty Dishes"
  },
  {
    id: "41",
    name: "FITURAGAMBAS",
    description: "Fresh prawns with special herb sauce and vegetables",
    price: 14.00,
    category: "Specialty Dishes"
  },
  {
    id: "42",
    name: "SMOKED DUCK SALAD",
    description: "Mixed greens with smoked duck breast and house dressing",
    price: 28.00,
    category: "Specialty Dishes"
  },
  {
    id: "43",
    name: "GRILLED CHICKEN MADARIA",
    description: "Grilled chicken with special Madaria sauce and herbs",
    price: 28.00,
    category: "Specialty Dishes"
  }
];

// Nasi Lemak varieties - Moved to end of menu
export const nasiLemak: FoodItem[] = [
  {
    id: "44",
    name: "NASI LEMAK AYAM PANDAN",
    description: "Coconut rice with pandan-infused chicken, served with traditional sides",
    price: 28.00,
    category: "Nasi Lemak"
  },
  {
    id: "45",
    name: "NASI LEMAK CHICKEN GRILLED",
    description: "Coconut rice with grilled chicken, served with traditional sides",
    price: 20.00,
    category: "Nasi Lemak"
  },
  {
    id: "46",
    name: "NASI LEMAK LAMB GRILLED",
    description: "Coconut rice with grilled lamb, served with traditional sides",
    price: 33.00,
    category: "Nasi Lemak",
    isSpecial: true
  }
];

// For simplicity in the existing code structure, let's create combined arrays
export const appetizers: FoodItem[] = [
  ...lightBites.slice(0, 4)
];

export const mainCourse: FoodItem[] = [
  ...beefDishes,
  ...lambDishes,
  ...chickenDishes,
  ...seafoodDishes,
  ...pastaDishes,
  ...localFavorites,
  ...soupDishes,
  ...briyani,
  ...meatballDishes,
  ...burgers,
  ...specialtyDishes,
  ...nasiLemak
];

export const desserts: FoodItem[] = [
  {
    id: "D001",
    name: "CENDOL",
    description: "Green rice flour jelly with coconut milk and palm sugar",
    price: 8.00,
    category: "Desserts"
  },
  {
    id: "D002",
    name: "ABC (ICE KACANG)",
    description: "Shaved ice with red beans, sweet corn, grass jelly, and condensed milk",
    price: 10.00,
    category: "Desserts"
  },
  {
    id: "D003",
    name: "CHOCOLATE LAVA CAKE",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 15.00,
    category: "Desserts"
  },
  {
    id: "D004",
    name: "BANANA FRITTERS",
    description: "Deep-fried banana with honey and ice cream",
    price: 12.00,
    category: "Desserts"
  }
];
