import { ContactForm } from "./contact-form";

const valueProps = [
  {
    title: "SEO that ranks",
    body: "Schema markup, semantic HTML, fast Core Web Vitals, and content structure built to win Google in your local market.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
  },
  {
    title: "Conversion-led",
    body: "Every section earns its place. Friction-free forms and proven funnel patterns that turn visitors into customers.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: "Blazing performance",
    body: "Sub-1.5s loads on 4G. Edge-deployed, image-optimized, and lighthouse-audited before you ever see it.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 10V3L4 14h7v7l9-11h-7z" />,
  },
  {
    title: "Reliable by default",
    body: "Uptime monitoring, observability, automated backups, and incident response — borrowed straight from enterprise SRE playbooks.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: "Mobile-first",
    body: "Designed for the 80% of Filipino traffic on phones. Pixel-perfect from 320px to 4K.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    ),
  },
  {
    title: "AI-powered",
    body: "Smart chatbots, AI search, content generation, and intelligent automation — same tech as the big players.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
];

const experience = [
  { period: "2023 — Present", role: "Observability & SRE Manager · Nuskin", detail: "End-to-end visibility for global mobile and web apps. Splunk, Datadog, AWS." },
  { period: "2018 — 2022", role: "IT Operations Manager · Swapoolabs", detail: "DevOps and ITSM for a fintech blockchain platform on AWS. ISO 27001-aligned." },
  { period: "2013 — 2018", role: "RMG Operations Lead · Macquarie", detail: "Trained in Sydney. Risk applications across APAC, EMEA, Americas." },
  { period: "2008 — 2013", role: "Lead Designer · Navitaire-Accenture", detail: "Off-shore in Minneapolis. Led the IATA Simplified Interline Settlement project." },
];

const processSteps = [
  { n: "01", title: "Discovery call", body: "15-minute Zoom or Viber. Tell me about your business, customers, and goals." },
  { n: "02", title: "I build it", body: "Within days you get a live URL. Working site. Real content. Real-device tested." },
  { n: "03", title: "You review", body: "Test it on your phone, share with your team. Two free revision rounds included." },
  { n: "04", title: "Pay & launch", body: "Only when you're happy. Site goes live on your domain. I keep it running." },
];

const faqs = [
  { q: "What if I don't like the website you build?", a: "You owe me nothing. That's the whole point — I take the risk so you don't have to. Two free revision rounds are included; if it's still not right, we walk away as friends." },
  { q: "How long until my website is live?", a: "Most landing pages and small-business sites are live for review within 5–7 business days from the discovery call. Mobile apps and complex e-commerce take 2–4 weeks." },
  { q: "Do I own the website?", a: "The domain and content are 100% yours. Hosting and the codebase are managed by me as part of the subscription — that's how I keep monthly costs low and reliability high." },
  { q: "Can you build mobile apps too?", a: "Yes. iOS and Android apps are included in the Growth Partner plan. I build cross-platform with React Native so updates are fast and your costs stay low." },
  { q: "What kind of AI features can you add?", a: "Customer chatbots that book appointments, AI search across your products, automated content drafting, smart lead-qualification forms, image generation for marketing, and more. We'll scope what makes sense for your business." },
  { q: "Can I cancel?", a: "Anytime, no questions asked. I'll export your content and help you transition. No lock-in contracts." },
];

const tickerItems = [
  "Built like enterprise software",
  "Priced for small business",
  "See it before you pay",
  "Manila · BGC, Taguig",
  "18+ years in software",
  "AWS · Kubernetes · React Native",
];

export default function HomePage() {
  return (
    <>
      {/* Atmosphere overlays */}
      <div className="grain" aria-hidden />

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-ink/65 border-b border-rule">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-accent-bright to-accent text-ink font-black grid place-items-center shadow-[0_8px_24px_-8px_rgba(255,122,61,0.6)] group-hover:rotate-[-6deg] transition-transform">
              A
              <span className="absolute -inset-1 rounded-xl bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </span>
            <span className="display text-xl">
              Apostol<span className="text-accent">.dev</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-9 text-sm text-paper-soft">
            <a href="#services" className="hover:text-paper transition">Services</a>
            <a href="#why" className="hover:text-paper transition">Practice</a>
            <a href="#pricing" className="hover:text-paper transition">Pricing</a>
            <a href="#process" className="hover:text-paper transition">Process</a>
          </div>
          <a href="#contact" className="btn btn-primary text-sm !py-2.5 !px-5">
            Get a free mockup
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="aurora" aria-hidden />
        <div className="absolute inset-0 dotgrid opacity-60 mask-radial-fade" aria-hidden style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
        }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-rule-strong bg-ink-2/60 text-xs font-medium mb-9 rise rise-1">
            <span className="relative w-2 h-2 rounded-full bg-accent dot-pulse" />
            <span className="text-paper-soft">3 spots open · May 2026</span>
          </div>

          <h1 className="display text-warm-wash rise rise-2 text-[14vw] md:text-[10.5vw] lg:text-[140px] mb-10 max-w-6xl">
            Websites &amp; mobile apps that grow Philippine businesses<span className="text-accent" style={{ WebkitTextFillColor: "currentColor" }}>.</span>
          </h1>

          <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-end mb-20">
            <p className="md:col-span-7 text-lg md:text-2xl text-paper-soft leading-snug max-w-2xl rise rise-4">
              I build fast, reliable, conversion-focused digital products for SMEs in the Philippines —
              with one unusual rule: <span className="text-paper">you see the working site before you pay a single peso.</span>
            </p>

            <div className="md:col-span-5 flex flex-col sm:flex-row gap-3 rise rise-5">
              <a href="#contact" className="btn btn-primary">
                Build my website
                <span aria-hidden>→</span>
              </a>
              <a href="#pricing" className="btn btn-ghost">
                See pricing
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-rule-strong">
            <Stat value="18+" label="Years in software" />
            <Stat value="100%" label="No-pay-until-you-see-it" />
            <Stat value="<1.5s" label="Avg page-load target" />
            <Stat value="24/7" label="Monitoring & uptime" />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="relative border-y border-rule overflow-hidden bg-ink-2/40">
        <div className="flex marquee whitespace-nowrap py-4">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="eyebrow flex items-center gap-8 px-8 !text-paper-soft">
              <svg width="14" height="14" viewBox="0 0 14 14" className="text-accent shrink-0"><path fill="currentColor" d="M7 0l1.6 5.4L14 7l-5.4 1.6L7 14l-1.6-5.4L0 7l5.4-1.6L7 0z"/></svg>
              <span>{t}</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 reveal">
            <div className="eyebrow text-accent mb-5">// What you get</div>
            <h2 className="display text-5xl md:text-7xl">
              Built like <span className="squiggle">enterprise</span> software.
              <br />
              <span className="text-paper-soft">Priced for small business.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueProps.map((p) => (
              <article key={p.title} className="card p-8 reveal">
                <div className="icon-tile mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {p.icon}
                  </svg>
                </div>
                <h3 className="display text-2xl mb-2.5">{p.title}</h3>
                <p className="text-paper-soft leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="card p-10 md:p-16 relative overflow-hidden reveal">
            <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-accent/30 blur-[100px] pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-cyan/10 blur-[100px] pointer-events-none" />
            <div className="relative">
              <div className="eyebrow text-accent mb-5">// The promise</div>
              <h2 className="display text-5xl md:text-7xl mb-6 leading-[0.98]">
                See your website live <br />
                <span className="text-sunset">before you pay.</span>
              </h2>
              <p className="text-lg md:text-xl text-paper-soft leading-relaxed max-w-2xl">
                No deposits. No commitment. I build a working version of your site first — you review it on a real URL. Only when you&apos;re happy do we talk about payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section id="why" className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal md:sticky md:top-28">
              <div className="eyebrow text-accent mb-5">// Why me</div>
              <h2 className="display text-5xl md:text-7xl mb-7">
                <span className="text-sunset">18 years</span> building tech for global enterprises.
              </h2>
              <p className="text-paper-soft text-lg leading-relaxed mb-5 max-w-prose">
                I&apos;m Jose Carlo Apostol. I&apos;ve led SRE and DevOps teams at Nuskin, built fintech blockchain apps at Swapoolabs, supported global risk-management systems at Macquarie in Sydney, and shipped airline-billing software at Navitaire-Accenture in Minneapolis.
              </p>
              <p className="text-paper-soft text-lg leading-relaxed mb-8 max-w-prose">
                Now I&apos;m bringing that same engineering rigor — observability, CI/CD, cloud architecture, security — to Filipino SMEs at small-business prices.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS Solutions Architect", "ITIL v3", "Lean Six Sigma", "Kubernetes CKA", "ECE Licensed", "UST Engineering"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-ink-2 border border-rule text-xs font-mono text-paper-soft">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {experience.map((e, i) => (
                <article key={e.role} className="card p-6 reveal" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="eyebrow text-accent mb-2">{e.period}</div>
                  <div className="display text-xl mb-1.5">{e.role}</div>
                  <div className="text-paper-soft text-sm leading-relaxed">{e.detail}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="eyebrow text-accent mb-5">// Simple pricing</div>
            <h2 className="display text-5xl md:text-7xl mb-5">Two plans. <span className="text-sunset">No surprises.</span></h2>
            <p className="text-paper-soft text-lg">All prices in PHP. Cancel anytime. Build first, pay only when you love it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <article className="card p-10 reveal">
              <div className="eyebrow mb-3">Subscription</div>
              <h3 className="display text-3xl mb-5">Website Subscription</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="display text-6xl">₱1,500</span>
                <span className="text-paper-soft">/ month</span>
              </div>
              <p className="text-paper-soft mb-9">Perfect for businesses launching online or replacing a tired website.</p>
              <ul className="space-y-3 mb-10">
                {["Custom-designed website, mobile-first", "SEO setup & schema markup", "Hosting, SSL & global CDN included", "Up to 2 small content updates per month", "Uptime monitoring & automated backups", "Built first — pay only when you approve"].map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <Check />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-ghost w-full">Get started</a>
            </article>

            <article className="card card-feature p-10 relative reveal">
              <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-to-r from-accent-bright to-accent text-ink text-xs font-bold uppercase tracking-wider">
                Most popular
              </div>
              <div className="eyebrow text-accent mb-3">Retainer & Support</div>
              <h3 className="display text-3xl mb-5">Growth Partner</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="display text-6xl text-sunset">₱5,000</span>
                <span className="text-paper-soft">/ month</span>
              </div>
              <p className="text-paper-soft mb-9">For businesses that want their website to actively grow revenue.</p>
              <ul className="space-y-3 mb-10">
                {["Everything in Subscription", "Priority support — same-day response", "Unlimited content updates", "Mobile app development included", "AI features: chatbot, smart search, automations", "Monthly performance & SEO reports", "A/B testing & conversion optimization", "24/7 monitoring & incident response"].map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <Check />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary w-full">Become a partner</a>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 reveal">
            <div className="eyebrow text-accent mb-5">// How it works</div>
            <h2 className="display text-5xl md:text-7xl">From conversation to live site, <span className="text-sunset">in days.</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {processSteps.map((s, i) => (
              <div key={s.n} className="card p-7 reveal" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="display text-5xl text-accent mb-4 leading-none">{s.n}</div>
                <h3 className="display text-xl mb-2">{s.title}</h3>
                <p className="text-paper-soft text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <div className="eyebrow text-accent mb-5">// FAQ</div>
            <h2 className="display text-5xl md:text-7xl">Common <span className="text-sunset">questions.</span></h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.q} className="card group p-6 reveal" style={{ animationDelay: `${i * 60}ms` }}>
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg list-none gap-6">
                  <span>{f.q}</span>
                  <span className="text-accent text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-paper-soft mt-4 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="eyebrow text-accent mb-5">// Correspondence</div>
            <h2 className="display text-5xl md:text-7xl mb-5">
              Let&apos;s build something that <span className="text-sunset">moves the needle.</span>
            </h2>
            <p className="text-paper-soft text-lg max-w-xl mx-auto">
              A 15-minute call. No sales pitch. We&apos;ll figure out if it&apos;s a fit.
            </p>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>

          <div className="mt-12 pt-8 border-t border-rule grid sm:grid-cols-3 gap-4 text-sm text-center text-paper-soft">
            <a href="mailto:josecarlo.apostol@gmail.com" className="link-grow">josecarlo.apostol@gmail.com</a>
            <a href="https://wa.me/639178129809" className="link-grow">+63 917 812 9809</a>
            <span>BGC, Taguig City</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-rule py-14 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-paper-mute">
          <div className="flex items-center gap-2.5 font-semibold text-paper">
            <span className="w-7 h-7 rounded-md bg-gradient-to-br from-accent-bright to-accent text-ink font-black grid place-items-center text-xs">A</span>
            Apostol<span className="text-accent">.dev</span>
          </div>
          <div className="eyebrow">© 2026 Jose Carlo Apostol · Built in the Philippines</div>
        </div>
      </footer>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="reveal">
      <div className="display text-4xl md:text-5xl text-sunset">{value}</div>
      <div className="text-sm text-paper-soft mt-2">{label}</div>
    </div>
  );
}

function Check() {
  return (
    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
