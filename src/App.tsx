import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductCatalog } from './components/ProductCatalog';
import { EVehicleShowcase } from './components/EVehicleShowcase';
import { SocialMissionSection } from './components/SocialMissionSection';
import { CertificationsSection } from './components/CertificationsSection';
import { NetworkSection } from './components/NetworkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryQuoteModal } from './components/InquiryQuoteModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'mr' : 'en'));
  };

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setSelectedProductForQuote(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
      {/* Sticky Navigation Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenQuote={handleOpenQuote}
        onOpenProfile={() => setProfileModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onExploreProducts={() => {
            const el = document.getElementById('products');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenQuote={handleOpenQuote}
        />

        {/* About Company & Leadership */}
        <AboutSection
          lang={lang}
          onOpenQuote={() => handleOpenQuote('Institutional Proposal Request')}
        />

        {/* Industrial & Institutional Machinery Catalog */}
        <ProductCatalog
          lang={lang}
          onOpenQuote={handleOpenQuote}
        />

        {/* Commercial Electric Vehicles (E-Cart) Showcase */}
        <EVehicleShowcase
          lang={lang}
          onOpenQuote={handleOpenQuote}
        />

        {/* Social Mission, Women's Health & Swachh Bharat */}
        <SocialMissionSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
        />

        {/* Official Certifications & Legal Registrations Index */}
        <CertificationsSection
          lang={lang}
        />

        {/* Maharashtra & Pan-India Service Network (18+ Cities) */}
        <NetworkSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
        />

        {/* Contact Directory & Fast Inquiry Generator */}
        <ContactSection
          lang={lang}
        />
      </main>

      {/* Footer with Legal & Statutory Credentials */}
      <Footer
        lang={lang}
        onOpenQuote={handleOpenQuote}
        onOpenProfile={() => setProfileModalOpen(true)}
      />

      {/* Interactive Quotation Modal */}
      <InquiryQuoteModal
        isOpen={quoteModalOpen}
        initialProduct={selectedProductForQuote}
        lang={lang}
        onClose={handleCloseQuote}
      />

      {/* Full PDF Dossier / Printable Company Profile Modal */}
      <CompanyProfileModal
        isOpen={profileModalOpen}
        lang={lang}
        onClose={() => setProfileModalOpen(false)}
      />
    </div>
  );
}
