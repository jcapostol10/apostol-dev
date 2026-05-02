import { ContactForm } from "./contact-form";

const services = [
  {
    code: "SEO-01",
    title: "Search-engine performance",
    body: "Schema markup, semantic HTML, and Core Web Vitals tuned to win local search in your category.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l4 4" />
      </>
    ),
  },
  {
    code: "CVR-02",
    title: "Conversion-led design",
    body: "Every section earns its place. Friction-free forms and funnel patterns that turn visitors into customers.",
    icon: (
      <>
        <path d="M3 17l5-5 4 4 7-9" />
        <path d="M14 7h5v5" />
      </>
    ),
  },
  {
    code: "PRF-03",
    title: "Sub-second load times",
    body: "Sub-1.5s loads on 4G. Edge-deployed, image-optimized, and lighthouse-audited before you ever see it.",
    icon: (
      <>
        <path d="M12 3l-7 9h6l-1 9 8-11h-6l1-7z" />
      </>
    ),
  },
  {
    code: "REL-04",
    title: "Reliability by default",
    body: "Uptime monitoring, automated backups, and incident response — borrowed from enterprise SRE playbooks.",
    icon: (
      <>
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    code: "MBL-05",
    title: "Mobile-first delivery",
    body: "Designed for the 80% of Filipino traffic on phones. Pixel-perfect from 320px to 4K.",
    icon: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    code: "AI-06",
    title: "AI-augmented features",
    body: "Smart chatbots, AI search, content generation, and intelligent automation — same tech as the big players.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
      </>
    ),
  },
];

const careerLog = [
  { hash: "a4f9c1e", date: "2023-01", role: "Observability & SRE Manager", at: "Nuskin", note: "Datadog → Splunk migration. Logs, metrics, trace, RUM." },
  { hash: "8b2d731", date: "2018-05", role: "IT Operations Manager", at: "Swapoolabs", note: "Fintech / blockchain on AWS. ISO 27001-aligned." },
  { hash: "d31e08a", date: "2017-06", role: "RMG Operations Lead", at: "Macquarie", note: "Risk applications · APAC, EMEA, Americas." },
  { hash: "6c5a92f", date: "2013-02", role: "Senior IT Operations Analyst", at: "Macquarie · Sydney", note: "Off-shore. Market & credit risk." },
  { hash: "1f0e4b8", date: "2010-09", role: "Lead Designer", at: "Navitaire-Accenture", note: "IATA Simplified Interline Settlement. Off-shore in Minneapolis." },
  { hash: "0a3c812", date: "2008-03", role: "Software Engineer", at: "Navitaire-Accenture", note: "Passenger revenue accounting." },
];

const processSteps = [
  { n: "01", title: "Discovery", body: "15-minute Zoom or Viber. Goals, customers, what success looks like." },
  { n: "02", title: "Build", body: "Within days you get a live URL. Working site. Real content. Real-device tested." },
  { n: "03", title: "Review", body: "Test it on your phone, share with your team. Two free revision rounds included." },
  { n: "04", title: "Launch", body: "Pay only when you're happy. Site goes live on your domain. I keep it running." },
];

