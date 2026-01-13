import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, Eye, EyeOff, ArrowLeft, X, Star } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { supabase } from '../lib/supabase';
import { Database } from '../types/database.types';
import { useAuth } from '../contexts/AuthContext';

type Article = Database['public']['Tables']['articles']['Row'];

const ManageInsights = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'PBSA' as Article['category'],
    summary: '',
    excerpt: '',
    featured_image: '',
    content: '',
    author: 'Parx Team',
    author_bio: '',
    author_profile_picture: '',
    author_linkedin: '',
    author_phone: '',
    author_email: '',
    reading_time: 5,
    published: false,
    featured: false,
    article_references: [] as Array<{ title: string; url: string; accessed_date?: string }>,
    cta_type: 'contact',
    cta_title: '',
    cta_description: '',
    cta_link: '',
    cta_button_text: ''
  });

  useEffect(() => {
    if (!user) {
      navigate('/admin/login');
      return;
    }
    fetchArticles();
  }, [user, navigate]);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingArticle) {
        const { error } = await supabase
          .from('articles')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
            published_at: formData.published ? new Date().toISOString() : null
          })
          .eq('id', editingArticle.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('articles')
          .insert({
            ...formData,
            created_by: user?.id,
            published_at: formData.published ? new Date().toISOString() : null
          });

        if (error) throw error;
      }

      resetForm();
      fetchArticles();
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Failed to save article. Please try again.');
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      slug: article.slug,
      category: article.category,
      summary: article.summary,
      excerpt: article.excerpt || article.summary,
      featured_image: article.featured_image,
      content: article.content,
      author: article.author,
      author_bio: article.author_bio || '',
      author_profile_picture: article.author_profile_picture || '',
      author_linkedin: article.author_linkedin || '',
      author_phone: (article as any).author_phone || '',
      author_email: (article as any).author_email || '',
      reading_time: article.reading_time,
      published: article.published,
      featured: article.featured,
      article_references: (article.article_references as any) || [],
      cta_type: (article as any).cta_type || 'contact',
      cta_title: (article as any).cta_title || '',
      cta_description: (article as any).cta_description || '',
      cta_link: (article as any).cta_link || '',
      cta_button_text: (article as any).cta_button_text || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;

    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Failed to delete article. Please try again.');
    }
  };

  const togglePublished = async (article: Article) => {
    try {
      const { error } = await supabase
        .from('articles')
        .update({
          published: !article.published,
          published_at: !article.published ? new Date().toISOString() : null
        })
        .eq('id', article.id);

      if (error) throw error;
      fetchArticles();
    } catch (error) {
      console.error('Error updating article:', error);
      alert('Failed to update article. Please try again.');
    }
  };

  const toggleFeatured = async (article: Article) => {
    try {
      const { error } = await supabase
        .from('articles')
        .update({
          featured: !article.featured
        })
        .eq('id', article.id);

      if (error) throw error;
      fetchArticles();
    } catch (error) {
      console.error('Error updating article:', error);
      alert('Failed to update article. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      category: 'PBSA',
      summary: '',
      excerpt: '',
      featured_image: '',
      content: '',
      author: 'Parx Team',
      author_bio: '',
      author_profile_picture: '',
      author_linkedin: '',
      author_phone: '',
      author_email: '',
      reading_time: 5,
      published: false,
      featured: false,
      article_references: [],
      cta_type: 'contact',
      cta_title: '',
      cta_description: '',
      cta_link: '',
      cta_button_text: ''
    });
    setEditingArticle(null);
    setShowForm(false);
  };

  const addReference = () => {
    setFormData({
      ...formData,
      article_references: [...formData.article_references, { title: '', url: '', accessed_date: '' }]
    });
  };

  const removeReference = (index: number) => {
    setFormData({
      ...formData,
      article_references: formData.article_references.filter((_, i) => i !== index)
    });
  };

  const updateReference = (index: number, field: string, value: string) => {
    const updated = [...formData.article_references];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, article_references: updated });
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </button>
            <h1 className="text-3xl font-bold text-slate-900">Manage Insights</h1>
          </div>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>New Article</span>
            </button>
          )}
        </div>

        {showForm ? (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {editingArticle ? 'Edit Article' : 'Create New Article'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Slug (URL)
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
                <p className="mt-1 text-sm text-slate-500">
                  URL: /insights/{formData.slug}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as Article['category'] })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="PBSA">PBSA</option>
                    <option value="Social Housing">Social Housing</option>
                    <option value="Build to Rent">Build to Rent</option>
                    <option value="Risk Transfer">Risk Transfer</option>
                    <option value="News">News</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Reading Time (minutes)
                  </label>
                  <input
                    type="number"
                    value={formData.reading_time}
                    onChange={(e) => setFormData({ ...formData, reading_time: parseInt(e.target.value) })}
                    min="1"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Author Profile Picture URL
                </label>
                <select
                  value={formData.author_profile_picture}
                  onChange={(e) => setFormData({ ...formData, author_profile_picture: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                >
                  <option value="">None</option>
                  <option value="/parx_5.webp">Parx Logo</option>
                  <option value="/harvey_patey-ford_800x940_webp.webp">Harvey Patey-Ford Image</option>
                  <option value="/harvey_patey-ford_x.webp">Harvey Patey-Ford Image (X)</option>
                  <option value="/harvey_patey-ford_xt.webp">Harvey Patey-Ford Image (XT)</option>
                </select>
                <p className="mt-2 text-sm text-slate-500">
                  Optional - displays in article sidebar
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Author Bio
                </label>
                <textarea
                  value={formData.author_bio}
                  onChange={(e) => setFormData({ ...formData, author_bio: e.target.value })}
                  rows={2}
                  placeholder="Brief bio about the author..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
                <p className="mt-1 text-sm text-slate-500">
                  Optional - displays in article sidebar
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Author LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.author_linkedin}
                  onChange={(e) => setFormData({ ...formData, author_linkedin: e.target.value })}
                  placeholder="https://www.linkedin.com/in/username"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
                <p className="mt-1 text-sm text-slate-500">
                  Optional - adds a LinkedIn button to the author card
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Author Phone Number
                  </label>
                  <select
                    value={formData.author_phone}
                    onChange={(e) => setFormData({ ...formData, author_phone: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="">None</option>
                    <option value="+44 (0) 20 3370 7909">+44 (0) 20 3370 7909</option>
                    <option value="+44 (0) 7514466677">+44 (0) 7514466677</option>
                  </select>
                  <p className="mt-1 text-sm text-slate-500">
                    Optional - displays in article sidebar
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Author Email Address
                  </label>
                  <select
                    value={formData.author_email}
                    onChange={(e) => setFormData({ ...formData, author_email: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="">None</option>
                    <option value="Connect@ParxGroup.co.uk">Connect@ParxGroup.co.uk</option>
                    <option value="Harvey.Patey-Ford@ParxGroup.co.uk">Harvey.Patey-Ford@ParxGroup.co.uk</option>
                  </select>
                  <p className="mt-1 text-sm text-slate-500">
                    Optional - displays in article sidebar
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Featured Image
                </label>
                <input
                  type="text"
                  value={formData.featured_image}
                  onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                  required
                  placeholder="/articles/your-article-image.webp"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-slate-500">
                    For local images: Place images in <code className="px-1.5 py-0.5 bg-slate-100 rounded text-xs">/public/articles/</code> folder and use path <code className="px-1.5 py-0.5 bg-slate-100 rounded text-xs">/articles/filename.webp</code>
                  </p>
                  <p className="text-sm text-slate-500">
                    For external images: Use full URL like <code className="px-1.5 py-0.5 bg-slate-100 rounded text-xs">https://images.unsplash.com/...</code>
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Summary (3-line preview)
                </label>
                <textarea
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value, excerpt: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
                <p className="mt-1 text-sm text-slate-500">
                  This will be used for both the article preview and social media sharing
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Content
                </label>
                <ReactQuill
                  value={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      [{ 'align': [] }],
                      ['link'],
                      ['clean']
                    ]
                  }}
                  formats={[
                    'header',
                    'bold', 'italic', 'underline', 'strike',
                    'list', 'bullet',
                    'align',
                    'link'
                  ]}
                  className="bg-white rounded-lg"
                  theme="snow"
                />
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      References & Sources
                    </label>
                    <p className="text-sm text-slate-500">
                      Add citations and sources used in this article
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={addReference}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Reference</span>
                  </button>
                </div>

                {formData.article_references.length > 0 && (
                  <div className="space-y-4">
                    {formData.article_references.map((ref, index) => (
                      <div key={index} className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-sm font-medium text-slate-700">Reference {index + 1}</h4>
                          <button
                            type="button"
                            onClick={() => removeReference(index)}
                            className="text-red-600 hover:text-red-800 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs font-medium text-slate-600 mb-1">
                              Title
                            </label>
                            <input
                              type="text"
                              value={ref.title}
                              onChange={(e) => updateReference(index, 'title', e.target.value)}
                              placeholder="e.g., UK Student Housing Market Report 2024"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-600 mb-1">
                              URL
                            </label>
                            <input
                              type="url"
                              value={ref.url}
                              onChange={(e) => updateReference(index, 'url', e.target.value)}
                              placeholder="https://example.com/report"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-600 mb-1">
                              Accessed Date (Optional)
                            </label>
                            <input
                              type="text"
                              value={ref.accessed_date || ''}
                              onChange={(e) => updateReference(index, 'accessed_date', e.target.value)}
                              placeholder="e.g., December 2024"
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Call-to-Action Section
                  </label>
                  <p className="text-sm text-slate-500 mb-4">
                    Choose how to direct readers at the end of the article
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      CTA Type
                    </label>
                    <select
                      value={formData.cta_type}
                      onChange={(e) => setFormData({ ...formData, cta_type: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    >
                      <option value="contact">Default (Contact Parx)</option>
                      <option value="services">Services</option>
                      <option value="pip">Portfolio Investment Protection</option>
                      <option value="custom">Custom Link</option>
                    </select>
                  </div>

                  {formData.cta_type === 'custom' && (
                    <div className="space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          CTA Title
                        </label>
                        <input
                          type="text"
                          value={formData.cta_title}
                          onChange={(e) => setFormData({ ...formData, cta_title: e.target.value })}
                          placeholder="e.g., Learn more about Portfolio Investment Protection"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          CTA Description
                        </label>
                        <textarea
                          value={formData.cta_description}
                          onChange={(e) => setFormData({ ...formData, cta_description: e.target.value })}
                          placeholder="e.g., Discover how our Portfolio Investment Protection insurance can safeguard your real estate investments..."
                          rows={3}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Link URL
                        </label>
                        <input
                          type="text"
                          value={formData.cta_link}
                          onChange={(e) => setFormData({ ...formData, cta_link: e.target.value })}
                          placeholder="/portfolio-investment-protection"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                        />
                        <p className="mt-1 text-xs text-slate-500">
                          Use relative URLs for internal pages (e.g., /portfolio-investment-protection) or full URLs for external links
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Button Text
                        </label>
                        <input
                          type="text"
                          value={formData.cta_button_text}
                          onChange={(e) => setFormData({ ...formData, cta_button_text: e.target.value })}
                          placeholder="e.g., Explore Portfolio Investment Protection"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-slate-300 rounded"
                  />
                  <label htmlFor="published" className="ml-2 block text-sm text-slate-700">
                    Publish immediately
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-slate-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 block text-sm text-slate-700">
                    Feature this article (display in top row)
                  </label>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <button
                  type="submit"
                  className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {editingArticle ? 'Update Article' : 'Create Article'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-slate-100 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {articles.map((article) => (
                    <tr key={article.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-slate-900">{article.title}</div>
                        <div className="text-sm text-slate-500">{article.author}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-slate-700">{article.category}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {article.published ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                            Draft
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {new Date(article.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => toggleFeatured(article)}
                            className={`p-2 rounded transition-colors ${
                              article.featured
                                ? 'text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50'
                                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                            }`}
                            title={article.featured ? 'Remove from featured' : 'Mark as featured'}
                          >
                            <Star className={`h-4 w-4 ${article.featured ? 'fill-yellow-600' : ''}`} />
                          </button>
                          <button
                            onClick={() => togglePublished(article)}
                            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                            title={article.published ? 'Unpublish' : 'Publish'}
                          >
                            {article.published ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                          <button
                            onClick={() => handleEdit(article)}
                            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {articles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500">No articles yet. Create your first article to get started.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageInsights;
