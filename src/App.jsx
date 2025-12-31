import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

// Pages
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation(); // Required for Framer Motion to know when page changes

  return (
    <div className="font-sans min-h-screen text-dark relative selection:bg-accent/30 bg-light cursor-none">
      {/* 1. Global Creative Cursor */}
      <Cursor />

      {/* 2. Global Background */}
      <div className="fixed inset-0 -z-10 bg-white">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />

      {/* 3. Animated Routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
