import type { ProductDetail, ProductSummary } from "@/types";

export interface DemoBrand {
  id: string;
  name: string;
  slug: string;
  logoUrl: string | null;
  description: string;
  country: string;
}

export interface DemoCategory {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  parentId: string | null;
}

export interface DemoProduct extends ProductDetail {
  createdAt: Date;
  isFeatured: boolean;
  isBestSeller: boolean;
  isNewArrival: boolean;
}

export const DEMO_BRANDS: DemoBrand[] = [
  { id: "b_ameera", name: "Ameera", slug: "ameera", logoUrl: null, description: "Refined daily-wear gold designs.", country: "Pakistan" },
  { id: "b_zoya", name: "Zoya", slug: "zoya", logoUrl: null, description: "Feminine pearl and stone jewellery.", country: "Pakistan" },
  { id: "b_noor", name: "Noor", slug: "noor", logoUrl: null, description: "Statement pieces for every modern woman.", country: "Pakistan" },
  { id: "b_sitara", name: "Sitara", slug: "sitara", logoUrl: null, description: "Contemporary classics in rose gold.", country: "Pakistan" },
  { id: "b_mehr", name: "Mehr", slug: "mehr", logoUrl: null, description: "Playful, layered everyday essentials.", country: "Pakistan" },
  { id: "b_gulnar", name: "Gulnar", slug: "gulnar", logoUrl: null, description: "Bridal and occasion couture pieces.", country: "Pakistan" },
];

export const DEMO_CATEGORIES: DemoCategory[] = [
  { id: "c_necklaces", name: "Necklaces", slug: "necklaces", imageUrl: "/images/products/chain-necklace.jpg", parentId: null },
  { id: "c_earrings", name: "Earrings", slug: "earrings", imageUrl: "/images/products/hoop-earrings.jpg", parentId: null },
  { id: "c_rings", name: "Rings", slug: "rings", imageUrl: "/images/products/ring-stack.jpg", parentId: null },
  { id: "c_bracelets", name: "Bracelets", slug: "bracelets", imageUrl: "/images/products/gold-bracelet.jpg", parentId: null },
  { id: "c_bridal", name: "Bridal", slug: "bridal", imageUrl: "/images/products/kundan-set.jpg", parentId: null },
  { id: "c_kundan", name: "Kundan", slug: "kundan", imageUrl: "/images/products/kundan-set.jpg", parentId: null },
  { id: "c_daily", name: "Daily Wear", slug: "daily-wear", imageUrl: "/images/products/hoop-wear.jpg", parentId: null },
  { id: "c_fashion", name: "Fashion Jewellery", slug: "fashion-jewellery", imageUrl: "/images/products/heart-pendant.jpg", parentId: null },
];

const img = (photo: string) => `/images/products/${photo}`;

