import React, { useState, useEffect } from 'react';
import './App.css'; // Importing specific App styles

// Component Imports
import Navbar from './components/Navbar/Navbar';
import Hero from './components/herosection/Hero';
import About from './components/about/About';
import PoliticalCareer from './components/PoliticalCareer/PoliticalCareer';
import RecentDevelopments from './components/RecentDevelopment/RecentDevelopments';
import SocialMedia from './components/SocialMedia/SocialMedia';
import MediaGallery from './components/MediaGallerySection/MediaGallery';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container relative">

      {/* --- NAVIGATION --- */}
      <Navbar />

      {/* --- MAIN CONTENT --- */}
      <main>
        <Hero />
        <About />
        <PoliticalCareer />
        <RecentDevelopments />

        {/* Full Width Wrapper for Dark Theme Section */}
        <div className="w-full">
          <SocialMedia />
        </div>

        <MediaGallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;