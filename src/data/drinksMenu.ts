
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
    category: "Malaysian Favorite"
  },
  {
    id: "011",
    name: "LIME",
    description: "Refreshing lime drink",
    hotPrice: 6.00,
    coldPrice: 7.00,
    category: "Malaysian Favorite"
  },
  {
    id: "012",
    name: "TEH O LEMON",
    description: "Plain tea with lemon",
    hotPrice: 5.00,
    coldPrice: 6.00,
    category: "Malaysian Favorite"
  },
  {
    id: "013",
    name: "TEH O LIME",
    description: "Plain tea with lime",
    hotPrice: 5.00,
    coldPrice: 6.00,
    category: "Malaysian Favorite"
  }
];

export const fruitJuices: MenuItem[] = [
  {
    id: "014",
    name: "APPLE",
    description: "Fresh apple juice",
    coldPrice: 8.00,
    category: "Fruit Juice"
  },
  {
    id: "015",
    name: "ORANGE",
    description: "Fresh orange juice",
    coldPrice: 8.00,
    category: "Fruit Juice"
  },
  {
    id: "016",
    name: "MANGO",
    description: "Fresh mango juice",
    coldPrice: 8.00,
    category: "Fruit Juice"
  },
  {
    id: "017",
    name: "LYCHEE-ICE",
    description: "Refreshing lychee juice with ice",
    coldPrice: 7.00,
    category: "Fruit Juice"
  },
  {
    id: "018",
    name: "BLACKCURRANT LYCHEE",
    description: "Blackcurrant and lychee juice blend",
    coldPrice: 8.00,
    category: "Fruit Juice"
  }
];

export const detoxSignature: MenuItem[] = [
  {
    id: "019",
    name: "HERBAL HARMONY",
    description: "Refreshing herbal detox drink",
    coldPrice: 12.00,
    category: "Detox Signature",
    image: "/lovable-uploads/0a93d9d4-8c3b-4390-b4e0-8f8e90c4a9bc.png"
  },
  {
    id: "020",
    name: "VIRGIN MOJITO",
    description: "Mint, lime and soda refreshment",
    coldPrice: 12.00,
    category: "Detox Signature",
    image: "/lovable-uploads/0a93d9d4-8c3b-4390-b4e0-8f8e90c4a9bc.png"
  },
  {
    id: "021",
    name: "LEMONGRASS COOLER",
    description: "Cooling lemongrass infused drink",
    coldPrice: 12.00,
    category: "Detox Signature",
    image: "/lovable-uploads/0a93d9d4-8c3b-4390-b4e0-8f8e90c4a9bc.png"
  },
  {
    id: "022",
    name: "TROPICAL HERB DETOX",
    description: "Tropical herbs blend for refreshment and wellness",
    coldPrice: 12.00,
    category: "Detox Signature",
    image: "/lovable-uploads/6947262f-c502-4712-8d51-22656938ff82.png"
  },
  {
    id: "023",
    name: "GINGER LEMONGRASS LIME",
    description: "Zesty blend with ginger, lemongrass and lime",
    coldPrice: 12.00,
    category: "Detox Signature",
    image: "/lovable-uploads/c499977d-f848-4b0e-b0ef-138b94d878a7.png"
  },
  {
    id: "024",
    name: "LYCHEE BASIL INFUSION",
    description: "Sweet lychee infused with aromatic basil",
    coldPrice: 12.00,
    category: "Detox Signature",
    image: "/lovable-uploads/b464a23b-ad34-4b84-ac8c-268a59c2c3d5.png"
  }
];

export const otherDrinks: MenuItem[] = [
  {
    id: "025",
    name: "MINERAL WATER",
    description: "Natural mineral water",
    coldPrice: 3.00,
    category: "Water & Sodas"
  },
  {
    id: "026",
    name: "SPARKLING WATER",
    description: "Refreshing sparkling water",
    coldPrice: 5.00,
    category: "Water & Sodas"
  }
];
