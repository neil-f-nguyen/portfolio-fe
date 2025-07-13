import { Profile, Project, Skill, Experience, AboutCard, LearningItem, Goal, FunFact } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    return response.json();
  }

  async getProfile(): Promise<Profile> {
    return this.request<Profile>('/profile');
  }

  async getProjects(): Promise<Project[]> {
    return this.request<Project[]>('/projects');
  }

  async getSkills(): Promise<Skill[]> {
    return this.request<Skill[]>('/skills');
  }

  async getExperiences(): Promise<Experience[]> {
    return this.request<Experience[]>('/experiences');
  }

  // About section methods
  async getAboutCards(): Promise<AboutCard[]> {
    return this.request<AboutCard[]>('/about-cards');
  }

  async getLearningItems(): Promise<LearningItem[]> {
    return this.request<LearningItem[]>('/learning-items');
  }

  async getGoals(): Promise<Goal[]> {
    return this.request<Goal[]>('/goals');
  }

  async getFunFacts(): Promise<FunFact[]> {
    return this.request<FunFact[]>('/fun-facts');
  }


}

export const apiClient = new ApiClient(API_BASE_URL); 