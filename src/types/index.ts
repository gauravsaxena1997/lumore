// Type definitions for Lumore

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string; // with background
  imageTransparent: string; // transparent version
  gradient: string; // CSS gradient classes
  category: string;
  ingredients: string[];
  benefits: string[];
  size: string;
  color: string; // hex color
}

export interface Testimonial {
  id: number;
  name: string;
  product: string;
  review: string;
  rating: number;
  image: string;
  skinType?: string;
}

export interface Bundle {
  id: number;
  name: string;
  description: string;
  products: number[]; // product IDs
  price: number;
  savings: number;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}
