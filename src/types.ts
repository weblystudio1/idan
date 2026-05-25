export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
  serviceType: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface EstimateStep {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
    sub?: string;
    multiplier?: number;
    basePrice?: number;
  }[];
}
