import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Home from "@/pages/Home";
import InternationalExpansion from "@/pages/InternationalExpansion";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Careers from "@/pages/Careers";
import SubService from "@/pages/SubService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

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
              <Route path="/services/:slug" element={<SubService />} />
              <Route path="/international-expansion" element={<InternationalExpansion />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* Old routes redirect to home */}
              <Route path="/services" element={<Home />} />
              <Route path="/fee-calculator" element={<Home />} />
              <Route path="/case-studies" element={<Home />} />
              <Route path="/markets" element={<InternationalExpansion />} />
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
