
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { TrendingUp, DollarSign, Target, BarChart } from 'lucide-react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    budget: '',
    duration: '30',
    sector: '',
    objectives: '',
    currentCam: ''
  });

  const [results, setResults] = useState({
    impressions: 0,
    reach: 0,
    cpm: 0,
    roi: 0,
    conversions: 0
  });

  const sectors = [
    { value: 'tourism', label: 'Tourisme & Hôtellerie', ctr: 3.2, conversion: 2.1 },
    { value: 'retail', label: 'Commerce & Distribution', ctr: 2.8, conversion: 1.8 },
    { value: 'automotive', label: 'Automobile', ctr: 2.5, conversion: 1.2 },
    { value: 'services', label: 'Services & Banques', ctr: 2.1, conversion: 2.5 },
    { value: 'food', label: 'Restauration', ctr: 3.8, conversion: 3.2 }
  ];

  const calculateROI = () => {
    const budget = parseFloat(inputs.budget) || 0;
    const duration = parseInt(inputs.duration) || 30;
    const selectedSector = sectors.find(s => s.value === inputs.sector);
    
    if (!budget || !selectedSector) return;

    // Calculs basés sur moyennes sectorielles
    const dailyBudget = budget / duration;
    const cpm = 12; // CPM moyen Martinique
    const dailyImpressions = (dailyBudget / cpm) * 1000;
    const totalImpressions = dailyImpressions * duration;
    const reach = totalImpressions * 0.65; // Reach unique estimé
    const clicks = totalImpressions * (selectedSector.ctr / 100);
    const conversions = clicks * (selectedSector.conversion / 100);
    
    // ROI simplifié (basé sur valeur conversion moyenne)
    const avgConversionValue = inputs.objectives === 'sales' ? 150 : 50;
    const revenue = conversions * avgConversionValue;
    const roi = ((revenue - budget) / budget) * 100;

    setResults({
      impressions: Math.round(totalImpressions),
      reach: Math.round(reach),
      cpm: cpm,
      roi: Math.round(roi),
      conversions: Math.round(conversions)
    });
  };

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="budget">Budget Total (€)</Label>
          <Input
            id="budget"
            type="number"
            placeholder="Ex: 5000"
            value={inputs.budget}
            onChange={(e) => setInputs(prev => ({ ...prev, budget: e.target.value }))}
          />
        </div>

        <div>
          <Label htmlFor="duration">Durée (jours)</Label>
          <Select value={inputs.duration} onValueChange={(value) => setInputs(prev => ({ ...prev, duration: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">1 semaine</SelectItem>
              <SelectItem value="15">2 semaines</SelectItem>
              <SelectItem value="30">1 mois</SelectItem>
              <SelectItem value="60">2 mois</SelectItem>
              <SelectItem value="90">3 mois</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="sector">Secteur d'activité</Label>
          <Select value={inputs.sector} onValueChange={(value) => setInputs(prev => ({ ...prev, sector: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir votre secteur" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map(sector => (
                <SelectItem key={sector.value} value={sector.value}>
                  {sector.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="objectives">Objectif principal</Label>
          <Select value={inputs.objectives} onValueChange={(value) => setInputs(prev => ({ ...prev, objectives: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner objectif" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="awareness">Notoriété</SelectItem>
              <SelectItem value="traffic">Trafic</SelectItem>
              <SelectItem value="leads">Génération de leads</SelectItem>
              <SelectItem value="sales">Ventes directes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={calculateROI} className="w-full bg-green-600 hover:bg-green-700">
        <BarChart className="mr-2 h-4 w-4" />
        Calculer le ROI
      </Button>

      <Separator />

      {/* Results */}
      {results.impressions > 0 && (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Estimations de Performance</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Impressions</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {results.impressions.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Reach</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {results.reach.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">CPM</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  {results.cpm}€
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium">ROI Estimé</span>
                </div>
                <div className="text-2xl font-bold text-red-600">
                  {results.roi > 0 ? '+' : ''}{results.roi}%
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Conversions estimées :</strong> {results.conversions} actions
            </p>
            <p className="text-xs text-gray-500 mt-2">
              * Estimations basées sur les moyennes sectorielles en Martinique. 
              Les résultats réels peuvent varier selon la qualité créative et l'emplacement.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;
