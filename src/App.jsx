import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/herosection/Hero'; // Note: check capitalization of folder
import About from './components/about/About';
import PoliticalCareer from './components/PoliticalCareer/PoliticalCareer';
import RecentDevelopments from './components/RecentDevelopment/RecentDevelopments';
import SocialMedia from './components/SocialMedia/SocialMedia';
import MediaGallery from './components/MediaGallerySection/MediaGallery';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <PoliticalCareer />
        <RecentDevelopments />
        <SocialMedia />
        <MediaGallery />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;