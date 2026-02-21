import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./essentials/Navbar";
import HeroSection from "./essentials/HeroSection";
import HomePage from "./components/HomePage";
import Footer from "./essentials/Footer";

import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import Campuses from "./components/Campuses";
import CampusLife from "./components/CampusLife";
import Contact from "./components/Contact";
import MainAboutUs from "./components/MainAboutUs";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME ROUTE */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HomePage />
            </>
          }
        />

        {/* ABOUT US ROUTE (FIXED) */}
        <Route path="/about" element={<MainAboutUs />} />

        {/* Other Routes */}
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