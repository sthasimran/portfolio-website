export interface WorkExperience {
  id: number;
  company: string;
  logo: string;
  description: string[];
  category: 'agency' | 'in-house';
}
