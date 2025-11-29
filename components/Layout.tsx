
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, MAP_CONFIG } from '../constants';
import ChatWidget from './ChatWidget';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-secondary-600 font-semibold" : "text-slate-600 hover:text-secondary-500";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {COMPANY_INFO.phone}</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> {COMPANY_INFO.locations.join(' & ')}</span>
          </div>
          <div className="flex space-x-4">
            <span>Open 7 Days a Week</span>
            <div className="flex space-x-3 items-center border-l border-primary-700 pl-4">
              <a href="https://www.facebook.com/GoDentalClinicDubai" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={14} className="cursor-pointer hover:text-secondary-500" />
              </a>
              <a href="https://www.instagram.com/godentalclinic_dxb/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={14} className="cursor-pointer hover:text-secondary-500" />
              </a>
              <a href="https://www.linkedin.com/company/go-dental-clinic-dubai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={14} className="cursor-pointer hover:text-secondary-500" />
              </a>
              <a href="https://www.youtube.com/@godentalclinic8815" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={14} className="cursor-pointer hover:text-secondary-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary-600 text-white p-2 rounded-lg group-hover:bg-secondary-500 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7 2 3 7 3 13s4 9 9 9 9-4 9-9-4-11-9-11zm0 14c-2.5 0-4.5-1.5-4.5-3.5S9.5 9 12 9s4.5 1.5 4.5 3.5S14.5 16 12 16z"/></svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 leading-tight">GO DENTAL</h1>
                <p className="text-xs text-slate-500 tracking-wider">CLINIC DUBAI</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              
              {/* SERVICES Dropdown */}
              <div className="group relative">
                <Link to="/services" className={`flex items-center gap-1 py-4 ${isActive('/services')}`}>
                  SERVICES <ChevronDown size={14} />
                </Link>
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-0 w-[600px] bg-white shadow-2xl rounded-lg border border-gray-100 p-6 grid grid-cols-2 gap-x-8 gap-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 -ml-10">
                  {/* Column 1 */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs tracking-wider">Orthodontic Treatment</h4>
                      <ul className="space-y-2 pl-3 border-l-2 border-slate-100">
                         {/* LINKED TO NEW DETAILED PAGES */}
                         <li><Link to="/service/braces" className="block text-slate-600 hover:text-secondary-600 hover:translate-x-1 transition-transform">Braces</Link></li>
                         <li><Link to="/services/orthodontic-treatment/clear-aligners" className="block text-slate-600 hover:text-secondary-600 hover:translate-x-1 transition-transform">Clear Aligners</Link></li>
                         <li><Link to="/service/invisalign" className="block text-slate-600 hover:text-secondary-600 hover:translate-x-1 transition-transform">Invisalign</Link></li>
                      </ul>
                    </div>
                    {/* General Service Links */}
                    <Link to="/service/routine-dental-check-up" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Routine Dental Check-up</Link>
                    <Link to="/service/wisdom-tooth-extraction" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Wisdom Tooth Extraction</Link>
                    <div>
                       <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs tracking-wider">Cosmetic Dentistry</h4>
                       <ul className="space-y-2 pl-3 border-l-2 border-slate-100">
                         <li><Link to="/service/porcelain-veneers" className="block text-slate-600 hover:text-secondary-600 hover:translate-x-1 transition-transform">Porcelain Veneers</Link></li>
                       </ul>
                    </div>
                    <Link to="/service/children-dentistry" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Children's Dentistry</Link>
                    <Link to="/service/dental-implants" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Dental Implants</Link>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-3">
                    <Link to="/service/root-canal-treatment" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Root Canal Treatment</Link>
                    <Link to="/service/tooth-fillings" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Tooth Fillings</Link>
                    <Link to="/service/sedation-dentistry" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Sedation Dentistry</Link>
                    <Link to="/service/gum-disease-treatment" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Gum Disease Treatment</Link>
                    <Link to="/service/jaw-joint-disorder" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Jaw Joint Disorder</Link>
                    <Link to="/service/teeth-whitening" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Teeth Whitening</Link>
                    <Link to="/service/dental-bridges-crowns" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Dental Bridges & Crowns</Link>
                    <Link to="/service/dental-cleaning" className="block font-bold text-slate-700 hover:text-secondary-600 uppercase text-xs tracking-wider">Dental Cleaning</Link>
                  </div>
                </div>
              </div>

              <Link to="/about" className={`uppercase ${isActive('/about')}`}>OUR TEAM</Link>

              {/* WHY CHOOSE US Dropdown */}
              <div className="group relative">
                <div className="flex items-center gap-1 py-4 cursor-pointer text-slate-600 hover:text-secondary-500 uppercase">
                  WHY CHOOSE US <ChevronDown size={14} />
                </div>
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-lg border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                  <Link to="/service/latest-dental-technology" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-secondary-600 text-xs font-bold uppercase tracking-wider border-b border-gray-50 last:border-0">
                    Latest Dental Technology
                  </Link>
                  <Link to="/service/multilingual-staff" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-secondary-600 text-xs font-bold uppercase tracking-wider border-b border-gray-50 last:border-0">
                    Multilingual Staff
                  </Link>
                  <Link to="/service/new-patients" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-secondary-600 text-xs font-bold uppercase tracking-wider border-b border-gray-50 last:border-0">
                    New Patients
                  </Link>
                </div>
              </div>

              <Link to="/insurance" className={`uppercase ${isActive('/insurance')}`}>INSURANCE</Link>
              <Link to="/blog" className={`uppercase ${isActive('/blog')}`}>BLOGS</Link>

              {/* CONTACT US Dropdown */}
              <div className="group relative">
                <Link to="/contact" className={`flex items-center gap-1 py-4 uppercase ${isActive('/contact')}`}>
                  CONTACT US <ChevronDown size={14} />
                </Link>
                <div className="absolute top-full right-0 w-64 bg-white shadow-2xl rounded-lg border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                  <Link to="/contact?loc=al_warqa" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-secondary-600 text-xs font-bold uppercase tracking-wider border-b border-gray-50 last:border-0">
                    Al Warqa Dental Clinic
                  </Link>
                  <Link to="/contact?loc=bur_dubai" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-secondary-600 text-xs font-bold uppercase tracking-wider border-b border-gray-50 last:border-0">
                    Bur Dubai Dental Clinic
                  </Link>
                </div>
              </div>

              <Link to="/monthly-offers" className={`uppercase font-bold ${isActive('/monthly-offers')}`}>MONTHLY OFFERS</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} className="text-slate-800" /> : <Menu size={28} className="text-slate-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 z-40 pb-4 shadow-lg h-screen overflow-y-auto">
            <div className="flex flex-col space-y-4 px-6 pt-6 pb-20">
              <Link to="/" className="text-slate-700 font-bold uppercase" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <div className="border-t border-gray-100 pt-2">
                <h4 className="text-secondary-500 text-xs font-bold uppercase mb-2">Services</h4>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  <Link to="/service/braces" className="text-slate-600 text-sm" onClick={() => setIsMenuOpen(false)}>Braces</Link>
                  <Link to="/service/invisalign" className="text-slate-600 text-sm" onClick={() => setIsMenuOpen(false)}>Invisalign</Link>
                  <Link to="/services/orthodontic-treatment/clear-aligners" className="text-slate-600 text-sm" onClick={() => setIsMenuOpen(false)}>Clear Aligners</Link>
                  <Link to="/service/children-dentistry" className="text-slate-600 text-sm" onClick={() => setIsMenuOpen(false)}>Children's Dentistry</Link>
                  <Link to="/services" className="text-secondary-600 text-sm font-semibold" onClick={() => setIsMenuOpen(false)}>View All Services</Link>
                </div>
              </div>
              <Link to="/about" className="text-slate-700 font-bold uppercase" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
              <Link to="/insurance" className="text-slate-700 font-bold uppercase" onClick={() => setIsMenuOpen(false)}>Insurance</Link>
              <Link to="/blog" className="text-slate-700 font-bold uppercase" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
              <Link to="/monthly-offers" className="text-slate-700 font-bold uppercase" onClick={() => setIsMenuOpen(false)}>Monthly Offers</Link>
              <Link to="/contact" className="text-slate-700 font-bold uppercase" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              <Link to="/contact" className="bg-secondary-500 text-center text-white px-5 py-3 rounded-lg font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white text-primary-600 p-1.5 rounded">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7 2 3 7 3 13s4 9 9 9 9-4 9-9-4-11-9-11zm0 14c-2.5 0-4.5-1.5-4.5-3.5S9.5 9 12 9s4.5 1.5 4.5 3.5S14.5 16 12 16z"/></svg>
                </div>
                <span className="text-xl font-bold">GO DENTAL</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Providing trusted, high-quality dental care in Dubai for over 20 years. Your smile is our passion.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/GoDentalClinicDubai" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-secondary-500 transition-colors cursor-pointer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/godentalclinic_dxb/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-secondary-500 transition-colors cursor-pointer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://www.linkedin.com/company/go-dental-clinic-dubai/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-secondary-500 transition-colors cursor-pointer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.youtube.com/@godentalclinic8815" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-secondary-500 transition-colors cursor-pointer" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-secondary-500">Quick Links</h3>
              <ul className="space-y-3 text-slate-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Dental Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-secondary-500">Services</h3>
              <ul className="space-y-3 text-slate-300">
                <li><Link to="/service/invisalign" className="hover:text-white transition-colors">Invisalign & Braces</Link></li>
                <li><Link to="/service/dental-implants" className="hover:text-white transition-colors">Dental Implants</Link></li>
                <li><Link to="/service/porcelain-veneers" className="hover:text-white transition-colors">Cosmetic Dentistry</Link></li>
                <li><Link to="/service/children-dentistry" className="hover:text-white transition-colors">Pediatric Care</Link></li>
                <li><Link to="/service/teeth-whitening" className="hover:text-white transition-colors">Teeth Whitening</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-secondary-500">Contact Us</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="shrink-0 mt-1 text-secondary-500" size={18} />
                  <div className="flex flex-col gap-1 text-sm">
                    <a href={MAP_CONFIG["Bur Dubai"].externalMapLink} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">
                      {COMPANY_INFO.address_bur_dubai}
                    </a>
                    <a href={MAP_CONFIG["Al Warqa"].externalMapLink} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">
                      {COMPANY_INFO.address_al_warqa}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="shrink-0 text-secondary-500" size={18} />
                  <span>{COMPANY_INFO.phone}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Go Dental Clinic Dubai. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
};

export default Layout;