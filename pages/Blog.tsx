import React, { useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/Animations';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "Dental Health Blog | Tips & News | Go Dental Clinic";
  }, []);

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-primary-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Smile Journal</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">Expert advice, dental tips, and clinic news to help you maintain optimal oral health.</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 150}>
              <article className="flex flex-col bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-48 overflow-hidden bg-slate-200">
                  <img 
                    src={`https://picsum.photos/600/400?random=${idx + 20}`} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded font-medium">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 hover:text-secondary-600 cursor-pointer">{post.title}</h2>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <button className="text-secondary-600 font-semibold text-sm flex items-center hover:gap-2 transition-all group mt-auto">
                    Read Article <ArrowRight size={16} className="ml-1 group-hover:ml-0" />
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
