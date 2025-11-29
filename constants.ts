
import { Service, Testimonial, TeamMember, BlogPost, DetailedService } from './types';

export const COMPANY_INFO = {
  name: "Go Dental Clinic",
  tagline: "Your Smile, Our Passion",
  phone: "+971 4 123 4567",
  email: "info@godentalclinic.com",
  locations: ["Bur Dubai", "Al Warqa"],
  address_bur_dubai: "Unit M04 & M05, Mezzanine floor, Manazil Al Raffa 01, Al Mankhool, Dubai",
  address_al_warqa: "Go Dental Clinic, Al Warqa 2, Dubai",
  yearsExperience: 20,
  patientsCount: "50,000+",
  reviewsCount: "2,500+",
};

export const MAP_CONFIG = {
  "Bur Dubai": {
    address: "Unit M04 & M05, Mezzanine floor, Manazil Al Raffa 01, Al Mankhool, Dubai",
    mapUrl: "https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=Go+Dental+Clinic+Bur+Dubai",
    externalMapLink: "https://maps.app.goo.gl/7oATyXEi4HHus4TNA",
    description: "Welcome to Go Dental Clinic, Bur Dubai where our dentists along with the friendly, knowledgeable staff is dedicated to making every visit to our clinic a great experience. Expert dental care is provided with a warm, personal touch in a comfortable and relaxing setting. We also cater to nearby locations including Al Mankhool, Meena Bazaar, Karama, Satwa, Al Kifaf, Al Raffa and Port Rashid.\n\nGo Dental Bur Dubai offers State-of-the-art practice with a full-range of advanced dentistry, from routine check-ups, orthodontics, cosmetic dentistry, dental implants, smile design, endodontics, periodontics, and follow-up."
  },
  "Al Warqa": {
    address: "Go Dental Clinic, Al Warqa 2, Dubai",
    mapUrl: "https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=Go+Dental+Clinic+Al+Warqa+2",
    externalMapLink: "https://maps.app.goo.gl/fspfFLEDf5nEfFVp6",
    description: "Conveniently located in Al Warqa 2, providing easy access for families in Mirdif, International City, and Nad Al Hamar. Our Al Warqa branch brings the same standard of excellence and comprehensive care to this vibrant community, offering ample parking and a modern, family-friendly environment."
  }
};

export const SERVICES: Service[] = [
  {
    id: "orthodontics",
    title: "Orthodontics & Invisalign",
    shortDescription: "Straighten your teeth with traditional metal braces or clear aligners starting from AED 2000.",
    fullDescription: "Our orthodontic department specializes in correcting misaligned teeth and jaws. We offer a full range of solutions, from traditional metal braces for complex cases to discreet Invisalign clear aligners for teenagers and adults. Our goal is to improve both the function and aesthetics of your smile.",
    icon: "align-justify",
    price: "Invisalign from AED 2,000",
    benefits: ["Improved bite function", "Discreet treatment options", "Flexible payment plans", "Experienced orthodontists"]
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    shortDescription: "Transform your smile with porcelain veneers, Hollywood Smile design, and professional whitening.",
    fullDescription: "Achieve the smile of your dreams with our advanced cosmetic procedures. We utilize Digital Smile Design (DSD) to plan your transformation before we begin. From composite bonding to porcelain veneers and laser teeth whitening, we craft smiles that look natural and radiant.",
    icon: "sparkles",
    price: "Consultation Free",
    benefits: ["Digital Smile Design", "Natural-looking results", "Minimally invasive techniques", "Long-lasting materials"]
  },
  {
    id: "implants",
    title: "Dental Implants",
    shortDescription: "Permanent, natural-looking replacements for missing teeth starting from AED 4,999.",
    fullDescription: "Restore your chewing ability and confidence with our high-quality dental implants. We use top-tier implant systems and 3D imaging for precise placement. Whether you need a single tooth replaced or a full-arch restoration, our implantologists ensure a safe and comfortable procedure.",
    icon: "anchor",
    price: "Implants from AED 4,999",
    benefits: ["Lifetime durability", "Prevents bone loss", "Looks and feels like natural teeth", "98% success rate"]
  },
  {
    id: "general",
    title: "Routine Check-ups",
    shortDescription: "Comprehensive exams and professional cleaning to maintain optimal oral health.",
    fullDescription: "Prevention is better than cure. Our routine check-ups utilize intraoral cameras and low-radiation digital X-rays to detect issues early. Our professional hygiene sessions remove plaque and tartar that brushing alone cannot reach.",
    icon: "shield-check",
    price: "Cleaning at AED 199",
    benefits: ["Early detection of cavities", "Gum disease prevention", "Oral cancer screening", "Fresh breath"]
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    shortDescription: "Gentle, fun, and specialized dental care for children of all ages.",
    fullDescription: "We strive to make every child's visit a positive experience. Our pediatric specialists are trained to manage anxiety and provide age-appropriate treatments, from sealants and fluoride applications to early orthodontic assessments.",
    icon: "smile",
    benefits: ["Child-friendly environment", "Pain-free techniques", "Preventive education", "Emergency care"]
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    shortDescription: "Fix damaged teeth with root canals, crowns, bridges, and tooth-colored fillings.",
    fullDescription: "Damaged or decayed teeth don't have to be extracted. Our restorative treatments focus on saving your natural teeth whenever possible using advanced endodontics (root canals) and high-strength ceramic crowns tailored in our in-house lab.",
    icon: "hammer",
    benefits: ["Pain relief", "Tooth preservation", "Restored function", "Aesthetic integration"]
  }
];

export const OFFERS = [
  {
    id: "offer-invisalign",
    title: "Invisalign",
    price: "AED 2000",
    label: "Starting From",
    image: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=600",
    link: "/service/invisalign"
  },
  {
    id: "offer-braces",
    title: "Orthodontic Braces",
    price: "AED 800",
    label: "Starting From",
    image: "https://images.unsplash.com/photo-1623961990059-28356e226a77?auto=format&fit=crop&q=80&w=600",
    link: "/service/braces"
  },
  {
    id: "offer-whitening",
    title: "Teeth Whitening",
    price: "AED 699",
    label: "Now At",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
    link: "/service/teeth-whitening"
  },
  {
    id: "offer-cleaning",
    title: "Teeth Cleaning",
    price: "AED 199",
    label: "At Just",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600",
    link: "/service/dental-cleaning"
  },
  {
    id: "offer-implants",
    title: "Dental Implants",
    price: "AED 4,999",
    label: "Starting At",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
    link: "/service/dental-implants"
  },
  {
    id: "offer-pediatric",
    title: "Exclusive Pediatric Offer",
    price: "AED 249",
    label: "Now At",
    image: "https://images.unsplash.com/photo-1596918820696-98129cc6156e?auto=format&fit=crop&q=80&w=600",
    link: "/service/children-dentistry"
  },
  {
    id: "offer-veneers",
    title: "Porcelain Veneers",
    price: "AED 3,000",
    label: "Starting At",
    image: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=600",
    link: "/service/porcelain-veneers"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Al-Mansoori",
    role: "Teacher",
    content: "I was always afraid of the dentist, but Go Dental changed that. I did my veneers here and the result is stunning. Dr. Ahmed was so patient and explained everything.",
    rating: 5,
    serviceUsed: "Cosmetic Dentistry"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Expat",
    content: "Great value for money. I got my teeth cleaning done for AED 199 and it was thorough. The clinic in Bur Dubai is very clean and the staff speaks perfect English.",
    rating: 5,
    serviceUsed: "Cleaning"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Mother of two",
    content: "My kids actually look forward to their appointments! The pediatric dentist is amazing with children. Highly recommend for families in Al Warqa.",
    rating: 5,
    serviceUsed: "Pediatric Care"
  }
];

