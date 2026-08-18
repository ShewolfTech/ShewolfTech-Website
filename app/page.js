import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import Process from "../components/Process";
import About from "../components/About";
import Audience from "../components/Audience";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <About />
        <Audience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
