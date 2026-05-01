import { ContactForm } from "./contact-form";

const valueProps = [
  {
    title: "SEO that ranks",
    body: "Schema markup, semantic HTML, fast Core Web Vitals, and content structure built to win Google in your local market.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
  },
  {
    title: "Conversion-focused",
    body: "Every section earns its place. Clear CTAs, friction-free forms, and proven funnel patterns that turn visitors into customers.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: "Blazing performance",
    body: "Sub-1.5s loads on 4G. Edge-deployed, image-optimized, and lighthouse-audited before you ever see it.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
  },
  {
    title: "High reliability",
    body: "Uptime monitoring, observability, automated backups, and incident response — borrowed straight from enterprise SRE playbooks.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: "Mobile responsive",
    body: "Designed mobile-first because most Filipino traffic is on phones. Pixel-perfect from 320px to 4K.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    ),
  },
  {
    title: "AI-powered",
    body: "Smart chatbots, AI search, content generation, and intelligent automation built right into your site — same tech as the big players.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
];

const experience = [
  {
    period: "2023 — Present",
    role: "Observability & SRE Manager · Nuskin",
    detail: "End-to-end visibility for global mobile and web apps. Splunk, Datadog, AWS.",
  },
  {
    period: "2018 — 2022",
    role: "IT Operations Manager · Swapoolabs",
    detail: "DevOps and ITSM for a fintech blockchain platform on AWS. ISO27001-aligned.",
  },
  {
    period: "2013 — 2018",
    role: "RMG Operations Lead · Macquarie",
    detail: "Trained in Sydney. Risk applications across APAC, EMEA, Americas.",
  },
  {
    period: "2008 — 2013",
    role: "Lead Designer · Navitaire-Accenture",
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
    a: "You owe me nothing. That's the whole point. I take the risk so you don't have to. Two free revision rounds are included — if it's still not right, we walk away as friends.",
  },
  {
    q: "How long until my website is live?",
    a: "Most landing pages and small-business sites are live for review within 5-7 business days from the discovery call. Mobile apps and complex e-commerce take 2-4 weeks.",
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

export default function HomePage() {
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-ink font-black">A</span>
            <span>
              Apostol<span className="text-accent">.dev</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#why" className="hover:text-white transition">Why Me</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#process" className="hover:text-white transition">Process</a>
          </div>
          <a href="#contact" className="px-5 py-2 rounded-full bg-accent text-ink font-semibold text-sm hover:bg-accent/90 transition">
            Get a Free Mockup
          </a>
        </div>
      </nav>

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="blob bg-accent w-[500px] h-[500px] -top-40 -right-40" />
        <div className="blob bg-blue-500 w-[400px] h-[400px] top-40 -left-40 opacity-20" />
        <div className="absolute inset-0 grain opacity-50" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now accepting 3 new clients in May 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 max-w-5xl">
            Websites & mobile apps that{" "}
            <span className="gradient-text">grow Philippine businesses.</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            I build fast, reliable, conversion-focused websites and mobile apps for SMEs in the Philippines.{" "}
            <span className="text-white font-medium">You see the working site before you pay a single peso.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contact" className="px-8 py-4 rounded-full bg-accent text-ink font-bold text-base hover:scale-105 transition glow text-center">
              Build my website →
            </a>
            <a href="#pricing" className="px-8 py-4 rounded-full border border-white/20 font-semibold text-base hover:bg-white/5 transition text-center">
              See pricing
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
            <Stat value="17+" label="Years in software" />
            <Stat value="100%" label="No-pay-until-you-see-it" />
            <Stat value="<1.5s" label="Avg page load target" />
            <Stat value="24/7" label="Monitoring & uptime" />
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-accent font-mono text-sm mb-4">// What you get</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Built like enterprise software.
              <br />
              <span className="text-white/50">Priced for small business.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueProps.map((p) => (
              <div key={p.title} className="card-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {p.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="card-border rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="blob bg-accent w-[300px] h-[300px] -bottom-40 -right-20 opacity-30" />
            <div className="relative">
              <div className="text-accent font-mono text-sm mb-4">// The promise</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                See your website live <span className="text-accent">before you pay.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                No deposits. No commitment. I build a working version of your site first — you review it on a real URL, on your real phone. Only when you&apos;re happy do we talk about payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-accent font-mono text-sm mb-4">// Why me</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                17 years building tech for global enterprises.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                I&apos;m Jose Carlo Apostol. I&apos;ve led SRE and DevOps teams at Nuskin, built fintech blockchain apps at Swapoolabs, supported global risk-management systems at Macquarie in Sydney, and shipped airline-billing software at Navitaire-Accenture in Minneapolis.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Now I&apos;m bringing that same engineering rigor — observability, CI/CD, cloud architecture, security — to Filipino SMEs at small-business prices.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS Solutions Architect",
                  "ITIL v3",
                  "Lean Six Sigma",
                  "Kubernetes CKA",
                  "ECE Licensed",
                  "UST Engineering",
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {experience.map((e) => (
                <div key={e.role} className="card-border rounded-2xl p-6">
                  <div className="text-accent font-mono text-sm mb-2">{e.period}</div>
                  <div className="font-bold text-lg">{e.role}</div>
                  <div className="text-white/60 text-sm mt-1">{e.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-accent font-mono text-sm mb-4">// Simple pricing</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Two plans. No surprises.</h2>
            <p className="text-white/70 text-lg">
              All prices in PHP. Cancel anytime. Build first, pay only when you love it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card-border rounded-3xl p-10">
              <div className="text-sm font-mono text-white/50 mb-2">SUBSCRIPTION</div>
              <h3 className="text-3xl font-black mb-4">Website Subscription</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black">₱1,500</span>
                <span className="text-white/50">/ month</span>
              </div>
              <p className="text-white/60 mb-8">Perfect for businesses launching online or replacing a tired website.</p>
              <ul className="space-y-3 mb-10">
                {[
                  "Custom-designed website, mobile-first",
                  "SEO setup & schema markup",
                  "Hosting, SSL & global CDN included",
                  "Up to 2 small content updates per month",
                  "Uptime monitoring & automated backups",
                  "Built first — pay only when you approve",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-accent">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full text-center px-6 py-4 rounded-full border border-white/20 font-bold hover:bg-white/5 transition">
                Get started
              </a>
            </div>

            <div className="card-border rounded-3xl p-10 relative bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
              <div className="absolute -top-3 left-10 px-3 py-1 rounded-full bg-accent text-ink text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="text-sm font-mono text-accent mb-2">RETAINER & SUPPORT</div>
              <h3 className="text-3xl font-black mb-4">Growth Partner</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black">₱5,000</span>
                <span className="text-white/50">/ month</span>
              </div>
              <p className="text-white/60 mb-8">For businesses that want their website to actively grow revenue.</p>
              <ul className="space-y-3 mb-10">
                {[
                  "Everything in Subscription",
                  "Priority support — same-day response",
                  "Unlimited content updates",
                  "Mobile app development included",
                  "AI features: chatbot, smart search, automations",
                  "Monthly performance & SEO reports",
                  "A/B testing & conversion optimization",
                  "24/7 monitoring & incident response",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-accent">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full text-center px-6 py-4 rounded-full bg-accent text-ink font-bold hover:bg-accent/90 transition">
                Become a partner
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-accent font-mono text-sm mb-4">// How it works</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">From conversation to live site in days.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.n} className="card-border rounded-2xl p-8">
                <div className="text-accent font-mono text-3xl font-black mb-4">{s.n}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-accent font-mono text-sm mb-4">// FAQ</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Common questions.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card-border rounded-2xl p-6 group">
                <summary className="flex justify-between items-center cursor-pointer font-bold text-lg list-none">
                  <span>{f.q}</span>
                  <span className="text-accent text-2xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-white/70 mt-4 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Let&apos;s build something that <span className="text-accent">moves the needle.</span>
            </h2>
            <p className="text-lg text-white/70">
              A 15-minute call. No sales pitch. We&apos;ll figure out if it&apos;s a fit.
            </p>
          </div>

          <ContactForm />

          <div className="mt-10 pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-6 justify-center text-sm text-white/60 text-center">
            <a href="mailto:josecarlo.apostol@gmail.com" className="hover:text-white transition">
              josecarlo.apostol@gmail.com
            </a>
            <span className="hidden sm:block">·</span>
            <a href="https://wa.me/639178129809" className="hover:text-white transition">
              +63 917 812 9809
            </a>
            <span className="hidden sm:block">·</span>
            <span>BGC, Taguig City</span>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div className="flex items-center gap-2 font-bold text-white">
            <span className="w-6 h-6 rounded-md bg-accent flex items-center justify-center text-ink font-black text-xs">A</span>
            Apostol<span className="text-accent">.dev</span>
          </div>
          <div>© 2026 Jose Carlo Apostol. Built in the Philippines.</div>
        </div>
      </footer>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-black text-accent">{value}</div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  );
}
