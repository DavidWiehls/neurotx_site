import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import Market from './pages/Market';
import Investors from './pages/Investors';
import Partners from './pages/Partners';
import Schools from './pages/Schools';
import Contact from './pages/Contact';
import DataEthics from './pages/DataEthics';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/market" element={<Market />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/data-ethics" element={<DataEthics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
