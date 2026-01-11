export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  sections: {
    title?: string;
    skills: Skill[];
    columns?: number;
  }[];
}
