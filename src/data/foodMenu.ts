
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isSpecial?: boolean;
}

export const appetizers: FoodItem[] = [
  {
    id: "A001",
    name: "SATAY (6 PCS)",
    description: "Grilled meat skewers with peanut sauce, choice of chicken or beef",
    price: 15.00,
    category: "Appetizers"
  },
  {
    id: "A002",
    name: "SPRING ROLLS (4 PCS)",
    description: "Crispy vegetable spring rolls with sweet chili sauce",
    price: 10.00,
    category: "Appetizers"
  },
  {
    id: "A003",
    name: "OTAK-OTAK",
    description: "Grilled fish cake with spices wrapped in banana leaf",
    price: 12.00,
    category: "Appetizers"
  },
  {
    id: "A004",
    name: "CALAMARI RINGS",
    description: "Deep-fried squid rings with tartar sauce",
    price: 16.00,
    category: "Appetizers"
  }
];

export const mainCourse: FoodItem[] = [
  {
    id: "M001",
    name: "T-BONE STEAK",
    description: "Premium T-bone steak grilled to your liking with two sides",
    price: 48.00,
    category: "Main Course",
    isSpecial: true
  },
  {
    id: "M002",
    name: "RIB-EYE STEAK",
    description: "Juicy rib-eye steak with mushroom sauce and two sides",
    price: 45.00,
    category: "Main Course"
  },
  {
    id: "M003",
    name: "CHICKEN CHOP",
    description: "Grilled boneless chicken with black pepper sauce and fries",
    price: 28.00,
    category: "Main Course"
  },
  {
    id: "M004",
    name: "LAMB CHOPS",
    description: "Grilled lamb chops with mint sauce and mashed potatoes",
    price: 38.00,
    category: "Main Course"
  },
  {
    id: "M005",
    name: "NASI LEMAK",
    description: "Coconut rice with sambal, anchovies, peanuts, cucumber, and boiled egg",
    price: 15.00,
    category: "Local Favorites"
  },
  {
    id: "M006",
    name: "CHAR KOAY TEOW",
    description: "Stir-fried rice noodles with prawns, egg, bean sprouts, and chives",
    price: 18.00,
    category: "Local Favorites"
  }
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
