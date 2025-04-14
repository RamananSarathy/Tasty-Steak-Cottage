
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  hotPrice?: number;
  coldPrice?: number;
  category?: string;
  image?: string;
}

export const malaysianDrinks: MenuItem[] = [
  {
    id: "001",
    name: "TEH TARIK",
    description: "Classic pulled milk tea, a Malaysian favorite",
    hotPrice: 5.00,
    coldPrice: 6.00,
    category: "Malaysian Favorite"
  },
  {
    id: "002",
    name: "TEH O",
    description: "Plain tea without milk",
    hotPrice: 2.00,
    coldPrice: 2.50,
    category: "Malaysian Favorite"
  },
  {
    id: "003",
    name: "MILK TEA WITH FRESH MILK & BROWN SUGAR",
    description: "Fragrant tea with fresh milk and brown sugar",
    hotPrice: 6.00,
    coldPrice: 7.00,
    category: "Malaysian Favorite"
  },
  {
    id: "004",
    name: "KOPI TARIK",
    description: "Traditional pulled coffee",
    hotPrice: 4.00,
    coldPrice: 5.00,
    category: "Malaysian Favorite"
  },
  {
    id: "005",
    name: "NESCAFE TARIK",
    description: "Pulled Nescafe coffee",
    hotPrice: 5.00,
    coldPrice: 6.00,
    category: "Malaysian Favorite"
  },
  {
    id: "006",
    name: "NESCAFE WITH FRESH MILK & BROWN SUGAR",
    description: "Nescafe coffee with fresh milk and brown sugar",
    hotPrice: 6.00,
    coldPrice: 7.00,
    category: "Malaysian Favorite"
  },
  {
    id: "007",
    name: "MILK CHOCOLATE",
    description: "Rich chocolate milk drink",
    hotPrice: 6.00,
    coldPrice: 7.00,
    category: "Malaysian Favorite"
  },
  {
    id: "008",
    name: "SIRAP BANDUNG SODA",
    description: "Rose syrup with milk and soda",
    hotPrice: 5.00,
    coldPrice: 6.00,
    category: "Malaysian Favorite"
  },
  {
    id: "009",
    name: "HONEY LEMON",
    description: "Refreshing honey and lemon drink",
    hotPrice: 6.00,
    coldPrice: 7.00,
    category: "Malaysian Favorite"
  },
  {
    id: "010",
    name: "LEMON",
    description: "Tangy lemon drink",
    hotPrice: 6.00,
    coldPrice: 7.00,
    category: "Malaysian Favorite",
    image: "/public/menu/lemon-drink.jpg"
  },
  {
    id: "011",
    name: "LIME",
    description: "Refreshing lime drink",
    hotPrice: 6.00,
    coldPrice: 7.00,
    category: "Malaysian Favorite"
  }
];

export const otherDrinks: MenuItem[] = [
  {
    id: "012",
    name: "FRESH ORANGE JUICE",
    description: "Freshly squeezed orange juice",
    coldPrice: 8.00,
    category: "Fresh Juices"
  },
  {
    id: "013",
    name: "FRESH APPLE JUICE",
    description: "Freshly squeezed apple juice",
    coldPrice: 8.00,
    category: "Fresh Juices"
  },
  {
    id: "014",
    name: "ICED LEMON TEA",
    description: "Refreshing tea with lemon",
    coldPrice: 6.00,
    category: "Specialty Drinks"
  },
  {
    id: "015",
    name: "MINERAL WATER",
    description: "Natural mineral water",
    coldPrice: 3.00,
    category: "Water & Sodas"
  },
  {
    id: "016",
    name: "SPARKLING WATER",
    description: "Refreshing sparkling water",
    coldPrice: 5.00,
    category: "Water & Sodas"
  }
];
