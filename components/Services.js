import RevealOnScroll from "./RevealOnScroll";

const PILLARS = [
  {
    title: "Build",
    desc: "Custom, responsive products built to represent your brand and do real work.",
    items: [
      "Website design & development",
      "Mobile app development",
      "E-commerce development",
      "UI/UX design",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3 6.5h18M3 6.5v11a1 1 0 001 1h16a1 1 0 001-1v-11M3 6.5l2-3h14l2 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Grow",
    desc: "Strategy and content that turns visibility into leads, and leads into customers.",
    items: [
      "Search engine optimization",
      "Digital marketing",
      "Social media management",
      "Content creation",
      "Analytics & reporting",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 8-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Protect & Support",
    desc: "The infrastructure that keeps a site fast, online and trustworthy.",
    items: [
      "Web hosting",
      "Domain registration",
      "Cybersecurity & SSL security",
      "Website maintenance & support",
      "Business email setup",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9.5 12l1.8 1.8L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Design & Innovate",
    desc: "Visual identity and emerging tech to help you stand out and work smarter.",
    items: ["Graphic design & branding", "AI & automation solutions"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l1.8 4.8L19 8.5l-4.8 1.8L12 15l-2.2-4.7L5 8.5l5.2-1.7L12 2z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8.8-2.2z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <p className="eyebrow eyebrow-dark">What we do</p>
        <h2 className="section-title">Four ways we move your idea forward</h2>
        <p className="section-lead">
          From your first sketch to a site that&apos;s live, secure and growing —
          everything sits under one roof.
        </p>

        <div className="pillars">
          {PILLARS.map((pillar, i) => (
            <RevealOnScroll as="article" index={i} className="pillar" key={pillar.title}>
              <div className="pillar-head">
                <span className="pillar-icon" aria-hidden="true">
                  {pillar.icon}
                </span>
                <h3>{pillar.title}</h3>
              </div>
              <p className="pillar-desc">{pillar.desc}</p>
              <ul className="pillar-list">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
