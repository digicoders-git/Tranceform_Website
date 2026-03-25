import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatIsHypnotherapy from '../components/WhatIsHypnotherapy';
import AboutSection from '../components/AboutSection';
import AreasIWorkWith from '../components/AreasIWorkWith';
import AboutDiscovery from '../components/AboutDiscovery';
import HowItWorks from '../components/HowItWorks';
import ProcessSection from '../components/ProcessSection';
import JourneySection from '../components/JourneySection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogInsights from '../components/BlogInsights';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatIsHypnotherapy />
      <AboutSection />
      <AreasIWorkWith />
      <HowItWorks />
      <AboutDiscovery />
      <ProcessSection />
      <TestimonialsSection />
      <JourneySection />
      <BlogInsights />
      <FAQSection />
    </>
  );
};


export default HomePage;
