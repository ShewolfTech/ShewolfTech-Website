export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-swoosh" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Web · Mobile · Brand · Security — Kampala, Uganda</p>
          <h1 className="hero-title">
            <span>Empowering ideas.</span>
            <span className="accent-green">Building futures.</span>
          </h1>
          <p className="hero-sub">
            Shewolf Tech is a woman-led studio that turns ambitious ideas into secure,
            fast, beautifully built digital products — for NGOs, founders and small
            businesses across Uganda and beyond.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a project
            </a>
            <a href="#services" className="btn btn-ghost">
              See what we do
            </a>
          </div>
          <ul className="hero-tags" aria-label="Focus areas">
            <li>Web &amp; App Development</li>
            <li>WordPress &amp; Webflow</li>
            <li>Cybersecurity Training</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="howl-svg">
            <circle cx="330" cy="90" r="46" stroke="url(#moonGrad)" strokeWidth="1.4" opacity="0.6" />
            <path
              d="M60 330 C 90 300 100 250 130 230 C 150 216 165 200 178 175
                 C 188 156 196 130 210 108 C 224 130 232 156 242 175
                 C 255 200 270 216 290 230 C 320 250 330 300 360 330"
              stroke="url(#lineGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M150 262 C 168 232 190 214 210 214 C 230 214 252 232 270 262"
              stroke="url(#lineGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <line x1="30" y1="352" x2="392" y2="352" stroke="url(#lineGrad)" strokeWidth="1.4" opacity="0.5" />
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="420" y2="420">
                <stop offset="0%" stopColor="#8FE3A6" />
                <stop offset="100%" stopColor="#4C8DFF" />
              </linearGradient>
              <linearGradient id="moonGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8FE3A6" />
                <stop offset="100%" stopColor="#4C8DFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
