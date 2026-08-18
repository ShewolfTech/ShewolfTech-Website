"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LOGO_URL, LOGO_ALT } from "../lib/constants";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#work-with", label: "Who we help" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="siteHeader">
      <div className="wrap header-inner">
        <a href="#top" className="brand" aria-label="Shewolf Tech home">
          <Image
            src={LOGO_URL}
            alt={LOGO_ALT}
            width={200}
            height={48}
            className="brand-logo"
            priority
            unoptimized
          />
        </a>

        <nav className={`main-nav${open ? " open" : ""}`} id="mainNav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>

        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-expanded={open}
          aria-controls="mainNav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
