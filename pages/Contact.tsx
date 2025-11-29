import React, { useEffect } from 'react';
import { COMPANY_INFO, MAP_CONFIG } from '../constants';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../components/Animations';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us | Book Appointment | Go Dental Clinic Dubai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', "Book your dental appointment at Go Dental Clinic. Located in Bur Dubai and Al Warqa. Open 7 days a week. Call +971 4 123 4567.");
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
            <p className="text-primary-100">We are here to answer your questions and help you achieve a healthy smile.</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Clinic Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary-50 p-3 rounded-full text-secondary-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Phone</h3>
                      <p className="text-slate-600">{COMPANY_INFO.phone}</p>
                      <p className="text-xs text-slate-500 mt-1">Available 9am - 9pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary-50 p-3 rounded-full text-secondary-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <p className="text-slate-600">{COMPANY_INFO.email}</p>
                      <p className="text-xs text-slate-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary-50 p-3 rounded-full text-secondary-600 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Opening Hours</h3>
                      <p className="text-slate-600">Open 7 Days a Week</p>
                      <p className="text-slate-600">9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                 <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Locations</h2>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="font-bold text-primary-700 flex items-center gap-2 mb-2">
                       <MapPin size={18} /> Bur Dubai Branch
                     </h3>
                     <p className="text-slate-600 text-sm ml-6 mb-2">{COMPANY_INFO.address_bur_dubai}</p>
                     <a 
                       href={MAP_CONFIG["Bur Dubai"].externalMapLink}
                       target="_blank"
                       rel="noopener noreferrer" 
                       className="ml-6 text-sm font-medium text-secondary-600 hover:text-secondary-700 hover:underline inline-flex items-center gap-1"
                     >
                       View Location Map <ExternalLink size={12} />
                     </a>
                   </div>
                   <div className="border-t border-gray-100 pt-4">
                     <h3 className="font-bold text-primary-700 flex items-center gap-2 mb-2">
                       <MapPin size={18} /> Al Warqa Branch
                     </h3>
                     <p className="text-slate-600 text-sm ml-6 mb-2">{COMPANY_INFO.address_al_warqa}</p>
                     <a 
                       href={MAP_CONFIG["Al Warqa"].externalMapLink}
                       target="_blank"
                       rel="noopener noreferrer" 
                       className="ml-6 text-sm font-medium text-secondary-600 hover:text-secondary-700 hover:underline inline-flex items-center gap-1"
                     >
                       View Location Map <ExternalLink size={12} />
                     </a>
                   </div>
                 </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Booking Form */}
          <ScrollReveal delay={200}>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-secondary-500">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Request an Appointment</h2>
              <p className="text-slate-500 mb-8">Fill out the form below and our team will contact you to confirm your slot.</p>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all" placeholder="+971 50 123 4567" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all bg-white">
                    <option>Routine Check-up / Cleaning</option>
                    <option>Orthodontics / Braces</option>
                    <option>Dental Implants</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Pediatric / Kids</option>
                    <option>Pain / Emergency</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Location</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="location" className="text-secondary-600 focus:ring-secondary-500" defaultChecked />
                      <span className="text-slate-700">Bur Dubai</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="location" className="text-secondary-600 focus:ring-secondary-500" />
                      <span className="text-slate-700">Al Warqa</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your concern..."></textarea>
                </div>

                <button className="w-full bg-secondary-500 text-white font-bold py-4 rounded-lg hover:bg-secondary-600 transition-colors shadow-lg hover:shadow-xl mt-4">
                  Submit Request
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">By submitting this form, you agree to be contacted by Go Dental Clinic.</p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;