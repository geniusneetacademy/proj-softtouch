import React from 'react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  School, 
  Building, 
  Award, 
  GraduationCap, 
  CheckCircle,
  FileCheck2,
  Users
} from 'lucide-react';
import { SOCIAL_INITIATIVES, COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';

interface SocialMissionSectionProps {
  lang: Language;
  onOpenQuote: (prod?: string) => void;
}

export const SocialMissionSection: React.FC<SocialMissionSectionProps> = ({ lang, onOpenQuote }) => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-rose-50/50 via-white to-slate-50 border-y border-rose-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>{lang === 'en' ? "Happy Women's - Social Responsibility" : 'महिला आरोग्य व सामाजिक बांधिलकी'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? SOCIAL_INITIATIVES.titleEn : SOCIAL_INITIATIVES.titleMr}
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            {lang === 'en' ? SOCIAL_INITIATIVES.introEn : SOCIAL_INITIATIVES.introMr}
          </p>
        </div>

        {/* 4 Statutory & Institutional Directives from the PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SOCIAL_INITIATIVES.points.map((pt, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm border border-rose-100 shrink-0">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {lang === 'en' ? pt.titleEn : pt.titleMr}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-12">
                  {lang === 'en' ? pt.descEn : pt.descMr}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'en' ? 'Official Proposal & Supply Available' : 'अधिकृत प्रस्ताव व पुरवठा उपलब्ध'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Workshop & Institutional Collaboration Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>{lang === 'en' ? 'Awareness Workshops in Schools & Colleges' : 'शाळा व महाविद्यालयांत जनजागृती व्याख्याने'}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {lang === 'en' 
                  ? 'Guiding Students & Breaking Taboos on Menstrual Health' 
                  : 'शाळेतील विद्यार्थिनींना मार्गदर्शन करतांना श्री उदय येशे'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Beyond machine supply, Prof. Uday Yeshe personally conducts educational sessions across schools and colleges in Maharashtra to educate students on safe sanitary disposal, hygienic practices, and destigmatizing menstrual health.'
                  : 'फक्त मशनरी बसविणे एवढेच नव्हे, तर प्रत्यक्ष शाळा-महाविद्यालयांमध्ये जाऊन विद्यार्थिनींना मासिकपाळीच्या स्वच्छता नियमांची माहिती देणे व त्यांच्या मनात आत्मविश्वास निर्माण करण्याचे कार्य कंपनीचे संस्थापक सातत्याने करत आहेत.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block">Schools & Colleges</span>
                  <span className="text-slate-500">Government GR 2015 Mandate</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block">Nagar Palika Wards</span>
                  <span className="text-slate-500">Swachh Bharat Abhiyan Ranking</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block">Gram Panchayats</span>
                  <span className="text-slate-500">Rural Women Health Schemes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-rose-600 to-rose-700 text-white p-6 sm:p-7 rounded-2xl shadow-lg space-y-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {lang === 'en' ? 'Institutional Proposal Request' : 'शाळा / महानगरपालिका प्रस्ताव मागणी'}
              </h4>
              <p className="text-xs text-rose-100 leading-relaxed">
                {lang === 'en'
                  ? 'We submit comprehensive tender proposals, demonstration units, and installation documentation tailored for administrative sanction.'
                  : 'शासकीय निधी, जिल्हा नियोजन समिती (DPC), अथवा सीएसआर निधी अंतर्गत मशनरी बसविण्यासाठी अधिकृत कोटेशन व तांत्रिक तपशील मिळवा.'}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote('Sanitary Vending & Destroyer Institutional Proposal')}
                  className="w-full bg-white text-rose-700 hover:bg-rose-50 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow transition-all cursor-pointer text-center"
                >
                  {lang === 'en' ? 'Request Official Institutional Tender Proposal' : 'अधिकृत प्रस्ताव व अंदाजपत्रक मागवा'}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
