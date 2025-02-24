import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Connection from './components/Connection';
import Practice from './components/Practice';
import Management from './components/Management';
import AboutPage from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import EarlyAccess from './components/EarlyAccess';

import './index.css';

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="features"><Features /></div>
      <Connection />
      <div id="practice"><Practice /></div>
      <Management />
      <div id="about"><AboutPage /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/early-access" element={<EarlyAccess />}/>
      </Routes>
    </Router>
  );
}

export default App;