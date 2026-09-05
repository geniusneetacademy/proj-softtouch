import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Truck, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Scale, 
  Recycle,
  Factory,
  Users
} from 'lucide-react';
import { COMPANY_INFO, TRANSLATIONS } from '../data/companyData';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onExploreProducts: () => void;
  onOpenQuote: (product?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreProducts, onOpenQuote }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Grid & Glow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold">{t.isoCertified}</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-300">GeM Registered</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.heroTitle}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>

            {/* Core Capability Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <HeartHandshake className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {lang === 'en' ? "Women's Menstrual Health" : "महिला आरोग्य व स्वच्छता"}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? 'Sanitary Vending & Incinerator Machines for Schools & Nagar Palikas' : 'शाळा, महाविद्यालये व नगरपंचायतींसाठी व्हेंडींग व इन्सिनेरेटर'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <Truck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {lang === 'en' ? 'E-Vehicle Food & Cargo Trucks' : 'व्यावसायिक ई-वाहन (फूड ट्रक्स)'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? '500kg-600kg payload, 100km range, low maintenance' : '५००-६०० किलो क्षमता, १०० किमी रेंज, कमी खर्च'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <Scale className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {lang === 'en' ? 'Weighbridges & Heavy Scales' : 'इलेक्ट्रॉनिक भुईकाटा (वे-ब्रिज)'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? '20T, 40T, 60T to 100T performance truck scales' : '२० ते १०० टन क्षमतेचे कॉम्प्युटराइज्ड वजनकाटे'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <Recycle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {lang === 'en' ? 'Waste Management & Baling' : 'कचरा व्यवस्थापन व बेलिंग प्रेस'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? 'Plastic baling machines, shredders & composters' : 'प्लॅस्टिक कॉम्पॅक्टर, श्रेडर आणि खत निर्मिती मशीन'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenQuote()}
                className="bg-rose-600 hover:bg-rose-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-rose-900/30 transition-all flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>{t.getQuote}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#certifications"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-5 py-3.5 rounded-xl transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{t.heroCta2}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold text-sm px-3 py-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>{COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card / Company Snapshot */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-rose-500/10 rounded-full blur-2xl" />

              {/* Card Header with Factory & Brand */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/70">
                <div>
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                    {COMPANY_INFO.brandName} Official
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Proprietary Firm • Reg. 04 June 2019 (Est. 2016)
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-600 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-inner">
                  ST
                </div>
              </div>

              {/* Key Credentials Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                  <span className="text-slate-400 block mb-1">Quality Standard</span>
                  <span className="font-bold text-slate-200">ISO 9001:2015</span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">ARS / ABAS Accredited</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                  <span className="text-slate-400 block mb-1">European Directive</span>
                  <span className="font-bold text-slate-200">CE Compliance</span>
                  <span className="text-[10px] text-cyan-400 block mt-0.5">Directive 2006/42/EC</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                  <span className="text-slate-400 block mb-1">Good Practice</span>
                  <span className="font-bold text-slate-200">GMP Certified</span>
                  <span className="text-[10px] text-amber-400 block mt-0.5">EURO.UK Standard</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                  <span className="text-slate-400 block mb-1">Trade Mark Reg.</span>
                  <span className="font-bold text-slate-200">Class 7 #4226742</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Govt. of India</span>
                </div>
              </div>

              {/* Proprietary Info */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Head of Organization:</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.personInCharge}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">GST Registration:</span>
                  <span className="font-mono text-xs font-semibold text-amber-300">{COMPANY_INFO.gstin}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">MSME Udyog Aadhar:</span>
                  <span className="font-mono text-xs text-slate-300">{COMPANY_INFO.msmeNo}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Main Factory:</span>
                  <span className="text-slate-300 text-right">M.I.D.C. Area, Jalgaon (MH)</span>
                </div>
              </div>

              {/* Direct Fast Inquiry Action */}
              <div className="pt-1 flex items-center justify-between">
                <button
                  onClick={onExploreProducts}
                  className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Browse 12+ Machine Specs' : 'सर्व मशनरी तपशील पहा'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">
                  {lang === 'en' ? 'Pan-India Delivery' : 'भारतभर पुरवठा'}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Statistical Ribbon */}
        <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">8+</div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.heroStat1}</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-400">50+</div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.heroStat2}</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">18+</div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.heroStat3}</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">10+</div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.heroStat4}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