export const TEAM_BUR_DUBAI: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Avinash Shama Rao",
    role: "Specialist Endodontist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Avinash",
    bio: "Specializing in root canal treatments and saving natural teeth with advanced microscopic endodontics.",
    fullBio: "Dr. Avinash Shama Rao is a Specialist Endodontist in Dubai with more than 17 years of experience. He graduated in Endodontics from R.V Dental College and Hospital, Bangalore, India, and worked as an associate professor at SJM Dental College. He has many publications in Endodontic journals to his credit.",
    qualifications: "BDS, MDS",
    experienceLabel: "More than 17 years of experience",
    location: "Bur Dubai",
    languages: "English, Hindi",
    nationality: "India",
    expertise: [
      "Single Visit Root Canal Treatment",
      "Endodontic Retreatment",
      "Dental Management Of Pediatric and Adult Traumatic Injuries",
      "Endodontic Surgeries",
      "Aesthetic Dentistry"
    ],
    memberships: [
      "Member of the British Endodontic Society"
    ],
    youtubeUrl: "https://www.youtube.com/embed/UiRmDBI0dEI"
  },
  {
    id: 2,
    name: "Dr. Neel Shah",
    role: "Specialist Oral & Maxillofacial Surgeon",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Neel",
    bio: "Expert in wisdom tooth extractions, dental implants, and jaw corrective surgeries."
  },
  {
    id: 3,
    name: "Dr. Vineet R. Menon",
    role: "Specialist Orthodontist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Vineet",
    bio: "Creating beautiful smiles with metal braces, ceramic braces, and clear aligners.",
    fullBio: "With a distinguished career spanning over 14 years, Dr. Vineet R. Menon is a prominent specialist orthodontist committed to delivering exceptional care. Armed with a wealth of experience, Dr. Vineet employs cutting-edge technology in orthodontic care, specializing in Fixed and Removable Orthodontic Appliances, Aligners, Orthopaedic Appliances and Surgical Orthodontic Procedures.",
    qualifications: "BDS, MDS",
    location: "Bur Dubai",
    expertise: ["Metal Braces", "Clear Aligners", "Surgical Orthodontics", "Damon Braces"]
  },
  {
    id: 100,
    name: "Dr. Ghathaa Salah Mishal",
    role: "Specialist Orthodontist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Ghathaa",
    bio: "Expert in diagnosis and management of different malocclusions in kids, teens and adults.",
    fullBio: "Dr. Ghathaa is a specialist orthodontist with more than 6 years of experience in the diagnosis and management of the different malocclusions in kids, teens and adults. She graduated with her dental degree and thereafter pursued the certificate of specialization in orthodontics from Tishreen University, Syria. She provides high quality orthodontic care by employing the latest available techniques in our clinic.",
    qualifications: "BDS, MDS",
    experienceLabel: "6+ years of experience",
    location: "Bur Dubai",
    nationality: "Syria",
    languages: "English, Arabic",
    expertise: ["Pediatric Orthodontics", "Adult Orthodontics", "Preventive Care"]
  },
  {
    id: 13,
    name: "Dr. Fareeha Haaris",
    role: "Specialist Pediatric Dentist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Fareeha",
    bio: "Passionate about preventive dentistry and making dental visits fun for children.",
    fullBio: "Dr. Fareeha Haaris, is a Specialist Pediatric Dentist with over a decade of dedicated experience. She has a MDS in Pediatric and Preventive Dentistry from Kerala University of Health Sciences and a Diploma in Primary Care Dentistry (Dip PCD) from the Royal College of Surgeons, Ireland. With over 11 years of exclusive practice in Pediatric Dentistry, Dr. Haaris has gained invaluable experience across world-class hospitals in India, and Dubai.",
    qualifications: "BDS, MDS, Dip PCD",
    experienceLabel: "11+ Years Experience",
    location: "Bur Dubai",
    expertise: ["Preventive Dentistry", "Pediatric Trauma Management", "Special Needs Dentistry"]
  }
];

export const TEAM_AL_WARQA: TeamMember[] = [
  {
    id: 4,
    name: "Dr. Kaja Mohaideen A",
    role: "Specialist Orthodontist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Kaja",
    bio: "Focused on interceptive orthodontics for children and comprehensive brace systems for adults.",
    fullBio: "Dr. Kaja Mohaideen is an Invisalign Certified Specialist Orthodontist with over 8 years of experience in Orthodontics and Dentofacial Orthopedics. He earned his Master of Dental Surgery (MDS) from the Postgraduate Institute of Medical Education and Research (PGIMER) and his Bachelor of Dental Surgery (BDS) at Sri Ramakrishna Dental College and Hospital, India.",
    qualifications: "BDS, MDS",
    experienceLabel: "8+ Years Experience",
    location: "Al Warqa",
    expertise: ["Invisalign", "Damon Braces", "Fixed Appliances", "Surgical Orthodontics"]
  },
  {
    id: 5,
    name: "Dr. Rishika Habib",
    role: "Specialist Pediatric Dentist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Rishika",
    bio: "Making dental visits fun and fear-free for children, specializing in preventive care and habit breaking.",
    fullBio: "Dr. Rishika Habib is our highly motivated and skilled Specialist Pediatric Dentist with more than 6 years of experience. She has completed her Bachelor's degree in Dental Surgery from Rajiv Gandhi University of Health Science and pursued her Master's degree (MDS) at A.J. Institute of Dental Sciences, India. She is an active member of the Indian Society of Pediatric & Preventive Dentistry. Dr. Rishika is a proactive and friendly dentist who has a calm approach.",
    qualifications: "BDS, MDS",
    experienceLabel: "6+ Years Experience",
    location: "Al Warqa",
    expertise: ["Behavior Management", "Preventive Care", "Restorative Dentistry"]
  },
  {
    id: 6,
    name: "Dr. Fardin Adhikari",
    role: "Specialist Pediatric Dentist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Fardin",
    bio: "Expert in pediatric dental trauma, sedation dentistry, and special needs care."
  },
  {
    id: 7,
    name: "Dr. Chyrel S. Salian",
    role: "Specialist Periodontist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Chyrel",
    bio: "Specializing in gum health, laser gum treatments, and cosmetic gum contouring."
  },
  {
    id: 8,
    name: "Dr. Lakshmi Girish",
    role: "General Dentist & Prosthodontist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Lakshmi",
    bio: "Expert in crowns, bridges, and full mouth rehabilitation."
  },
  {
    id: 9,
    name: "Dr. Resham Kiswani",
    role: "General Dentist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Resham",
    bio: "Focusing on restorative dentistry and aesthetic fillings."
  },
  {
    id: 10,
    name: "Dr. Benita Benjamin",
    role: "General Dentist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Benita",
    bio: "Providing comprehensive general dental care for the whole family."
  },
  {
    id: 11,
    name: "Dr. Jaen Pastor",
    role: "General Dentist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Jaen",
    bio: "Dedicated to gentle patient care and cosmetic enhancements."
  },
  {
    id: 12,
    name: "Dr. Sarah Basem",
    role: "General Dentist",
    image: "https://placehold.co/400x400/f8fafc/1e293b?text=Dr.+Sarah",
    bio: "Passionate about preventive dentistry and patient education."
  }
];

export const TEAM = [...TEAM_BUR_DUBAI, ...TEAM_AL_WARQA];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Invisalign vs. Metal Braces: Which is Right for You?",
    excerpt: "Comparing the cost, comfort, and effectiveness of the two most popular orthodontic treatments available in Dubai.",
    date: "Oct 12, 2023",
    category: "Orthodontics"
  },
  {
    id: 2,
    title: "5 Signs You Might Need a Root Canal",
    excerpt: "Don't ignore that toothache. Learn the warning signs of deep decay and how modern root canals are virtually pain-free.",
    date: "Sep 28, 2023",
    category: "Restorative"
  },
  {
    id: 3,
    title: "The Importance of Dental Checkups for Children",
    excerpt: "Why starting dental visits early can prevent costly issues later and help your child develop a positive relationship with oral health.",
    date: "Sep 15, 2023",
    category: "Pediatric"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance providers in the UAE. Please contact our front desk with your policy details for verification."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Absolutely. We use professional-grade whitening systems that are safe for your enamel and gums when administered by our dental professionals."
  },
  {
    question: "How long does a dental implant procedure take?",
    answer: "The process typically takes 3-6 months to allow for bone healing, though immediate load implants are available for suitable candidates."
  },
  {
    question: "What do I do in a dental emergency?",
    answer: "We offer priority scheduling for emergencies. If you are in pain, call us immediately at +971 4 123 4567."
  }
];

export const INSURANCE_PARTNERS = [
  { name: "Almadallah", logo: "https://placehold.co/220x100/white/2c3e50?text=Almadallah" },
  { name: "AXA", logo: "https://placehold.co/220x100/white/00008f?text=AXA" },
  { name: "Nextcare", logo: "https://placehold.co/220x100/white/16a34a?text=Nextcare" },
  { name: "SAICO", logo: "https://placehold.co/220x100/white/f59e0b?text=SAICO" },
  { name: "NGI", logo: "https://placehold.co/220x100/white/1e293b?text=NGI" }
];

