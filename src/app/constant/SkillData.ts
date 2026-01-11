import { SkillCategory } from '../types/Skills.types';

export const skillsData: SkillCategory[] = [
  {
    id: 'marketing',
    title: 'MARKETING & MANAGEMENT',
    sections: [
      {
        skills: [
          { name: 'Meta Ads & Google Ads' },
          { name: 'Paid Advertising & Retargeting/Remarketing Campaigns' },
          { name: 'Marketing Campaign Planning & Execution' },
          { name: 'Campaign Strategy & Strategic Marketing Management' },
          { name: 'Marketing Analytics & Data-Driven Decision Making' },
          { name: 'Digital Marketing' },
          { name: 'Social Media Marketing & Content Strategy' },
          { name: 'Marketing Management & Brand Strategy' },
        ],
      },
    ],
  },
  {
    id: 'design',
    title: 'DESIGN & CREATIVE TOOLS',
    sections: [
      {
        skills: [
          { name: 'Adobe Photoshop', icon: '/icons/Skills/photoshop.png' },
          { name: 'Adobe Premiere Pro', icon: '/icons/Skills/premierpro.png' },
          { name: 'Figma', icon: '/icons/Skills/figma.png' },
          { name: 'Canva', icon: '/icons/Skills/canva.png' },
        ],
        columns: 4,
      },
      {
        skills: [
          { name: 'Git & GitHub', icon: '/icons/Skills/git.png' },
          { name: 'Eclipse', icon: '/icons/Skills/eclipse.png' },
          { name: 'JavaScript', icon: '/icons/Skills/javascript.png' },
          { name: 'Django', icon: '/icons/Skills/django.png' },
          { name: 'Dribbble', icon: '/icons/Skills/dribbble.png' },
        ],
        columns: 5,
      },
    ],
  },
  {
    id: 'programming',
    title: 'PROGRAMMING & TECHNICAL SKILLS:',
    sections: [
      {
        title: 'Languages & Frameworks',
        skills: [
          { name: 'Python', icon: '/icons/Skills/python.png' },
          { name: 'C++', icon: '/icons/Skills/C++.png' },
          { name: 'Java', icon: '/icons/Skills/java.png' },
          { name: 'HTML', icon: '/icons/Skills/html.png' },
          { name: 'React', icon: '/icons/Skills/react.png' },
          { name: 'Django', icon: '/icons/Skills/django.png' },
        ],
      },
      {
        title: 'Development Tools',
        skills: [
          { name: 'Git & GitHub', icon: '/icons/Skills/git.png' },
          { name: 'Visual Studio Code', icon: '/icons/Skills/vscode.png' },
        ],
      },
      {
        title: 'Programming Concepts',
        skills: [
          { name: 'Logic Building - Object-Oriented Programming' },
          { name: 'Data Structures' },
          { name: 'File Handling - Responsive Front-End Development' },
        ],
      },
      {
        title: 'Programming Concepts',
        skills: [
          { name: 'OOP - Including' },
          { name: 'Object-Oriented Programming' },
          { name: 'Data Structures' },
          { name: 'File Handling - Responsive Front-End Development' },
        ],
      },
      {
        title: 'Database & Web Tools',
        skills: [
          { name: 'Oracle APEX (Database App Development)' },
          { name: 'Structured Data Management' },
          { name: 'Odoo CMS' },
          { name: 'Web & E-commerce Product Listing Optimization' },
        ],
      },
    ],
  },
];
