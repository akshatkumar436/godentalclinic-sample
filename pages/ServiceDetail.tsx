
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DETAILED_SERVICES, TEAM } from '../constants';
import { ScrollReveal, CountUp } from '../components/Animations';
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, MapPin, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = DETAILED_SERVICES[id || ''];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Go Dental Clinic Dubai`;
    }
    // Reset carousel index when service changes
    setCurrentImageIndex(0);
  }, [service, id]);

  const nextImage = () => {
    if (service?.beforeAfter) {
      setCurrentImageIndex((prev) => (prev + 1) % service.beforeAfter.length);
    }
  };

  const prevImage = () => {
    if (service?.beforeAfter) {
      setCurrentImageIndex((prev) => (prev - 1 + service.beforeAfter.length) % service.beforeAfter.length);
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Service Not Found</h1>
        <Link to="/services" className="text-secondary-600 hover:underline">View All Services</Link>
      </div>
    );
  }

  // Filter related doctors
  const specialists = TEAM.filter(member => service.relatedDoctorIds.includes(member.id));

  // Helper component for statistics on specific pages like New Patients
  const ServiceStatItem = ({ value, label }: { value: string | number, label: string }) => {
    // Extract number and suffix from string values like "50,000+"
    const stringValue = String(value);
    const numericValue = parseInt(stringValue.replace(/,/g, '').replace(/\+/g, '').replace(/[^0-9.]/g, '')) || 0; // Supports decimals like 4.9
    const suffix = stringValue.includes('+') ? '+' : stringValue.includes('/5') ? '/5' : '';
    // Special handling for decimal count up if needed, but standard CountUp uses integers. 
    // For 4.9, we might just display static or multiply. Let's assume standard integer counting for simplicity or custom handling.
    
    return (
      <div className="text-center p-6 border-r border-slate-700 last:border-r-0">
        <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 flex justify-center items-center relative">
           {/* Ghost element for spacing */}
           <span className="opacity-0 select-none">{stringValue}</span>
           <div className="absolute inset-0 flex justify-center items-center">
             {/* If it contains a decimal, just show string for now or custom logic */}
             {stringValue.includes('.') ? (
               <span>{stringValue}</span>
             ) : (
               <>
                 <CountUp end={numericValue} />
                 <span>{suffix}</span>
               </>
             )}
           </div>
        </div>
        <div className="text-white text-sm md:text-base font-medium tracking-wide uppercase">{label}</div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-900/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">{service.introTitle}</p>
            <Link to="#booking" className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-secondary-500/30">
              Book Your Free Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">{service.introTitle}</h2>
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line mb-8">
                {service.introDescription}
              </p>
              {service.priceTag && (
                <div className="inline-block bg-secondary-100 text-secondary-800 text-xl font-bold px-6 py-2 rounded-full border border-secondary-200">
                  {service.priceTag}
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sub Types Section */}
      {service.subTypes && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
             <ScrollReveal>
               <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">{service.subTypesTitle}</h2>
             </ScrollReveal>
             
             {service.subTypesLayout === 'list' ? (
               // List Layout (Zig-Zag)
               <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                 {service.subTypes.map((type, idx) => (
                   <ScrollReveal key={idx} delay={idx * 100}>
                     <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                       {type.image && (
                         <div className="w-full md:w-1/2">
                           <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 relative group">
                             <img src={type.image} alt={type.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                           </div>
                         </div>
                       )}
                       <div className="w-full md:w-1/2 text-center md:text-left">
                         <h3 className="text-2xl font-bold text-slate-800 mb-4">{type.title}</h3>
                         <p className="text-slate-600 leading-relaxed whitespace-pre-line">{type.description}</p>
                       </div>
                     </div>
                   </ScrollReveal>
                 ))}
               </div>
             ) : (
               // Grid Layout (Default)
               <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${service.id === 'new-patients' ? 'max-w-5xl mx-auto' : ''}`}>
                  {service.subTypes.map((type, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100}>
                      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                         {type.image && <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />}
                         <div className="p-6 flex-grow flex flex-col justify-center text-center">
                            <h3 className="font-bold text-lg text-slate-800 mb-2">{type.title}</h3>
                            {type.description && <p className="text-slate-600 text-sm">{type.description}</p>}
                         </div>
                      </div>
                    </ScrollReveal>
                  ))}
               </div>
             )}
          </div>
        </section>
      )}
      
      {/* Statistics Section (For New Patients Page) */}
      {service.showStatistics && (
        <section className="bg-slate-900 py-12 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceStatItem label="Years of Experience" value="20+" />
                <ServiceStatItem label="Google Rating" value="4.9/5" />
                <ServiceStatItem label="Treatments Completed" value="50K+" />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
      
      {/* Additional Content Section (e.g. Importance of Children's Teeth) */}
      {service.additionalContent && (
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                {service.additionalContentTitle && (
                  <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">{service.additionalContentTitle}</h2>
                )}
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-amber-100">
                  <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
                    {service.additionalContent}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {service.benefits.length > 0 && (
        <section className="py-20 bg-primary-900 text-white">
          <div className="container mx-auto px-4">
             <ScrollReveal>
               <h2 className="text-3xl font-bold text-center mb-12 text-secondary-400">
                  {service.benefitsTitle || "Why Choose Us"}
               </h2>
             </ScrollReveal>
             <div className="grid md:grid-cols-3 gap-8">
               {service.benefits.map((benefit, idx) => (
                 <ScrollReveal key={idx} delay={idx * 50}>
                   <div className="flex items-start gap-4 p-4 border border-primary-700 rounded-lg bg-primary-800/50 hover:bg-primary-800 transition-colors h-full">
                      <CheckCircle className="text-secondary-500 shrink-0 mt-1" size={20} />
                      <span className="font-medium text-lg">{benefit}</span>
                   </div>
                 </ScrollReveal>
               ))}
             </div>
          </div>
        </section>
      )}
      
      {/* Video Section */}
      {service.videoSection && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">{service.videoSection.title}</h2>
            </ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl aspect-video relative group">
                  <iframe 
                    src={service.videoSection.videoUrl} 
                    title="Patient Testimonial"
                    className="w-full h-full absolute inset-0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="bg-secondary-50 p-8 rounded-3xl relative">
                  <div className="text-6xl text-secondary-200 font-serif absolute top-4 left-6">"</div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 relative z-10">Patient Testimonials</h3>
                  <p className="text-slate-600 text-lg italic mb-6 relative z-10 leading-relaxed">
                     "{service.videoSection.testimonialText}"
                  </p>
                  <div className="flex items-center gap-2 font-bold text-slate-800">
                    <div className="w-10 h-10 bg-secondary-200 rounded-full flex items-center justify-center text-secondary-700">
                      {service.videoSection.patientName.charAt(0)}
                    </div>
                    {service.videoSection.patientName}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Specialists */}
      {specialists.length > 0 && (
        <section className="py-20 bg-slate-50">
           <div className="container mx-auto px-4">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Our Specialist {service.title.replace('Treatment', '')} Dentists</h2>
                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                  Meet the highly experienced team dedicated to your treatment.
                </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                 {specialists.map((doc, idx) => (
                   <ScrollReveal key={doc.id} delay={idx * 100}>
                      <Link to={`/team/${doc.id}`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-all group h-full">
                         <img src={doc.image} alt={doc.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-secondary-50 group-hover:border-secondary-200 transition-colors" />
                         <h3 className="font-bold text-lg text-slate-800 mb-1">{doc.name}</h3>
                         <p className="text-secondary-600 text-sm font-medium mb-2">{doc.role}</p>
                         <p className="text-slate-500 text-xs mb-4 line-clamp-3">{doc.bio}</p>
                         <span className="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                           Read More <ArrowRight size={14} />
                         </span>
                      </Link>
                   </ScrollReveal>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* Before & After Gallery - Carousel */}
      {service.beforeAfter && service.beforeAfter.length > 0 && (
        <section className="py-20 bg-white">
           <div className="container mx-auto px-4">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Patient Transformations</h2>
              </ScrollReveal>
              
              <div className="max-w-4xl mx-auto relative">
                <ScrollReveal>
                  <div className="bg-slate-50 rounded-xl overflow-hidden shadow-md border border-slate-100">
                    {/* Carousel Container */}
                    <div className="relative">
                      {/* Current Slide */}
                      <div className="grid md:grid-cols-2 gap-0.5 animate-in fade-in duration-500" key={currentImageIndex}>
                        {/* Before Image */}
                        <div className="relative group">
                          <img 
                            src={service.beforeAfter[currentImageIndex].before} 
                            alt="Before" 
                            className="w-full h-64 md:h-80 object-cover" 
                          />
                          <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">Before</span>
                        </div>
                        {/* After Image */}
                        <div className="relative group">
                          <img 
                            src={service.beforeAfter[currentImageIndex].after} 
                            alt="After" 
                            className="w-full h-64 md:h-80 object-cover" 
                          />
                          <span className="absolute bottom-4 left-4 bg-secondary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg">After</span>
                        </div>
                      </div>
                      
                      {/* Caption */}
                      <div className="p-4 text-center border-t border-slate-100 bg-white">
                        <h3 className="font-bold text-lg text-slate-800">{service.beforeAfter[currentImageIndex].label}</h3>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Navigation Controls - Only show if more than 1 item */}
                {service.beforeAfter.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 bg-white text-slate-800 p-3 rounded-full shadow-lg hover:bg-secondary-50 hover:text-secondary-600 transition-all border border-slate-100 z-10 hidden md:block"
                      aria-label="Previous Transformation"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 bg-white text-slate-800 p-3 rounded-full shadow-lg hover:bg-secondary-50 hover:text-secondary-600 transition-all border border-slate-100 z-10 hidden md:block"
                      aria-label="Next Transformation"
                    >
                      <ChevronRight size={28} />
                    </button>
                    
                    {/* Mobile Navigation & Dots */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                       <button onClick={prevImage} className="md:hidden p-2 bg-slate-100 rounded-full"><ChevronLeft size={20} /></button>
                       <div className="flex gap-2">
                        {service.beforeAfter.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === currentImageIndex ? 'bg-secondary-500 w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                       </div>
                       <button onClick={nextImage} className="md:hidden p-2 bg-slate-100 rounded-full"><ChevronRight size={20} /></button>
                    </div>
                  </>
                )}
              </div>
           </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
             <ScrollReveal>
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-slate-800 mb-2">{service.faqTitle || "Frequently Asked Questions"}</h2>
                 {service.faqDescription && (
                   <p className="text-slate-600">{service.faqDescription}</p>
                 )}
               </div>
             </ScrollReveal>
             <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <ScrollReveal key={idx} delay={idx * 50}>
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                       <button 
                         onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                         className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                       >
                         {faq.question}
                         {openFaqIndex === idx ? <ChevronUp size={20} className="text-secondary-500" /> : <ChevronDown size={20} className="text-slate-400" />}
                       </button>
                       <div className={`px-5 text-slate-600 overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                          {faq.answer}
                       </div>
                    </div>
                  </ScrollReveal>
                ))}
             </div>
          </div>
        </section>
      )}

      {/* Final CTA with Clinic Selection */}
      <section id="booking" className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
           <ScrollReveal>
             <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                   <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Consultation</h2>
                   <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                      {service.title === 'Children\'s Dentistry' 
                        ? "Ensure your child's healthy smile with our expert pediatric dentists. Book a consultation today." 
                        : "Prioritize your oral health with expert care. Book a consultation today."}
                   </p>
                   
                   <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link 
                        to={`/contact?loc=bur_dubai&service=${service.id}`}
                        className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <MapPin size={20} /> Book Now
                      </Link>
                   </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
             </div>
           </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