export const FULL_INSURANCE_LIST = [
  { name: "Mednet", logo: "https://placehold.co/250x120/white/00a0dc?text=Mednet" },
  { name: "Nextcare", logo: "https://placehold.co/250x120/white/16a34a?text=Nextcare" },
  { name: "Sukoon", logo: "https://placehold.co/250x120/white/6b21a8?text=Sukoon" },
  { name: "SAICO", logo: "https://placehold.co/250x120/white/f59e0b?text=SAICO" },
  { name: "NAS Neuron", logo: "https://placehold.co/250x120/white/be123c?text=NAS+Neuron" },
  { name: "NGI", logo: "https://placehold.co/250x120/white/1e293b?text=NGI" },
  { name: "MSH", logo: "https://placehold.co/250x120/white/e3a008?text=MSH" },
  { name: "Mednet (2)", logo: "https://placehold.co/250x120/white/00a0dc?text=Mednet" },
  { name: "AXA", logo: "https://placehold.co/250x120/white/00008f?text=AXA" },
  { name: "Almadallah", logo: "https://placehold.co/250x120/white/2c3e50?text=Almadallah" },
];

export const INSTALLMENT_PLANS = [
  {
    id: 1,
    bank: "FAB Credit Card",
    interest: "0%",
    offerTitle: "For Treatment Above AED 3,000",
    terms: "Pay on 3, 6, 9 or 12 months",
    color: "bg-gradient-to-br from-indigo-900 to-slate-800"
  },
  {
    id: 2,
    bank: "Emirates NBD Card",
    interest: "0%",
    offerTitle: "For Treatment Above AED 3,000",
    terms: "Flexible Payment over 6 or 12 months",
    color: "bg-gradient-to-br from-blue-900 to-blue-800"
  }
];

