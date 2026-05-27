// JSON-LD blocks rendered as inline <script type="application/ld+json">.
// The Next App Router Metadata API doesn't model structured data, so we
// inject it directly. These are pure server components — no hydration.
//
// Note: Review and AggregateRating schemas are intentionally NOT emitted
// yet. They require real, attributable client reviews. Wire them up from
// here (probably alongside the proof section) once those exist.

import { faqs, plans, site } from "./site-data";

/** Stringify schema-org data into the textContent of a JSON-LD script.
 *  Escape `</` so a stray sequence in any string can't break out of the
 *  script tag, then run it through JSON.parse during build via the test
 *  in this folder if you add one. */
function serialize(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
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
    areaServed: { "@type": "Country", name: site.areaServed },
    sameAs: [site.whatsapp],
  };
  return <Script data={data} />;
}

export function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
    },
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
