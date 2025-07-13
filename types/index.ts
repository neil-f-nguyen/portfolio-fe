export interface Profile {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  avatar: string;
  about: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string[];
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: number;
  name: string;
  level: string;
  icon_url: string;
  category: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  start_date: string;
  end_date: string | null;
  current: boolean;
  description: string;
  technologies: string[];
  logo: string;
}

// About section types
export interface AboutCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  gradient_colors: string[];
  display_order: number;
  hover_rotate_y: number;
  created_at: string;
  updated_at: string;
}

export interface LearningItem {
  id: number;
  title: string;
  color: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Goal {
  id: number;
  title: string;
  color: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface FunFact {
  id: number;
  emoji: string;
  text: string;
  rotate_angle: number;
  display_order: number;
  created_at: string;
  updated_at: string;
} 