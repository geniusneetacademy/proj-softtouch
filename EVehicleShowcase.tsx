import React, { useState } from 'react';
import { 
  Truck, 
  BatteryCharging, 
  Zap, 
  Gauge, 
  Weight, 
  Maximize2, 
  Coins, 
  Wrench, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { E_VEHICLES_DATA, COMPANY_INFO } from '../data/companyData';
import { Language, EVehicleModel } from '../types';

interface EVehicleShowcaseProps {
  lang: Language;
  onOpenQuote: (vehicleName?: string) => void;
}

export const EVehicleShowcase: React.FC<EVehicleShowcaseProps> = ({ lang, onOpenQuote }) => {
  const [activeModel, setActiveModel] = useState<EVehicleModel>(E_VEHICLES_DATA[0]);

  return (
    <section id="e-vehicles" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Make in India • Green Commercial Mobility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {lang === 'en' ? 'Enjoy Your Business with SoftTouch E-Cart' : 'सॉफ्टटच व्यावसायिक ई-वाहन (ई-कार्ट)'}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {lang === 'en'
              ? 'आधुनिक तंत्रज्ञानाचा वापर करून घेऊन येत आहोत ई-वाहन — Boost daily profits with zero-emission commercial food trucks, delivery carts, and roaming offices.'
              : 'सॉफ्टटच कंपनीच्या माध्यमातून व्यवसायासाठी आधुनिक तंत्रज्ञानाचा वापर करून घेऊन येत आहोत ई-वाहन.'}
          </p>
        </div>

        {/* 3 Pillars of SoftTouch E-Cart (From PDF Page 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-4">
              <Coins className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block mb-1">
              100% Real Value
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              कमी खर्चात जास्त उत्पन्न
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en' 
                ? 'Minimal charging expense (~₹25-30/day) delivers 90-100 km range, generating daily net profits without costly petrol or diesel bills.' 
                : 'पेट्रोल-डिझेलच्या वाढत्या दरांपासून मुक्ती. अवघ्या २५-३० रुपयांच्या चार्जिंगमध्ये ९० ते १०० किमी प्रवास आणि भरघोस नफा.'}
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block mb-1">
              Rugged Engineering
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              कमी देखभाल (Low Maintenance)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'High-tensile MS chassis and grade-304 stainless steel food decks ensure years of continuous hassle-free operation on Indian road conditions.'
                : 'मजबूत एमएस व स्टेनलेस स्टील बॉडी, टिकाऊ सस्पेंशन आणि सहज उपलब्ध असणारे सुटे भाग. दुरुस्तीचा खर्च नगण्य.'}
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wide block mb-1">
              High Torque DC Motors
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              शक्तिशाली वाहन (High Power)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Equipped with heavy-duty 48V/60V motors pulling 200kg to 600kg payloads easily, reaching up to 50 km/h on high-speed Cold Drink models.'
                : '४८V व ६०V क्षमतेच्या पॉवरफुल मोटर्स, ज्यामुळे २०० ते ६०० किलोपर्यंतचा भार सहज वाहून नेला जातो. कोल्ड ड्रिंक मॉडेलमध्ये ५० किमी/तास वेग.'}
            </p>
          </div>
        </div>

        {/* Interactive E-Cart Fleet Selector & Deep Dive */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          
          {/* Model Selection Tabs */}
          <div className="border-b border-slate-700 pb-6 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'en' ? 'Commercial E-Vehicle Models in PDF' : 'ब्रोशरमधील अधिकृत ई-वाहन मॉडेल्स'}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === 'en' ? 'Click on any model to inspect full technical parameters & direct booking helpline' : 'कोणत्याही मॉडेलवर क्लिक करून तांत्रिक तपशील व हेल्पलाइन नंबर पहा'}
                </p>
              </div>
              <span className="text-xs font-semibold bg-slate-700 text-slate-200 px-3 py-1 rounded-full">
                Customizable Body Sizes Available
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {E_VEHICLES_DATA.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveModel(v)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    activeModel.id === v.id
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-slate-900/80 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? v.name.split(' (')[0] : v.nameMr.split(' (')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Model Deep Dive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Model Specs & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                    {activeModel.badge || 'Approved Commercial E-Cart'}
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    {lang === 'en' ? activeModel.name : activeModel.nameMr}
                  </h4>
                </div>
                <a
                  href={`tel:${activeModel.contactNumber}`}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{activeModel.contactNumber}</span>
                </a>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  {lang === 'en' ? 'Ideal Business Applications:' : 'व्यवसायासाठी उपयोग:'}
                </span>
                <p className="text-sm text-slate-200">
                  {lang === 'en' ? activeModel.idealFor : activeModel.idealForMr}
                </p>
              </div>

              {/* Specs Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Dimensions</span>
                  </div>
                  <span className="font-bold text-white text-sm block">{activeModel.dimensions}</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Weight className="w-3.5 h-3.5 text-amber-400" />
                    <span>Load Capacity</span>
                  </div>
                  <span className="font-bold text-amber-300 text-sm block">{activeModel.loadCapacity}</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Zap className="w-3.5 h-3.5 text-rose-400" />
                    <span>Electric Motor</span>
                  </div>
                  <span className="font-bold text-white text-sm block">{activeModel.motor}</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Battery Pack</span>
                  </div>
                  <span className="font-bold text-white text-sm block">{activeModel.battery}</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Gauge className="w-3.5 h-3.5 text-purple-400" />
                    <span>Top Speed</span>
                  </div>
                  <span className="font-bold text-white text-sm block">{activeModel.speed}</span>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Truck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Range / Charge</span>
                  </div>
                  <span className="font-bold text-emerald-400 text-sm block">{activeModel.range}</span>
                </div>
              </div>

              {/* Extra details from PDF */}
              <div className="text-xs text-slate-400 flex flex-wrap gap-4 pt-1">
                <span><strong>Charging Time:</strong> {activeModel.chargingTime}</span>
                <span>•</span>
                <span><strong>Charger:</strong> {activeModel.charger}</span>
                <span>•</span>
                <span><strong>Build:</strong> {activeModel.material}</span>
              </div>
            </div>

            {/* Right: Booking & Action Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-700/80 space-y-5">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wide">
                  Direct Factory Purchase & Booking
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  Book {activeModel.name.split(' (')[0]}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Customization of counter, kitchen gas stoves, shelves, inverter mounts & canopy branding available directly at our Jalgaon factory.
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'en' ? '100% Subsidy & Loan Guidance Support' : 'कर्ज व शासकीय योजना मार्गदर्शन'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'en' ? 'Direct Factory Warranty on Motor & Batteries' : 'मोटर व बॅटरीवर थेट फॅक्टरी वॉरंटी'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'en' ? 'Doorstep Delivery Across Maharashtra' : 'महाराष्ट्रभर सुरक्षित डिलिव्हरी सुविधा'}</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={() => onOpenQuote(activeModel.name)}
                  className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Get Price & Financing Quote' : 'किंमत व कोटेशन मिळवा'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${activeModel.contactNumber}`}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'en' ? `Call Sales: ${activeModel.contactNumber}` : `थेट संपर्क: ${activeModel.contactNumber}`}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Full Specifications Comparison Table */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <h4 className="text-base font-bold text-white mb-4">
              {lang === 'en' ? 'Fleet Comparison Matrix (All 6 Models)' : 'सर्व ६ ई-वाहन मॉडेल्सची तुलनात्मक माहिती'}
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-200 font-semibold uppercase text-[11px] border-b border-slate-700">
                  <tr>
                    <th className="p-3">Model</th>
                    <th className="p-3">Dimensions</th>
                    <th className="p-3">Payload</th>
                    <th className="p-3">Motor</th>
                    <th className="p-3">Speed</th>
                    <th className="p-3">Range</th>
                    <th className="p-3">Dedicated Helpline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {E_VEHICLES_DATA.map((item) => (
                    <tr 
                      key={item.id} 
                      className={`hover:bg-slate-700/40 transition-colors ${activeModel.id === item.id ? 'bg-slate-700/30' : ''}`}
                    >
                      <td className="p-3 font-bold text-white whitespace-nowrap">
                        {lang === 'en' ? item.name.split(' (')[0] : item.nameMr.split(' (')[0]}
                      </td>
                      <td className="p-3 whitespace-nowrap">{item.dimensions.split(' (')[0]}</td>
                      <td className="p-3 font-semibold text-amber-400">{item.loadCapacity}</td>
                      <td className="p-3">{item.motor}</td>
                      <td className="p-3 font-semibold text-white">{item.speed}</td>
                      <td className="p-3 text-emerald-400 font-semibold">{item.range}</td>
                      <td className="p-3">
                        <a href={`tel:${item.contactNumber}`} className="text-cyan-400 hover:underline font-mono">
                          {item.contactNumber}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