function demoProduct(input: {
  id: string;
  slug: string;
  sku: string;
  name: string;
  photo: string;
  brandId: string;
  categoryId: string;
  price: number;
  discount?: number;
  gender: "MEN" | "WOMEN" | "UNISEX";
  movement: string;
  strapMaterial: string;
  caseMaterial: string;
  caseDiameter: string;
  waterResistance: string;
  warranty?: string;
  style: string;
  colors: string[];
  rating?: number;
  ratingCount?: number;
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  stock?: number;
  description: string;
  specs: Record<string, string>;
}): DemoProduct {
  const brand = DEMO_BRANDS.find((b) => b.id === input.brandId)!;
  const category = DEMO_CATEGORIES.find((c) => c.id === input.categoryId)!;
  const st = input.stock ?? 12;
  return {
    id: input.id,
    slug: input.slug,
    sku: input.sku,
    name: input.name,
    price: input.price,
    discount: input.discount ?? 0,
    salePrice: input.price * (1 - (input.discount ?? 0) / 100),
    brand: { id: brand.id, name: brand.name, slug: brand.slug },
    category: { id: category.id, name: category.name, slug: category.slug },
    gender: input.gender,
    imageUrl: img(input.photo),
    ratingAvg: input.rating ?? 4.5,
    ratingCount: input.ratingCount ?? 24,
    stockStatus: st <= 0 ? "OUT_OF_STOCK" : st < 5 ? "LOW_STOCK" : "IN_STOCK",
    stock: st,
    isNewArrival: input.newArrival ?? false,
    isBestSeller: input.bestSeller ?? false,
    isFeatured: input.featured ?? false,
    description: input.description,
    strapMaterial: input.strapMaterial,
    caseMaterial: input.caseMaterial,
    caseDiameter: input.caseDiameter,
    waterResistance: input.waterResistance,
    warranty: input.warranty ?? "6 Months",
    displayType: "Handcrafted",
    occasion: input.style,
    style: input.style,
    colors: input.colors,
    specifications: input.specs,
    movement: input.movement,
    images: [
      { id: `${input.id}_img1`, url: img(input.photo), alt: `${input.name}`, sortOrder: 0 },
      { id: `${input.id}_img2`, url: img(input.photo), alt: `${input.name} detail`, sortOrder: 1 },
      { id: `${input.id}_img3`, url: img(input.photo), alt: `${input.name} styling`, sortOrder: 2 },
      { id: `${input.id}_img4`, url: img(input.photo), alt: `${input.name} with outfit`, sortOrder: 3 },
    ],
    variants: [
      {
        id: `${input.id}_v1`,
        name: input.name,
        sku: input.sku,
        color: input.colors[0],
        size: null,
        price: input.price,
        stock: st,
        stockStatus: st <= 0 ? "OUT_OF_STOCK" : st < 5 ? "LOW_STOCK" : "IN_STOCK",
        isDefault: true,
      },
    ],
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 90) * 86400000),
  };
}