export const DETAILED_SERVICES: Record<string, DetailedService> = {
  "new-patients": {
    id: "new-patients",
    title: "New Patients",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Your First Visit",
    introDescription: "Our dentists highly recommend that you visit a dental clinic on a bi-annual basis so that you can have your overall oral health status assessed. If you happen to have cavities or gum disease then you might need to visit the dentist more frequently depending on the severity of your case.\n\nSometimes patients tend to be anxious regarding their dental appointment, especially if it is their first time. This is why we always ensure that we are attentive to your every requirement. One of our main objectives during your first dental visit is to make you feel comfortable, informed and happy with the treatment options provided to you by our dentists.",
    subTypesTitle: "Your first appointment will include the following",
    subTypesLayout: 'grid',
    subTypes: [
      { 
        title: "The dentist will go over your medical and dental health records", 
        description: "", 
        image: "" 
      },
      { 
        title: "Discuss any points of concern you may have", 
        description: "", 
        image: "" 
      },
      { 
        title: "Conduct a full dental examination", 
        description: "Examination of both your gums and teeth to verify if you have any cavities, gum disease or any other kind of dental issues.", 
        image: "" 
      },
      { 
        title: "An Intra Oral Camera will be used", 
        description: "So that the dentist can take photos of your teeth and show you to help indicate if any treatment is required.", 
        image: "" 
      },
      { 
        title: "Digital dental x-rays", 
        description: "Will be taken in order to check if you have any hidden cavities.", 
        image: "" 
      },
      { 
        title: "There are many different types of payment plans available", 
        description: "If you have any doubts or queries relating to your treatment plan, we always address them with you before going ahead with the process.", 
        image: "" 
      }
    ],
    showStatistics: true,
    benefits: [],
    relatedDoctorIds: [],
    beforeAfter: [],
    faqTitle: "You ask, we answer",
    faqDescription: "Curious about your dental conditions or treatment procedures. We are here to answer your queries.",
    faqs: [
      { question: "What should I bring to my first dental appointment as a new patient?", answer: "Please bring your Emirates ID, a list of any medications you are taking, and your dental insurance card if applicable. If you have recent X-rays from another clinic, bringing those can also be helpful." },
      { question: "How often should I schedule dental check-ups and cleanings?", answer: "For most patients, we recommend a check-up and cleaning every six months. However, depending on your oral health needs, our dentist might suggest a different schedule." },
      { question: "What can I expect during my first dental appointment?", answer: "Your first visit involves a comprehensive exam, digital X-rays (if needed), an oral cancer screening, and a discussion about your dental history and treatment goals. We prioritize your comfort and understanding." },
      { question: "How can I improve my oral hygiene at home?", answer: "Brush twice a day with fluoride toothpaste, floss daily, and use mouthwash. Limiting sugary snacks and visiting us regularly are also key to maintaining a healthy smile." },
      { question: "What payment options and insurance do you accept?", answer: "We accept most major insurance providers in the UAE. We also offer various payment methods including cash, credit cards, and flexible installment plans for larger treatments." }
    ]
  },
  "multilingual-staff": {
    id: "multilingual-staff",
    title: "Friendly, Multilingual Staff",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000",
    introTitle: "We Speak Your Language",
    introDescription: "In 2004, we started our dental practice and ever since, our team of highly qualified dentists, nurses and reception staff have been committed to providing the best dental care possible to all of our patients.\n\nWe are able to successfully put your oral health and dental needs first by listening closely to all of your requirements and requests in the language you wish to communicate. We like to ensure that each and every patient that comes to our clinic is happy with the treatment and services provided by us.\n\nOur multilingual staff speaks English, Hindi, Marathi, Tagalog and Arabic. This helps build strong and easy communication lines between our patients and staff.\n\nWe always strive to make your dental experience easy, enjoyable and stress-free.",
    subTypesTitle: "Languages We Speak",
    subTypesLayout: 'grid',
    subTypes: [
      {
        title: "English",
        description: "Our universal language ensuring clear communication for all our international patients.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400"
      },
      {
        title: "Arabic",
        description: "Native communication for our local and regional patients, ensuring comfort and understanding.",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400"
      },
      {
        title: "Hindi & Marathi",
        description: "Connecting with our large South Asian community to provide a homely and understood environment.",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400"
      },
      {
        title: "Tagalog",
        description: "Warm and friendly care in Tagalog for our Filipino patients.",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400"
      }
    ],
    benefitsTitle: "Why Communication Matters",
    benefits: [
      "Ensures you fully understand your treatment plan",
      "Reduces dental anxiety and stress",
      "Allows for better expression of pain or concerns",
      "Builds trust and long-term relationships",
      "Respects cultural preferences and needs"
    ],
    relatedDoctorIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 100],
    beforeAfter: [],
    faqs: [
      { question: "Can I request a doctor who speaks my language?", answer: "Yes, absolutely! When booking your appointment, please let our reception team know your preferred language, and we will do our best to schedule you with a dentist who speaks it." },
      { question: "Do your receptionists speak multiple languages?", answer: "Yes, our front desk team is multilingual and can assist you with appointments, insurance, and general inquiries in English, Arabic, Hindi, and Tagalog." }
    ]
  },
  "latest-dental-technology": {
    id: "latest-dental-technology",
    title: "Our Dental Technologies",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Advanced Dental Technology for Better Care",
    introDescription: "At Go Dental Clinic, we invest in the latest dental innovations to ensure precise diagnoses, faster treatments, and superior comfort for our patients. From digital imaging to laser dentistry, our advanced equipment allows us to provide world-class dental care in Dubai.",
    subTypesTitle: "Our Technologies",
    subTypesLayout: 'list',
    subTypes: [
      { 
        title: "Dental X-Ray - OPG (Orthopantomogram)", 
        description: "An OPG is a special kind of xray which provides a panoramic or wide view of your lower face including all of your teeth, as well as your upper and lower jaw.", 
        image: "https://images.unsplash.com/photo-1516069677843-c0952d79339a?auto=format&fit=crop&q=80&w=800" 
      },
      { 
        title: "BIOLASE Epic X Laser Dental Technology", 
        description: "Dentists work on more than just your teeth; they also treat soft tissue and bone supporting your teeth. Therefore, in a lot of cases, Epic X can be useful during the treatment process, as it’s very reliable and extremely effective diode laser.\n\nLaser technology from BIOLASE is made specifically for dental applications like gum surgery and other various dental procedures, allowing dentists to complete later surgeries at a faster rate.\n\nAdditionally, it also plays a vital role towards providing pain relief – especially for any pain related to TMJ or any other kind of thermomandibular disorders.", 
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
      },
      { 
        title: "Microscopic Endodontics Root Canal Treatment", 
        description: "For a root canal treatment to be successful, the Endodontist has to treat and clean the infected tooth’s root canal properly with a high degree of precision.\n\nIt is possible for your teeth to have a single, a couple or even up to three canals each – that contain pulp. It is vital to note that sometimes the canal can be extremely thin, much like a strand of hair.", 
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800" 
      }
    ],
    benefits: [
      "Precise diagnosis and treatment planning",
      "Less invasive procedures",
      "Reduced recovery time",
      "Enhanced patient comfort",
      "Superior clinical outcomes"
    ],
    relatedDoctorIds: [],
    beforeAfter: [],
    faqs: []
  },
  "orthodontic-treatment": {
    id: "orthodontic-treatment",
    title: "Orthodontic Treatment",
    heroImage: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Achieve a Confident, Straight Smile with Expert Orthodontic Treatment",
    introDescription: "At Go Dental Clinic, we specialize in providing affordable high-quality orthodontic treatment in Bur Dubai and Warqa, Dubai. With over 2500+ Google reviews, our patients' experiences speak volumes about the quality care we deliver.\n\nOrthodontics is a specialized branch of dentistry focused on diagnosing and correcting cracked, crowded, or irregular teeth, as well as misaligned bites for better chewing function. Our expert orthodontists offer tailored treatment plans for children, teens, and adults to help align teeth, close gaps, and fix improper bites using a variety of advanced options.",
    subTypesTitle: "Types of Orthodontic Treatments",
    subTypes: [
      { title: "Metal Braces", description: "Traditional, effective, and durable.", image: "https://images.unsplash.com/photo-1623961990059-28356e226a77?auto=format&fit=crop&q=80&w=400" },
      { title: "Ceramic Braces", description: "Tooth-colored brackets for a discreet look.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" },
      { title: "Clear Aligners", description: "Removable, invisible trays for comfort.", image: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=400" },
      { title: "Invisalign", description: "The world's leading clear aligner system.", image: "https://images.unsplash.com/photo-1570304825946-b258673a8769?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Established in Dubai Since More Than 20 Years",
      "Treated More Than 11,000+ Cases With Braces And Aligners in Dubai",
      "We Provide The Highest Quality at Affordable Prices",
      "Highly Experienced Specialist Orthodontists",
      "Interest Free Flexible Payment Plans",
      "We Offer Pay Later Option Using Spotii"
    ],
    relatedDoctorIds: [3, 100, 4],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Crowded+Teeth+Before", after: "https://placehold.co/600x400/e2e8f0/475569?text=Straight+Smile+After", label: "Crowding Correction" },
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Overbite+Before", after: "https://placehold.co/600x400/e2e8f0/475569?text=Corrected+Bite+After", label: "Overbite Correction" }
    ],
    faqs: [
      { question: "What will happen at the initial orthodontic appointment?", answer: "Our Orthodontist will do a thorough examination of your teeth and explain to you all the problems. A customized treatment plan will be provided and all the payment options will be explained to start your treatment. If you decide to go ahead, we will take your photographs and required x-rays and schedule you for starting the treatment." },
      { question: "How often will I have appointments?", answer: "Appointments are typically scheduled every 4 to 8 weeks, depending on the stage of your treatment and the type of braces or aligners you have." },
      { question: "Where would I take the x-rays?", answer: "We have an in-house digital OPG and Cephalometric X-ray machine, so you don't need to go anywhere else." },
      { question: "Is it too late to have braces if I am already an adult?", answer: "No! It is never too late to have the smile you always wanted. A large percentage of our orthodontic patients are adults." },
      { question: "Are braces painful?", answer: "You might feel some discomfort for a few days after adjustments, but modern braces are more comfortable than ever. Over-the-counter pain relievers can help with any soreness." }
    ]
  },
  "braces": {
    id: "braces",
    title: "Dental Braces",
    heroImage: "https://images.unsplash.com/photo-1623961990059-28356e226a77?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Traditional & Ceramic Braces for Precision Results",
    introDescription: "Dental braces remain one of the most effective ways to straighten teeth and correct complex bite issues. At Go Dental Clinic, we offer both traditional metal braces and aesthetic ceramic braces.\n\nOur specialists use the latest low-profile brackets which are smaller and more comfortable than ever before. Whether you are a teenager or an adult, braces can deliver predictable, high-quality results for even the most severe misalignments.",
    subTypesTitle: "Choose Your Style",
    subTypes: [
      { title: "Metal Braces", description: "Strong, durable, and the most cost-effective option. Kids love adding colorful bands!", image: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=400" },
      { title: "Ceramic Braces", description: "Made of clear or tooth-colored material, these are less visible on your teeth.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" },
      { title: "Damon Braces", description: "Self-ligating braces that often require fewer appointments and shorter treatment times.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Most effective for complex cases",
      "Cost-effective solution",
      "Durable and strong",
      "Fun color options for kids",
      "24/7 correction working continuously"
    ],
    relatedDoctorIds: [3, 100, 4],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Gaps+Before", after: "https://placehold.co/600x400/e2e8f0/475569?text=Closed+Gaps+After", label: "Gap Closure" }
    ],
    faqs: [
      { question: "How long do I have to wear braces?", answer: "Treatment time varies by case complexity but typically ranges from 12 to 24 months." },
      { question: "Can I eat normally with braces?", answer: "You should avoid hard, sticky, and crunchy foods that can break brackets. Soft foods are best, especially after adjustments." },
      { question: "Do braces hurt?", answer: "Application is painless. You may feel soreness for 3-5 days after adjustments as teeth begin to move." }
    ]
  },
  "clear-aligners": {
    id: "clear-aligners",
    title: "Clear Aligners",
    heroImage: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=2000",
    introTitle: "The Invisible Way to Straighten Teeth",
    introDescription: "Clear aligners offer a modern alternative to metal braces. Using a series of custom-made, invisible plastic trays, this treatment gradually moves your teeth into their ideal position.\n\nThey are removable, allowing you to eat whatever you want and maintain perfect oral hygiene. Ideal for adults and professionals who want to improve their smile without the metallic look of traditional braces. Our specialists in Bur Dubai and Al Warqa are experts in planning effective clear aligner treatments tailored to your unique smile goals.",
    subTypesTitle: "Key Features of Clear Aligners",
    subTypes: [
      { title: "Virtually Invisible", description: "Clear plastic material makes them barely noticeable.", image: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=400" },
      { title: "Removable", description: "Take them out for meals and brushing, no dietary restrictions.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" },
      { title: "Comfortable", description: "Smooth surface with no metal wires to irritate your mouth.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" },
      { title: "Predictable", description: "Digital planning allows you to see the end result before starting.", image: "https://images.unsplash.com/photo-1570304825946-b258673a8769?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Virtually invisible",
      "Removable for eating and cleaning",
      "No metal wires or brackets",
      "Comfortable smooth plastic",
      "Fewer emergency visits",
      "Easier to brush and floss",
      "Clear treatment timeline"
    ],
    relatedDoctorIds: [3, 4, 100],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Misaligned+Before", after: "https://placehold.co/600x400/e2e8f0/475569?text=Aligned+After", label: "Alignment Correction" },
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Open+Bite+Before", after: "https://placehold.co/600x400/e2e8f0/475569?text=Closed+Bite+After", label: "Open Bite Correction" }
    ],
    faqs: [
      { question: "Do I have to wear them all day?", answer: "For best results, aligners must be worn for 20-22 hours per day, removed only for eating, brushing, and flossing." },
      { question: "How often do I change trays?", answer: "Typically every 1-2 weeks, as directed by your orthodontist. Each new set moves your teeth slightly further." },
      { question: "Is the treatment painful?", answer: "Most patients experience minor pressure for a day or two with each new set of aligners. This is a sign that the treatment is working!" },
      { question: "Can I drink coffee or tea with aligners in?", answer: "No, hot liquids can warp the plastic, and dark liquids can stain them. You should remove them before drinking anything other than water." },
      { question: "How do I clean my aligners?", answer: "Rinse them with lukewarm water and brush them gently with a toothbrush. Avoid using hot water or harsh chemicals." }
    ]
  },
  "invisalign": {
    id: "invisalign",
    title: "Invisalign® Treatment",
    heroImage: "https://images.unsplash.com/photo-1570304825946-b258673a8769?auto=format&fit=crop&q=80&w=2000",
    introTitle: "World Leader in Clear Aligner Therapy",
    introDescription: "Invisalign uses advanced 3D computer-imaging technology to plan your complete treatment from the initial position to the final desired position. You can see your potential final smile before you even start!\n\nJoin millions of people worldwide who have transformed their smiles with Invisalign. At Go Dental Clinic, we are certified Invisalign providers offering this premium treatment starting from just AED 2,000.",
    priceTag: "Invisalign from AED 2,000",
    subTypesTitle: "The Invisalign Process",
    subTypes: [
      { title: "1. Consultation & Scan", description: "We use an iTero 3D scanner to create a precise digital model of your teeth.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" },
      { title: "2. Custom Aligners", description: "A series of custom aligners are manufactured specifically for your teeth.", image: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=400" },
      { title: "3. Wear & Progress", description: "Wear each set for about 2 weeks, moving to the next set until your smile is straight.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "See your results before starting",
      "World's most advanced aligner material (SmartTrack)",
      "Certified Platinum Providers",
      "Flexible monthly installments",
      "Comfortable and discreet"
    ],
    relatedDoctorIds: [4, 3],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Deep+Bite+Before", after: "https://placehold.co/600x400/e2e8f0/475569?text=Ideal+Bite+After", label: "Invisalign Result" }
    ],
    faqs: [
      { question: "How much does Invisalign cost?", answer: "Prices start from AED 2,000 for simple cases. Comprehensive cases vary, but we offer flexible payment plans to make it affordable." },
      { question: "Is Invisalign effective for complex cases?", answer: "Yes, with SmartForce attachments, Invisalign can treat complex malocclusions that were previously only treatable with braces." },
      { question: "Does it affect my speech?", answer: "You may have a slight lisp for a day or two as your tongue adjusts, but it disappears quickly." }
    ]
  },
  "routine-dental-check-up": {
    id: "routine-dental-check-up",
    title: "Routine Dental Check-up",
    heroImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Routine Dental Checkups For A Healthy Mouth",
    introDescription: "Are You Keeping Up with Routine Dental Check-Ups?\n\nPrevention is always better than cure, and the same applies to oral health. Regular dental check-ups are crucial to maintaining a healthy smile and catching potential issues early on.\n\nAt Go Dental Clinic, we emphasize preventive dentistry as the key to maintaining optimal oral health. To ensure your teeth and gums stay in top condition, it is highly recommended to visit one of our qualified dentists for a dental check-up every six months. During these visits, our dentist will examine you for dental cavities, oral cancer, gum disease, and other concerns. If any issues are detected, you'll receive a comprehensive treatment plan tailored to your needs.\n\nDepending on your lifestyle and dental health, your dentist may recommend more frequent visits, for instance, individuals with diabetes or those who smoke are more prone to tooth decay and gum disease, requiring additional check-ups to protect their oral health.",
    priceTag: "Book Your Consultation",
    subTypesTitle: "Benefits of Routine Dental Check-up",
    subTypes: [
      { title: "Early Detection of Dental Issues", description: "Catch cavities, gum disease, and oral cancer early when they are easier to treat.", image: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=400" },
      { title: "Prevention of Tooth Decay and Gum Disease", description: "Regular cleanings prevent plaque and tartar buildup, reducing decay risk.", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=400" },
      { title: "Improved Oral Hygiene", description: "Professional cleanings remove tartar and improve overall oral health.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" },
      { title: "Personalized Oral Health Advice", description: "Dentists offer tailored guidance for better brushing, flossing, and care routines.", image: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=400" },
      { title: "Fresh Breath and Clean Mouth", description: "Routine cleanings help eliminate bad breath and bacteria.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" },
      { title: "Overall Health Monitoring", description: "Regular visits can reveal signs of broader health issues.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" }
    ],
    benefitsTitle: "Why Choose Go Dental Clinic For Routine Dental Check-ups?",
    benefits: [
      "Detailed dental examinations to identify your oral health issues.",
      "Comprehensive treatment plans based on your dental condition.",
      "Dental examinations are done by highly experienced dentists.",
      "Latest technologies like intraoral cameras and digital x-rays are used."
    ],
    relatedDoctorIds: [8, 9, 10, 11, 12],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Stained+Teeth", after: "https://placehold.co/600x400/e2e8f0/475569?text=Clean+And+Polished", label: "Scale & Polish" }
    ],
    faqs: [
      { question: "How often should I schedule routine dental checkups?", answer: "One must go for a routine dental check-up every six months. However, the frequency may vary based on your oral health needs. Some individuals with specific conditions may require more frequent visits, while others with excellent oral health may only need an annual check-up." },
      { question: "What should you expect during a routine dental check-up?", answer: "During a routine dental check-up, your dentist will examine your teeth and gums for any signs of cavities, gum disease, and other oral health issues. They may also clean your teeth to remove plaque and tartar buildup. X-rays may be taken to detect any hidden issues." },
      { question: "Should I have routine dental check-ups even if my teeth feel fine?", answer: "Yes, even if your teeth feel fine, regular check-ups are essential. Dental issues can develop silently, and early detection prevents them from becoming severe and painful problems later on." },
      { question: "Do routine dental check-ups include screenings for oral cancer?", answer: "Yes, many routine dental check-ups include screenings for oral cancer. Dentists are trained to recognize early signs of oral cancer, making these check-ups vital for early detection." },
      { question: "How can I prepare for a routine dental check-up?", answer: "To prepare for your appointment, ensure you brush and floss your teeth. Make a list of any questions or concerns you have about your oral health, and bring a list of medications you are currently taking." }
    ]
  },
  "wisdom-tooth-extraction": {
    id: "wisdom-tooth-extraction",
    title: "Wisdom Tooth Extraction",
    heroImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Wisdom Tooth Extraction",
    introDescription: "Wisdom teeth are the last teeth to develop in your jaws and, for many people, they come through normally and do not cause any problems. However, often there isn't enough space for them to erupt into the correct position like the other teeth in your mouths. This may cause these teeth erupt in abnormal position or be partially erupted or completely impacted under the bone or gums. In these conditions, in can get infected and the Dentist may recommend the wisdom tooth to be removed.\n\nPreparing for Wisdom Teeth Removal\nWhen a wisdom tooth is fully erupted, impacted, or has curved roots, the procedure requires the expertise of a specialist oral and maxillofacial surgeon. These cases are often more complex due to the tooth's position or proximity to nerves, making specialized care essential for a safe and effective extraction. Before the extraction, an X-ray or scan will be taken to assess the position and complexity of the impacted tooth. This helps the oral surgeon determine the best approach for removal. Typically, wisdom tooth removal is a straightforward procedure performed at the dental clinic under local anesthesia. At Go Dental Clinic, our experienced team of oral surgeons will review the treatment plan with you, ensuring you're fully informed and comfortable throughout the process, making your experience as smooth as possible.\n\nWhat happens during Wisdom Teeth Removal or Extraction?\nThe wisdom tooth removal is carried out under local anaesthesia and you will not feel any pain during this procedure. For patients who are very anxious or require to remove all 4 wisdom teeth in a single appointment, we offer the option of doing the treatment with nitrous oxide sedation or under general anesthesia. Contact us at 800-777-000 for further information regarding wisdom teeth extractions or click here to book an appointment.",
    priceTag: "Book Your Consultation",
    benefitsTitle: "Why Choose Go Dental Clinic For Wisdom Tooth Extraction?",
    benefits: [
      "Specialist Oral & Maxillofacial Surgeons",
      "Painless extraction using advanced anesthesia",
      "State-of-the-art facilities for complex surgeries",
      "Comprehensive post-operative care and follow-up",
      "Affordable costs with transparent pricing"
    ],
    relatedDoctorIds: [2],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Impacted+Wisdom+Tooth", after: "https://placehold.co/600x400/e2e8f0/475569?text=Healthy+Healing", label: "Surgical Extraction" }
    ],
    faqs: [
      { question: "Why do wisdom teeth need to be removed?", answer: "If they are impacted and infected or cause crowding in your teeth, it is recommended that they be removed to avoid damaging the surrounding teeth. If they grow into the normal position and function properly, it is not necessary to have them removed." },
      { question: "What are impacted wisdom teeth?", answer: "Impacted wisdom teeth are third molars at the back of the mouth that don't have enough room to emerge or grow normally. They can result in pain, damage to other teeth, and other dental problems." },
      { question: "What are some problems that can arise if I do not remove my wisdom teeth?", answer: "Potential issues include infection (pericoronitis), cysts, damage to adjacent teeth, decay, and gum disease due to difficulty cleaning the area." },
      { question: "Why are wisdom teeth more difficult to remove than other teeth?", answer: "They are often impacted within the jawbone, may have curved roots, and are located at the very back of the mouth near nerves and sinuses, requiring surgical precision." },
      { question: "How much will it cost to get my wisdom teeth removed?", answer: "The cost depends on the complexity of the extraction (simple vs. surgical/impacted). We offer affordable rates and will provide a clear estimate after your consultation." }
    ]
  },
  "porcelain-veneers": {
    id: "porcelain-veneers",
    title: "Porcelain Veneers",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Affordable Veneers in Bur Dubai and Al Warqa, Dubai",
    introDescription: "Looking for porcelain veneers to transform your smile? At Go Dental Clinic in Bur Dubai and Al Warqa, our expert Cosmetic Dentists can help you achieve the perfect smile with affordable veneers that are custom-made to suit your needs.\n\nPorcelain veneers are thin, handcrafted shells designed to cover the front surface of your teeth, effectively improving their color, shape, size, and length. These dental veneers are an ideal solution for those seeking a flawless, long-lasting smile.\n\nIf you're dreaming of a perfect Hollywood smile, porcelain veneers are the perfect option to achieve the results you desire.",
    priceTag: "Starting at AED 3,000 (Includes 4 Teeth)",
    subTypesTitle: "When to Opt for Porcelain Veneers?",
    subTypes: [
      { title: "Discolored Teeth", description: "Correct stubborn discoloration that whitening can't fix.", image: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=400" },
      { title: "Worn-down Teeth", description: "Restore the length and shape of teeth worn by grinding.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" },
      { title: "Chipped or Broken Teeth", description: "Repair minor damage for a seamless look.", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=400" },
      { title: "Gaps Between Teeth", description: "Close spacing issues without braces.", image: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=400" },
      { title: "Misaligned Teeth", description: "Fix minor alignment issues instantly.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" }
    ],
    benefitsTitle: "Why Choose Go Dental Clinic For Porcelain Veneers?",
    benefits: [
      "The procedure is done by our highly experienced Specialist Cosmetic Dentists.",
      "Our veneers are hand-crafted and also ultra-thin made in our own dental lab.",
      "We provide a 5-year warranty.",
      "We use advanced technologies.",
      "We provide a smile mock-up to visualize your smile."
    ],
    relatedDoctorIds: [8, 9, 10, 11, 12],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Before+Veneers", after: "https://placehold.co/600x400/e2e8f0/475569?text=After+Veneers", label: "Smile Transformation" },
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Discolored+Teeth", after: "https://placehold.co/600x400/e2e8f0/475569?text=Bright+White+Smile", label: "Color Correction" }
    ],
    faqs: [
      { question: "What are porcelain veneers, and how do they differ from other types of veneers?", answer: "Porcelain veneers are thin, custom-made shells that are bonded to the front surface of teeth to improve their appearance. They are crafted from porcelain, providing a natural look and durability. Unlike composite resin veneers, porcelain veneers are stain-resistant and reflect light similarly to natural teeth." },
      { question: "What dental issues can porcelain veneers address?", answer: "Porcelain veneers are versatile and can correct various cosmetic dental issues, including stained or discolored teeth, chipped or broken teeth, misaligned or uneven teeth, and gaps between teeth." },
      { question: "How long do porcelain veneers last, and do they require special care?", answer: "With proper care, porcelain veneers can last 10 to 15 years or longer. Maintaining them involves good oral hygiene practices like brushing, flossing, and regular dental check-ups. Avoid biting hard objects to prevent damage." },
      { question: "What is the process of getting porcelain veneers?", answer: "The process typically involves a consultation, preparation of teeth (removing a small amount of enamel), taking impressions, and bonding the custom-made veneers to the teeth. It usually requires two visits." },
      { question: "Can porcelain veneers be removed or replaced if needed?", answer: "Porcelain veneers are considered a permanent treatment because enamel is removed. However, they can be replaced if damaged or if you want to change the look." }
    ]
  },
  "children-dentistry": {
    id: "children-dentistry",
    title: "Children's Dentistry",
    heroImage: "https://images.unsplash.com/photo-1596918820696-98129cc6156e?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Children's Dentistry",
    introDescription: "Are you seeking expert pediatric dentists in Bur Dubai or Warqa, Dubai? At Go Dental Clinic, we provide comprehensive pediatric dentistry solutions for children facing dental issues. Whether your child is experiencing dental problems or has a fear of visiting the dentist, our team is here to make the process smooth and stress-free.\n\nGo Dental Clinic specializes in children's dentistry, offering the best kids dental treatment for children and adolescents. Our dedicated team of specialist pediatric dentists are passionate about ensuring your child's oral health. We strive to make every dental visit both educational and fun, from the moment your child steps into our clinic.\n\nWe pride ourselves on maintaining the highest standards of care. With state-of-the-art dental facilities, we ensure that each child has a comfortable and positive experience during every visit.",
    priceTag: "Exclusive Pediatric Offer Now At AED 249",
    subTypesTitle: "Treatments Offered By Our Specialist Pediatric Dentists",
    subTypes: [
      { title: "Cleaning And Polishing", description: "Regular dental cleaning and polishing remove plaque, tartar, and stains, preventing cavities and gum disease. It maintains optimal oral health, fresh breath, and a bright smile.", image: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=400" },
      { title: "Pit And Fissure Sealants", description: "Protective coatings applied to the grooves of teeth to prevent cavities. They act as a barrier against bacteria and food.", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=400" },
      { title: "Dental Restorations", description: "Includes fillings and crowns to address children's dental issues. Ensure proper development and prevent further damage.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" },
      { title: "Extractions", description: "Performed when necessary to alleviate pain, prevent infection, or address overcrowding, ensuring the child's well-being.", image: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=400" },
      { title: "Stainless Steel And Zirconia Crowns", description: "Offer durability and aesthetics. These crowns restore functionality and withstand chewing forces.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" },
      { title: "Space Maintainers", description: "Preserve gaps left by lost baby teeth to ensure proper alignment of permanent teeth.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" },
      { title: "Habit Breaking Appliances", description: "Aid in overcoming habits like thumb-sucking or tongue-thrusting, preventing dental issues.", image: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=400" },
      { title: "Correction Of Teeth Irregularities", description: "Orthodontics correct irregularities in kids, promoting proper alignment and self-esteem.", image: "https://images.unsplash.com/photo-1570304825946-b258673a8769?auto=format&fit=crop&q=80&w=400" }
    ],
    additionalContentTitle: "Importance of Children's Teeth",
    additionalContent: "The baby teeth (deciduous teeth) are very important not just in helping the child chew and speak but it also helps in guiding the eruption of the permanent teeth into the right position. The major problem seen in deciduous teeth is dental decay.\n\nCavities start because of the build-up of dental plaque, a sticky substance that develops on the surface of your child's teeth. Plaque is generally composed of bacteria, which feed on sugar in food and drink, which in turn produces acid. The acid tends to attack the tooth and the results in cavities. Cavities if detected early can be easily treated by the Pediatric dentist using restorations. Extensive decay called rampant caries is seen in children who are given milk or sugary drinks at bedtime.\n\nIt is recommended to visit a pediatric dentist every 6 months after your child's first birthday. Regular dental visits are key to up-keeping good oral hygiene practices and raising a cavity free child to keep kids' dental problems at bay.",
    benefitsTitle: "Why Choose Go Dental Clinic for your kid's dental treatment in Dubai?",
    benefits: [
      "Team of highly skilled Specialist Pediatric Dentists",
      "Nitrous Oxide Sedation and Treatments Under General Anesthesia for Nervous And Anxious Children",
      "Comfortable and relaxing atmosphere for children to eliminate dental anxiety and fear",
      "Advanced technologies for dental treatments",
      "Preventive dentistry and oral education for children"
    ],
    videoSection: {
      videoUrl: "https://www.youtube.com/embed/Jd0WIJaUwaE",
      title: "Hear What Our Patients Say",
      patientName: "Fatima Y",
      testimonialText: "Go Dental Clinic is amazing for kids! I took my son in for a routine check-up, and the pediatric dentist was fantastic with him. My son usually gets nervous at the dentist, but this time, he was calm and even excited. The staff really knows how to make children feel at ease, and the waiting area is filled with toys and games, which was a nice touch. Definitely our go-to clinic for all his dental needs."
    },
    relatedDoctorIds: [5, 6, 13],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Early+Decay", after: "https://placehold.co/600x400/e2e8f0/475569?text=Sealant+Protection", label: "Cavity Prevention" }
    ],
    faqs: [
      { question: "At what age should a child first visit the dentist?", answer: "The American Academy of Pediatric Dentistry recommends that a child's first dental visit should occur by their first birthday or within six months of the eruption of their first tooth. Early dental visits help establish good oral health habits and allow the dentist to monitor the development of the child's teeth." },
      { question: "How can I prepare my child for their first dental appointment?", answer: "You can prepare your child by talking about the dentist in a positive way, reading books about dental visits, and playing 'dentist' at home. Avoid using scary words like 'needle' or 'pain'. Our team is trained to make the experience fun and non-threatening." },
      { question: "Are baby teeth really that important since they eventually fall out?", answer: "Yes, baby teeth are crucial for chewing, speaking, and holding space for permanent teeth. Neglecting them can lead to infections, pain, and alignment issues with permanent teeth." },
      { question: "What preventive measures can I take to protect my child's teeth?", answer: "Encourage regular brushing with fluoride toothpaste, flossing, limiting sugary snacks and drinks, and scheduling regular dental check-ups. We also offer sealants and fluoride treatments for extra protection." },
      { question: "When should a child start using fluoride toothpaste?", answer: "A smear of fluoride toothpaste (size of a grain of rice) can be used as soon as the first tooth erupts. Increase to a pea-sized amount for children aged 3 to 6 years. Always supervise brushing to ensure they spit it out." }
    ]
  },
  "dental-implants": {
    id: "dental-implants",
    title: "Dental Implants",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Permanent, Natural-Looking Tooth Replacement",
    introDescription: "Dental implants are the gold standard for replacing missing teeth. Unlike dentures or bridges, implants provide a permanent, fixed solution that looks, feels, and functions exactly like your natural teeth.\n\nOur specialists use advanced 3D imaging technology to place high-quality titanium implants that fuse with your jawbone, preventing bone loss and preserving your facial structure. Whether you need a single tooth replaced or a full-arch restoration (All-on-4), we provide safe, long-lasting solutions.",
    priceTag: "Implants from AED 4,999",
    subTypesTitle: "Implant Solutions",
    subTypes: [
      { title: "Single Tooth Implant", description: "Replace a single missing tooth without affecting adjacent healthy teeth.", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=400" },
      { title: "Implant-Supported Bridge", description: "Ideal for replacing multiple missing teeth in a row securely.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" },
      { title: "All-on-4 Implants", description: "Full arch restoration using just four implants for a permanent set of teeth.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Permanent solution for missing teeth",
      "Prevents jawbone loss and aging",
      "Restores full chewing power",
      "No risk of cavities",
      "Looks completely natural"
    ],
    relatedDoctorIds: [2],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Missing+Tooth+Before", after: "https://placehold.co/600x400/e2e8f0/475569?text=Implant+Placed+After", label: "Single Implant" }
    ],
    faqs: [
      { question: "Is the dental implant procedure painful?", answer: "The procedure is performed under local anesthesia, so you feel no pain during surgery. Post-op discomfort is usually minimal and manageable with over-the-counter medication." },
      { question: "How long do dental implants last?", answer: "With proper care and hygiene, dental implants can last a lifetime." },
      { question: "Am I a candidate for dental implants?", answer: "Most adults with good general health and sufficient jawbone density are candidates. We perform a thorough assessment using 3D scans to confirm suitability." }
    ]
  },
  "root-canal-treatment": {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Save Your Natural Teeth from Extraction",
    introDescription: "A root canal treatment is designed to save a tooth that is badly decayed or infected. This procedure involves removing the damaged area of the tooth (the pulp), cleaning and disinfecting it, then filling and sealing it.\n\nAt Go Dental Clinic, our Specialist Endodontists use advanced microscopes and rotary instruments to make the procedure precise, efficient, and comfortable. Contrary to popular belief, modern root canal treatment is virtually painless and relieves the severe pain caused by infection.",
    subTypesTitle: "Types of Endodontic Care",
    subTypes: [
      { title: "Single Visit Root Canal", description: "Complete treatment in one appointment for eligible cases.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" },
      { title: "Re-treatment", description: "Correcting previously failed root canals to save the tooth.", image: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=400" },
      { title: "Microscopic Endodontics", description: "Using high-magnification for superior precision and success rates.", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Relieves severe tooth pain immediately",
      "Saves your natural tooth from extraction",
      "Restores normal biting and chewing",
      "Prevents spread of infection",
      "High success rate with modern techniques"
    ],
    relatedDoctorIds: [1],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Infected+Tooth", after: "https://placehold.co/600x400/e2e8f0/475569?text=Restored+Tooth", label: "Root Canal Therapy" }
    ],
    faqs: [
      { question: "Is root canal treatment painful?", answer: "No, the procedure itself is performed under anesthesia and is painless. It actually relieves the pain caused by the infection." },
      { question: "How many visits does it take?", answer: "Many simple cases can be completed in a single visit. Complex cases or severe infections may require two visits." },
      { question: "Do I need a crown after a root canal?", answer: "Yes, in most cases, a crown is recommended to protect the treated tooth and restore its strength and function." }
    ]
  },
  "tooth-fillings": {
    id: "tooth-fillings",
    title: "Tooth Fillings",
    heroImage: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Aesthetic Restoration for Cavities",
    introDescription: "Tooth fillings are used to treat cavities and repair cracked or broken teeth. We use high-quality, tooth-colored composite materials that match the natural shade of your teeth, ensuring a seamless and aesthetic result.\n\nOur mercury-free fillings are durable and bond directly to the tooth structure, preserving more of your natural tooth compared to old silver amalgam fillings.",
    subTypesTitle: "Filling Options",
    subTypes: [
      { title: "Composite Fillings", description: "Tooth-colored resin that blends perfectly with your smile.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" },
      { title: "Ceramic Inlays/Onlays", description: "Custom-made laboratory fillings for larger cavities requiring extra strength.", image: "https://images.unsplash.com/photo-1570304825946-b258673a8769?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Natural appearance (tooth-colored)",
      "Mercury-free and safe",
      "Preserves natural tooth structure",
      "Quick and painless procedure",
      "Long-lasting durability"
    ],
    relatedDoctorIds: [8, 9, 10, 11, 12],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Cavity+Before", after: "https://placehold.co/600x400/e2e8f0/475569?text=Filling+After", label: "Composite Filling" }
    ],
    faqs: [
      { question: "Do fillings hurt?", answer: "The area is numbed with local anesthesia, so you won't feel any pain during the procedure." },
      { question: "How long do composite fillings last?", answer: "They typically last 5-10 years, depending on the size of the filling and your oral hygiene habits." },
      { question: "Can I replace my old silver fillings?", answer: "Yes, many patients choose to replace old metal fillings with white composite ones for better aesthetics and to avoid mercury." }
    ]
  },
  "sedation-dentistry": {
    id: "sedation-dentistry",
    title: "Sedation Dentistry",
    heroImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Relaxing, Anxiety-Free Dental Care",
    introDescription: "Does the thought of visiting the dentist make you anxious? You are not alone. Sedation dentistry offers a safe and effective way to overcome dental fear and receive the care you need comfortably.\n\nWe offer Nitrous Oxide (Laughing Gas) sedation, which induces a state of deep relaxation while you remain conscious. It wears off quickly after the procedure, allowing you to return to your daily activities immediately.",
    subTypesTitle: "Our Sedation Options",
    subTypes: [
      { title: "Nitrous Oxide (Laughing Gas)", description: "Inhaled gas that relaxes you within minutes. Ideal for mild to moderate anxiety.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" },
      { title: "Pediatric Sedation", description: "Safe options to help children stay calm during treatment.", image: "https://images.unsplash.com/photo-1596918820696-98129cc6156e?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Eliminates dental anxiety and fear",
      "Makes long procedures feel short",
      "Safe for both children and adults",
      "No lingering side effects (Nitrous Oxide)",
      "Allows for more work to be done in one visit"
    ],
    relatedDoctorIds: [5, 13, 2],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Anxious+Patient", after: "https://placehold.co/600x400/e2e8f0/475569?text=Relaxed+Treatment", label: "Nitrous Oxide Sedation" }
    ],
    faqs: [
      { question: "Is sedation dentistry safe?", answer: "Yes, it is very safe when administered by trained professionals. We monitor your vitals throughout the procedure." },
      { question: "Will I fall asleep?", answer: "With Nitrous Oxide, you will remain awake and responsive but feel extremely relaxed and indifferent to the treatment." },
      { question: "Can I drive home after sedation?", answer: "If you receive Nitrous Oxide, the effects wear off almost instantly, so you can drive yourself home. For other forms of sedation, you may need a driver." }
    ]
  },
  "gum-disease-treatment": {
    id: "gum-disease-treatment",
    title: "Gum Disease Treatment",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Protecting the Foundation of Your Teeth",
    introDescription: "Healthy gums are essential for a healthy smile. Periodontal (gum) disease is a leading cause of tooth loss in adults. Our specialist periodontist offers comprehensive treatments to halt the progression of gum disease and restore oral health.\n\nFrom deep cleaning (scaling and root planing) to advanced laser therapy and gum surgery, we provide tailored solutions to treat gingivitis and periodontitis effectively.",
    subTypesTitle: "Periodontal Services",
    subTypes: [
      { title: "Scaling & Root Planing", description: "Deep cleaning below the gumline to remove bacterial plaque and tartar.", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=400" },
      { title: "Laser Gum Therapy", description: "Minimally invasive treatment to remove infected tissue and promote healing.", image: "https://images.unsplash.com/photo-1570304825946-b258673a8769?auto=format&fit=crop&q=80&w=400" },
      { title: "Gum Grafting", description: "Restoring receding gum lines to protect tooth roots and improve aesthetics.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Stops gum bleeding and inflammation",
      "Prevents tooth loss",
      "Eliminates bad breath",
      "Improves overall systemic health",
      "Restores gum aesthetics"
    ],
    relatedDoctorIds: [7],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Swollen+Gums", after: "https://placehold.co/600x400/e2e8f0/475569?text=Healthy+Pink+Gums", label: "Laser Gum Treatment" }
    ],
    faqs: [
      { question: "What are the signs of gum disease?", answer: "Common signs include red, swollen, or bleeding gums, persistent bad breath, loose teeth, and receding gums." },
      { question: "Is gum disease reversible?", answer: "Gingivitis (early stage) is reversible with professional cleaning and good home care. Periodontitis (advanced stage) can be managed but not fully reversed, requiring ongoing maintenance." },
      { question: "Does deep cleaning hurt?", answer: "We use local anesthesia to ensure you are comfortable during scaling and root planing procedures." }
    ]
  },
  "jaw-joint-disorder": {
    id: "jaw-joint-disorder",
    title: "Jaw Joint Disorder (TMD)",
    heroImage: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Relief from TMJ Pain and Discomfort",
    introDescription: "Temporomandibular Joint Disorders (TMD) can cause chronic pain in the jaw, face, and neck, as well as clicking sounds and difficulty chewing. Our specialists diagnose and treat the root causes of TMD to provide lasting relief.\n\nTreatment options range from conservative therapies like custom night guards and stress management to advanced interventions like Botox injections for muscle relaxation.",
    subTypesTitle: "TMD Treatments",
    subTypes: [
      { title: "Night Guards", description: "Custom-made splints to prevent teeth grinding (bruxism) during sleep.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" },
      { title: "Occlusal Adjustment", description: "Correcting bite alignment to reduce stress on the jaw joint.", image: "https://images.unsplash.com/photo-1623961990059-28356e226a77?auto=format&fit=crop&q=80&w=400" },
      { title: "Botox Therapy", description: "Injections to relax hyperactive jaw muscles and relieve tension headaches.", image: "https://images.unsplash.com/photo-1570304825946-b258673a8769?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Relieves jaw and facial pain",
      "Protects teeth from grinding damage",
      "Reduces tension headaches",
      "Improves jaw function and mouth opening",
      "Non-invasive treatment options"
    ],
    relatedDoctorIds: [2],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Misaligned+Bite", after: "https://placehold.co/600x400/e2e8f0/475569?text=Corrected+Occlusion", label: "TMD Therapy" }
    ],
    faqs: [
      { question: "What causes TMD?", answer: "Causes include stress (clenching/grinding), arthritis, jaw injury, or misalignment of the teeth or jaw." },
      { question: "How does a night guard help?", answer: "It creates a barrier between upper and lower teeth, preventing grinding and reducing the pressure on the jaw joint muscles." },
      { question: "Is Botox for TMJ safe?", answer: "Yes, when administered by a trained professional, it is a safe and effective way to relax muscles and reduce pain." }
    ]
  },
  "teeth-whitening": {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    heroImage: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Get a Brighter, whiter Smile in 1 Hour",
    introDescription: "Professional teeth whitening is the fastest and most affordable way to enhance your smile. At Go Dental Clinic, we offer advanced in-office whitening systems like Zoom! and Flash, which can brighten your teeth up to 8 shades in a single visit.\n\nWe also provide custom take-home kits for patients who prefer to whiten their teeth gradually in the comfort of their home. Our treatments are safe, effective, and tailored to minimize sensitivity.",
    subTypesTitle: "Whitening Options",
    subTypes: [
      { title: "In-Office Zoom! Whitening", description: "Instant results in a 60-minute session using light-activated gel.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" },
      { title: "Home Whitening Kits", description: "Custom trays and professional gel for gradual whitening at home.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Immediate visible results",
      "Safe for enamel",
      "Boosts self-confidence",
      "Removes deep stains from coffee/tea",
      "Supervised by professionals"
    ],
    relatedDoctorIds: [8, 9, 10, 11, 12],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Yellow+Teeth", after: "https://placehold.co/600x400/e2e8f0/475569?text=White+Smile", label: "In-Office Whitening" }
    ],
    faqs: [
      { question: "Does whitening cause sensitivity?", answer: "Some patients experience temporary sensitivity, but our modern products contain desensitizing agents to minimize discomfort." },
      { question: "How long do the results last?", answer: "Results can last 6-12 months or longer, depending on the diet (coffee, tea, smoking) and oral hygiene." },
      { question: "Will it whiten my crowns or fillings?", answer: "No, whitening only works on natural tooth enamel. It will not change the color of existing restorations." }
    ]
  },
  "dental-bridges-crowns": {
    id: "dental-bridges-crowns",
    title: "Dental Bridges & Crowns",
    heroImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Restore Damaged or Missing Teeth",
    introDescription: "Crowns and bridges are fixed prosthetic devices used to restore damaged teeth or replace missing ones. A crown (cap) covers a damaged tooth to strengthen it, while a bridge spans the gap created by missing teeth.\n\nOur clinic features an in-house dental lab, allowing us to craft high-quality Zirconia and E-max crowns quickly and precisely. We ensure a perfect color match and natural fit for a seamless smile restoration.",
    subTypesTitle: "Restorative Solutions",
    subTypes: [
      { title: "Zirconia Crowns", description: "Extremely durable and aesthetic, ideal for back teeth.", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=400" },
      { title: "E-max Crowns", description: "Highly translucent ceramic, perfect for front teeth aesthetics.", image: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=400" },
      { title: "Dental Bridges", description: "Fixed solution to replace one or more missing teeth using adjacent teeth for support.", image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Restores tooth function and shape",
      "Protects weak teeth from breaking",
      "Replaces missing teeth securely",
      "Natural-looking aesthetics",
      "Long-lasting durability"
    ],
    relatedDoctorIds: [8, 1, 9],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Broken+Tooth", after: "https://placehold.co/600x400/e2e8f0/475569?text=Crown+Restored", label: "Ceramic Crown" }
    ],
    faqs: [
      { question: "What is the difference between a crown and a bridge?", answer: "A crown covers a single damaged tooth. A bridge replaces missing teeth by using the adjacent teeth as anchors." },
      { question: "How long do crowns last?", answer: "With good hygiene, crowns can last 10-15 years or more." },
      { question: "Is the procedure painful?", answer: "No, the tooth is numbed during preparation. You may feel slight sensitivity for a few days after cementation." }
    ]
  },
  "dental-cleaning": {
    id: "dental-cleaning",
    title: "Dental Cleaning",
    heroImage: "https://images.unsplash.com/photo-1598256989337-1296b31f46f7?auto=format&fit=crop&q=80&w=2000",
    introTitle: "Professional Hygiene for a Healthy Smile",
    introDescription: "Professional dental cleaning (scaling and polishing) is vital for removing plaque and tartar that regular brushing misses. It prevents gum disease, bad breath, and tooth decay.\n\nOur gentle hygienists use ultrasonic scalers and airflow technology to clean your teeth thoroughly without discomfort. Finishing with a polish leaves your teeth feeling smooth and looking brighter.",
    priceTag: "Cleaning Offer AED 199",
    subTypesTitle: "Hygiene Services",
    subTypes: [
      { title: "Scale and Polish", description: "Standard cleaning to remove tartar and surface stains.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" },
      { title: "Airflow Cleaning", description: "Advanced stain removal using a mix of water, air, and powder.", image: "https://images.unsplash.com/photo-1617804496350-13778a69d661?auto=format&fit=crop&q=80&w=400" },
      { title: "Fluoride Application", description: "Strengthens enamel and helps prevent cavities.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" }
    ],
    benefits: [
      "Prevents gum disease",
      "Freshens breath",
      "Removes unsightly stains",
      "Detects issues early",
      "Cost-effective prevention"
    ],
    relatedDoctorIds: [9, 10, 11, 12],
    beforeAfter: [
      { before: "https://placehold.co/600x400/e2e8f0/475569?text=Tartar+Buildup", after: "https://placehold.co/600x400/e2e8f0/475569?text=Sparkling+Clean", label: "Deep Cleaning" }
    ],
    faqs: [
      { question: "Does cleaning damage enamel?", answer: "No, professional cleaning is safe and does not damage healthy tooth enamel." },
      { question: "How often should I get a cleaning?", answer: "Every 6 months is recommended for most patients. Those with gum disease may need visits every 3-4 months." },
      { question: "Is it painful?", answer: "Most patients find it painless. If you have sensitive teeth, let us know, and we can use numbing gel." }
    ]
  }
};
