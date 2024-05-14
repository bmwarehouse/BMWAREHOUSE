/* eslint-disable no-unused-vars */

'use client';

import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WhyChooseUs from './components/WhyChooseUs';

function Home() {
  const fullpageOptions = {
    anchors: ['Home', 'about-us', 'why-choose-us', 'faq', 'footer'],
    scrollingSpeed: 1000,
    licenseKey: 'gplv3-license',
    lockAnchors: false
  };

  return (
    <div>
      <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <main className="min-h-screen font-poppins">
              <div className="section">
                <Navbar />
                <Hero />
              </div>
              <div className="section">
                <AboutUs />
              </div>
              <div className="section">
                <WhyChooseUs />
              </div>
              <div className="section">
                <FAQ />
              </div>
              <div className="section">
                <Footer />
              </div>
            </main>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default Home;
