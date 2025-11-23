import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="features" className="section">
          <div className="container">
            <Features />
          </div>
        </section>
        <section id="shop" className="section">
          <div className="container">
            <ProductShowcase />
          </div>
        </section>
        <section id="testimonials" className="section">
          <div className="container">
            <Testimonials />
          </div>
        </section>
        <section id="faq" className="section">
          <div className="container">
            <FAQ />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <CTA />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
