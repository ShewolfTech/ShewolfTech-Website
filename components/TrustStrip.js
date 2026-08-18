const ITEMS = [
  "Next.js",
  "WordPress",
  "Webflow",
  "MongoDB",
  "React Native",
  "Cybersecurity",
  "Vercel",
  "Figma",
];

export default function TrustStrip() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section className="strip" aria-label="What we build with">
      <div className="strip-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}
