import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TEAM } from '../constants';
import { ChevronRight, CheckCircle, Youtube } from 'lucide-react';
import { ScrollReveal } from '../components/Animations';

const TeamMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const member = TEAM.find(m => m.id === Number(id));

  useEffect(() => {
    if (member) {
      document.title = `${member.name} - ${member.role} | Go Dental Clinic`;
    }
  }, [member]);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Doctor Not Found</h1>
        <Link to="/" className="text-secondary-600 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-primary-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-primary-200 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/about" className="hover:text-white">Our Team</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-white">{member.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{member.name}</h1>
          <p className="text-secondary-400 font-medium text-lg mt-2">{member.role}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 sticky top-24">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover"
                />
                
                <div className="bg-slate-900 text-white p-6 space-y-6">
                  {member.qualifications && (
                    <div>
                      <h4 className="text-secondary-500 font-bold uppercase text-xs tracking-wider mb-1">Qualification:</h4>
                      <p className="font-medium text-lg">{member.qualifications}</p>
                    </div>
                  )}

                  {member.experienceLabel && (
                    <div>
                      <h4 className="text-secondary-500 font-bold uppercase text-xs tracking-wider mb-1">Experience:</h4>
                      <p className="font-medium">{member.experienceLabel}</p>
                    </div>
                  )}

                  {member.location && (
                    <div>
                      <h4 className="text-secondary-500 font-bold uppercase text-xs tracking-wider mb-1">Location:</h4>
                      <p className="font-medium">{member.location}</p>
                    </div>
                  )}

                  {member.languages && (
                    <div>
                      <h4 className="text-secondary-500 font-bold uppercase text-xs tracking-wider mb-1">Languages:</h4>
                      <p className="font-medium">{member.languages}</p>
                    </div>
                  )}

                  {member.nationality && (
                    <div>
                      <h4 className="text-secondary-500 font-bold uppercase text-xs tracking-wider mb-1">Nationality:</h4>
                      <p className="font-medium">{member.nationality}</p>
                    </div>
                  )}
                  
                  <Link 
                    to="/contact" 
                    className="block w-full bg-secondary-600 hover:bg-secondary-500 text-white text-center font-bold py-3 rounded-lg transition-colors mt-4"
                  >
                    Book Your Consultation
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">About {member.name}</h2>
                <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line">
                  {member.fullBio || member.bio}
                </p>

                {member.expertise && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 text-secondary-600">Treatment Offered:</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {member.expertise.map((item, idx) => (
                         <div key={idx} className="flex items-start p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <CheckCircle size={18} className="text-secondary-500 mt-0.5 mr-3 shrink-0" />
                            <span className="text-slate-700 font-medium">{item}</span>
                         </div>
                      ))}
                    </div>
                  </div>
                )}

                {member.memberships && (
                   <div>
                     <h3 className="text-xl font-bold text-slate-800 mb-4 text-secondary-600">Professional Membership:</h3>
                     <ul className="space-y-2">
                       {member.memberships.map((item, idx) => (
                         <li key={idx} className="flex items-center text-slate-700">
                           <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></span>
                           {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                )}
              </div>
            </ScrollReveal>

            {/* Video Section */}
            {member.youtubeUrl && (
              <ScrollReveal delay={200}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-100 p-2 rounded-full text-red-600">
                       <Youtube size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Meet the Doctor</h2>
                  </div>
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 shadow-inner">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={member.youtubeUrl} 
                      title={`${member.name} Introduction`}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;