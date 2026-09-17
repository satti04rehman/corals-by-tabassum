import Image from "next/image";

export function AboutStory() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src="/images/products/necklace-wear.jpg"
          alt="Corals by Tabassum story"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
          Our Story
        </p>
        <h2 className="mt-3 font-heading text-3xl text-obsidian lg:text-4xl">
          Born to Make Beautiful Jewellery Easy to Find
        </h2>
        <p className="mt-4 text-text-gray">
          Corals by Tabassum started with a simple frustration: finding
          stylish, quality jewellery in Pakistan meant hours of scrolling,
          guessing and second-guessing. We set out to change that.
        </p>
        <p className="mt-3 text-text-gray">
          Today we curate a tight collection of handcrafted pieces — from
          daily-wear earrings and pendants to rich bridal sets — quality-checked
          by our team and backed by easy returns. Every piece is inspected,
          photographed and shipped with care.
        </p>
        <div className="mt-6 flex flex-wrap gap-6">
          {[
            { value: "100%", label: "Handchecked" },
            { value: "7-Day", label: "Easy Returns" },
            { value: "3–5 Days", label: "Nationwide Delivery" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading text-2xl text-obsidian">{s.value}</p>
              <p className="text-xs text-text-gray">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const VALUES = [
  {
    title: "Quality First",
    desc: "Every piece is handcrafted and quality-checked before it is listed.",
  },
  {
    title: "Fair Pricing",
    desc: "Transparent pricing with real discounts — no inflated MRPs, no hidden fees.",
  },
  {
    title: "Customer Trust",
    desc: "Cash on delivery, easy returns and a support team that actually responds.",
  },
];

export const MILESTONES = [
  { title: "Curated Selection", desc: "Hand-picked pieces across 6+ trusted brands." },
  { title: "Verified by Experts", desc: "Each piece inspected and quality-checked by our team." },
  { title: "Nationwide Reach", desc: "Delivered to every city and town in Pakistan." },
  { title: "Lifetime Support", desc: "Aftercare and help, long after dispatch." },
];