export const business = {
  name: "Ashley's Homecooked Meals LLC",
  shortName: "Ashley's Homecooked Meals",
  since: "2025",
  city: "Tacoma, Washington",
  phoneDisplay: "(206) 476-0691",
  phoneE164: "+12064760691",
  email: "Businessashley90@gmail.com",
  cashApp: "$Ashleyshomecookedmealsllc",
  zelle: "253-384-9014",
  days: "Thursdays, Fridays and Sundays",
  url: "https://www.ashleys-homecooked-meals-llc.net",
};

const sms = (body: string) =>
  `sms:${business.phoneE164}?&body=${encodeURIComponent(body)}`;

export const links = {
  order: sms("Hi Ashley, I'd like to place a pre-order."),
  catering: sms("Hi Ashley, I'd like to ask about catering an event."),
  call: `tel:${business.phoneE164}`,
  email: `mailto:${business.email}`,
};

export const socials = [
  {
    name: "Facebook",
    handle: "Ashleyhomecookedmeals",
    href: "https://www.facebook.com/Ashleyhomecookedmeals",
  },
  {
    name: "Instagram",
    handle: "@Baglaady253",
    href: "https://www.instagram.com/Baglaady253",
  },
  {
    name: "TikTok",
    handle: "@Soulfood253",
    href: "https://www.tiktok.com/@Soulfood253",
  },
] as const;

export type Photo = { src: string; alt: string; caption: string; position?: string };

export const photos = {
  steakPlate: {
    src: "/images/steak-plate.jpg",
    alt: "Hamburger steak in gravy with a baked potato, collard greens and baked mac and cheese in a takeout tray",
    caption: "Hamburger steak with greens and baked mac.",
  },
  basket: {
    src: "/images/basket.jpg",
    alt: "Fried catfish fillet and fried wings in a checkered basket with a cornbread muffin and a side of baked mac and cheese",
    caption: "Fried catfish and wings, with baked mac.",
    position: "50% 38%",
  },
  basketCounter: {
    src: "/images/basket-counter.jpg",
    alt: "Fried wings and catfish with a cornbread muffin, a dessert cup, a red punch and stacked sides ready for pickup",
    caption: "Wings, catfish, sides, dessert cup and punch.",
    position: "62% 60%",
  },
  mac: {
    src: "/images/mac.jpg",
    alt: "A spoon lifting baked mac and cheese with a browned cheese crust from a foil tray",
    caption: "Baked mac and cheese.",
  },
  greens: {
    src: "/images/greens.jpg",
    alt: "Collard greens simmered with smoked meat in a deli container",
    caption: "Collard greens.",
  },
  pudding: {
    src: "/images/pudding.jpg",
    alt: "A tray of strawberry banana pudding topped with sliced bananas, strawberry sauce and Biscoff cookie crumbs",
    caption: "Strawberry banana pudding with Biscoff.",
  },
} satisfies Record<string, Photo>;

export type MenuItem = { name: string; detail?: string; price: string; note?: string };
export type MenuGroup = {
  id: string;
  title: string;
  note?: string;
  photo: Photo;
  items: MenuItem[];
};

export const menu: MenuGroup[] = [
  {
    id: "wings",
    title: "Wing combos",
    note: "Ask about our baked chicken.",
    photo: photos.basketCounter,
    items: [
      { name: "8pc teriyaki wing bowl", detail: "On white rice with broccoli.", price: "$20" },
      {
        name: "8pc wings",
        detail: "BBQ, buffalo or lemon pepper, with one side, a drink and a roll.",
        price: "$16",
      },
      {
        name: "12pc wings",
        detail: "Dipped in sauce or regular, with one side of your choice and a roll.",
        price: "$20",
      },
      { name: "Chicken strips", detail: "With one side, a roll and a dipping sauce.", price: "$16" },
    ],
  },
  {
    id: "seafood",
    title: "Seafood combos",
    note: "Hard fried on request. Add loaded wedges with cheese and bacon for $3.",
    photo: photos.basket,
    items: [
      {
        name: "Catfish and shrimp",
        detail: "2pc catfish, 6 jumbo fried shrimp, a roll and a drink.",
        price: "$30",
      },
      {
        name: "Catfish and wings",
        detail:
          "2pc catfish, 5 wings in buffalo, teriyaki or barbeque, potato wedges, a Hawaiian roll and Soul Punch.",
        price: "$30",
      },
      { name: "Catfish plate", detail: "2pc catfish, two sides and a roll.", price: "$25" },
      { name: "6pc catfish", detail: "With wedges and two rolls.", price: "$40" },
      { name: "Fried salmon bites", detail: "With jumbo shrimp and wedges.", price: "$35" },
    ],
  },
  {
    id: "plates",
    title: "Pastas and plates",
    note: "Oxtails take time. Ask about order time first.",
    photo: photos.steakPlate,
    items: [
      {
        name: "Oxtail Rasta pasta",
        detail: "Tender oxtail over creamy Rasta pasta, with steamed cabbage and garlic toast.",
        price: "$40",
      },
      {
        name: "Oxtail plate",
        detail: "Smothered in rich gravy over white rice, with two sides of your choice and a roll.",
        price: "$40",
      },
      {
        name: "Salmon Rasta pasta",
        detail: "6oz seasoned salmon over creamy Rasta pasta, with steamed cabbage and garlic toast.",
        price: "$30",
        note: "8oz salmon $35",
      },
      {
        name: "Shrimp Rasta pasta",
        detail: "Jumbo shrimp over creamy Rasta pasta, with garlic toast.",
        price: "$25",
      },
      { name: "Hamburger steaks", detail: "Tender and juicy.", price: "$30" },
      {
        name: "Baked spaghetti",
        detail:
          "Seasoned beef and turkey with pepperoni on top, 6 wings, garlic bread and green beans. Or switch the wings to 2pc catfish.",
        price: "$25",
      },
      { name: "Chicken Alfredo bowl", price: "$20" },
      { name: "Shrimp Alfredo bowl", price: "$25" },
    ],
  },
  {
    id: "sweet",
    title: "Something sweet",
    photo: photos.pudding,
    items: [
      {
        name: "Dessert cup",
        detail: "Large strawberry banana pudding cup with Biscoff.",
        price: "$7",
      },
    ],
  },
];

export const sides = [
  "Mac and cheese",
  "Collard greens",
  "Green beans",
  "Fried cabbage",
  "Sweet candied yams",
  "Baked beans",
  "Potato wedges",
];

export const sunday = {
  title: "The Big Bacc Combo",
  price: "$40",
  includes: [
    "2pc catfish",
    "6 wings",
    "3 sides of your choice",
    "A complimentary dessert cup",
  ],
};

export const steps = [
  {
    title: "Choose your plate",
    body: "Browse the menu and decide what you would like. Planning an event? Ask about catering.",
  },
  {
    title: "Text your order a day ahead",
    body: "All orders are placed at least 24 hours in advance so everything is cooked fresh for you. Payment is due when you order, by Cash App or Zelle. There are no refunds.",
  },
  {
    title: "Pick up curbside",
    body: "Ashley sends the pickup location and time the day before. Delivery may be arranged by text. It is not guaranteed and the cost varies by location.",
  },
];
