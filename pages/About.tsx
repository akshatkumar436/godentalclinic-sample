import React, { useEffect } from 'react';
import { COMPANY_INFO, TEAM } from '../constants';
import { Award, Heart, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../components/Animations';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Go Dental Clinic Dubai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', "Learn about Go Dental Clinic's 20-year history, our mission to provide affordable care, and meet our expert team of dentists in Dubai.");
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-primary-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About Go Dental Clinic</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">Providing quality dental care with a gentle touch since 2004.</p>
          </ScrollReveal>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <ScrollReveal>
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                  alt="Go Dental Clinic Interior" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </ScrollReveal>
            </div>
            <div className="md:w-1/2">
              <ScrollReveal delay={200}>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Founded in 2004, Go Dental Clinic started with a simple mission: to make high-quality dentistry accessible to everyone in Dubai. Over the past two decades, we have grown from a single practice in Bur Dubai to a multi-specialty dental group with an additional state-of-the-art facility in Al Warqa.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We are proud to have served over {COMPANY_INFO.patientsCount} patients, building a reputation for integrity, affordability, and clinical excellence. Our multicultural team speaks over 10 languages, reflecting the vibrant diversity of the city we call home.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                     <div className="bg-secondary-100 p-2 rounded-full text-secondary-600"><Award size={20} /></div>
                     <span className="font-semibold text-slate-700">Award Winning</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="bg-secondary-100 p-2 rounded-full text-secondary-600"><Heart size={20} /></div>
                     <span className="font-semibold text-slate-700">Patient Centric</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <ScrollReveal>
             <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
             <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-12">
               "To provide comprehensive, technology-driven dental care that is affordable, accessible, and tailored to the unique needs of every patient, creating healthy smiles that last a lifetime."
             </p>
           </ScrollReveal>
           <div className="grid md:grid-cols-3 gap-8 text-left">
             <ScrollReveal delay={0}>
               <div className="bg-primary-800 p-6 rounded-xl border border-primary-700 h-full hover:bg-primary-700 transition-colors">
                 <h3 className="text-xl font-bold mb-3 text-secondary-400">Integrity</h3>
                 <p className="text-primary-100 text-sm">We recommend only what you need. No hidden costs, no unnecessary treatments.</p>
               </div>
             </ScrollReveal>
             <ScrollReveal delay={100}>
               <div className="bg-primary-800 p-6 rounded-xl border border-primary-700 h-full hover:bg-primary-700 transition-colors">
                 <h3 className="text-xl font-bold mb-3 text-secondary-400">Innovation</h3>
                 <p className="text-primary-100 text-sm">Constantly investing in the latest technology and our in-house lab to deliver better results.</p>
               </div>
             </ScrollReveal>
             <ScrollReveal delay={200}>
               <div className="bg-primary-800 p-6 rounded-xl border border-primary-700 h-full hover:bg-primary-700 transition-colors">
                 <h3 className="text-xl font-bold mb-3 text-secondary-400">Compassion</h3>
                 <p className="text-primary-100 text-sm">We understand dental anxiety. Our environment is designed to make you feel at ease.</p>
               </div>
             </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Specialists</h2>
              <p className="text-slate-600">Experts in Orthodontics, Implantology, and Cosmetic Dentistry.</p>
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {TEAM.map((member, idx) => (
              <ScrollReveal key={member.id} delay={idx * 150}>
                <Link to={`/team/${member.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                      <p className="text-white font-bold text-lg group-hover:text-secondary-400 transition-colors">{member.name}</p>
                      <p className="text-secondary-400 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;