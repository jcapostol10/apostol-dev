// Single source of truth for content rendered in the UI AND emitted as
// JSON-LD structured data, so the two cannot drift apart.

export const site = {
  name: "Apostol.dev",
  url: "https://apostol.dev",
  email: "josecarlo.apostol@gmail.com",
  // E.164 for telephone; canonical wa.me URL for sameAs.
  phone: "+639178129809",
  whatsapp: "https://wa.me/639178129809",
  address: {
    locality: "Bonifacio Global City",
    region: "Taguig",
    country: "PH",
  },
  // Range covers Website Subscription ₱1,500/mo through Growth Partner ₱5,000/mo.
  priceRange: "₱1,500–₱5,000 / month",
  areaServed: "Philippines",
};

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What if I don't like the website you build?",
    a: "You owe me nothing. That's the whole point — I take the risk so you don't have to. Two free revision rounds are included; if it's still not right, we walk away as friends.",
  },
  {
    q: "How long until my website is live?",
    a: "Most landing pages and small-business sites are live for review within 5–7 business days from the discovery call. Mobile apps and complex e-commerce take 2–4 weeks.",
  },
  {
    q: "Do I own the website?",
    a: "The domain and content are 100% yours. Hosting and the codebase are managed by me as part of the subscription — that's how I keep monthly costs low and reliability high.",
  },
  {
    q: "Can you build mobile apps too?",
    a: "Yes. iOS and Android apps are included in the Growth Partner plan. I build cross-platform with React Native so updates are fast and your costs stay low.",
  },
  {
    q: "What kind of AI features can you add?",
    a: "Customer chatbots that book appointments, AI search across your products, automated content drafting, smart lead-qualification forms, image generation for marketing, and more. We'll scope what makes sense for your business.",
  },
  {
    q: "Can I cancel?",
    a: "Anytime, no questions asked. I'll export your content and help you transition. No lock-in contracts.",
  },
];

export type Plan = {
  name: string;
  description: string;
  priceMonthly: number;
  priceCurrency: "PHP";
};

export const plans: Plan[] = [
  {
    name: "Website Subscription",
    description:
      "Mobile-first website with SEO + schema, hosting, SSL, CDN, monitoring, and two monthly content updates.",
    priceMonthly: 1500,
    priceCurrency: "PHP",
  },
  {
    name: "Growth Partner",
    description:
      "Everything in Subscription plus iOS/Android apps, AI features, A/B testing, same-day SLA, and unlimited content updates.",
    priceMonthly: 5000,
    priceCurrency: "PHP",
  },
];

// ────────────────────────────────────────────────────────────
// Proof section content — placeholders only.
// Do not publish anything here that isn't true and authorised.
// Once real entries land, add Review + AggregateRating JSON-LD
// in structured-data.tsx (see the comment beside FaqJsonLd).
// ────────────────────────────────────────────────────────────

export type Testimonial = {
  /** TODO: replace with real, attributed client quote. */
  quote: string;
  /** TODO: real client name. */
  authorName: string;
  /** TODO: role · company. */
  authorRole: string;
  /** Marks the card so it's visually obvious in preview/dev. */
  placeholder: true;
};

export type CaseStudy = {
  /** TODO: real project title. */
  title: string;
  /** TODO: one-line outcome — measurable result if possible. */
  result: string;
  /** Tech tags actually used on the project. */
  tags: string[];
  /** Optional URL to a live site or case-study writeup. */
  href?: string;
  placeholder: true;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "TODO: replace with real client testimonial — what they wanted, what we shipped, what changed for their business.",
    authorName: "TODO: Real Client Name",
    authorRole: "TODO: Role · Company",
    placeholder: true,
  },
  {
    quote:
      "TODO: replace with second real client quote. Aim for specifics — load times, bookings, revenue, hires made — over adjectives.",
    authorName: "TODO: Real Client Name",
    authorRole: "TODO: Role · Company",
    placeholder: true,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "TODO: Project name",
    result:
      "TODO: measurable outcome (e.g. 'Sub-1.2s LCP, 38% lift in mobile signups').",
    tags: ["Next.js", "React Native", "PostgreSQL"],
    placeholder: true,
  },
  {
    title: "TODO: Project name",
    result: "TODO: measurable outcome.",
    tags: ["AWS", "Kubernetes", "Datadog"],
    placeholder: true,
  },
  {
    title: "TODO: Project name",
    result: "TODO: measurable outcome.",
    tags: ["AI chatbot", "RAG", "Pinecone"],
    placeholder: true,
  },
];
