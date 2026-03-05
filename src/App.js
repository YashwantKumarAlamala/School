import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./essentials/Navbar";
import HeroSection from "./essentials/HeroSection";
import HomePage from "./components/HomePage";
import Footer from "./essentials/Footer";

import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import Campuses from "./components/Campuses";
import CampusLife from "./components/CampusLife";
import Contact from "./components/Contact";
import MainAboutUs from "./components/About/MainAboutUs";
import PageLoader from "./essentials/PageLoader";

// Wires up scroll-reveal for .scroll-reveal* elements on every route change
function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const selectors = ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale";
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    // Small delay so new route's DOM is painted
    const timer = setTimeout(() => {
      document.querySelectorAll(selectors).forEach((el) => observer.observe(el));
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollReveal />
      <PageLoader />
      <Navbar />

      <Routes>
        <Route path="/" element={<><HeroSection /><HomePage /></>} />
        <Route path="/about" element={<MainAboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/campuslife" element={<CampusLife />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;