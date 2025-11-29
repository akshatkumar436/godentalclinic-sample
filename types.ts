
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  price?: string;
  benefits: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  serviceUsed: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string; // Short bio for cards
  
  // Extended details for individual page
  fullBio?: string;
  qualifications?: string;
  experienceLabel?: string;
  location?: string;
  languages?: string;
  nationality?: string;
  expertise?: string[];
  memberships?: string[];
  youtubeUrl?: string;
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceSubType {
  title: string;
  description: string;
  image: string;
}

export interface VideoSection {
  videoUrl: string;
  title: string;
  testimonialText: string;
  patientName: string;
}

export interface DetailedService {
  id: string;
  title: string;
  heroImage: string;
  introTitle: string;
  introDescription: string;
  priceTag?: string; // e.g. "From AED 2000"
  subTypesTitle?: string; // e.g. "Types of Orthodontic Treatments"
  subTypes?: ServiceSubType[];
  subTypesLayout?: 'grid' | 'list'; // 'grid' is default, 'list' for zig-zag
  benefitsTitle?: string; // Custom title for the benefits section
  benefits: string[]; // Why Choose Us
  relatedDoctorIds: number[];
  beforeAfter: BeforeAfterImage[];
  faqs: FaqItem[];
  
  // New fields for rich content pages
  additionalContentTitle?: string;
  additionalContent?: string;
  videoSection?: VideoSection;
  showStatistics?: boolean; // Toggle for New Patients stats
  faqTitle?: string; // Custom FAQ title (e.g. "You ask, we answer")
  faqDescription?: string; // Custom FAQ description
}
