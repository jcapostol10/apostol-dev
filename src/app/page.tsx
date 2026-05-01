import { ContactForm } from "./contact-form";

const valueProps = [
  {
    no: "i.",
    title: "SEO that ranks",
    body: "Schema markup, semantic HTML, and Core Web Vitals tuned to win local search in your category.",
  },
  {
    no: "ii.",
    title: "Conversion-led",
    body: "Every section earns its place. Friction-free forms and funnel patterns proven to turn visitors into customers.",
  },
  {
    no: "iii.",
    title: "Blazing speed",
    body: "Sub-1.5s loads on 4G. Edge-deployed, image-optimized, lighthouse-audited before you ever see it.",
  },
  {
    no: "iv.",
    title: "Reliable by default",
    body: "Uptime monitoring, automated backups, and incident response — borrowed from enterprise SRE playbooks.",
  },
  {
    no: "v.",
    title: "Mobile-first",
    body: "Designed for the 80% of Filipino traffic on phones. Pixel-perfect from 320px to 4K.",
  },
  {
    no: "vi.",
    title: "AI-powered",
    body: "Smart chatbots, AI search, content generation, and intelligent automation — same tech as the big players.",
  },
];

const experience = [
  {
    period: "2023 — Present",
    role: "Observability & SRE Manager",
    company: "Nuskin",
    detail: "End-to-end visibility for global mobile and web apps. Splunk, Datadog, AWS.",
  },
  {
    period: "2018 — 2022",
    role: "IT Operations Manager",
    company: "Swapoolabs",
    detail: "DevOps and ITSM for a fintech blockchain platform on AWS. ISO 27001-aligned.",
  },
  {
    period: "2013 — 2018",
    role: "RMG Operations Lead",
    company: "Macquarie",
    detail: "Trained in Sydney. Risk applications across APAC, EMEA, Americas.",
  },
  {
    period: "2008 — 2013",
    role: "Lead Designer",
    company: "Navitaire-Accenture",
    detail: "Off-shore in Minneapolis. Led the IATA Simplified Interline Settlement project.",
  },
];

const processSteps = [
  { n: "01", title: "Discovery call", body: "15 minutes on Zoom or Viber. Tell me about your business, customers, and goals." },
  { n: "02", title: "I build it", body: "Within days you get a live URL. Working site. Real content. Real-device tested." },
  { n: "03", title: "You review", body: "Test it on your phone, share with your team. Two free revision rounds included." },
  { n: "04", title: "Pay & launch", body: "Only when you're happy. Site goes live on your domain. I keep it running." },
];

