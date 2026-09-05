import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  Calendar,
  X,
  FileText
} from 'lucide-react';
import { CERTIFICATIONS_LIST, COMPANY_INFO } from '../data/companyData';
import { Language, Certification } from '../types';

interface CertificationsSectionProps {
  lang: Language;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const categories = [
    { id: 'All', labelEn: 'All Certificates (10)', labelMr: 'सर्व प्रमाणपत्रे (१०)' },
    { id: 'Quality', labelEn: 'ISO, CE & GMP Quality', labelMr: 'गुणवत्ता (ISO, CE, GMP)' },
    { id: 'Government', labelEn: 'GeM & MSME Registrations', labelMr: 'शासकीय नोंदणी (GeM, MSME)' },
    { id: 'Legal', labelEn: 'Trademark, GST & Labor', labelMr: 'कायदेशीर परवाने (GST, ट्रेडमार्क)' },
  ];

  const filteredList = activeCategory === 'All'
    ? CERTIFICATIONS_LIST
    : CERTIFICATIONS_LIST.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'en' ? 'Verified Statutory Standards' : 'अधिकृत शासकीय व आंतरराष्ट्रीय प्रमाणपत्रे'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Company Certificates & Documentation Index' : 'कंपनी प्रमाणपत्रे व शासकीय नोंदणी सूची'}
          </h2>
          <p className="text-base text-slate-600">
            {lang === 'en'
              ? 'Complete statutory index from PDF Pages 3-4, 7, 9-16. Ready for government vendor empanelment, municipal tenders, and bank financing.'
              : 'शासकीय निविदा, महामंडळे व बँकिंग पडताळणीसाठी कंपनीचे संपूर्ण कायदेशीर व तांत्रिक परवाने.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelMr}
            </button>
          ))}
        </div>

        {/* Certifications Table / Grid */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4 w-12 text-center">Sr.</th>
                  <th className="p-4">Particulars / Document</th>
                  <th className="p-4">Issuing Authority</th>
                  <th className="p-4">Reg. Date</th>
                  <th className="p-4">Certificate / License No.</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredList.map((item) => (
                  <tr key={item.srNo} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-center font-bold text-slate-400">
                      {item.srNo}
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-slate-900">
                        {lang === 'en' ? item.particulars : item.particularsMr}
                      </div>
                      {item.scope && (
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          Scope: {item.scope}
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-slate-600 font-medium">
                      {item.issuingAuthority}
                    </td>
                    <td className="p-4 text-slate-600 whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="p-4">
                      <span className="font-mono text-xs font-semibold bg-slate-100 text-slate-800 px-2 py-1 rounded border border-slate-200">
                        {item.certificateNo}
                      </span>
                    </td>
                    <td className="p-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => setSelectedCert(item)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Details' : 'पहा'}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Highlight Badges Footer */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
              ISO
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">ISO 9001:2015</span>
              <span className="text-[11px] text-slate-500">ARS / ABAS Accredited</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
              CE
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">CE Compliance</span>
              <span className="text-[11px] text-slate-500">Directive 2006/42/EC</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
              GMP
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Good Manufacturing</span>
              <span className="text-[11px] text-slate-500">Euro UK Standards</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold shrink-0">
              TM
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Trademark Class 7</span>
              <span className="text-[11px] text-slate-500">Govt. Trade Marks Reg.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Certification Details Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base">
                  {lang === 'en' ? 'Statutory Certificate Record' : 'अधिकृत प्रमाणपत्र माहिती'}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  Particulars / Title:
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 mt-0.5">
                  {lang === 'en' ? selectedCert.particulars : selectedCert.particularsMr}
                </h4>
              </div>

              <div className="space-y-2.5 bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Issuing Authority:</span>
                  <span className="font-semibold text-slate-900 text-right">{selectedCert.issuingAuthority}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Certificate / License No:</span>
                  <span className="font-mono font-bold text-emerald-700">{selectedCert.certificateNo}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Registration / Issue Date:</span>
                  <span className="font-medium text-slate-900">{selectedCert.date}</span>
                </div>
                {selectedCert.validUntil && (
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Validity Date:</span>
                    <span className="font-semibold text-emerald-600">{selectedCert.validUntil}</span>
                  </div>
                )}
                {selectedCert.scope && (
                  <div className="py-1">
                    <span className="text-slate-500 block mb-1">Approved Scope:</span>
                    <span className="font-semibold text-slate-800 bg-white p-2 rounded block border border-slate-200">
                      {selectedCert.scope}
                    </span>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-slate-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Extracted directly from SoftTouch official documentation dossier (PDF Pages 3-16).</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                {lang === 'en' ? 'Close Record' : 'बंद करा'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
