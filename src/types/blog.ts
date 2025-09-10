export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  featuredImage: string;
  tags: string[];
  category: string;
  readingTime: number;
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count: number;
}

export interface BlogSearchParams {
  query?: string;
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
}