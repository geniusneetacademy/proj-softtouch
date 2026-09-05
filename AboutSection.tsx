import React from 'react';
import { 
  Building2, 
  Target, 
  Users, 
  Award, 
  CheckCircle, 
  FileCheck, 
  Flame, 
  Heart,
  Layers,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenQuote }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Company Background & Leadership' : 'कंपनी परिचय व नेतृत्व'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'About SoftTouch Sales & Services' : 'आमचे विषयी (About SoftTouch)'}
          </h2>
          <p className="text-base text-slate-600">
            {lang === 'en' 
              ? 'Pioneering modern machinery, hygienic health solutions, and green mobility across Maharashtra and Pan-India.' 
              : 'अद्ययावत तंत्रज्ञान विकसित करणे व लोकांमध्ये त्याविषयी जनजागृती निर्माण करणे हे आमचे ब्रीद.'}
          </p>
        </div>

        {/* Two-Column Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Marathi / English History Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-5">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {lang === 'en' ? 'Our Foundation & Objective' : 'स्थापना व मुख्य उद्दिष्ट'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === 'en' ? 'Established 2016 • Registered Proprietary Firm' : 'सन २०१६ पासून कार्यरत • अधिकृत प्रोप्रायटरी संस्था'}
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-md border border-emerald-200">
                  ISO 9001:2015
                </span>
              </div>

              {lang === 'mr' ? (
                <div className="text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>सॉफ्टटच सेल्स ॲण्ड सर्व्हिसेस</strong> या कंपनीची स्थापना सन २०१६ मध्ये झाली (फर्म इनकॉर्पोरेशन दिनांक ०४ जून २०१९). कंपनी प्रामुख्याने शासकीय क्षेत्र, महानगरपालिका, नगरपालिका, ग्रामपंचायत, शाळा आणि महाविद्यालयांच्या सहकार्याने अत्याधुनिक मशनरी उत्पादन व सेवा क्षेत्रात कार्यरत आहे.
                  </p>
                  <p>
                    कंपनीचे मुख्य उद्दिष्ट हे <strong>अद्ययावत तंत्रज्ञान विकसित करणे</strong> व लोकांमध्ये त्याविषयी जनजागृती निर्माण करणे हे होय. विशेषतः महिला आणि विद्यार्थिनींना मासिकपाळीच्या काळात येणाऱ्या अडचणींवर सन्मानजनक तोडगा म्हणून आम्ही <strong>सॅनिटरी नॅपकीन व्हेंडींग मशीन</strong> आणि <strong>सॅनिटरी नॅपकीन डिस्ट्रॉयर (इन्सिनेरेटर)</strong> चे मोठ्या प्रमाणावर उत्पादन व उभारणी केली आहे.
                  </p>
                  <p>
                    आजतागायत कंपनीने राज्यभरातील शेकडो शासकीय व निमशासकीय संस्थांमध्ये मशीन यशस्वीरीत्या कार्यान्वित केल्या आहेत. तसेच घनकचरा व्यवस्थापन, इलेक्ट्रॉनिक भुईकाटा (वेब्रिज), आणि हरित उद्योगासाठी <strong>व्यावसायिक ई-वाहन (ई-कार्ट व फूड ट्रक्स)</strong> चे दर्जेदार उत्पादन केले जात आहे.
                  </p>
                </div>
              ) : (
                <div className="text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>SoftTouch Sales & Services</strong> was established in 2016 (Firm Incorporation date: 04 June 2019) as a premier proprietary manufacturing firm under the visionary leadership of <strong>Prof. Uday Motiram Yeshe</strong>.
                  </p>
                  <p>
                    Our core objective is to engineer contemporary machinery and foster public awareness around menstrual hygiene, municipal waste management, and sustainable green commercial transportation. We are an active vendor for government departments, municipal corporations, zilla parishads, colleges, and schools across Maharashtra and nationwide.
                  </p>
                  <p>
                    From automated coin-operated sanitary napkin dispensers and smoke-safe ceramic incinerators to heavy-duty industrial weighbridges and custom electric commercial carts, SoftTouch combines robust indigenous engineering with strict statutory standards.
                  </p>
                </div>
              )}

              {/* Quick Pillars from PDF */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="text-xs font-medium text-slate-500 block">Manufacturing Base</span>
                  <span className="text-sm font-bold text-slate-900">M.I.D.C. Jalgaon</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="text-xs font-medium text-slate-500 block">Dedicated Workforce</span>
                  <span className="text-sm font-bold text-slate-900">50+ Employees</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="text-xs font-medium text-slate-500 block">Leadership</span>
                  <span className="text-sm font-bold text-slate-900">Prof. Uday Yeshe</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Person in Charge & Business Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Leadership Profile */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-7 rounded-2xl shadow-md space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shrink-0">
                  UY
                </div>
                <div>
                  <span className="text-xs font-semibold text-rose-400 uppercase tracking-wide">
                    {lang === 'en' ? 'Person in Charge & Proprietor' : 'प्रमुख संचालक व मार्गदर्शक'}
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {COMPANY_INFO.personInCharge}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {COMPANY_INFO.primaryPhone}
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-300 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 leading-relaxed">
                {lang === 'en' 
                  ? 'Actively leads state-level social hygiene initiatives, school menstrual awareness workshops, and research & development of smart municipal equipment.'
                  : 'शाळा, महाविद्यालयांत विद्यार्थिनींना मासिकपाळी स्वच्छता व आरोग्याबाबत प्रत्यक्ष मार्गदर्शन आणि महानगरपालिकांसोबत स्वच्छ भारत अभियानात सातत्याने योगदान.'}
              </div>

              <div className="space-y-2 pt-2 text-xs border-t border-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Firm Status:</span>
                  <span className="font-semibold text-slate-200">Proprietary Firm</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Creation Date:</span>
                  <span className="font-semibold text-slate-200">Exist from 2016 (Incorp 04 June 2019)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Main Activities:</span>
                  <span className="font-semibold text-slate-200">All Over Maharashtra & India</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Key Services:</span>
                  <span className="font-semibold text-slate-200">Machinery Mfg, R&D, Labour Contractor</span>
                </div>
              </div>
            </div>

            {/* Factory & Headquarters Snapshot */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>{lang === 'en' ? 'Primary Factory & Branch Locations' : 'मुख्य फॅक्टरी व शाखा पत्ते'}</span>
              </div>
              <p className="text-slate-600">
                <strong>Factory:</strong> {COMPANY_INFO.factoryAddress}
              </p>
              <p className="text-slate-600">
                <strong>Branch 1:</strong> {COMPANY_INFO.branch1Address}
              </p>
              <p className="text-slate-600">
                <strong>Branch 2:</strong> {COMPANY_INFO.branch2Address}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-slate-500 font-medium">Business Org: 10 | Staff: 50+</span>
                <button
                  onClick={onOpenQuote}
                  className="text-rose-600 hover:text-rose-700 font-bold hover:underline cursor-pointer"
                >
                  {lang === 'en' ? 'Get Direct Proposal →' : 'थेट प्रस्ताव मागवा →'}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
