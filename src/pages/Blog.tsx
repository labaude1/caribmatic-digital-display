
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogArticles, blogCategories } from '@/data/blogData';
import { BlogFilter } from '@/types/blog';
import { Search, Calendar, Clock, Eye } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<BlogFilter>({
    sortBy: 'date',
    order: 'desc'
  });

  const filteredArticles = useMemo(() => {
    let articles = [...blogArticles];

    // Filter by search term
    if (searchTerm) {
      articles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (filter.category) {
      articles = articles.filter(article => article.category.slug === filter.category);
    }

    // Sort articles
    articles.sort((a, b) => {
      let comparison = 0;
      
      switch (filter.sortBy) {
        case 'date':
          comparison = new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
          break;
        case 'popularity':
          comparison = a.viewCount - b.viewCount;
          break;
        case 'readTime':
          comparison = a.readTime - b.readTime;
          break;
      }

      return filter.order === 'desc' ? -comparison : comparison;
    });

    return articles;
  }, [searchTerm, filter]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Leader de l'Affichage Digital <br className="hidden sm:block" />
              en <span className="text-red-200">Martinique</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-3xl mx-auto px-2">
              Découvrez les dernières tendances, conseils et innovations 
              du secteur de l'affichage digital en Martinique
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Filters */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        placeholder="Rechercher des articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={filter.sortBy}
                      onChange={(e) => setFilter(prev => ({ ...prev, sortBy: e.target.value as any }))}
                      className="px-3 py-2 border rounded-md"
                    >
                      <option value="date">Date</option>
                      <option value="popularity">Popularité</option>
                      <option value="readTime">Temps de lecture</option>
                    </select>
                    <select
                      value={filter.order}
                      onChange={(e) => setFilter(prev => ({ ...prev, order: e.target.value as any }))}
                      className="px-3 py-2 border rounded-md"
                    >
                      <option value="desc">Décroissant</option>
                      <option value="asc">Croissant</option>
                    </select>
                  </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={!filter.category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(prev => ({ ...prev, category: undefined }))}
                    className="mb-2"
                  >
                    Toutes les catégories
                  </Button>
                  {blogCategories.map(category => (
                    <Button
                      key={category.id}
                      variant={filter.category === category.slug ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter(prev => ({ ...prev, category: category.slug }))}
                      className="mb-2"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map(article => (
                  <article key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                    <Link to={`/blog/${article.slug}`}>
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={article.featuredImage.url}
                          alt={article.featuredImage.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={`${article.category.color} text-white`}>
                            {article.category.name}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(article.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime} min
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {article.viewCount}
                        </div>
                      </div>
                      
                      <Link to={`/blog/${article.slug}`}>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                          {article.title}
                        </h2>
                      </Link>
                      
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {article.author.name}
                          </span>
                        </div>
                        
                        <Link
                          to={`/blog/${article.slug}`}
                          className="text-red-600 hover:text-red-700 font-medium text-sm"
                        >
                          Lire la suite →
                        </Link>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-4">
                        {article.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Aucun article trouvé pour votre recherche.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
