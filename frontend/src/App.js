import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import InternationalExpansion from "@/pages/InternationalExpansion";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import FeeCalculator from "@/pages/FeeCalculator";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <div className="App min-h-screen flex flex-col bg-white">
        <BrowserRouter>
          <ScrollToTop />
          <Nav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/international-expansion" element={<InternationalExpansion />} />
              <Route path="/markets" element={<InternationalExpansion />} />
              <Route path="/fee-calculator" element={<FeeCalculator />} />
              <Route path="/case-studies" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <WhatsAppFAB />
          <Footer />
        </BrowserRouter>
        <Toaster position="top-right" />
      </div>
    </HelmetProvider>
  );
}

export default App;
