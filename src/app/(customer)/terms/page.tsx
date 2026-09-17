import {
  PolicyShell,
  PolicySection,
} from "@/components/static/policy-shell";

export default function TermsPage() {
  return (
    <PolicyShell
      eyebrow="Policies"
      title="Terms & Conditions"
      updated="September 2026"
    >
      <PolicySection heading="Agreement">
        <p>
          By accessing or using the Corals by Tabassum website and placing an order, you
          agree to these terms. Please review them carefully before making a
          purchase.
        </p>
      </PolicySection>

      <PolicySection heading="Products & Pricing">
        <p>
          All product images are for illustration and may differ slightly from
          the actual product. Prices are listed in Pakistani Rupees (PKR) and
          include applicable taxes. We reserve the right to correct pricing
          errors and withdraw products at any time.
        </p>
      </PolicySection>

      <PolicySection heading="Orders">
        <p>
          An order is confirmed once we verify your details by phone. We may
          cancel an order if a product is out of stock, pricing was incorrect,
          or payment cannot be verified. In such cases we will contact you and
          refund any advance paid.
        </p>
      </PolicySection>

      <PolicySection heading="Quality Guarantee">
        <p>
          All pieces come with our quality guarantee. Guarantee claims cover
          manufacturing and craftsmanship defects. Physical damage and damage
          from improper storage or handling are generally not covered.
        </p>
      </PolicySection>

      <PolicySection heading="Limitation of Liability">
        <p>
          Corals by Tabassum is not liable for delays caused by courier partners,
          natural events, or circumstances beyond our reasonable control. Our
          liability for any claim is limited to the value of the products
          ordered.
        </p>
      </PolicySection>
    </PolicyShell>
  );
}