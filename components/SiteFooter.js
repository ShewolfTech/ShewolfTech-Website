import Image from "next/image";
import { LOGO_URL, LOGO_ALT } from "../lib/constants";

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#work-with", label: "Who we help" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "#", label: "IG" },
  { href: "#", label: "LI" },
  { href: "#", label: "X" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <Image
              src={LOGO_URL}
              alt={LOGO_ALT}
              width={160}
              height={40}
              className="brand-logo"
              unoptimized
            />
          </a>
          <p>Empowering ideas, building futures.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials" aria-label="Social links">
          {SOCIALS.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label}>
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {year} Shewolf Tech. All rights reserved.</span>
        <a href="#top" className="back-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
