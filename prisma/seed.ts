/**
 * Corals by Tabassum seed script.
 *
 * Usage: node prisma/seed.ts
 * Requires a live DATABASE_URL (Supabase Postgres) — see .env.example.
 */
import "dotenv/config";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.ts";
import type { Gender } from "../src/generated/prisma/enums.ts";

const connectionString = process.env.DATABASE_URL;
if (!connectionString || connectionString.includes("your-supabase")) {
  console.error(
    "❌ DATABASE_URL is not set. Add your Supabase Postgres URL and try again."
  );
  process.exit(1);
}

const poolUrl = new URL(connectionString);
poolUrl.search = "";
const pool = new pg.Pool({
  connectionString: poolUrl.toString(),
  ssl: poolUrl.hostname.includes("pooler.supabase.com")
    ? { rejectUnauthorized: false }
    : undefined,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const DEMO_CATEGORIES = [
  { name: "Necklaces", slug: "necklaces" },
  { name: "Earrings", slug: "earrings" },
  { name: "Rings", slug: "rings" },
  { name: "Bracelets", slug: "bracelets" },
  { name: "Bridal", slug: "bridal" },
  { name: "Kundan", slug: "kundan" },
  { name: "Daily Wear", slug: "daily-wear" },
  { name: "Fashion Jewellery", slug: "fashion-jewellery" },
];

const DEMO_BRANDS = [
  { name: "Ameera", slug: "ameera", country: "Pakistan" },
  { name: "Zoya", slug: "zoya", country: "Pakistan" },
  { name: "Noor", slug: "noor", country: "Pakistan" },
  { name: "Sitara", slug: "sitara", country: "Pakistan" },
  { name: "Mehr", slug: "mehr", country: "Pakistan" },
  { name: "Gulnar", slug: "gulnar", country: "Pakistan" },
];

const IMG = (photo: string) => `/images/products/${photo}.jpg`;

const CATEGORY_IMG: Record<string, string> = {
  necklaces: "chain-necklace",
  earrings: "hoop-earrings",
  rings: "ring-stack",
  bracelets: "gold-bracelet",
  bridal: "kundan-set",
  kundan: "kundan-set",
  "daily-wear": "hoop-wear",
  "fashion-jewellery": "heart-pendant",
};

const PRODUCTS = [
  { slug: "gold-chain-necklace", sku: "AMR-CHN-001", name: "Gold Chain Necklace", brand: "ameera", category: "necklaces", photo: "chain-necklace", price: 14500, discount: 10, gender: "WOMEN", movement: "Gold Plated", strapMaterial: "Gold Plated", caseMaterial: "Polish Finish", caseDiameter: "18 inch", waterResistance: "Lightweight", style: "Daily Wear", isBestSeller: true, stock: 24 },
  { slug: "pearl-drop-earrings", sku: "ZOY-PRL-014", name: "Pearl Drop Earrings", brand: "zoya", category: "earrings", photo: "pearl-earring", price: 6800, discount: 0, gender: "WOMEN", movement: "925 Silver", strapMaterial: "925 Silver", caseMaterial: "Freshwater Pearl", caseDiameter: "5 cm drop", waterResistance: "8 g", style: "Party Wear", isBestSeller: true, stock: 18 },
  { slug: "classic-gold-hoops", sku: "NOR-HOOP-021", name: "Classic Gold Hoops", brand: "noor", category: "earrings", photo: "hoop-earrings", price: 5200, discount: 8, gender: "WOMEN", movement: "Gold Plated", strapMaterial: "Gold Plated", caseMaterial: "Polish Finish", caseDiameter: "4 cm", waterResistance: "9 g", style: "Daily Wear", stock: 40 },
  { slug: "heart-pendant-necklace", sku: "SIT-HRT-038", name: "Heart Pendant Necklace", brand: "sitara", category: "necklaces", photo: "heart-pendant", price: 7900, discount: 0, gender: "WOMEN", movement: "Rose Gold", strapMaterial: "Rose Gold", caseMaterial: "Cubic Zirconia", caseDiameter: "16 inch", waterResistance: "Lightweight", style: "Minimal", isNewArrival: true, stock: 15 },
  { slug: "kundan-bridal-set", sku: "GLN-KND-101", name: "Kundan Bridal Set", brand: "gulnar", category: "bridal", photo: "kundan-set", price: 42000, discount: 12, gender: "WOMEN", movement: "Kundan", strapMaterial: "Gold Plated", caseMaterial: "Kundan Craft", caseDiameter: "Full Set", waterResistance: "280 g", style: "Bridal", isNewArrival: true, stock: 6 },
  { slug: "stackable-ring-trio", sku: "MHR-RNG-052", name: "Stackable Ring Trio", brand: "mehr", category: "rings", photo: "ring-stack", price: 4400, discount: 5, gender: "WOMEN", movement: "Gold Plated", strapMaterial: "Gold Plated", caseMaterial: "Enamel Accents", caseDiameter: "Adjustable", waterResistance: "6 g", style: "Minimal", isBestSeller: true, stock: 50 },
  { slug: "gold-bracelet", sku: "AMR-BRC-066", name: "Gold Bracelet", brand: "ameera", category: "bracelets", photo: "gold-bracelet", price: 9800, discount: 10, gender: "WOMEN", movement: "Gold Plated", strapMaterial: "Gold Plated", caseMaterial: "Polish Finish", caseDiameter: "18 cm", waterResistance: "14 g", style: "Party Wear", isBestSeller: true, stock: 20 },
  { slug: "everyday-hoop-earrings", sku: "NOR-HOOP-042", name: "Everyday Hoop Earrings", brand: "noor", category: "earrings", photo: "hoop-wear", price: 6400, discount: 0, gender: "WOMEN", movement: "Rose Gold", strapMaterial: "Rose Gold", caseMaterial: "Polish Finish", caseDiameter: "3.5 cm", waterResistance: "8 g", style: "Daily Wear", stock: 32 },
  { slug: "twin-layer-necklace-set", sku: "ZOY-NKL-071", name: "Twin-Layer Necklace Set", brand: "zoya", category: "necklaces", photo: "necklace-wear", price: 11200, discount: 8, gender: "WOMEN", movement: "925 Silver", strapMaterial: "925 Silver", caseMaterial: "CZ Pendant", caseDiameter: "Layered", waterResistance: "Lightweight", style: "Party Wear", isNewArrival: true, stock: 12 },
  { slug: "mini-ring-collection", sku: "SIT-RNG-088", name: "Mini Ring Collection", brand: "sitara", category: "rings", photo: "ring-collection", price: 8600, discount: 0, gender: "WOMEN", movement: "Rose Gold", strapMaterial: "Rose Gold", caseMaterial: "Stone Details", caseDiameter: "Adjustable", waterResistance: "10 g", style: "Classic", stock: 16 },
  { slug: "bridal-choker-necklace", sku: "GLN-CHK-117", name: "Bridal Choker Necklace", brand: "gulnar", category: "bridal", photo: "bridal", price: 38000, discount: 10, gender: "WOMEN", movement: "Kundan", strapMaterial: "Gold Plated", caseMaterial: "Kundan Craft", caseDiameter: "Choker", waterResistance: "220 g", style: "Bridal", isNewArrival: true, stock: 7 },
];

const PRODUCT_EXTRA: Record<
  string,
  { description: string; displayType: string; specifications: Record<string, string> }
> = {
  "gold-chain-necklace": {
    description: "A classic gold-plated chain with a smooth polish finish — the everyday necklace that elevates a simple kurta or a western shirt with effortless charm.",
    displayType: "Handcrafted",
    specifications: { Metal: "Gold Plated", Length: "18 inch", Finish: "High Polish", Closure: "Spring Ring", Weight: "Lightweight", Style: "Daily Wear", Warranty: "6 Months" },
  },
  "pearl-drop-earrings": {
    description: "Freshwater pearl drops on 925 silver hooks. Subtle, luminous and endlessly wearable from office to evening functions.",
    displayType: "Handcrafted",
    specifications: { Metal: "925 Silver", Stone: "Freshwater Pearl", "Drop Length": "5 cm", Closure: "Silver Hook", Weight: "8 g", Style: "Party Wear", Warranty: "6 Months" },
  },
  "classic-gold-hoops": {
    description: "Sleek, timeless gold hoops with a mirror polish. A wardrobe staple that pairs with everything you own.",
    displayType: "Handcrafted",
    specifications: { Metal: "Gold Plated", Diameter: "4 cm", Finish: "Mirror Polish", Closure: "Hinged Snap", Weight: "9 g", Style: "Daily Wear", Warranty: "6 Months" },
  },
  "heart-pendant-necklace": {
    description: "A dainty rose-gold heart pendant with a sparkling cubic zirconia centre — the perfect gift for someone you love.",
    displayType: "Handcrafted",
    specifications: { Metal: "Rose Gold", Pendant: "Heart with CZ", Length: "16 inch", Finish: "Brushed Gloss", Weight: "Lightweight", Style: "Minimal", Warranty: "6 Months" },
  },
  "kundan-bridal-set": {
    description: "A complete kundan bridal set — necklace, earrings and maang tikka — handcrafted with flawless stones. For your most unforgettable day.",
    displayType: "Handcrafted",
    specifications: { "Set Includes": "Necklace, Earrings, Maang Tikka", Metal: "Gold Plated", Craft: "Kundan Stones", Finish: "Handcrafted", Weight: "280 g", Style: "Bridal", Warranty: "6 Months" },
  },
  "stackable-ring-trio": {
    description: "Three delicate stackable bands to mix, match and layer — a playful everyday essential for the modern woman.",
    displayType: "Handcrafted",
    specifications: { Metal: "Gold Plated", Detail: "Enamel Accents", Size: "Adjustable", Finish: "Polished", Weight: "6 g", Style: "Minimal", Warranty: "6 Months" },
  },
  "gold-bracelet": {
    description: "An elegant gold-plated bracelet with a secure latch — dresses up any outfit, from casual brunches to formal evenings.",
    displayType: "Handcrafted",
    specifications: { Metal: "Gold Plated", Length: "18 cm", Finish: "High Polish", Closure: "Push Lock", Weight: "14 g", Style: "Party Wear", Warranty: "6 Months" },
  },
  "everyday-hoop-earrings": {
    description: "Featherlight rose-gold hoops designed to be worn from morning coffee to late-night dinners without a second thought.",
    displayType: "Handcrafted",
    specifications: { Metal: "Rose Gold", Diameter: "3.5 cm", Finish: "Gloss", Closure: "Hinged Snap", Weight: "8 g", Style: "Daily Wear", Warranty: "6 Months" },
  },
  "twin-layer-necklace-set": {
    description: "A twin-layer necklace set that layers effortlessly — subtle sparkle with a polished silver finish for parties and photos.",
    displayType: "Handcrafted",
    specifications: { Metal: "925 Silver", Detail: "Cubic Zirconia", Length: "Layered", Finish: "Polished", Weight: "Lightweight", Style: "Party Wear", Warranty: "6 Months" },
  },
  "mini-ring-collection": {
    description: "A curated mini collection of rose-gold rings with delicate stone details — made for mixing, matching and gifting.",
    displayType: "Handcrafted",
    specifications: { Metal: "Rose Gold", Detail: "Stone Accents", Size: "Adjustable", Finish: "Polished", Weight: "10 g", Style: "Classic", Warranty: "6 Months" },
  },
  "bridal-choker-necklace": {
    description: "A rich bridal choker with intricate kundan work and a regal pendant — the centrepiece every bride remembers.",
    displayType: "Handcrafted",
    specifications: { Metal: "Gold Plated", Craft: "Kundan Stones", Length: "Choker", Finish: "Handcrafted", Weight: "220 g", Style: "Bridal", Warranty: "6 Months" },
  },
};

async function main() {
  // Admin user
  const adminEmail = process.env.SEED_ADMIN_EMAIL || "hello@coralsbytabassum.com";
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      id: "seed-admin",
      email: adminEmail,
      provider: "email",
    },
  });
  await prisma.profile.upsert({
    where: { userId: "seed-admin" },
    update: { role: "ADMIN" },
    create: {
      userId: "seed-admin",
      role: "ADMIN",
      firstName: "Corals by Tabassum",
      lastName: "Admin",
    },
  });
  console.log(`✔ Admin user (${adminEmail})`);

  // Brands
  const brandMap = new Map<string, string>();
  for (const [i, b] of DEMO_BRANDS.entries()) {
    const row = await prisma.brand.upsert({
      where: { slug: b.slug },
      update: {},
      create: {
        name: b.name,
        slug: b.slug,
        country: b.country,
        sortOrder: i,
        logoUrl: `https://picsum.photos/seed/logo-${b.slug}/200/80`,
      },
    });
    brandMap.set(b.slug, row.id);
  }
  console.log(`✔ ${DEMO_BRANDS.length} brands`);

  // Categories
  const catMap = new Map<string, string>();
  for (const [i, c] of DEMO_CATEGORIES.entries()) {
    const row = await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: {
        name: c.name,
        slug: c.slug,
        imageUrl: IMG(CATEGORY_IMG[c.slug] ?? c.slug),
        sortOrder: i,
      },
    });
    catMap.set(c.slug, row.id);
  }
  console.log(`✔ ${DEMO_CATEGORIES.length} categories`);

  // Products
  let count = 0;
  for (const p of PRODUCTS) {
    const brandId = brandMap.get(p.brand);
    const categoryId = catMap.get(p.category);
    if (!brandId || !categoryId) continue;

    const extra = PRODUCT_EXTRA[p.slug];
    const imageUrl = IMG(p.photo);
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        ...(extra
          ? {
              description: extra.description,
              displayType: extra.displayType,
              specifications: extra.specifications as never,
            }
          : {}),
        featuredImageUrl: imageUrl,
      },
      create: {
        slug: p.slug,
        name: p.name,
        sku: p.sku,
        description: extra?.description ?? `${p.name} — a handcrafted piece from ${p.brand}.`,
        price: p.price,
        discount: p.discount,
        ratingAvg: Math.min(5, 3.5 + ((count * 7) % 15) / 10),
        ratingCount: 2 + ((count * 3) % 40),
        gender: p.gender as Gender,
        movement: p.movement,
        strapMaterial: p.strapMaterial,
        caseMaterial: p.caseMaterial,
        caseDiameter: p.caseDiameter,
        waterResistance: p.waterResistance,
        warranty: "6 Months",
        displayType: extra?.displayType ?? "Handcrafted",
        occasion: p.style,
        style: p.style,
        colors: ["Gold"],
        specifications: (extra?.specifications as never) ?? undefined,
        featuredImageUrl: imageUrl,
        isBestSeller: p.isBestSeller ?? false,
        isNewArrival: p.isNewArrival ?? false,
        brandId,
        categoryId,
      },
    });

    await prisma.productVariant.create({
      data: {
        name: "Default",
        sku: p.sku,
        color: null,
        stock: p.stock,
        stockStatus: p.stock > 0 ? "IN_STOCK" : "OUT_OF_STOCK",
        isDefault: true,
        productId: product.id,
      },
    });

    await prisma.productImage
      .create({
        data: {
          url: imageUrl,
          alt: p.name,
          sortOrder: 0,
          productId: product.id,
        },
      })
      .catch(() => {});

    count++;
  }
  console.log(`✔ ${count} products with variants & images`);

  // Coupons
  await prisma.coupon.upsert({
    where: { code: "WELCOME10" },
    update: {},
    create: {
      code: "WELCOME10",
      type: "PERCENTAGE",
      value: 10,
      minOrder: 5000,
      maxDiscount: 1500,
      isActive: true,
    },
  });
  await prisma.coupon.upsert({
    where: { code: "SALE20" },
    update: {},
    create: {
      code: "SALE20",
      type: "PERCENTAGE",
      value: 20,
      minOrder: 15000,
      maxDiscount: 5000,
      isActive: true,
    },
  });
  console.log("✔ Coupons (WELCOME10, SALE20)");

  // Newsletter subscribers (sample)
  await prisma.newsletterSubscriber
    .create({
      data: { email: "subscriber@example.com" },
    })
    .catch(() => {});

  console.log("🎉 Seed complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });