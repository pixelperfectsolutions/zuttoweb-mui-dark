import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import { CustomFooter } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import TravelHub from "./pages/TravelHub";
import Contact from "./pages/Contact";
import Launch from "./pages/Launch";
// import FAQ from './pages/FAQ';
// import Testimonials from './pages/Testimonials';
import Privacy from './pages/Privacy';
import AccountDelete from './pages/AccountDelete';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/travel-hub" element={<TravelHub />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/launch" element={<Launch />} />
          {/* <Route path="/faq" element={<FAQ />} /> */}
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
          <Route path="/account-delete" element={<AccountDelete />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <CustomFooter />
    </div>
  );
}

export default App;
