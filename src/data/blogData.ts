
import { BlogArticle, BlogCategory } from '@/types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'News Secteur',
    slug: 'news-secteur',
    description: 'Actualités et tendances du secteur publicitaire',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'Conseils Marketing',
    slug: 'conseils-marketing',
    description: 'Stratégies et conseils pour optimiser vos campagnes',
    color: 'bg-green-500'
  },
  {
    id: '3',
    name: 'Innovations DOOH',
    slug: 'innovations-dooh',
    description: 'Les dernières innovations en affichage digital',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    name: 'Études de Cas',
    slug: 'etudes-cas',
    description: 'Retours d\'expérience de nos clients',
    color: 'bg-red-500'
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'L\'avenir de l\'affichage digital en Martinique : Tendances 2024',
    slug: 'avenir-affichage-digital-martinique-2024',
    excerpt: 'Découvrez les principales tendances qui vont transformer le paysage publicitaire martiniquais en 2024.',
    content: `
# L'avenir de l'affichage digital en Martinique : Tendances 2024

## Introduction

Le secteur de l'affichage digital en Martinique connaît une évolution remarquable. Avec l'essor des nouvelles technologies et l'adaptation aux besoins locaux, 2024 s'annonce comme une année charnière.

## Les principales tendances

### 1. Personnalisation en temps réel
L'affichage digital permet désormais d'adapter les messages en fonction de l'heure, de la météo et de l'audience présente.

### 2. Interactivité accrue
Les écrans tactiles et la reconnaissance gestuelle transforment l'expérience utilisateur.

### 3. Intégration mobile
La connexion entre affichage digital et smartphones ouvre de nouvelles possibilités d'engagement.

## Impact sur les entreprises martiniquaises

Les entreprises locales peuvent désormais bénéficier d'une visibilité optimisée grâce à ces innovations technologiques.

## Conclusion

L'avenir de l'affichage digital en Martinique est prometteur, avec des opportunités uniques pour les entreprises locales.
    `,
    author: {
      name: 'Marie Dubois',
      avatar: '/placeholder.svg',
      bio: 'Experte en marketing digital et communication visuelle'
    },
    category: blogCategories[2],
    tags: ['tendances', 'martinique', 'innovation', 'digital'],
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    readTime: 5,
    featuredImage: {
      url: '/placeholder.svg',
      alt: 'Écran LED moderne en Martinique'
    },
    seo: {
      metaDescription: 'Découvrez les tendances 2024 de l\'affichage digital en Martinique et comment elles transforment le marketing local.',
      keywords: ['affichage digital', 'martinique', 'tendances 2024', 'DOOH', 'marketing']
    },
    isPopular: true,
    viewCount: 1250
  },
  {
    id: '2',
    title: 'Comment mesurer l\'efficacité de vos campagnes d\'affichage digital',
    slug: 'mesurer-efficacite-campagnes-affichage-digital',
    excerpt: 'Guide complet pour analyser et optimiser les performances de vos campagnes publicitaires digitales.',
    content: `
# Comment mesurer l'efficacité de vos campagnes d'affichage digital

## Les métriques essentielles

### Taux d'impression
Le nombre de fois où votre publicité a été affichée.

### Engagement
Interactions avec votre contenu publicitaire.

### Conversion
Actions réalisées suite à l'exposition à votre publicité.

## Outils de mesure

Découvrez les solutions pour tracker vos performances en temps réel.

## Optimisation continue

Comment ajuster vos campagnes pour maximiser le ROI.
    `,
    author: {
      name: 'Jean-Luc Martin',
      avatar: '/placeholder.svg',
      bio: 'Consultant en stratégie publicitaire'
    },
    category: blogCategories[1],
    tags: ['mesure', 'ROI', 'analytics', 'optimisation'],
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    readTime: 7,
    featuredImage: {
      url: '/placeholder.svg',
      alt: 'Dashboard d\'analytics pour affichage digital'
    },
    seo: {
      metaDescription: 'Apprenez à mesurer et optimiser l\'efficacité de vos campagnes d\'affichage digital avec notre guide complet.',
      keywords: ['mesure efficacité', 'campagnes digitales', 'ROI', 'analytics', 'optimisation']
    },
    isPopular: true,
    viewCount: 980
  },
  {
    id: '3',
    title: 'Réglementation de l\'affichage publicitaire en Martinique',
    slug: 'reglementation-affichage-publicitaire-martinique',
    excerpt: 'Tout ce qu\'il faut savoir sur le cadre légal de l\'affichage publicitaire en Martinique.',
    content: `
# Réglementation de l'affichage publicitaire en Martinique

## Cadre légal général

La réglementation française s'applique avec des spécificités locales.

## Zones d'affichage autorisées

Découvrez où vous pouvez installer vos dispositifs publicitaires.

## Procédures d'autorisation

Les étapes pour obtenir les autorisations nécessaires.

## Sanctions et contrôles

Ce que vous risquez en cas de non-conformité.
    `,
    author: {
      name: 'Sylvie Leroy',
      avatar: '/placeholder.svg',
      bio: 'Juriste spécialisée en droit de la publicité'
    },
    category: blogCategories[0],
    tags: ['réglementation', 'légal', 'autorisation', 'martinique'],
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-05',
    readTime: 6,
    featuredImage: {
      url: '/placeholder.svg',
      alt: 'Documents légaux sur l\'affichage publicitaire'
    },
    seo: {
      metaDescription: 'Guide complet sur la réglementation de l\'affichage publicitaire en Martinique : autorisations, zones, sanctions.',
      keywords: ['réglementation', 'affichage publicitaire', 'martinique', 'autorisation', 'légal']
    },
    viewCount: 750
  }
];

export const popularArticles = blogArticles.filter(article => article.isPopular);