const faqs = [
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
      {/* MASTHEAD */}
      <header className="relative z-10 border-b border-rule">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="display text-2xl">Apostol</span>
            <span className="display italic text-2xl text-accent">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 eyebrow">
            <a href="#services" className="hover:text-ink transition">Services</a>
            <a href="#why" className="hover:text-ink transition">Practice</a>
            <a href="#pricing" className="hover:text-ink transition">Rates</a>
            <a href="#process" className="hover:text-ink transition">Process</a>
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>
        </div>
        {/* meta strip */}
        <div className="border-t border-rule">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-2 flex flex-wrap items-center justify-between gap-3 eyebrow">
            <span>Vol. I — Issue 01</span>
            <span className="hidden sm:inline">A studio practice, not an agency</span>
            <span>Manila · BGC, Taguig</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-2 md:pt-3">
              <div className="eyebrow rise rise-1">
                <span className="inline-block w-2 h-2 rounded-full bg-accent align-middle mr-2"></span>
                3 spots · May 2026
              </div>
            </div>
            <div className="md:col-span-10">
              <h1 className="display text-[14vw] md:text-[10.5vw] lg:text-[140px] mb-10 rise rise-2">
                Websites &amp; apps,
                <br />
                <em>built for</em> Philippine
                <br />
                businesses<span className="text-accent">.</span>
              </h1>

              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
                <p className="md:col-span-7 text-xl md:text-2xl text-ink-soft leading-snug max-w-[42ch] rise rise-3" style={{ fontFamily: "var(--font-display)" }}>
                  A small Manila studio building fast, reliable, conversion-focused
                  digital products for SMEs — with one unusual rule: <em className="text-accent">you see the working site before you pay a peso.</em>
                </p>

                <div className="md:col-span-5 flex flex-col sm:flex-row gap-3 rise rise-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-ink text-paper font-medium hover:bg-accent transition-colors"
                  >
                    Start a project
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
                  >
                    See rates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div className="border-y border-rule overflow-hidden bg-paper-tint/40">
          <div className="flex marquee-track whitespace-nowrap py-3">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
              <span key={i} className="eyebrow flex items-center gap-8 px-6">
                <span className="text-accent">✦</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>

        {/* INDEX BAR */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <Stat numeral="18" suffix="+" label="years in software" />
            <Stat numeral="100" suffix="%" label="no-pay-until-you-see-it" />
            <Stat numeral="<1.5" suffix="s" label="page-load target" />
            <Stat numeral="24" suffix="/7" label="monitoring &amp; uptime" />
          </div>
        </div>
      </section>

      {/* SERVICES — editorial list */}
      <section id="services" className="relative z-10 border-t border-rule">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-14">
            <div className="md:col-span-3">
              <p className="eyebrow mb-3">§ I</p>
              <p className="eyebrow">The practice</p>
            </div>
            <h2 className="md:col-span-9 display text-5xl md:text-7xl lg:text-8xl">
              Built like enterprise<br />software, <em>priced</em> for small<br />business.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {valueProps.map((p) => (
              <article key={p.title} className="editorial-card">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="numeral text-2xl">{p.no}</span>
                  <h3 className="display text-3xl">{p.title}</h3>
                </div>
                <p className="text-ink-soft leading-relaxed max-w-[44ch]">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE — pull quote */}
      <section className="relative z-10 border-t border-rule bg-paper-tint/40">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <p className="eyebrow mb-8">§ II — The promise</p>
          <blockquote className="display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            “See it live<span className="text-accent">,</span><br />
            <em>then</em> decide.”
          </blockquote>
          <p className="mt-10 text-lg md:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
            No deposits. No commitment. I build a working version of your site first — you review it on a real URL. Only when you&apos;re happy do we talk about payment.
          </p>
        </div>
      </section>

      {/* WHY ME — editorial split */}
      <section id="why" className="relative z-10 border-t border-rule">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-14">
            <div className="md:col-span-3">
              <p className="eyebrow mb-3">§ III</p>
              <p className="eyebrow">The author</p>
            </div>
            <h2 className="md:col-span-9 display text-5xl md:text-7xl lg:text-8xl">
              <em>Eighteen years</em> building<br />tech for global enterprises.
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-6">
              <p className="drop-cap text-lg text-ink-soft leading-relaxed mb-5 max-w-[55ch]">
                I&apos;m Jose Carlo Apostol. I&apos;ve led SRE and DevOps teams at Nuskin, built
                fintech blockchain apps at Swapoolabs, supported global risk-management
                systems at Macquarie in Sydney, and shipped airline-billing software at
                Navitaire-Accenture in Minneapolis.
              </p>
              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-[55ch]">
                Now I&apos;m bringing that same engineering rigor — observability, CI/CD,
                cloud architecture, security — to Filipino SMEs at small-business prices.
              </p>
              <div className="flex flex-wrap gap-x-2 gap-y-1 eyebrow">
                {[
                  "AWS Solutions Architect",
                  "ITIL v3",
                  "Lean Six Sigma",
                  "Kubernetes CKA",
                  "ECE Licensed",
                  "UST Engineering",
                ].map((tag, i, arr) => (
                  <span key={tag} className="flex items-center gap-2">
                    <span>{tag}</span>
                    {i < arr.length - 1 && <span className="text-accent">·</span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-6">
              <ol className="space-y-6">
                {experience.map((e) => (
                  <li key={e.role} className="grid grid-cols-12 gap-4 pb-6 border-b border-rule last:border-0">
                    <div className="col-span-4 eyebrow pt-1">{e.period}</div>
                    <div className="col-span-8">
                      <div className="display text-2xl leading-tight">{e.role}</div>
                      <div className="text-ink-soft text-sm mt-1">{e.company}</div>
                      <div className="text-ink-muted text-sm mt-2">{e.detail}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative z-10 border-t border-rule bg-paper-tint/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-14">
            <div className="md:col-span-3">
              <p className="eyebrow mb-3">§ IV</p>
              <p className="eyebrow">The rates</p>
            </div>
            <h2 className="md:col-span-9 display text-5xl md:text-7xl lg:text-8xl">
              Two plans. <em>No</em> surprises.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule max-w-5xl mx-auto">
            {/* Subscription */}
            <article className="bg-paper p-10 md:p-12">
              <div className="eyebrow mb-6">Subscription</div>
              <h3 className="display text-4xl mb-4">Website Subscription</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="display text-7xl">₱1,500</span>
                <span className="eyebrow">/ month</span>
              </div>
              <p className="text-ink-soft mb-8 max-w-[40ch]">
                For businesses launching online or replacing a tired website.
              </p>
              <ul className="space-y-3 mb-10 text-ink-soft">
                {[
                  "Custom-designed website, mobile-first",
                  "SEO setup &amp; schema markup",
                  "Hosting, SSL &amp; global CDN",
                  "Up to 2 small content updates / month",
                  "Uptime monitoring &amp; backups",
                  "Built first — pay only when you approve",
                ].map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <span className="text-accent mt-1">→</span>
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full text-center px-6 py-4 border border-ink hover:bg-ink hover:text-paper transition-colors font-medium">
                Get started
              </a>
            </article>

            {/* Retainer */}
            <article className="bg-ink text-paper p-10 md:p-12 relative">
              <div className="absolute top-0 right-0 px-4 py-1 bg-accent text-paper eyebrow">
                Most popular
              </div>
              <div className="eyebrow text-accent mb-6">Retainer &amp; Support</div>
              <h3 className="display text-4xl mb-4">Growth Partner</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="display text-7xl">₱5,000</span>
                <span className="eyebrow !text-paper/60">/ month</span>
              </div>
              <p className="text-paper/70 mb-8 max-w-[40ch]">
                For businesses that want their website to actively grow revenue.
              </p>
              <ul className="space-y-3 mb-10 text-paper/80">
                {[
                  "Everything in Subscription",
                  "Priority support — same-day response",
                  "Unlimited content updates",
                  "Mobile app development included",
                  "AI features: chatbot, smart search, automations",
                  "Monthly performance &amp; SEO reports",
                  "A/B testing &amp; conversion optimization",
                  "24/7 monitoring &amp; incident response",
                ].map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <span className="text-accent mt-1">→</span>
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full text-center px-6 py-4 bg-accent text-paper hover:bg-accent-deep transition-colors font-medium">
                Become a partner
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative z-10 border-t border-rule">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-14">
            <div className="md:col-span-3">
              <p className="eyebrow mb-3">§ V</p>
              <p className="eyebrow">The process</p>
            </div>
            <h2 className="md:col-span-9 display text-5xl md:text-7xl lg:text-8xl">
              From conversation<br />to live site, <em>in days.</em>
            </h2>
          </div>

          <ol className="grid md:grid-cols-4 gap-x-10 gap-y-12">
            {processSteps.map((s) => (
              <li key={s.n} className="border-t border-ink pt-5">
                <div className="numeral text-6xl leading-none mb-4">{s.n}</div>
                <h3 className="display text-2xl mb-2">{s.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-t border-rule bg-paper-tint/40">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
            <div className="md:col-span-3">
              <p className="eyebrow mb-3">§ VI</p>
              <p className="eyebrow">Marginalia</p>
            </div>
            <h2 className="md:col-span-9 display text-5xl md:text-7xl lg:text-8xl">
              Common <em>questions.</em>
            </h2>
          </div>

          <div className="border-t border-ink">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-rule">
                <summary className="flex justify-between items-baseline cursor-pointer list-none py-5 gap-6">
                  <span className="display text-2xl md:text-3xl flex-1">{f.q}</span>
                  <span className="numeral text-3xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-6 text-ink-soft leading-relaxed max-w-[60ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 border-t border-rule">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="text-center mb-12">
            <p className="eyebrow mb-6">§ VII — Correspondence</p>
            <h2 className="display text-5xl md:text-7xl lg:text-8xl mb-6">
              Let&apos;s build something<br /><em>that moves the needle.</em>
            </h2>
            <p className="text-lg text-ink-soft max-w-xl mx-auto">
              A 15-minute call. No sales pitch. We&apos;ll figure out if it&apos;s a fit.
            </p>
          </div>

          <ContactForm />

          <div className="mt-12 pt-8 border-t border-rule grid sm:grid-cols-3 gap-4 text-sm text-center">
            <a href="mailto:josecarlo.apostol@gmail.com" className="link-underline">
              josecarlo.apostol@gmail.com
            </a>
            <a href="https://wa.me/639178129809" className="link-underline">
              +63 917 812 9809
            </a>
            <span className="text-ink-muted">BGC, Taguig City</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-ink bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <div className="display text-6xl md:text-8xl">
                Apostol<em className="text-accent">.dev</em>
              </div>
              <p className="mt-4 text-paper/60 max-w-md">
                A studio practice. Engineered websites and mobile apps for Philippine businesses.
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="eyebrow !text-paper/50 mb-4">Studio</p>
              <ul className="space-y-2 text-paper/80">
                <li><a href="#services" className="link-underline">Services</a></li>
                <li><a href="#pricing" className="link-underline">Rates</a></li>
                <li><a href="#process" className="link-underline">Process</a></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <p className="eyebrow !text-paper/50 mb-4">Correspondence</p>
              <ul className="space-y-2 text-paper/80">
                <li><a href="mailto:josecarlo.apostol@gmail.com" className="link-underline">Email</a></li>
                <li><a href="https://wa.me/639178129809" className="link-underline">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-3 eyebrow !text-paper/50">
            <span>© 2026 Jose Carlo Apostol</span>
            <span>Set in Instrument Serif &amp; Geist · Built in the Philippines</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function Stat({ numeral, suffix, label }: { numeral: string; suffix: string; label: string }) {
  return (
    <div className="border-t border-ink pt-4">
      <div className="flex items-baseline gap-1">
        <span className="display text-6xl md:text-7xl leading-none">{numeral}</span>
        <span className="display italic text-3xl text-accent">{suffix}</span>
      </div>
      <div className="eyebrow mt-3" dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
}