export const DEMO_PRODUCTS: DemoProduct[] = [
  demoProduct({
    id: "p_chain_necklace",
    slug: "gold-chain-necklace",
    sku: "AMR-CHN-001",
    name: "Gold Chain Necklace",
    photo: "chain-necklace.jpg",
    brandId: "b_ameera",
    categoryId: "c_necklaces",
    price: 14500,
    discount: 10,
    gender: "WOMEN",
    movement: "Gold Plated",
    strapMaterial: "Gold Plated",
    caseMaterial: "Polish Finish",
    caseDiameter: "18 inch",
    waterResistance: "Lightweight",
    style: "Daily Wear",
    colors: ["Gold"],
    rating: 4.8,
    ratingCount: 132,
    bestSeller: true,
    featured: true,
    stock: 24,
    description:
      "A classic gold-plated chain with a smooth polish finish — the everyday necklace that elevates a simple kurta or a western shirt with effortless charm.",
    specs: {
      Metal: "Gold Plated",
      Length: "18 inch",
      Finish: "High Polish",
      Closure: "Spring Ring",
      Weight: "Lightweight",
      Style: "Daily Wear",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_pearl_earrings",
    slug: "pearl-drop-earrings",
    sku: "ZOY-PRL-014",
    name: "Pearl Drop Earrings",
    photo: "pearl-earring.jpg",
    brandId: "b_zoya",
    categoryId: "c_earrings",
    price: 6800,
    discount: 0,
    gender: "WOMEN",
    movement: "925 Silver",
    strapMaterial: "925 Silver",
    caseMaterial: "Freshwater Pearl",
    caseDiameter: "5 cm drop",
    waterResistance: "8 g",
    style: "Party Wear",
    colors: ["Pearl", "Silver"],
    rating: 4.7,
    ratingCount: 86,
    bestSeller: true,
    stock: 18,
    description:
      "Freshwater pearl drops on 925 silver hooks. Subtle, luminous and endlessly wearable from office to evening functions.",
    specs: {
      Metal: "925 Silver",
      Stone: "Freshwater Pearl",
      "Drop Length": "5 cm",
      Closure: "Silver Hook",
      Weight: "8 g",
      Style: "Party Wear",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_gold_hoops",
    slug: "classic-gold-hoops",
    sku: "NOR-HOOP-021",
    name: "Classic Gold Hoops",
    photo: "hoop-earrings.jpg",
    brandId: "b_noor",
    categoryId: "c_earrings",
    price: 5200,
    discount: 8,
    gender: "WOMEN",
    movement: "Gold Plated",
    strapMaterial: "Gold Plated",
    caseMaterial: "Polish Finish",
    caseDiameter: "4 cm",
    waterResistance: "9 g",
    style: "Daily Wear",
    colors: ["Gold"],
    rating: 4.6,
    ratingCount: 210,
    featured: true,
    stock: 40,
    description:
      "Sleek, timeless gold hoops with a mirror polish. A wardrobe staple that pairs with everything you own.",
    specs: {
      Metal: "Gold Plated",
      Diameter: "4 cm",
      Finish: "Mirror Polish",
      Closure: "Hinged Snap",
      Weight: "9 g",
      Style: "Daily Wear",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_heart_pendant",
    slug: "heart-pendant-necklace",
    sku: "SIT-HRT-038",
    name: "Heart Pendant Necklace",
    photo: "heart-pendant.jpg",
    brandId: "b_sitara",
    categoryId: "c_necklaces",
    price: 7900,
    discount: 0,
    gender: "WOMEN",
    movement: "Rose Gold",
    strapMaterial: "Rose Gold",
    caseMaterial: "Cubic Zirconia",
    caseDiameter: "16 inch",
    waterResistance: "Lightweight",
    style: "Minimal",
    colors: ["Rose Gold"],
    rating: 4.9,
    ratingCount: 64,
    newArrival: true,
    stock: 15,
    description:
      "A dainty rose-gold heart pendant with a sparkling cubic zirconia centre — the perfect gift for someone you love.",
    specs: {
      Metal: "Rose Gold",
      Pendant: "Heart with CZ",
      Length: "16 inch",
      Finish: "Brushed Gloss",
      Weight: "Lightweight",
      Style: "Minimal",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_kundan_set",
    slug: "kundan-bridal-set",
    sku: "GLN-KND-101",
    name: "Kundan Bridal Set",
    photo: "kundan-set.jpg",
    brandId: "b_gulnar",
    categoryId: "c_bridal",
    price: 42000,
    discount: 12,
    gender: "WOMEN",
    movement: "Kundan",
    strapMaterial: "Gold Plated",
    caseMaterial: "Kundan Craft",
    caseDiameter: "Full Set",
    waterResistance: "280 g",
    style: "Bridal",
    colors: ["White", "Gold"],
    rating: 4.9,
    ratingCount: 41,
    featured: true,
    newArrival: true,
    stock: 6,
    description:
      "A complete kundan bridal set — necklace, earrings and maang tikka — handcrafted with flawless stones. For your most unforgettable day.",
    specs: {
      "Set Includes": "Necklace, Earrings, Maang Tikka",
      Metal: "Gold Plated",
      Craft: "Kundan Stones",
      Finish: "Handcrafted",
      Weight: "280 g",
      Style: "Bridal",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_ring_stack",
    slug: "stackable-ring-trio",
    sku: "MHR-RNG-052",
    name: "Stackable Ring Trio",
    photo: "ring-stack.jpg",
    brandId: "b_mehr",
    categoryId: "c_rings",
    price: 4400,
    discount: 5,
    gender: "WOMEN",
    movement: "Gold Plated",
    strapMaterial: "Gold Plated",
    caseMaterial: "Enamel Accents",
    caseDiameter: "Adjustable",
    waterResistance: "6 g",
    style: "Minimal",
    colors: ["Gold", "White"],
    rating: 4.7,
    ratingCount: 98,
    bestSeller: true,
    stock: 50,
    description:
      "Three delicate stackable bands to mix, match and layer — a playful everyday essential for the modern woman.",
    specs: {
      Metal: "Gold Plated",
      Detail: "Enamel Accents",
      Size: "Adjustable",
      Finish: "Polished",
      Weight: "6 g",
      Style: "Minimal",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_gold_bracelet",
    slug: "gold-bracelet",
    sku: "AMR-BRC-066",
    name: "Gold Bracelet",
    photo: "gold-bracelet.jpg",
    brandId: "b_ameera",
    categoryId: "c_bracelets",
    price: 9800,
    discount: 10,
    gender: "WOMEN",
    movement: "Gold Plated",
    strapMaterial: "Gold Plated",
    caseMaterial: "Polish Finish",
    caseDiameter: "18 cm",
    waterResistance: "14 g",
    style: "Party Wear",
    colors: ["Gold"],
    rating: 4.8,
    ratingCount: 77,
    bestSeller: true,
    stock: 20,
    description:
      "An elegant gold-plated bracelet with a secure latch — dresses up any outfit, from casual brunches to formal evenings.",
    specs: {
      Metal: "Gold Plated",
      Length: "18 cm",
      Finish: "High Polish",
      Closure: "Push Lock",
      Weight: "14 g",
      Style: "Party Wear",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_daily_hoops",
    slug: "everyday-hoop-earrings",
    sku: "NOR-HOOP-042",
    name: "Everyday Hoop Earrings",
    photo: "hoop-wear.jpg",
    brandId: "b_noor",
    categoryId: "c_earrings",
    price: 6400,
    discount: 0,
    gender: "WOMEN",
    movement: "Rose Gold",
    strapMaterial: "Rose Gold",
    caseMaterial: "Polish Finish",
    caseDiameter: "3.5 cm",
    waterResistance: "8 g",
    style: "Daily Wear",
    colors: ["Rose Gold"],
    rating: 4.6,
    ratingCount: 123,
    featured: true,
    stock: 32,
    description:
      "Featherlight rose-gold hoops designed to be worn from morning coffee to late-night dinners without a second thought.",
    specs: {
      Metal: "Rose Gold",
      Diameter: "3.5 cm",
      Finish: "Gloss",
      Closure: "Hinged Snap",
      Weight: "8 g",
      Style: "Daily Wear",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_necklace_set",
    slug: "twin-layer-necklace-set",
    sku: "ZOY-NKL-071",
    name: "Twin-Layer Necklace Set",
    photo: "necklace-wear.jpg",
    brandId: "b_zoya",
    categoryId: "c_necklaces",
    price: 11200,
    discount: 8,
    gender: "WOMEN",
    movement: "925 Silver",
    strapMaterial: "925 Silver",
    caseMaterial: "CZ Pendant",
    caseDiameter: "Layered",
    waterResistance: "Lightweight",
    style: "Party Wear",
    colors: ["Silver", "Rainbow"],
    rating: 4.8,
    ratingCount: 59,
    newArrival: true,
    stock: 12,
    description:
      "A twin-layer necklace set that layers effortlessly — subtle sparkle with a polished silver finish for parties and photos.",
    specs: {
      Metal: "925 Silver",
      Detail: "Cubic Zirconia",
      Length: "Layered",
      Finish: "Polished",
      Weight: "Lightweight",
      Style: "Party Wear",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_ring_collection",
    slug: "mini-ring-collection",
    sku: "SIT-RNG-088",
    name: "Mini Ring Collection",
    photo: "ring-collection.jpg",
    brandId: "b_sitara",
    categoryId: "c_rings",
    price: 8600,
    discount: 0,
    gender: "WOMEN",
    movement: "Rose Gold",
    strapMaterial: "Rose Gold",
    caseMaterial: "Stone Details",
    caseDiameter: "Adjustable",
    waterResistance: "10 g",
    style: "Classic",
    colors: ["Rose Gold", "Pearl"],
    rating: 4.5,
    ratingCount: 44,
    stock: 16,
    description:
      "A curated mini collection of rose-gold rings with delicate stone details — made for mixing, matching and gifting.",
    specs: {
      Metal: "Rose Gold",
      Detail: "Stone Accents",
      Size: "Adjustable",
      Finish: "Polished",
      Weight: "10 g",
      Style: "Classic",
      Warranty: "6 Months",
    },
  }),
  demoProduct({
    id: "p_bridal_necklace",
    slug: "bridal-choker-necklace",
    sku: "GLN-CHK-117",
    name: "Bridal Choker Necklace",
    photo: "bridal.jpg",
    brandId: "b_gulnar",
    categoryId: "c_bridal",
    price: 38000,
    discount: 10,
    gender: "WOMEN",
    movement: "Kundan",
    strapMaterial: "Gold Plated",
    caseMaterial: "Kundan Craft",
    caseDiameter: "Choker",
    waterResistance: "220 g",
    style: "Bridal",
    colors: ["Gold", "White"],
    rating: 4.9,
    ratingCount: 35,
    featured: true,
    newArrival: true,
    stock: 7,
    description:
      "A rich bridal choker with intricate kundan work and a regal pendant — the centrepiece every bride remembers.",
    specs: {
      Metal: "Gold Plated",
      Craft: "Kundan Stones",
      Length: "Choker",
      Finish: "Handcrafted",
      Weight: "220 g",
      Style: "Bridal",
      Warranty: "6 Months",
    },
  }),
];

export const DEMO_REVIEWS = [
  {
    id: "r1",
    author: "Ayesha R.",
    rating: 5,
    content:
      "The necklace looked even better than the pictures. Packaging was premium and delivery was fast. Highly recommended!",
    date: new Date("2026-08-12"),
    verified: true,
    productId: "p_chain_necklace",
  },
  {
    id: "r2",
    author: "Fatima S.",
    rating: 5,
    content:
      "Gorgeous piece. Feels much more expensive than it is. The finish is stunning and it goes with everything.",
    date: new Date("2026-07-28"),
    verified: true,
    productId: "p_pearl_earrings",
  },
  {
    id: "r3",
    author: "Bilal K.",
    rating: 4,
    content:
      "Bought the kundan set for my sister's mehndi. The stonework is beautiful and the set feels substantial. Delivery took 3 days.",
    date: new Date("2026-08-03"),
    verified: true,
    productId: "p_kundan_set",
  },
  {
    id: "r4",
    author: "Mariam T.",
    rating: 5,
    content:
      "Ordered the hoops for daily wear and they haven't left my ears since. No tarnish after a month of use!",
    date: new Date("2026-06-19"),
    verified: true,
    productId: "p_gold_hoops",
  },
  {
    id: "r5",
    author: "Umar A.",
    rating: 4,
    content:
      "Gifted the heart pendant to my wife — she loved it. Great quality at this price point, and the gift box was lovely.",
    date: new Date("2026-05-30"),
    verified: true,
    productId: "p_heart_pendant",
  },
];

export const DEMO_TESTIMONIALS = [
  {
    quote:
      "Coming from a big jewellery store, the experience here was honestly smoother. Great pieces, real quality.",
    author: "Ayesha R.",
    role: "Verified Purchase",
    rating: 5,
  },
  {
    quote:
      "I found exactly the piece I wanted using the piece finder. It felt like they read my mind.",
    author: "Hira M.",
    role: "Verified Purchase",
    rating: 5,
  },
  {
    quote: "A timeless necklace, delivered in two days. This is how online shopping should feel.",
    author: "Zain B.",
    role: "Verified Purchase",
    rating: 5,
  },
];