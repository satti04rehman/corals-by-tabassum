import {
  PolicyShell,
  PolicySection,
} from "@/components/static/policy-shell";

export default function WarrantyPage() {
  return (
    <PolicyShell
      eyebrow="Policies"
      title="Quality Guarantee & Aftercare"
      updated="September 2026"
    >
      <PolicySection heading="Quality Guarantee">
        <p>
          Every Corals by Tabassum purchase is handcrafted with care and
          quality-checked before dispatch. Each piece is covered by our quality
          guarantee covering manufacturing and craftsmanship defects.
        </p>
      </PolicySection>

      <PolicySection heading="What Is Covered">
        <p>
          Defects in stones, plating, clasps and finishing are covered. Our
          team assists with assessments and claim follow-ups throughout the
          guarantee period.
        </p>
      </PolicySection>

      <PolicySection heading="What Is Not Covered">
        <p>
          The guarantee does not cover damage caused by normal wear, accidental
          drops, scratches, tarnishing of plating over time on daily-wear
          pieces, or improper storage. Altering the piece at unauthorized
          outlets voids the guarantee.
        </p>
      </PolicySection>

      <PolicySection heading="After-Sales Support">
        <p>
          Need a clasp repair, replating or a gentle polish? Contact our
          support team and we will arrange professional care through our
          partner artisans at fair pricing.
        </p>
      </PolicySection>
    </PolicyShell>
  );
}