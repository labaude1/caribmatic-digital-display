
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { popularArticles, blogCategories } from '@/data/blogData';
import { Mail, Facebook, Instagram, Linkedin, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

const BlogSidebar = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Inscription réussie ! Merci de vous être abonné à notre newsletter.');
      setEmail('');
    }
  };

  return (
    <div className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="h-5 w-5 text-red-600" />
          <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Recevez nos derniers articles et conseils directement dans votre boîte mail.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            S'abonner
          </Button>
        </form>
      </div>

      {/* Popular Articles */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-red-600" />
          <h3 className="text-lg font-semibold text-gray-900">Articles populaires</h3>
        </div>
        <div className="space-y-4">
          {popularArticles.slice(0, 5).map(article => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="block group"
            >
              <div className="flex gap-3">
                <img
                  src={article.featuredImage.url}
                  alt={article.featuredImage.alt}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {article.category.name}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {article.viewCount} vues
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Catégories</h3>
        <div className="space-y-2">
          {blogCategories.map(category => (
            <Link
              key={category.id}
              to={`/blog?category=${category.slug}`}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                <span className="text-gray-700 font-medium">{category.name}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {blogArticles.filter(article => article.category.id === category.id).length}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Suivez-nous</h3>
        <div className="flex gap-3">
          <a
            href="#"
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Besoin d'un devis ?</h3>
        <p className="text-red-100 text-sm mb-4">
          Contactez-nous pour une consultation gratuite sur vos projets d'affichage digital.
        </p>
        <Button className="bg-white text-red-600 hover:bg-red-50 w-full">
          Devis Gratuit
        </Button>
      </div>
    </div>
  );
};

export default BlogSidebar;
