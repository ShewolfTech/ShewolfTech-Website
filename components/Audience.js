import RevealOnScroll from "./RevealOnScroll";

const AUDIENCES = [
  {
    icon: "🤝",
    title: "NGOs & nonprofits",
    desc: "Documentation tools, donor-ready sites and secure case management.",
  },
  {
    icon: "🌱",
    title: "Women-led organizations",
    desc: "Digital presence and training built with your context in mind.",
  },
  {
    icon: "🚀",
    title: "Startups & SMEs",
    desc: "Production-ready platforms that scale as your business grows.",
  },
  {
    icon: "🎓",
    title: "Individuals & students",
    desc: "Portfolios, personal brands and one-off digital projects.",
  },
];

export default function Audience() {
  return (
    <section className="section section-tint" id="work-with">
      <div className="wrap">
        <p className="eyebrow eyebrow-dark">Who we help</p>
        <h2 className="section-title">Built for people doing meaningful work</h2>

        <div className="audience-grid">
          {AUDIENCES.map((a, i) => (
            <RevealOnScroll as="div" index={i} className="audience-card" key={a.title}>
              <span className="audience-icon" aria-hidden="true">
                {a.icon}
              </span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
