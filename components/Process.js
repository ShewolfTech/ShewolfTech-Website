import RevealOnScroll from "./RevealOnScroll";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We start with your goals, your users and your constraints — no template guesswork.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes and visuals grounded in your brand, reviewed with you at every stage.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Clean, secure code — shipped in stages so you can see progress, not just promises.",
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "We deploy, train your team, and stay on for maintenance, SEO and ongoing support.",
  },
];

export default function Process() {
  return (
    <section className="section section-dark" id="process">
      <div className="wrap">
        <p className="eyebrow">How we work</p>
        <h2 className="section-title light">A clear path from idea to launch</h2>

        <ol className="process-list">
          {STEPS.map((step, i) => (
            <RevealOnScroll as="li" index={i} className="process-step" key={step.num}>
              <span className="step-num">{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
