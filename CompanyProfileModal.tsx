import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Building2, 
  ShieldCheck, 
  Award, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  FileText,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, CERTIFICATIONS_LIST, E_VEHICLES_DATA } from '../data/companyData';
import { Language } from '../types';

interface CompanyProfileModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  lang,
  onClose
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col max-h-[92vh] my-auto">
        
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white p-4 px-6 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-rose-400" />
            <h3 className="font-bold text-sm sm:text-base">
              SoftTouch Official Company Profile & Dossier (PDF Source)
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 text-slate-800 text-xs sm:text-sm print:p-0">
          
          {/* Document Letterhead */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                  Soft<span className="text-rose-600">Touch</span>
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-300 px-1.5 py-0.5 rounded">
                  TM
                </span>
              </div>
              <p className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-xs text-rose-600 font-semibold">
                {COMPANY_INFO.motto}
              </p>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <span className="inline-block bg-slate-900 text-white font-bold text-xs px-2.5 py-1 rounded">
                AN ISO 9001:2015 Certified Company
              </span>
              <p className="text-xs text-slate-600">
                Manufacturer of Machines & Tools, Services
              </p>
              <p className="text-[11px] font-mono text-slate-500">
                GSTIN: {COMPANY_INFO.gstin}
              </p>
            </div>
          </div>

          {/* Section 1: Company Information (Page 2 of PDF) */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-1.5 uppercase tracking-wide">
              Company Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 text-xs sm:text-sm">
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Business Name:</strong>
                <span className="text-slate-700">SoftTouch Sales & Services</span>
              </div>
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Company Status:</strong>
                <span className="text-slate-700">Proprietary Firm</span>
              </div>
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Person in Charge:</strong>
                <span className="text-slate-700 font-bold">{COMPANY_INFO.personInCharge} (Mob: 9096000080)</span>
              </div>
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Phone Numbers:</strong>
                <span className="text-slate-700 font-mono">+91 9096000080, 9970022077</span>
              </div>
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Email Address:</strong>
                <span className="text-slate-700 font-mono">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Website Address:</strong>
                <span className="text-slate-700 font-mono">{COMPANY_INFO.website}</span>
              </div>
              <div className="flex gap-2 md:col-span-2">
                <strong className="text-slate-900 min-w-36">Factory Address:</strong>
                <span className="text-slate-700">{COMPANY_INFO.factoryAddress}</span>
              </div>
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Branch Office 1:</strong>
                <span className="text-slate-700">{COMPANY_INFO.branch1Address}</span>
              </div>
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Branch Office 2:</strong>
                <span className="text-slate-700">{COMPANY_INFO.branch2Address}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Business Details & Capacity (Page 2 of PDF) */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-1.5 uppercase tracking-wide">
              Business Details & Capacity
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 text-xs sm:text-sm">
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Date of Creation:</strong>
                <span className="text-slate-700">Exist from 2016, Firm incorp Dt. 04 June 2019</span>
              </div>
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Activity Scope:</strong>
                <span className="text-slate-700">All over In Maharashtra & India</span>
              </div>
              <div className="flex gap-2 md:col-span-2">
                <strong className="text-slate-900 min-w-36">Main Products:</strong>
                <span className="text-slate-700">Manufacturer Of Machines, Tools and Services, Research & Development</span>
              </div>
              <div className="flex gap-2 md:col-span-2">
                <strong className="text-slate-900 min-w-36">Main Services:</strong>
                <span className="text-slate-700">Contractor, Labour Supplier and all Multiple functioning works</span>
              </div>
              <div className="flex gap-2">
                <strong className="text-slate-900 min-w-36">Human Resources:</strong>
                <span className="text-slate-700 font-semibold">Business Organization: 10 | Number of Employees: 50+</span>
              </div>
            </div>
          </div>

          {/* Section 3: Official Certifications Index (Page 3-4 of PDF) */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-1.5 uppercase tracking-wide">
              Certificates & Documentation Index
            </h4>
            <table className="w-full text-left text-xs border border-slate-200">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200">Sr.</th>
                  <th className="p-2 border-r border-slate-200">Particulars</th>
                  <th className="p-2 border-r border-slate-200">Issuing Authority</th>
                  <th className="p-2 border-r border-slate-200">Date</th>
                  <th className="p-2">Certificate / License No.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-normal">
                {CERTIFICATIONS_LIST.map((cert) => (
                  <tr key={cert.srNo}>
                    <td className="p-2 text-center font-bold text-slate-500 border-r border-slate-200">{cert.srNo}</td>
                    <td className="p-2 font-semibold text-slate-900 border-r border-slate-200">{cert.particulars}</td>
                    <td className="p-2 text-slate-700 border-r border-slate-200">{cert.issuingAuthority}</td>
                    <td className="p-2 text-slate-600 border-r border-slate-200 whitespace-nowrap">{cert.date}</td>
                    <td className="p-2 font-mono text-slate-800">{cert.certificateNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 4: Social Mission & Directives (Page 1 of PDF) */}
          <div className="space-y-3 bg-rose-50/60 p-5 rounded-2xl border border-rose-200">
            <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wide">
              Social Mission & Government Policy Directives (आमचे उद्दिष्ट)
            </h4>
            <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
              <p>
                <strong>१. महिला आरोग्य उद्दिष्ट:</strong> महिला आणि मुलीं यांना होणाऱ्या मासिकपाळाच्या त्रासात मदत करणे व सॅनिटरी नॅपकीन व्हेंडींग मशीन व डिस्ट्रॉयर ही दोन मशीन शहरी तसेच ग्रामीण भागात महिला आरोग्याची ही समस्या सोडविण्यासाठी आम्ही सदैव तत्पर असतो.
              </p>
              <p>
                <strong>२. शासन धोरण २०१४:</strong> शासन धोरण २०१४ मध्ये महिला व मुलींकरीता सॅनिटरी पॅड उपलब्ध करून देणे हे शासनाचे कर्तव्य आहे.
              </p>
              <p>
                <strong>३. स्वच्छ भारत अभियान:</strong> स्वच्छ भारत अभियानांतर्गत देखील या दोन्ही मशीनची आवश्यकता महानगरपालिका गुणांकनाकरिता आहे.
              </p>
              <p>
                <strong>४. शासकीय जी.आर. २०१५ व महिला आयोग:</strong> सर्व शाळा व महाविद्यालये तसेच शासकीय तंत्रनिकेतने जी.आर. क्रमांक २०१५ नुसार ही मशीन बसविणे बंधनकारक आहे.
              </p>
            </div>
          </div>

          {/* Official Sign-off */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <p>Issued by: SoftTouch Sales & Services, Jalgaon</p>
              <p>Verified against authentic trade records & GST registration.</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-900">Prof. Uday Motiram Yeshe</p>
              <p>Founder & Proprietor</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
