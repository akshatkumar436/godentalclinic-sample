import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, Award, Users, CheckCircle, MapPin, ExternalLink } from 'lucide-react';
import { SERVICES, TESTIMONIALS, COMPANY_INFO, TEAM_BUR_DUBAI, TEAM_AL_WARQA, MAP_CONFIG, INSURANCE_PARTNERS } from '../constants';
import { ScrollReveal, CountUp } from '../components/Animations';

// Helper component for individual stat items
const StatItem = ({ value, label }: { value: string | number, label: string }) => {
  // Extract number and suffix from string values like "50,000+"
  const stringValue = String(value);
  const numericValue = parseInt(stringValue.replace(/,/g, '').replace(/\+/g, '').replace(/[^0-9]/g, '')) || 0;
  const suffix = stringValue.includes('+') ? '+' : '';

  return (
    <div className="p-4 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 cursor-default">
      {/* 
        Fix: Use a ghost element to reserve the width of the final number.
        This prevents the text from resizing/jumping as it counts up from 0.
      */}
      <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex justify-center items-center relative">
        {/* Invisible Ghost Element - holds the space */}
        <span className="opacity-0 select-none">{numericValue.toLocaleString()}{suffix}</span>
        
        {/* Visible Animated Element - positioned absolutely to overlay the ghost */}
        <div className="absolute inset-0 flex justify-center items-center">
          <CountUp end={numericValue} />
          <span className="text-secondary-400 ml-0.5">{suffix}</span>
        </div>
      </div>
      <div className="text-sm text-primary-200 uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
};

const Home: React.FC = () => {
  // State to manage the selected clinic location
  const [activeLocation, setActiveLocation] = useState<'Bur Dubai' | 'Al Warqa'>('Bur Dubai');

  useEffect(() => {
    document.title = `Go Dental Clinic ${activeLocation} | Trusted Dentists in Dubai`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', "Go Dental Clinic offers affordable and comprehensive dental care in Dubai. Specializing in Orthodontics, Implants, and Cosmetic Dentistry. Call us today!");
  }, [activeLocation]);

  // Determine which team to show based on location
  const activeTeam = activeLocation === 'Bur Dubai' ? TEAM_BUR_DUBAI : TEAM_AL_WARQA;
  const activeMap = MAP_CONFIG[activeLocation];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white overflow-hidden transition-all duration-700">
        <div className={`absolute inset-0 z-0 opacity-20 bg-cover bg-center transition-opacity duration-700 ${activeLocation === 'Bur Dubai' ? "bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068')]" : "bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')]"}`}></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex flex-col sm:flex-row sm:items-center gap-3 bg-white/10 backdrop-blur-md p-2 pr-6 rounded-lg border border-white/20">
                <span className="bg-secondary-500 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                  Select Location
                </span>
                <div className="flex items-center gap-2">
                   <select 
                      value={activeLocation}
                      onChange={(e) => setActiveLocation(e.target.value as 'Bur Dubai' | 'Al Warqa')}
                      className="bg-transparent border-none text-white font-semibold focus:ring-0 cursor-pointer text-lg appearance-none pr-8 bg-no-repeat bg-right"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
                   >
                     <option value="Bur Dubai" className="text-slate-800">Bur Dubai Clinic</option>
                     <option value="Al Warqa" className="text-slate-800">Al Warqa Clinic</option>
                   </select>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Dental Care in <br/>
                <span className="text-secondary-400">{activeLocation}</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed max-w-xl">
                 Welcome to Go Dental Clinic {activeLocation}, where expert care meets a personal touch. Join over 50,000 happy patients who trust us with their smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all hover:shadow-lg hover:shadow-secondary-500/20 flex items-center justify-center gap-2">
                  Book at {activeLocation} <ChevronRight size={18} />
                </Link>
                <a href="#location-map" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2">
                  <MapPin size={18} /> View Map
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Stats Banner */}
        <div className="bg-primary-800/80 backdrop-blur-md border-t border-primary-700 relative z-10">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <ScrollReveal delay={0}>
                <StatItem value={COMPANY_INFO.yearsExperience + "+"} label="Years of Excellence" />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <StatItem value={COMPANY_INFO.patientsCount} label="Happy Patients" />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <StatItem value={COMPANY_INFO.reviewsCount} label="Google Reviews" />
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <StatItem value="2" label="Prime Locations" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary-500 uppercase tracking-wide mb-2">Why Choose Go Dental {activeLocation}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Comprehensive Care Under One Roof</h3>
            <p className="text-slate-600">We combine advanced technology with a gentle touch to provide the best dental experience in Dubai.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-slate-100 h-full">
                <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center text-primary-600 mb-6">
                  <Award size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Expert Team</h4>
                <p className="text-slate-600 leading-relaxed">
                  Our multilingual team consists of specialists in orthodontics, surgery, and pediatrics, ensuring you get expert care for every procedure.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-slate-100 h-full">
                <div className="bg-secondary-100 w-14 h-14 rounded-full flex items-center justify-center text-secondary-600 mb-6">
                  <Clock size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Advanced Technology</h4>
                <p className="text-slate-600 leading-relaxed">
                  Equipped with an in-house dental lab, 3D imaging, and laser technology for faster, more precise, and pain-free treatments.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-slate-100 h-full">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <Users size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Patient-First Approach</h4>
                <p className="text-slate-600 leading-relaxed">
                  We believe in affordable excellence. With transparent pricing and flexible payment plans, top-tier dentistry is accessible to everyone.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location Specific Doctors Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-secondary-400 mb-4">Our Dentists in {activeLocation} Clinic</h2>
                <p className="text-slate-300">Meet the expert specialists dedicated to your smile at our {activeLocation} branch.</p>
              </ScrollReveal>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {activeTeam.map((member, idx) => (
                <ScrollReveal key={member.id} delay={idx * 100}>
                   <Link to={`/team/${member.id}`} className="block h-full">
                     <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-secondary-500 transition-all hover:-translate-y-1 h-full flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left cursor-pointer group">
                        <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover border-2 border-secondary-500 group-hover:scale-105 transition-transform" />
                        <div>
                          <h3 className="font-bold text-lg text-white mb-1 group-hover:text-secondary-400 transition-colors">{member.name}</h3>
                          <p className="text-secondary-400 text-sm mb-3 font-medium">{member.role}</p>
                          <p className="text-slate-400 text-sm line-clamp-2">{member.bio}</p>
                        </div>
                     </div>
                   </Link>
                </ScrollReveal>
             ))}
           </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Primary Services</h2>
              <p className="text-slate-600 max-w-2xl">From routine hygiene to complex full-mouth rehabilitation.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-secondary-600 font-semibold hover:text-secondary-700">
              View All Services <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 100}>
                <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-secondary-400 hover:shadow-lg transition-all group h-full">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-secondary-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.shortDescription}</p>
                  {service.price && (
                    <div className="inline-block bg-primary-50 text-primary-700 text-sm font-semibold px-3 py-1 rounded-md mb-6">
                      {service.price}
                    </div>
                  )}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-500">
                        <CheckCircle size={16} className="text-secondary-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="text-primary-600 font-medium hover:underline text-sm flex items-center">
                    Learn more <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-secondary-600 font-semibold hover:text-secondary-700">
              View All Services <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Map Section - Dynamic */}
      <section id="location-map" className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12 items-start">
              <ScrollReveal>
                <div>
                   <span className="text-secondary-500 font-bold uppercase tracking-wider text-sm mb-2 block">Visit Us</span>
                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Dental Clinic in {activeLocation}</h2>
                   <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                         <p className="text-slate-600 leading-relaxed whitespace-pre-line">{activeMap.description}</p>
                      </div>

                      <div className="flex items-start gap-4">
                         <div className="bg-primary-50 p-3 rounded-full text-primary-600 mt-1">
                            <MapPin size={24} />
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-slate-800">Address</h3>
                            <p className="text-slate-600">{activeMap.address}</p>
                            {activeMap.externalMapLink && (
                              <a href={activeMap.externalMapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-secondary-600 font-semibold hover:text-secondary-700 mt-2 text-sm">
                                View on Google Maps <ExternalLink size={14} className="ml-1" />
                              </a>
                            )}
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="bg-primary-50 p-3 rounded-full text-primary-600 mt-1">
                            <Clock size={24} />
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-slate-800">Working Hours</h3>
                            <p className="text-slate-600">Open 7 Days a Week</p>
                            <div className="mt-2 text-sm text-slate-500">
                              <div className="flex justify-between gap-8 py-1 border-b border-dashed border-slate-200"><span>Monday - Sunday</span> <span>09:00 AM - 09:00 PM</span></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                 <div className="sticky top-24">
                   <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg h-[400px] border-4 border-white relative group">
                      <iframe 
                         src={activeMap.mapUrl}
                         width="100%" 
                         height="100%" 
                         style={{ border: 0 }} 
                         allowFullScreen 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"
                         title={`Map of Go Dental Clinic ${activeLocation}`}
                      ></iframe>
                   </div>
                   <div className="mt-4 text-center">
                     <a 
                       href={activeMap.externalMapLink} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-700 hover:text-secondary-600 hover:border-secondary-500 px-6 py-3 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
                     >
                       <MapPin size={18} className="mr-2" />
                       Open in Google Maps App
                     </a>
                   </div>
                 </div>
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12 text-secondary-500">Our Insurance Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale hover:grayscale-0 transition-all duration-500">
              {INSURANCE_PARTNERS.map((partner, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                   <img src={partner.logo} alt={partner.name} className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal key={t.id} delay={idx * 100}>
                <div 
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6 flex-grow">"{t.content}"</p>
                  <div className="mt-auto">
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role} • {t.serviceUsed}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-500 py-16">
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-secondary-50 text-lg mb-8 max-w-2xl mx-auto">
              Book your consultation today at our {activeLocation} clinic. We accept most major insurances and offer flexible payment plans.
            </p>
            <Link to="/contact" className="bg-white text-secondary-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Schedule Appointment at {activeLocation}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;