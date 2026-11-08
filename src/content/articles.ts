/** Published Insights live in Git, without any runtime database dependency. */
export interface ArticleReference {
  title?: string;
  url?: string;
  accessed_date?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  excerpt: string | null;
  featured_image: string;
  content: string;
  author: string;
  author_bio: string | null;
  author_profile_picture: string | null;
  author_linkedin: string | null;
  author_position?: string | null;
  /** Optional only for legacy data. These fields are not published in Git. */
  author_phone?: string | null;
  author_email?: string | null;
  article_type: string | null;
  article_references: ArticleReference[];
  reading_time: number;
  published: boolean;
  featured: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  cta_type: string | null;
  cta_title: string | null;
  cta_description: string | null;
  cta_link: string | null;
  cta_button_text: string | null;
}

const files = import.meta.glob('./articles/*.json', { eager: true, import: 'default' });

export const publishedArticles: Article[] = Object.values(files)
  .map(value => value as Article)
  .filter(article => article.published && Boolean(article.published_at))
  .sort((a, b) => Date.parse(b.published_at!) - Date.parse(a.published_at!));

export const findPublishedArticle = (slug?: string): Article | undefined =>
  publishedArticles.find(article => article.slug === slug);
