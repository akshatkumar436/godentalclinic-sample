
import React, { useEffect } from 'react';
import { FULL_INSURANCE_LIST, INSTALLMENT_PLANS } from '../constants';
import { ScrollReveal } from '../components/Animations';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Insurance: React.FC = () => {
  useEffect(() => {
    document.title = "Insurance & Payment Plans | Go Dental Clinic Dubai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', "We accept all major insurance providers in Dubai. View our partners and 0% interest installment plans for affordable dental care.");
  }, []);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold mb-4">Our Insurance Providers</h1>
            <p className="text-primary-100 max-w-3xl mx-auto text-lg leading-relaxed">
              Choose Go Dental Clinic for Affordable Dental Care with Comprehensive Insurance Coverage
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Intro Text */}
      <div className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <ScrollReveal delay={100}>
          <p className="text-slate-600 text-lg leading-relaxed">
            Experience peace of mind with Go Dental Clinic, where we prioritize your oral health without burdening your budget. Recognizing the financial challenges associated with emergency dental services or routine checkups in Dubai, we have established partnerships with leading dental insurance providers in Dubai and the UAE. Our commitment is to offer you a seamless and cashless dental experience through our network.
          </p>
        </ScrollReveal>
      </div>

      {/* Direct Billing Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-center text-slate-800 mb-12 uppercase tracking-wide">
              We have direct billing with the following insurance providers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {FULL_INSURANCE_LIST.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center h-32 hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-20 container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Payment Options</h2>
          
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Easy Payment Plan Header */}
            <div className="flex items-center gap-3 mb-6">
               <CheckCircle className="text-secondary-500" size={24} />
               <h3 className="text-xl font-semibold text-slate-700">Easy Payment Plan</h3>
            </div>
            
            <p className="text-slate-600 mb-8 pl-9">
              To ensure easy payment, all major credit cards are accepted at our dental clinic. We also provide monthly payment plans for certain dental procedures.
            </p>

            {/* 0% Interest Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <CheckCircle className="text-secondary-500" size={24} />
                 <h3 className="text-xl font-semibold text-slate-700">0% Interest Installment Plans</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-9">
                {INSTALLMENT_PLANS.map((plan, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col">
                    {/* Card Header */}
                    <div className={`${plan.color} text-white p-6 relative overflow-hidden`}>
                      <div className="relative z-10">
                        <h4 className="text-2xl font-bold mb-1">{plan.bank}</h4>
                        <div className="text-5xl font-extrabold my-4">{plan.interest}</div>
                        <div className="inline-block bg-white/20 px-3 py-1 rounded text-sm font-medium backdrop-blur-sm">
                          Interest Installment Plan
                        </div>
                      </div>
                      {/* Decorative circle */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    </div>
                    
                    {/* Card Body */}
                    <div className="p-8 flex-grow flex flex-col items-center text-center">
                      <div className="bg-slate-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-slate-400 font-bold text-xl">i</div>
                      <h5 className="font-bold text-slate-800 mb-2">{plan.offerTitle}</h5>
                      <p className="text-slate-600 mb-8">{plan.terms}</p>
                      
                      <Link 
                        to="/contact" 
                        className="mt-auto bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Insurance;
