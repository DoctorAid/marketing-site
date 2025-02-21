import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Connection from './components/Connection';
import Practice from './components/Practice';
import Management from './components/Management';
import AboutPage from './components/About';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Connection />
      <Practice />
      <Management />
      <AboutPage />
    </div>
  );
}

export default App;