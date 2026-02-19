
export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  category: string;
  image: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  impactTitle: string;
  impactMetric: string;
  impactIcon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  description: string;
  id_number: string;
  icon: string;
}

export interface Academic {
  id: string;
  degree: string;
  school: string;
  image: string;
  details: string[];
  tags: string[];
}
