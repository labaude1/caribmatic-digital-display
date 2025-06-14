
import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Link2, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface SocialShareProps {
  title: string;
  url: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ title, url }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-blue-800 hover:bg-blue-900'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=Découvrez cet article: ${encodedUrl}`,
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Lien copié dans le presse-papiers !');
    } catch (err) {
      toast.error('Erreur lors de la copie du lien');
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Partager cet article</h3>
      <div className="flex flex-wrap gap-3">
        {shareLinks.map(({ name, icon: Icon, url, color }) => (
          <Button
            key={name}
            asChild
            size="sm"
            className={`${color} text-white`}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Icon className="h-4 w-4" />
              {name}
            </a>
          </Button>
        ))}
        <Button
          size="sm"
          variant="outline"
          onClick={copyToClipboard}
          className="flex items-center gap-2"
        >
          <Link2 className="h-4 w-4" />
          Copier le lien
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
