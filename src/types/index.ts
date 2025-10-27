export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  file?: File | null;
}