const faqs = [
  { q: "What if I don't like the website you build?", a: "You owe me nothing. That's the whole point — I take the risk so you don't have to. Two free revision rounds are included; if it's still not right, we walk away as friends." },
  { q: "How long until my website is live?", a: "Most landing pages and small-business sites are live for review within 5–7 business days from the discovery call. Mobile apps and complex e-commerce take 2–4 weeks." },
  { q: "Do I own the website?", a: "The domain and content are 100% yours. Hosting and the codebase are managed by me as part of the subscription — that's how I keep monthly costs low and reliability high." },
  { q: "Can you build mobile apps too?", a: "Yes. iOS and Android apps are included in the Growth Partner plan. I build cross-platform with React Native so updates are fast and your costs stay low." },
  { q: "What kind of AI features can you add?", a: "Customer chatbots that book appointments, AI search across your products, automated content drafting, smart lead-qualification forms, image generation for marketing, and more. We'll scope what makes sense for your business." },
  { q: "Can I cancel?", a: "Anytime, no questions asked. I'll export your content and help you transition. No lock-in contracts." },
];

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const tickerItems = [
  {
    text: "Built like enterprise software",
    icon: (
      <svg {...iconProps}>
        <rect x="3.5" y="4.5" width="17" height="6" rx="1.2" />
        <rect x="3.5" y="13.5" width="17" height="6" rx="1.2" />
        <circle cx="7" cy="7.5" r="0.7" fill="currentColor" />
        <circle cx="7" cy="16.5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    text: "Priced for small business",
    icon: (
      <svg {...iconProps}>
        <path d="M20.6 12.4 12.4 20.6a1.7 1.7 0 0 1-2.4 0L3.4 14a1.7 1.7 0 0 1-.5-1.2V5a2.1 2.1 0 0 1 2.1-2.1h7.8c.5 0 .9.2 1.2.5l6.6 6.6a1.7 1.7 0 0 1 0 2.4Z" />
        <circle cx="8.2" cy="8.2" r="1.3" />
      </svg>
    ),
  },
  {
    text: "See it before you pay",
    icon: (
      <svg {...iconProps}>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    text: "18+ years software engineering",
    icon: (
      <svg {...iconProps}>
        <path d="M9 7 4 12l5 5" />
        <path d="m15 7 5 5-5 5" />
      </svg>
    ),
  },
  {
    text: "Web and mobile integrated",
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="4" width="13" height="10" rx="1.2" />
        <path d="M5.5 17h7" />
        <rect x="14.5" y="9" width="7" height="11" rx="1.2" />
      </svg>
    ),
  },
];

const stack = [
  "AWS Solutions Architect",
  "Kubernetes (CKA)",
  "Datadog · Splunk",
  "ITIL v3",
  "Lean Six Sigma",
  "ECE Licensed",
  "UST Engineering",
];

export default function HomePage() {
  return (
    <>
      <div className="grain" aria-hidden />

      {/* TOP BAR */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-rule">
        <div className="max-w-[1240px] mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Logo className="w-6 h-6 text-accent" />
            <span className="font-semibold tracking-tight text-sm">apostol.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-1 text-sm">
            {[
              ["Practice", "#services"],
              ["Bio", "#bio"],
              ["Pricing", "#pricing"],
              ["Process", "#process"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="px-3 py-1.5 rounded-md text-text-2 hover:text-text-1 hover:bg-white/[0.03] transition">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex pill !text-text-2">
              <span className="pill-dot" /> Available
            </span>
            <a href="#contact" className="btn btn-primary !py-2 !px-4 !text-sm">
              Start <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="aurora-soft" aria-hidden />
        <div className="absolute inset-0 dot-grid fade-mask opacity-80" aria-hidden />

        <div className="relative max-w-[1240px] mx-auto px-6">
          <div className="eyebrow flex flex-wrap items-center gap-x-5 gap-y-3 mb-7 rise rise-1 !text-[0.95rem] !tracking-[0.1em]">
            <span className="text-accent font-semibold">[ HERO ]</span>
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-accent" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 14" />
              </svg>
              18+ Years Software Engineering
            </span>
            <span className="hidden sm:inline text-text-3/40">·</span>
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-accent" aria-hidden>
                <rect x="2.5" y="4" width="13" height="10" rx="1.2" />
                <path d="M5.5 17h7" />
                <rect x="14.5" y="9" width="7" height="11" rx="1.2" />
              </svg>
              Web &amp; Mobile Integrated
            </span>
            <span className="hidden sm:inline text-text-3/40">·</span>
            <span className="inline-flex items-center gap-2 text-accent bg-accent/10 px-2.5 py-1 rounded">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
              </span>
              Now accepting 3 clients
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="display text-warm-wash text-[12.5vw] sm:text-[9vw] lg:text-[7.4vw] xl:text-[112px] mb-8 rise rise-2">
                Websites &amp; mobile apps that grow Philippine businesses<span className="text-accent" style={{ WebkitTextFillColor: "currentColor" }}>.</span>
              </h1>

              <p className="text-lg md:text-xl text-text-2 leading-snug max-w-2xl mb-9 rise rise-3">
                Engineered by an SRE with 18 years at global enterprises — now building for SMEs at small-business prices.{" "}
                <span className="text-text-1">You see the working site before you pay a single peso.</span>
              </p>

              <div className="flex flex-wrap gap-3 rise rise-4">
                <a href="#contact" className="btn btn-primary">Start a project <span aria-hidden>→</span></a>
                <a href="#pricing" className="btn btn-ghost">See pricing</a>
              </div>

            </div>

            {/* ORBITAL */}
            <aside className="lg:col-span-5 rise rise-4 hidden lg:block">
              <div className="relative lg:scale-[1.18] lg:-mr-16 xl:-mr-24 lg:-mt-10 lg:translate-x-6 origin-center">
                <Orbital />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative border-y border-rule overflow-hidden bg-surface-1/50">
        <div className="flex marquee whitespace-nowrap py-5">
          {[...Array(3)].flatMap((_, n) =>
            tickerItems.map((item, i) => (
              <span key={`${n}-${i}`} className="flex items-center gap-3.5 px-9 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-text-2">
                <span className="text-accent shrink-0 flex items-center">{item.icon}</span>
                <span>{item.text}</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* HEADLINE STATS */}
      <section className="relative">
        <div className="max-w-[1240px] mx-auto px-6 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-rule rounded-xl overflow-hidden border border-rule">
            <Stat value="18" suffix="yrs" label="In software, end-to-end" />
            <Stat value="100" suffix="%" label="Value first, pay later" accent />
            <Stat value="<1.5" suffix="s" label="Page-load target on 4G" />
            <Stat value="24/7" suffix="" label="Monitoring &amp; uptime" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative">
        <div className="max-w-[1240px] mx-auto px-6 py-24">
          <SectionHeader id="SVC-01" eyebrow="Practice" title={<>Built like enterprise software, <span className="text-text-3">priced for small business.</span></>} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule rounded-xl overflow-hidden border border-rule mt-12">
            {services.map((s) => (
              <article key={s.code} className="bg-bg p-7 hover:bg-surface-1 transition-colors group">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-accent">
                    <svg viewBox="0 0 24 24" className="icon-line">
                      {s.icon}
                    </svg>
                  </div>
                  <span className="tag !text-text-3 group-hover:text-text-2 transition-colors">[{s.code}]</span>
                </div>
                <h3 className="display text-2xl mb-2 tracking-tight">{s.title}</h3>
                <p className="text-text-2 leading-relaxed text-sm">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BIO — git log style */}
      <section id="bio" className="relative">
        <div className="max-w-[1240px] mx-auto px-6 py-24">
          <SectionHeader id="BIO-02" eyebrow="The author" title={<>18 years building tech for global enterprises.</>} />

          <div className="grid lg:grid-cols-12 gap-10 mt-12">
            <div className="lg:col-span-5 space-y-6 reveal">
              <p className="text-lg text-text-2 leading-relaxed">
                I&apos;m Jose Carlo Apostol. I&apos;ve led SRE and DevOps teams at Nuskin, built fintech blockchain apps at Swapoolabs, supported global risk-management systems at Macquarie in Sydney, and shipped airline-billing software at Navitaire-Accenture in Minneapolis.
              </p>
              <p className="text-lg text-text-2 leading-relaxed">
                Now I&apos;m bringing that same engineering rigor — observability, CI/CD, cloud architecture, security — to Filipino SMEs at small-business prices.
              </p>
              <div className="pt-2">
                <div className="eyebrow mb-3">Stack &amp; certifications</div>
                <div className="flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="terminal overflow-hidden">
                <div className="terminal-bar">
                  <span className="terminal-dots"><span /><span /><span /></span>
                  <span>git log --author=apostol --oneline · career.txt</span>
                </div>
                <div className="divide-y divide-rule">
                  {careerLog.map((c) => (
                    <div key={c.hash} className="px-4 sm:px-6 py-4 grid grid-cols-12 gap-3 items-baseline hover:bg-white/[0.015] transition-colors">
                      <span className="col-span-2 sm:col-span-2 text-accent text-xs">{c.hash}</span>
                      <span className="col-span-3 sm:col-span-2 text-text-3 text-xs">{c.date}</span>
                      <div className="col-span-7 sm:col-span-8">
                        <span className="text-text-1 text-sm">{c.role}</span>
                        <span className="text-text-3 text-sm"> · {c.at}</span>
                        <div className="text-text-3 text-xs mt-0.5 hidden sm:block">{c.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE — single moment */}
      <section className="relative">
        <div className="max-w-[1240px] mx-auto px-6 py-24">
          <div className="surface-flush relative overflow-hidden p-10 md:p-16">
            <div className="absolute -top-1/2 -right-1/3 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <span className="eyebrow text-accent">[ PROMISE ]</span>
                <span className="kbd">no deposit</span>
                <span className="kbd">no commitment</span>
              </div>
              <h2 className="display text-5xl md:text-7xl lg:text-8xl mb-7 leading-[0.95] max-w-4xl">
                See the working site<br />
                <span className="text-accent">before</span> you pay a peso.
              </h2>
              <p className="text-lg md:text-xl text-text-2 leading-relaxed max-w-2xl">
                I build a real version of your site first — live URL, on your real device — then we talk about payment. Two free revision rounds included. If it&apos;s still not right, we walk away as friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — spec sheets */}
      <section id="pricing" className="relative">
        <div className="max-w-[1240px] mx-auto px-6 py-24">
          <SectionHeader id="PLN-03" eyebrow="Pricing" title={<>Two plans. <span className="text-text-3">No surprises.</span></>} subtitle="All prices in PHP. Cancel anytime. Build first, pay only when you love it." />

          <div className="grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto mt-12">
            <PlanCard
              tier="Subscription"
              name="Website Subscription"
              price="₱1,500"
              cadence="/ month"
              tagline="For businesses launching online or replacing a tired website."
              specs={[
                ["Pages", "up to 8"],
                ["Mobile-first design", "✓"],
                ["SEO + schema", "✓"],
                ["Hosting + SSL + CDN", "included"],
                ["Content updates", "2 / mo"],
                ["Uptime monitoring", "24/7"],
                ["Build first, pay later", "✓"],
              ]}
              cta="Get started"
              ctaStyle="ghost"
            />
            <PlanCard
              tier="Retainer & Support"
              name="Growth Partner"
              price="₱5,000"
              cadence="/ month"
              tagline="For businesses that want their website to actively grow revenue."
              feature
              specs={[
                ["Everything in Subscription", "✓"],
                ["Mobile app development", "iOS + Android"],
                ["AI features", "chatbot · search · automations"],
                ["A/B testing & CRO", "✓"],
                ["Priority support SLA", "same-day"],
                ["Performance & SEO reports", "monthly"],
                ["Incident response", "24/7"],
                ["Content updates", "unlimited"],
              ]}
              cta="Become a partner"
              ctaStyle="primary"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative">
        <div className="max-w-[1240px] mx-auto px-6 py-24">
          <SectionHeader id="OPS-04" eyebrow="Process" title={<>From conversation to live site, <span className="text-text-3">in days.</span></>} />

          <div className="grid md:grid-cols-4 gap-px bg-rule rounded-xl overflow-hidden border border-rule mt-12">
            {processSteps.map((s, i) => (
              <div key={s.n} className="bg-bg p-7 relative">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="display text-3xl text-accent">{s.n}</span>
                  <span className="tag !text-text-3">step {i + 1}/4</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-text-2 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <SectionHeader id="FAQ-05" eyebrow="FAQ" title={<>Common <span className="text-text-3">questions.</span></>} center />

          <div className="space-y-2 mt-12">
            {faqs.map((f, i) => (
              <details key={f.q} className="surface group p-5 reveal" style={{ animationDelay: `${i * 60}ms` }}>
                <summary className="flex justify-between items-center cursor-pointer list-none gap-6">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-accent text-xl group-open:rotate-45 transition-transform shrink-0 font-mono leading-none">+</span>
                </summary>
                <p className="text-text-2 mt-3 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <SectionHeader id="CON-06" eyebrow="Correspondence" title={<>Let&apos;s build something <span className="text-text-3">that moves the needle.</span></>} subtitle="A 15-minute call. No sales pitch. We'll figure out if it's a fit." center />

          <div className="mt-12 reveal">
            <ContactForm />
          </div>

          <div className="mt-10 pt-8 border-t border-rule grid sm:grid-cols-3 gap-3 text-sm text-text-2 text-center">
            <a href="mailto:josecarlo.apostol@gmail.com" className="link-grow">josecarlo.apostol@gmail.com</a>
            <a href="https://wa.me/639178129809" className="link-grow">+63 917 812 9809</a>
            <span className="text-text-3">BGC, Taguig City</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-rule">
        <div className="max-w-[1240px] mx-auto px-6 py-10 grid sm:grid-cols-3 gap-4 items-center text-sm">
          <div className="flex items-center gap-2 font-medium">
            <Logo className="w-5 h-5 text-accent" />
            <span>apostol.dev</span>
          </div>
          <div className="text-center text-text-3 eyebrow">© 2026 · Built in PH</div>
          <div className="text-right text-text-3 font-mono text-xs flex items-center gap-2 justify-end">
            <span className="pill-dot" /> all systems operational
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─── Components ──────────────────────────────────────────────── */

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19L12 4l7 15" />
      <path d="M8 14h8" />
    </svg>
  );
}

function Diamond() {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6" className="text-accent shrink-0">
      <path d="M3 0L6 3L3 6L0 3Z" fill="currentColor" />
    </svg>
  );
}

function Stat({ value, suffix, label, accent = false }: { value: string; suffix: string; label: string; accent?: boolean }) {
  return (
    <div className="bg-bg p-7">
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className={`display text-5xl numeric ${accent ? "text-accent" : ""}`}>{value}</span>
        <span className="text-text-3 font-mono text-sm">{suffix}</span>
      </div>
      <div className="text-sm text-text-2" dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
}

function Metric({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div>
      <div className="eyebrow !text-text-3 mb-1">{label}</div>
      <div className="font-mono text-text-1 numeric font-semibold">{value}</div>
      <div className="text-[11px] text-text-3 mt-0.5">{hint}</div>
    </div>
  );
}

function Orbital() {
  // Three horizontal bands of curved arcs around a glowing sphere.
  // Each arc is built from chord subdivisions — small flat tangent panels
  // angled together to approximate a curved band. All units are cqi so the
  // composition scales with the container.
  //
  //   y  = vertical center offset (scene Z, becomes screen-up after rotateX)
  //   r  = radius from center
  //   start/span = angular position and extent (deg)
  //   height = vertical extent of the band
  //   thickness = radial thickness
  //   segments = chord count (higher = smoother curve)
  type Arc = {
    y: number;
    r: number;
    start: number;
    span: number;
    height: number;
    thickness: number;
    segments: number;
  };
  type RingId = "r4" | "r3" | "r2" | "r1";
  type Ring = { cls: RingId; arcs: Arc[] };

  // Four concentric orbits. Rotation directions alternate CW/CCW from
  // outermost (r4) to innermost (r1) — wired up via CSS animation.
  const rings: Ring[] = [
    {
      cls: "r4", // outermost — CW; four equidistant arcs (90° apart)
      arcs: [
        { y: 0, r: 50, start:  10, span: 70, height: 22, thickness: 3.4, segments: 8 },
        { y: 0, r: 50, start: 100, span: 70, height: 22, thickness: 3.4, segments: 8 },
        { y: 0, r: 50, start: 190, span: 70, height: 22, thickness: 3.4, segments: 8 },
        { y: 0, r: 50, start: 280, span: 70, height: 22, thickness: 3.4, segments: 8 },
      ],
    },
    {
      cls: "r3", // CCW; three equidistant arcs (120° apart)
      arcs: [
        { y: 0, r: 38, start:   0, span: 80, height: 19, thickness: 3.0, segments: 9 },
        { y: 0, r: 38, start: 120, span: 80, height: 19, thickness: 3.0, segments: 9 },
        { y: 0, r: 38, start: 240, span: 80, height: 19, thickness: 3.0, segments: 9 },
      ],
    },
    {
      cls: "r2", // CW; three equidistant arcs (120° apart)
      arcs: [
        { y: 0, r: 26, start:  60, span: 80, height: 14, thickness: 2.6, segments: 9 },
        { y: 0, r: 26, start: 180, span: 80, height: 14, thickness: 2.6, segments: 9 },
        { y: 0, r: 26, start: 300, span: 80, height: 14, thickness: 2.6, segments: 9 },
      ],
    },
    {
      cls: "r1", // innermost — CCW; three equidistant arcs (120° apart)
      arcs: [
        { y: 0, r: 16, start:  30, span: 75, height: 9, thickness: 2.2, segments: 8 },
        { y: 0, r: 16, start: 150, span: 75, height: 9, thickness: 2.2, segments: 8 },
        { y: 0, r: 16, start: 270, span: 75, height: 9, thickness: 2.2, segments: 8 },
      ],
    },
  ];


  return (
    <div className="orbital">
      <div className="orbital-trail t3" aria-hidden />
      <div className="orbital-trail t2" aria-hidden />
      <div className="orbital-trail t1" aria-hidden />

      <div className="orbital-scene" aria-hidden>
        {rings.map((ring) => (
          <div key={ring.cls} className={`orbital-ring ${ring.cls}`}>
            {ring.arcs.flatMap((arc, ai) => {
              const stepDeg = arc.span / arc.segments;
              const chord = 2 * arc.r * Math.sin((stepDeg * Math.PI) / 360);
              return Array.from({ length: arc.segments }).map((_, si) => {
                const angle = arc.start + stepDeg * (si + 0.5);
                return (
                  <span
                    key={`${ai}-${si}`}
                    className="orbital-seg"
                    style={{
                      ["--a" as string]: `${angle}deg`,
                      ["--r" as string]: `${arc.r}cqi`,
                      ["--y" as string]: `${arc.y}cqi`,
                      ["--w" as string]: `${chord.toFixed(3)}cqi`,
                      ["--h" as string]: `${arc.thickness}cqi`,
                      ["--d" as string]: `${arc.height}cqi`,
                    }}
                  >
                    <span className="face face-top" />
                    <span className="face face-front" />
                    <span className="face face-back" />
                    <span className="face face-right" />
                    <span className="face face-left" />
                  </span>
                );
              });
            })}
          </div>
        ))}

        <div className="orbital-halo" aria-hidden />
        <div className="orbital-sphere" aria-hidden>
          <div className="orbital-corona" />
          <div className="orbital-core" />
        </div>
      </div>
    </div>
  );
}

function Sparkline() {
  // Static-feeling sparkline with 2 layers. Subtle moving overlay for "live" feel.
  const points = "0,28 8,24 16,20 24,22 32,18 40,16 48,18 56,12 64,14 72,10 80,8 88,12 96,9 104,14 112,11 120,16 128,12 136,18 144,14";
  return (
    <div className="relative h-12 -mx-1">
      <svg viewBox="0 0 144 32" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff6a3d" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ff6a3d" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={points} fill="none" stroke="#ff6a3d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <polyline points={`${points} 144,32 0,32`} fill="url(#sg)" />
      </svg>
      <span className="absolute right-0 top-0 -translate-y-1 -translate-x-1 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,106,61,0.7)]" />
    </div>
  );
}

function SectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  center,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`reveal ${center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
      <div className={`eyebrow flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
        <span className="text-accent">[ {id} ]</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tight">{title}</h2>
      {subtitle && <p className="mt-5 text-text-2 text-lg">{subtitle}</p>}
    </div>
  );
}

function PlanCard({
  tier,
  name,
  price,
  cadence,
  tagline,
  specs,
  cta,
  ctaStyle,
  feature = false,
}: {
  tier: string;
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  specs: [string, string][];
  cta: string;
  ctaStyle: "primary" | "ghost";
  feature?: boolean;
}) {
  return (
    <article className={`${feature ? "surface-feature" : "surface"} p-8 md:p-9 relative reveal`}>
      <div className="flex items-center justify-between mb-6">
        <span className="eyebrow !text-text-2">{tier}</span>
        {feature && (
          <span className="tag text-accent flex items-center gap-1.5">
            <Diamond /> Most deployed
          </span>
        )}
      </div>
      <h3 className="display text-2xl mb-2">{name}</h3>
      <p className="text-text-2 text-sm mb-7">{tagline}</p>
      <div className="flex items-baseline gap-2 mb-8">
        <span className={`display text-5xl numeric ${feature ? "text-warm-wash" : ""}`}>{price}</span>
        <span className="text-text-3 font-mono text-sm">{cadence}</span>
      </div>
      <div className="mb-8">
        {specs.map(([k, v]) => (
          <div key={k} className="spec-row">
            <span className="key">{k}</span>
            <span className="val">{v}</span>
          </div>
        ))}
      </div>
      <a href="#contact" className={`btn ${ctaStyle === "primary" ? "btn-primary" : "btn-ghost"} w-full`}>
        {cta} <span aria-hidden>→</span>
      </a>
    </article>
  );
}
