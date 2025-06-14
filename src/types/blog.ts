
export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  featuredImage: {
    url: string;
    alt: string;
  };
  seo: {
    metaDescription: string;
    keywords: string[];
  };
  isPopular?: boolean;
  viewCount: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface BlogFilter {
  category?: string;
  tag?: string;
  sortBy: 'date' | 'popularity' | 'readTime';
  order: 'asc' | 'desc';
}
