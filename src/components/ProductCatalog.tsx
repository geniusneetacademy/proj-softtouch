import React, { useState } from 'react';
import { 
  Check, 
  ChevronRight, 
  Eye, 
  Flame, 
  Heart, 
  HelpCircle, 
  Layers, 
  Scale, 
  ShieldAlert, 
  Sparkles, 
  Trash2, 
  Truck, 
  X,
  Phone,
  Droplets,
  Radio
} from 'lucide-react';
import { PRODUCTS_CATALOG, COMPANY_INFO } from '../data/companyData';
import { Language, ProductItem } from '../types';

interface ProductCatalogProps {
  lang: Language;
  onOpenQuote: (productName?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ lang, onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Machineries (11+)', labelMr: 'सर्व मशनरी (११+)' },
    { id: 'hygiene', labelEn: "Women's Hygiene", labelMr: 'महिला स्वच्छता' },
    { id: 'weighbridge', labelEn: 'Weighbridge & Scales', labelMr: 'भुईकाटा (वेब्रिज)' },
    { id: 'waste', labelEn: 'Waste & Recycling', labelMr: 'कचरा व्यवस्थापन' },
    { id: 'facility', labelEn: 'Facility & Cleanliness', labelMr: 'स्मार्ट सुविधा' },
    { id: 'safety', labelEn: 'Fire Safety', labelMr: 'अग्निशामक' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS_CATALOG 
    : PRODUCTS_CATALOG.filter(item => item.category === selectedCategory);

  const getProductIcon = (category: string) => {
    switch (category) {
      case 'hygiene':
        return <Heart className="w-5 h-5 text-rose-500" />;
      case 'weighbridge':
        return <Scale className="w-5 h-5 text-blue-500" />;
      case 'waste':
        return <Trash2 className="w-5 h-5 text-emerald-500" />;
      case 'facility':
        return <Radio className="w-5 h-5 text-purple-500" />;
      case 'safety':
        return <ShieldAlert className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-rose-600" />
            <span>{lang === 'en' ? 'Manufactured Machinery Portfolio' : 'उत्पादित मशनरी व उपकरणे'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Industrial & Institutional Machinery' : 'आधुनिक मशनरी व तंत्रज्ञान उत्पादने'}
          </h2>
          <p className="text-base text-slate-600">
            {lang === 'en'
              ? 'Engineered to national standards with ISO 9001:2015, CE compliance, and verified performance in public institutions.'
              : 'शासकीय व खाजगी क्षेत्रासाठी प्रमाणित गुणवत्ता व हमखास कार्यक्षमतेच्या मशनरी.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelMr}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Header Banner */}
                <div className="p-5 pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                      {getProductIcon(product.category)}
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block">
                        {lang === 'en' ? product.categoryLabel : product.categoryLabelMr}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {lang === 'en' ? product.name : product.nameMr}
                      </h3>
                    </div>
                  </div>

                  {product.popular && (
                    <span className="shrink-0 text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full border border-rose-200">
                      Popular
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'en' ? product.shortDesc : product.shortDescMr}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                      {lang === 'en' ? 'Core Capabilities:' : 'प्रमुख वैशिष्ट्ये:'}
                    </div>
                    {(lang === 'en' ? product.features : product.featuresMr).slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Models / Capacities Tag */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                      {lang === 'en' ? 'Standard Capacities:' : 'उपलब्ध क्षमता:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.modelsOrCapacities.map((model, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200/80"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Full Specs' : 'सविस्तर माहिती'}</span>
                </button>

                <button
                  onClick={() => onOpenQuote(lang === 'en' ? product.name : product.nameMr)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white px-3.5 py-2 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Inquire / Quote' : 'कोटेशन मागवा'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Fabrication */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold">
              {lang === 'en' 
                ? 'Need Customized Machine Specifications or Institutional Bulk Tenders?' 
                : 'कस्टम मशनरी डिझाइन अथवा शासकीय संस्थांसाठी मोठ्या प्रमाणात ऑर्डर हवी आहे?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {lang === 'en'
                ? 'We manufacture tailored models matching municipal tender parameters, school sizes, and industrial plant payloads.'
                : 'आमची फॅक्टरी आवश्यकतेनुसार सानुकूलित (custom) डिझाईन आणि फॅब्रिकेशन सेवा पुरवते.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote('Custom Machinery Requirement')}
              className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer shadow-md"
            >
              {lang === 'en' ? 'Consult Engineering Team' : 'अभियांत्रिकी टीमशी बोला'}
            </button>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block mb-0.5">
                  {lang === 'en' ? activeModalProduct.categoryLabel : activeModalProduct.categoryLabelMr}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'en' ? activeModalProduct.name : activeModalProduct.nameMr}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 space-y-6 overflow-y-auto text-slate-800 text-sm">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {lang === 'en' ? 'Detailed Overview' : 'सविस्तर माहिती'}
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {lang === 'en' ? activeModalProduct.description : activeModalProduct.descriptionMr}
                </p>
              </div>

              {/* Models List */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  {lang === 'en' ? 'Available Capacities & Models in PDF' : 'ब्रोशरमधील उपलब्ध मॉडेल्स व क्षमता'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProduct.modelsOrCapacities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Features */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  {lang === 'en' ? 'Technical Features & Advantages' : 'तांत्रिक वैशिष्ट्ये व फायदे'}
                </h4>
                <div className="space-y-2">
                  {(lang === 'en' ? activeModalProduct.features : activeModalProduct.featuresMr).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance & Standards */}
              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl flex items-center justify-between text-xs text-emerald-900">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'en' 
                      ? 'ISO 9001:2015 & CE Compliant Production • GeM Approved' 
                      : 'आयएसओ ९००१:२०१५ व सीई मानकांनुसार निर्मित • जीईएम पोर्टलवर उपलब्ध'}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-4 py-2 border border-slate-300 hover:bg-slate-100 rounded-xl text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Back' : 'मागे'}
              </button>

              <button
                onClick={() => {
                  const name = lang === 'en' ? activeModalProduct.name : activeModalProduct.nameMr;
                  setActiveModalProduct(null);
                  onOpenQuote(name);
                }}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Request Official Quotation' : 'अधिकृत कोटेशन मागवा'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
