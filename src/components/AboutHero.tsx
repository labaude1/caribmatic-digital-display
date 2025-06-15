
import React from 'react';
import { Monitor, MapPin, Users, Award } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const AboutHero = () => {
  const stats = [
    {
      icon: Monitor,
      value: '5',
      label: 'Écrans LED 6m²'
    },
    {
      icon: Users,
      value: '15',
      label: 'Experts dédiés'
    },
    {
      icon: Award,
      value: '6',
      label: 'Années d\'expertise'
    },
    {
      icon: MapPin,
      value: '100%',
      label: 'Martinique'
    }
  ];

  return (
    <PageHeader
      title="À propos de Caribmatic"
      highlight="Caribmatic"
      description="Leader de l'affichage digital en Martinique depuis 2018, nous révolutionnons la communication outdoor dans les Antilles."
      stats={stats}
    />
  );
};

export default AboutHero;
