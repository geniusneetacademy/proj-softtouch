import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  Globe, 
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, TRANSLATIONS } from '../data/companyData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenQuote: (prod?: string) => void;
  onOpenProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenQuote, onOpenProfile }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center text-white font-extrabold text-xl shadow">
                ST
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  Soft<span className="text-rose-500">Touch</span>
                </span>
                <span className="text-[10px] text-slate-400 font-bold ml-1">TM</span>
                <p className="text-[11px] font-semibold text-slate-400">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Government-approved manufacturer of modern machines, sanitary hygiene vending & incinerator equipment, electric commercial e-carts, and industrial weighbridges since 2016.'
                : 'महिला आरोग्य, स्वच्छ भारत अभियान, घनकचरा व्यवस्थापन व व्यावसायिक ई-वाहन क्षेत्रातील अग्रगण्य तंत्रज्ञान उत्पादक.'}
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-medium">
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 font-medium">
                CE Machinery Directive
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-400 font-medium">
                GeM Registered
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-rose-400 font-medium">
                GMP Certified
              </span>
            </div>
          </div>

          {/* Col 2: Key Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Core Machineries' : 'प्रमुख मशनरी'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a 
                  href="#products" 
                  onClick={() => onOpenQuote('Sanitary Napkin Vending Machine')}
                  className="hover:text-white transition-colors"
                >
                  Sanitary Vending Machine
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={() => onOpenQuote('Sanitary Napkin Destroyer')}
                  className="hover:text-white transition-colors"
                >
                  Sanitary Napkin Destroyer
                </a>
              </li>
              <li>
                <a 
                  href="#e-vehicles" 
                  className="hover:text-white transition-colors"
                >
                  YES Food & Cargo E-Trucks
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={() => onOpenQuote('Weight Bridge Machine')}
                  className="hover:text-white transition-colors"
                >
                  Electronic Weighbridge (भुईकाटा)
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={() => onOpenQuote('Plastic Bailing Machine')}
                  className="hover:text-white transition-colors"
                >
                  Plastic Bailing Press
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={() => onOpenQuote('Feedback Monitoring System')}
                  className="hover:text-white transition-colors"
                >
                  Toilet Feedback Monitors
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory Credentials from PDF */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Statutory Records' : 'शासकीय परवाने'}
            </h4>
            <div className="space-y-2 text-[11px] text-slate-400 font-mono">
              <div>
                <span className="text-slate-500 block">GSTIN:</span>
                <span className="text-amber-300 font-semibold">{COMPANY_INFO.gstin}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Trade Mark No:</span>
                <span className="text-slate-300">{COMPANY_INFO.trademarkNo}</span>
              </div>
              <div>
                <span className="text-slate-500 block">MSME Udyog Aadhar:</span>
                <span className="text-slate-300">{COMPANY_INFO.msmeNo}</span>
              </div>
              <div>
                <button
                  onClick={onOpenProfile}
                  className="mt-1 text-xs font-sans text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer font-bold"
                >
                  <span>View PDF Documentation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Contact & Helpline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Direct Helpline' : 'थेट संपर्क'}
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{COMPANY_INFO.primaryPhone}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.secondaryPhone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.secondaryPhone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-rose-400 transition-colors text-[11px]"
              >
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>
              <p className="text-[11px] text-slate-500 pt-1">
                <strong>Proprietor:</strong> {COMPANY_INFO.personInCharge}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Statutory Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name} (SoftTouch™). All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenProfile}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              PDF Dossier
            </button>
            <span>•</span>
            <a
              href="#about"
              className="text-slate-400 hover:text-white transition-colors"
            >
              {lang === 'en' ? 'About Us' : 'आमच्याविषयी'}
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
