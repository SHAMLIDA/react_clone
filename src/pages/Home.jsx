import React from 'react';
import Nvigation from '../components/Nvigation';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Nvigation />
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
