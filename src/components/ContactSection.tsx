import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  Building, 
  User, 
  Globe,
  Truck,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organizationType: 'Municipal Corporation / Council',
    machineryType: 'Sanitary Napkin Vending & Destroyer',
    city: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct pre-filled WhatsApp message
    const message = `*SoftTouch Machinery Inquiry*\nName: ${formData.name}\nPhone: ${formData.phone}\nOrg: ${formData.organizationType}\nMachine: ${formData.machineryType}\nCity: ${formData.city}\nNotes: ${formData.notes}`;
    const whatsappUrl = `https://wa.me/919096000080?text=${encodeURIComponent(message)}`;
    
    // Open whatsapp in new window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
            <span>{lang === 'en' ? 'Direct Official Channels' : 'थेट संपर्क व चौकशी'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Connect with SoftTouch Leadership & Sales' : 'सॉफ्टटच सेल्स ॲण्ड सर्व्हिसेसशी संपर्क साधा'}
          </h2>
          <p className="text-base text-slate-300">
            {lang === 'en'
              ? 'Get instant quotations, municipal project tenders, machine demonstrations, or dealership inquiries.'
              : 'कोटेशन, शासकीय निविदा, मशीन प्रात्यक्षिक किंवा अधिक माहितीसाठी आजच संपर्क करा.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Contact Directory from PDF */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Person in Charge Box */}
            <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-600 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow">
                  UY
                </div>
                <div>
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                    Person in Charge
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {COMPANY_INFO.personInCharge}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Proprietor & Technical Director
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700 space-y-3 text-xs sm:text-sm">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 transition-colors"
                >
                  <span className="text-slate-300 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Primary Helpline:</span>
                  </span>
                  <span className="font-bold text-emerald-400 font-mono">{COMPANY_INFO.primaryPhone}</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.secondaryPhone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 transition-colors"
                >
                  <span className="text-slate-300 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Secondary Helpline:</span>
                  </span>
                  <span className="font-bold text-amber-300 font-mono">{COMPANY_INFO.secondaryPhone}</span>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 transition-colors"
                >
                  <span className="text-slate-300 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-rose-400" />
                    <span>Email:</span>
                  </span>
                  <span className="font-medium text-slate-200 text-xs truncate max-w-[200px]">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Department-Wise E-Vehicle Direct Numbers from PDF */}
            <div className="bg-slate-800/60 border border-slate-700/80 p-5 rounded-2xl space-y-3 text-xs">
              <span className="font-bold text-slate-300 uppercase tracking-wider block text-[11px]">
                {lang === 'en' ? 'Commercial E-Cart Model Helplines:' : 'ई-वाहन मॉडेलनिहाय थेट संपर्क नंबर:'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/60">
                  <span className="block text-slate-400 text-[10px]">YES Food Truck</span>
                  <a href="tel:+917350092004" className="font-mono font-bold text-amber-400 hover:underline">
                    +91 7350092004
                  </a>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/60">
                  <span className="block text-slate-400 text-[10px]">YES Cold Drink Truck</span>
                  <a href="tel:+917420032078" className="font-mono font-bold text-cyan-400 hover:underline">
                    +91 7420032078
                  </a>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/60">
                  <span className="block text-slate-400 text-[10px]">YES Fruits Truck</span>
                  <a href="tel:+917420922077" className="font-mono font-bold text-emerald-400 hover:underline">
                    +91 7420922077
                  </a>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/60">
                  <span className="block text-slate-400 text-[10px]">Weighbridge & Sanitary</span>
                  <a href="tel:+919096000080" className="font-mono font-bold text-rose-400 hover:underline">
                    +91 9096000080
                  </a>
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="bg-slate-800/60 border border-slate-700/80 p-5 rounded-2xl space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Factory Unit:</strong>
                  <p className="text-slate-300">{COMPANY_INFO.factoryAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-700">
                <Building className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Commercial Outlet:</strong>
                  <p className="text-slate-300">{COMPANY_INFO.golaniOffice}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Fast Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-200">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">
                Instant Quotation & Proposal Request
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {lang === 'en' ? 'Send an Inquiry / Tender Request' : 'थेट कोटेशन किंवा चौकशी पाठवा'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Pre-fills an inquiry ticket for our manufacturing dispatch team with instant WhatsApp & Call routing.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">
                  {lang === 'en' ? 'Inquiry Form Generated!' : 'चौकशी अर्ज तयार झाला!'}
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  {lang === 'en'
                    ? 'Your requirements have been formatted. Click below to chat directly with Prof. Uday Yeshe on WhatsApp.'
                    : 'आपली माहिती यशस्वीरित्या नोंदवली गेली आहे. खालील बटनावर क्लिक करून थेट व्हॉट्सॲपवर संपर्क साधा.'}
                </p>
                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/919096000080?text=${encodeURIComponent(`Hello SoftTouch, I am ${formData.name} inquiring about ${formData.machineryType} for ${formData.city}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-white border border-slate-300 text-slate-700 font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-slate-50"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? 'Full Name / Contact Person *' : 'आपले पूर्ण नाव *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Patil / Principal Deshmukh"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? 'Phone / WhatsApp Number *' : 'फोन / व्हॉट्सॲप नंबर *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? 'Organization / Buyer Type' : 'संस्थेचा / ग्राहकाचा प्रकार'}
                    </label>
                    <select
                      value={formData.organizationType}
                      onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white cursor-pointer"
                    >
                      <option value="Municipal Corporation / Nagar Palika">Municipal Corporation / Nagar Palika</option>
                      <option value="Gram Panchayat / Zilla Parishad">Gram Panchayat / Zilla Parishad</option>
                      <option value="School / College / Polytechnic">School / College / Polytechnic</option>
                      <option value="Private Business / Entrepreneur">Private Business / Entrepreneur</option>
                      <option value="Factory / Industrial Plant">Factory / Industrial Plant</option>
                      <option value="NGO / Social Organization">NGO / Social Organization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? 'City / District *' : 'शहर किंवा जिल्हा *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Jalgaon, Nashik, Pune, Mumbai"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'en' ? 'Select Machine / Product of Interest *' : 'आवश्यक मशनरी निवडा *'}
                  </label>
                  <select
                    value={formData.machineryType}
                    onChange={(e) => setFormData({ ...formData, machineryType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white cursor-pointer font-medium"
                  >
                    <option value="Sanitary Napkin Vending Machine">Sanitary Napkin Vending Machine (25, 50, 100 pads)</option>
                    <option value="Sanitary Napkin Destroyer (Incinerator)">Sanitary Napkin Destroyer (Incinerator)</option>
                    <option value="Sanitary Napkin Pads (Cottony Bulk)">Sanitary Napkin Pads (Cottony Bulk Pack)</option>
                    <option value="YES Food Truck (Commercial E-Cart)">YES Food Truck (Commercial E-Cart, 500kg)</option>
                    <option value="YES Cold Drink Truck (High Speed)">YES Cold Drink Truck (50 km/h, 600kg)</option>
                    <option value="YES Fruits & Veg Truck">YES Fruits & Produce Truck (Compact)</option>
                    <option value="YES Marketing / Roaming Office">YES Marketing / Roaming Office Vehicle</option>
                    <option value="Weight Bridge Machine (20T-100T)">Weight Bridge Machine (Truck Scale / भुईकाटा)</option>
                    <option value="Plastic Bailing Machine (Hydraulic Press)">Plastic Bailing Machine (20T-60T Press)</option>
                    <option value="Waste Composting Machine">Waste Composting Machine (Organic Manure)</option>
                    <option value="Industrial Shredder Machine">Industrial Heavy Duty Shredder Machine</option>
                    <option value="Toilet Feedback Monitoring System">Toilet Feedback Monitoring System (Smileys)</option>
                    <option value="Screening Trommel Conveyor">Screening Machine with Conveyor Belt</option>
                    <option value="Fire Extinguisher & Fire Balls">Fire Extinguisher & Fire Ball (Automatic)</option>
                    <option value="Industrial Water RO Plant">Industrial RO & Water Filtration Skid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'en' ? 'Estimated Quantity / Custom Requirement Details' : 'अपेक्षित संख्या किंवा इतर तपशील'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Need 5 units of Sanitary Vending & 5 units of Incinerators for a college campus; or need customized kitchen shelves in Food Truck."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Submit Inquiry & Connect with Engineering Team' : 'कोटेशन अर्ज पाठवा व इंजिनिअरशी बोला'}</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center pt-1">
                  {lang === 'en'
                    ? 'Your inquiry is routed directly to Prof. Uday Yeshe (+91 9096000080). Immediate response within working hours.'
                    : 'आपली माहिती थेट प्रोप्रायटर प्रा. उदय येशे यांच्याकडे पाठविली जाईल.'}
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
