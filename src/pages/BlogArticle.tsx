
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/blog/BlogSidebar';
import SocialShare from '@/components/blog/SocialShare';
import CommentSection from '@/components/blog/CommentSection';
import { Badge } from '@/components/ui/badge';
import { blogArticles } from '@/data/blogData';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(article => article.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convert markdown-like content to HTML-like structure
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">{line.slice(2)}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">{line.slice(3)}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-4">{line.slice(4)}</h3>;
        } else if (line.trim()) {
          return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>;
        }
        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-red-600">
                Accueil
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/blog" className="text-gray-500 hover:text-red-600">
                Blog
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{article.title}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Featured Image */}
                <div className="aspect-video relative">
                  <img
                    src={article.featuredImage.url}
                    alt={article.featuredImage.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className={`${article.category.color} text-white text-sm`}>
                      {article.category.name}
                    </Badge>
                  </div>
                </div>

                {/* Article Header */}
                <div className="p-8">
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime} min de lecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{article.author.name}</span>
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {article.title}
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {article.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-8">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{article.author.name}</h3>
                      <p className="text-gray-600 text-sm">{article.author.bio}</p>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    {formatContent(article.content)}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
                    <span className="text-gray-700 font-medium">Tags:</span>
                    {article.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Share */}
                  <div className="mt-8 pt-8 border-t">
                    <SocialShare
                      title={article.title}
                      url={`${window.location.origin}/blog/${article.slug}`}
                    />
                  </div>
                </div>
              </article>

              {/* Comments Section */}
              <div className="mt-8">
                <CommentSection articleId={article.id} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
