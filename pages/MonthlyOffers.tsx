
import React, { useEffect } from 'react';
import { OFFERS, FULL_INSURANCE_LIST, INSTALLMENT_PLANS } from '../constants';
import { ScrollReveal } from '../components/Animations';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Tag } from 'lucide-react';

const MonthlyOffers: React.FC = () => {
  useEffect(() => {
    document.title = "Exclusive Monthly Dental Offers | Go Dental Clinic Dubai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', "Unlock your smile's potential with our exclusive monthly dental offers. Affordable Invisalign, Braces, Whitening, and more at Go Dental Clinic.");
  }, []);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold mb-4">Exclusive Monthly Dental Offers</h1>
            <p className="text-primary-100 max-w-3xl mx-auto text-lg leading-relaxed">
              Unlock Your Smile's Potential with Our Exclusive Dental Offers for This Month
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {OFFERS.map((offer, idx) => (
              <div 
                key={offer.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-90">{offer.label}</p>
                    <p className="text-2xl font-bold">{offer.price}</p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">{offer.title}</h3>
                  <Link 
                    to={`/contact?service=${offer.id}`} 
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-colors uppercase tracking-wide shadow-md hover:shadow-lg"
                  >
                    Get Offer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Choose Go Dental Section (Reused from Insurance concept for consistency) */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Choose Go Dental Clinic for <br/>
                  <span className="text-secondary-600">Affordable Dental Care</span> with <br/>
                  Comprehensive Insurance Coverage.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Experience peace of mind with Go Dental Clinic, where we prioritize your oral health without burdening your budget. Recognizing the financial challenges associated with emergency dental services or routine checkups in Dubai, we have established partnerships with leading dental insurance providers in Dubai and the UAE.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  {FULL_INSURANCE_LIST.slice(0, 8).map((partner, idx) => (
                    <div key={idx} className="bg-white p-2 rounded shadow-sm w-20 h-12 flex items-center justify-center">
                       <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
               <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                 <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                   <Tag className="text-secondary-500" /> Easy Payment Plans
                 </h3>
                 <div className="space-y-6">
                    {INSTALLMENT_PLANS.map((plan, idx) => (
                      <div key={idx} className={`${plan.color} text-white p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform`}>
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-lg">{plan.bank}</h4>
                            <span className="bg-white/20 text-xs px-2 py-1 rounded">0% Interest</span>
                          </div>
                          <p className="text-3xl font-bold mb-1">{plan.interest}</p>
                          <p className="text-xs text-white/80">{plan.terms}</p>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors"></div>
                      </div>
                    ))}
                 </div>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-500 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="mb-8 text-secondary-100 max-w-xl mx-auto">Limited time offers available at both our Bur Dubai and Al Warqa clinics.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-secondary-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              <MapPin size={20} /> Book Appointment
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default MonthlyOffers;