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

// Wires up scroll-reveal for all .scroll-reveal* elements on every route change
function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const selectors = [
      ".scroll-reveal",
      ".scroll-reveal-left",
      ".scroll-reveal-right",
      ".scroll-reveal-scale",
      ".scroll-reveal-tilt",
      ".scroll-reveal-tilt-right",
      ".scroll-reveal-zoom",
      ".section-enter",
      ".img-reveal",
    ].join(", ");

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(selectors).forEach((el) => observer.observe(el));
    }, 80);

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [location.pathname]);

  return null;
}

// Scroll progress bar at top of page
function ScrollProgress() {
  useEffect(() => {
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.style.width = "0%";
    document.body.appendChild(bar);

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : "0%";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); bar.remove(); };
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollReveal />
      <ScrollProgress />
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