import RevealOnScroll from "./RevealOnScroll";
import { LOCATION } from "../lib/constants";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <RevealOnScroll className="about-copy">
          <p className="eyebrow eyebrow-dark">About Shewolf Tech</p>
          <h2 className="section-title">A woman-led studio, built for real-world impact</h2>
          <p>
            Based in {LOCATION}, Shewolf Tech exists to make good technology reachable —
            not just for big companies, but for the founders, organizers and small teams
            doing important work with limited budgets.
          </p>
          <p>
            We work across the full stack: from custom web applications and mobile apps
            to WordPress builds, digital security training and social media strategy —
            so you get one partner instead of five vendors.
          </p>
          <div className="about-stats">
            <div>
              <span className="stat-num">16+</span>
              <span className="stat-label">services under one roof</span>
            </div>
            <div>
              <span className="stat-num">4</span>
              <span className="stat-label">step delivery process</span>
            </div>
            <div>
              <span className="stat-num">1</span>
              <span className="stat-label">partner, start to finish</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="about-visual" aria-hidden="true">
          <div className="about-card card-a">Secure by default</div>
          <div className="about-card card-b">Built mobile-first</div>
          <div className="about-card card-c">Made in Uganda 🇺🇬</div>
        </div>
      </div>
    </section>
  );
}
