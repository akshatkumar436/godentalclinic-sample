import React, { useEffect } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/Animations';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Dental Services | Orthodontics, Implants, Cosmetic | Go Dental";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', "Explore our full range of dental services including Invisalign, Veneers, Implants, and Pediatric Dentistry. Affordable prices and expert care.");
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold mb-4">Our Dental Services</h1>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Comprehensive dental solutions tailored to your unique needs, utilizing state-of-the-art technology and an in-house lab.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="space-y-12">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <ScrollReveal key={service.id} delay={index * 100}>
                <div id={service.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300 transform-gpu">
                  <div className={`md:w-1/3 min-h-[300px] bg-slate-200 relative ${isReversed ? 'md:order-2 md:-ml-px' : ''}`}>
                     <img 
                      src={`https://picsum.photos/800/600?random=${index + 10}`} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-primary-900/10"></div>
                  </div>
                  
                  <div className={`md:w-2/3 p-8 md:p-12 flex flex-col justify-center relative z-10 ${!isReversed ? 'md:-ml-px' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary-50 p-2 rounded-lg text-primary-600">
                        <div className="font-bold text-xs uppercase tracking-wider">{service.title.split(' ')[0]}</div>
                      </div>
                      {service.price && (
                         <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">{service.price}</span>
                      )}
                    </div>
                    
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">{service.title}</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.fullDescription}</p>
                    
                    <h4 className="font-semibold text-slate-800 mb-3">Key Benefits:</h4>
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-slate-600 text-sm">
                          <CheckCircle size={16} className="text-secondary-500 mr-2 shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <Link to="/contact" className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                        <Phone size={18} className="mr-2" /> Book {service.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="container mx-auto px-4 mt-20 text-center">
         <ScrollReveal>
           <h2 className="text-2xl font-bold text-slate-800 mb-4">Not sure what you need?</h2>
           <p className="text-slate-600 mb-8">Schedule a general consultation and our experts will create a personalized treatment plan for you.</p>
           <Link to="/contact" className="text-secondary-600 font-bold hover:underline text-lg">Contact Us Today</Link>
         </ScrollReveal>
      </div>
    </div>
  );
};

export default Services;