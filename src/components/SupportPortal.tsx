
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import PopularArticles from '@/components/PopularArticles';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import KnowledgeBase from '@/components/KnowledgeBase';

const SupportPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <PopularArticles />
      <ContactSection />
      <KnowledgeBase />
      <Footer />
    </div>
  );
};

export default SupportPortal;
