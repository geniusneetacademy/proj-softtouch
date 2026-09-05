import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Building,
  Layers
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_CATALOG } from '../data/companyData';
import { Language } from '../types';

interface InquiryQuoteModalProps {
  isOpen: boolean;
  initialProduct?: string;
  lang: Language;
  onClose: () => void;
}

export const InquiryQuoteModal: React.FC<InquiryQuoteModalProps> = ({
  isOpen,
  initialProduct,
  lang,
  onClose,
}) => {
  const [product, setProduct] = useState(initialProduct || 'Sanitary Napkin Vending Machine');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [quantity, setQuantity] = useState('1 Unit');
  const [orgType, setOrgType] = useState('Educational Institute / College');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    const message = `*SoftTouch Quotation Request*\nProduct: ${product}\nQuantity: ${quantity}\nClient Name: ${name}\nPhone: ${phone}\nCity/Location: ${city}\nCategory: ${orgType}\nRequirements: ${notes || 'Standard Model Specifications'}`;
    const url = `https://wa.me/919096000080?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-bold text-sm">
              ST
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                {lang === 'en' ? 'Request Official Price & Quotation' : 'अधिकृत कोटेशन व दरपत्रक मागवा'}
              </h3>
              <p className="text-[11px] text-slate-400">
                Direct factory pricing from SoftTouch Jalgaon
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {isSuccess ? (
            <div className="p-6 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-emerald-900">
                Inquiry Form Prepared!
              </h4>
              <p className="text-xs text-emerald-700">
                Click below to complete sending via WhatsApp, or call our direct engineer helpline.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {COMPANY_INFO.primaryPhone}</span>
                </a>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-white border border-slate-300 text-slate-700 font-semibold text-xs py-2.5 px-4 rounded-xl hover:bg-slate-50"
                >
                  Edit Information
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSend} className="space-y-3.5">
              
              {/* Product selector */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Selected Machine / Vehicle *
                </label>
                <input
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9000000000"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / District *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Jalgaon, Pune"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Required Quantity
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 1 Unit / 10 Units"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Organization Type
                </label>
                <select
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
                >
                  <option value="Municipal Corporation / Nagar Palika">Municipal Corporation / Nagar Palika</option>
                  <option value="Educational Institute / College / School">Educational Institute / College / School</option>
                  <option value="Commercial Entrepreneur / Business">Commercial Entrepreneur / Business</option>
                  <option value="Gram Panchayat / Zilla Parishad">Gram Panchayat / Zilla Parishad</option>
                  <option value="Industrial Factory / Warehouse">Industrial Factory / Warehouse</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Requirements or Questions
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Please send technical datasheet and delivery timelines for Jalgaon / Pune."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Fast WhatsApp Request</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer with Direct Helpline */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">Urgent Assistance:</span>
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="font-bold text-rose-600 hover:text-rose-700 inline-flex items-center gap-1 font-mono"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_INFO.primaryPhone}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
