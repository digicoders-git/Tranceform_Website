import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSlider from '../components/ServicesSlider';
import PricingSection from '../components/PricingSection';
import HowItWorks from '../components/HowItWorks';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogInsights from '../components/BlogInsights';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <ServicesSlider /> */}
      {/* <PricingSection /> */}
      <HowItWorks />
      <TestimonialsSection />
      <BlogInsights />
      <FAQSection />
    </>
  );
};

export default HomePage;
