import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Award, 
  Menu, 
  X, 
  FileText, 
  ChevronRight, 
  Globe,
  Sparkles,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO, TRANSLATIONS } from '../data/companyData';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenQuote: (productName?: string) => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenQuote,
  onOpenProfile
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.navAbout, href: '#about' },
    { label: t.navProducts, href: '#products' },
    { label: t.navEVehicles, href: '#e-vehicles' },
    { label: t.navMission, href: '#mission' },
    { label: t.navCertificates, href: '#certifications' },
    { label: t.navBranches, href: '#branches' },
    { label: t.navContact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Trust Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
              <Award className="w-3.5 h-3.5" />
              <span>ISO 9001:2015 & CE Certified</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Govt. GeM Registered Vendor | MSME Registered</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              onClick={onOpenProfile}
              className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-rose-300 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>PDF Profile</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded border border-slate-700 font-semibold transition-colors"
              title="Toggle English / Marathi"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'en' ? 'मराठी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Slogan */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center text-white font-black text-2xl shadow-md group-hover:scale-105 transition-transform">
              <span className="italic">ST</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
                  Soft<span className="text-rose-600">Touch</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  TM
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 tracking-wide">
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-rose-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-rose-600 after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenQuote()}
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.getQuote}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-sm px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{t.callNow}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleLang}
              className="p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold"
            >
              {lang === 'en' ? 'मराठी' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-rose-600 hover:bg-rose-50"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm py-2.5 rounded-lg flex items-center justify-center gap-2"
              >
                <span>{t.getQuote}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfile();
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm py-2.5 rounded-lg flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>PDF Profile / Brochure</span>
              </button>
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="w-full border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold text-sm py-2.5 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
