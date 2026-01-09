import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"; // ✅ added
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
// import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Book from "./components/Book";

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ this fixes scroll issue */}
      <Routes>
        {/* Main landing page */}
        <Route
          path="/"
          element={
            <div className="scroll-smooth">
              <Hero />
              <Services />
              <Projects />
              <Pricing />
              {/* <About /> */}
              <Team />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* Booking page */}
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}
