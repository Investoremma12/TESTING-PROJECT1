import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import CaseStudy from "./components/CaseStudy";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      <div className="glow-bg" />

      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <CaseStudy />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}