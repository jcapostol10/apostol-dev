import { faqs, plans, site } from "./site-data";

// JSON-LD via a <script type="application/ld+json"> tag — the Next App Router
// Metadata API doesn't model structured data, so we inject it inline.
// dangerouslySetInnerHTML is the documented Next pattern for this.
//
// Note: Review / AggregateRating schema is intentionally omitted until real
// client reviews exist. Once testimonials in the proof section are real,
// attach Review entries there.

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escape `</` to avoid breaking out of the script tag if any user-supplied
      // string ever contains it.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: {
      "@type": "Country",
      name: site.areaServed,
    },
    sameAs: [site.whatsapp],
  };
  return <Script data={data} />;
}

export function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    serviceType: "Website and mobile app development",
    areaServed: { "@type": "Country", name: site.areaServed },
    offers: plans.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.description,
      priceCurrency: p.priceCurrency,
      price: p.priceMonthly,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.priceMonthly,
        priceCurrency: p.priceCurrency,
        unitText: "MONTH",
        billingIncrement: 1,
      },
    })),
  };
  return <Script data={data} />;
}

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <Script data={data} />;
}
