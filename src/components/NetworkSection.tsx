import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Building2, 
  Navigation, 
  Factory, 
  Store, 
  CheckCircle, 
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import { MAHARASHTRA_NETWORK, COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';

interface NetworkSectionProps {
  lang: Language;
  onOpenQuote: (locationName?: string) => void;
}

export const NetworkSection: React.FC<NetworkSectionProps> = ({ lang, onOpenQuote }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNetwork = MAHARASHTRA_NETWORK.filter(item => 
    item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cityMr.includes(searchTerm)
  );

  return (
    <section id="branches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === 'en' ? 'Statewide Service Presence' : 'आमच्या शाखा व संपर्क नेटवर्क'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Maharashtra Service Network & Facilities' : 'महाराष्ट्रभर विस्तारलेले शाखा जाळे'}
          </h2>
          <p className="text-base text-slate-600">
            {lang === 'en'
              ? 'Headquartered in Jalgaon with dedicated manufacturing units, registered administrative offices, and active operational coverage across 18+ districts.'
              : 'जळगाव मुख्य फॅक्टरीसह राज्यभरातील १८+ प्रमुख जिल्ह्यांमध्ये विक्री व तांत्रिक सेवा नेटवर्क.'}
          </p>
        </div>

        {/* Core Infrastructure & Offices Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Main Factory */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-4 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white">
                <Factory className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800">
                Primary Manufacturing Plant
              </span>
              <h3 className="text-lg font-bold text-white">
                MIDC Area Factory
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {COMPANY_INFO.factoryAddress}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Jalgaon - 425003</span>
              <a 
                href={`tel:${COMPANY_INFO.primaryPhone}`} 
                className="text-rose-400 hover:text-white font-bold inline-flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Plant</span>
              </a>
            </div>
          </div>

          {/* Registered Office */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Corporate & Registered
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Ramanand Nagar Office
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {COMPANY_INFO.registeredAddress}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Jalgaon - 425001</span>
              <span className="text-blue-600 font-semibold font-mono">{COMPANY_INFO.primaryPhone}</span>
            </div>
          </div>

          {/* Branch Office 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Branch Office 1
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Vidyut Colony Branch
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {COMPANY_INFO.branch1Address}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Jalgaon - 425001</span>
              <span className="text-emerald-700 font-semibold font-mono">9096000080</span>
            </div>
          </div>

          {/* Branch Office 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Branch Office 2 & Showroom
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Shiv Colony / Golani Market
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {COMPANY_INFO.branch2Address} & D-28, 2nd Floor, Golani Market.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Jalgaon - 425001</span>
              <span className="text-amber-800 font-semibold font-mono">9970022077</span>
            </div>
          </div>

        </div>

        {/* All Maharashtra Hubs Grid (from PDF Page 6: आमच्या शाखा) */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {lang === 'en' ? 'All Operational Service Locations (आमच्या शाखा)' : 'आमच्या शाखा व जिल्हा संपर्क केंद्र'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {lang === 'en' ? 'Direct engineer visits, machinery demos, and prompt after-sales service' : 'थेट इंजिनिअर व्हिजिट, प्रात्यक्षिक व जलद विक्रीपश्चात सेवा'}
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'en' ? 'Search district / city...' : 'शहर किंवा जिल्हा शोधा...'}
                className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredNetwork.map((hub, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-left transition-all ${
                  hub.highlight
                    ? 'bg-rose-50/70 border-rose-200 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <MapPin className={`w-3.5 h-3.5 shrink-0 ${hub.highlight ? 'text-rose-600' : 'text-slate-400'}`} />
                  <span className="truncate">{lang === 'en' ? hub.city : hub.cityMr}</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                  {hub.type}
                </div>
                <button
                  onClick={() => onOpenQuote(`${hub.city} Regional Inquiry`)}
                  className="mt-2 text-[10px] font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Connect' : 'संपर्क'}</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <span className="font-medium">
              {lang === 'en' 
                ? 'Also executing institutional orders for Pan-India government & private projects.' 
                : 'महाराष्ट्र व्यतिरिक्त देशभरातील इतर राज्यांमध्येही संस्थात्मक पुरवठा केला जातो.'}
            </span>
            <button
              onClick={() => onOpenQuote('District Service Coordinator')}
              className="font-bold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
            >
              {lang === 'en' ? 'Request Service in Your City →' : 'आपल्या शहरासाठी सेवा मागवा →'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
