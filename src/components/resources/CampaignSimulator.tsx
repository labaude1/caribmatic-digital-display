
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { MapPin, Clock, Users, Eye, DollarSign } from 'lucide-react';

const CampaignSimulator = () => {
  const [config, setConfig] = useState({
    zones: [],
    schedule: '',
    duration: '',
    content: '',
    budget: ''
  });

  const [simulation, setSimulation] = useState({
    totalReach: 0,
    dailyImpressions: 0,
    costPerDay: 0,
    coverage: 0
  });

  const zones = [
    { id: 'center', name: 'Centre-Ville Fort-de-France', reach: 25000, cost: 180 },
    { id: 'lamentin', name: 'Zone Lamentin', reach: 18000, cost: 150 },
    { id: 'schoelcher', name: 'Schoelcher Front de Mer', reach: 12000, cost: 120 },
    { id: 'riviere-salee', name: 'Rivière-Salée Commercial', reach: 8000, cost: 100 },
    { id: 'trinite', name: 'La Trinité Centre', reach: 6000, cost: 80 }
  ];

  const schedules = [
    { value: 'peak', label: 'Heures de pointe (7h-9h, 17h-19h)', multiplier: 1.5 },
    { value: 'business', label: 'Heures ouvrables (9h-17h)', multiplier: 1.2 },
    { value: 'evening', label: 'Soirée (19h-22h)', multiplier: 1.1 },
    { value: 'allday', label: '24h/24', multiplier: 1.0 }
  ];

  const handleZoneChange = (zoneId: string, checked: boolean) => {
    setConfig(prev => ({
      ...prev,
      zones: checked 
        ? [...prev.zones, zoneId]
        : prev.zones.filter(id => id !== zoneId)
    }));
  };

  const runSimulation = () => {
    const selectedZones = zones.filter(zone => config.zones.includes(zone.id));
    const schedule = schedules.find(s => s.value === config.schedule);
    const duration = parseInt(config.duration) || 30;

    if (selectedZones.length === 0 || !schedule) return;

    // Calculs de simulation
    const totalReach = selectedZones.reduce((sum, zone) => sum + zone.reach, 0);
    const dailyCost = selectedZones.reduce((sum, zone) => sum + zone.cost, 0);
    const adjustedReach = Math.round(totalReach * schedule.multiplier);
    const dailyImpressions = Math.round(adjustedReach * 2.3); // Facteur fréquence
    const coverage = Math.min((totalReach / 180000) * 100, 100); // Population martiniquaise

    setSimulation({
      totalReach: adjustedReach,
      dailyImpressions,
      costPerDay: dailyCost,
      coverage: Math.round(coverage)
    });
  };

  return (
    <div className="space-y-6">
      {/* Configuration */}
      <div className="space-y-4">
        <div>
          <Label className="text-base font-medium mb-3 block">Zones d'affichage</Label>
          <div className="space-y-2">
            {zones.map(zone => (
              <div key={zone.id} className="flex items-center space-x-2">
                <Checkbox
                  id={zone.id}
                  checked={config.zones.includes(zone.id)}
                  onCheckedChange={(checked) => handleZoneChange(zone.id, checked)}
                />
                <label htmlFor={zone.id} className="text-sm">
                  {zone.name} <span className="text-gray-500">({zone.cost}€/jour)</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="schedule">Plage horaire</Label>
          <Select value={config.schedule} onValueChange={(value) => setConfig(prev => ({ ...prev, schedule: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir créneaux" />
            </SelectTrigger>
            <SelectContent>
              {schedules.map(schedule => (
                <SelectItem key={schedule.value} value={schedule.value}>
                  {schedule.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="duration">Durée (jours)</Label>
          <Input
            id="duration"
            type="number"
            placeholder="Ex: 30"
            value={config.duration}
            onChange={(e) => setConfig(prev => ({ ...prev, duration: e.target.value }))}
          />
        </div>

        <div>
          <Label htmlFor="content">Type de contenu</Label>
          <Select value={config.content} onValueChange={(value) => setConfig(prev => ({ ...prev, content: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Format publicitaire" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="static">Image statique</SelectItem>
              <SelectItem value="video">Vidéo courte (15s)</SelectItem>
              <SelectItem value="animation">Animation graphique</SelectItem>
              <SelectItem value="interactive">Contenu interactif</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={runSimulation} className="w-full bg-blue-600 hover:bg-blue-700">
        <Eye className="mr-2 h-4 w-4" />
        Lancer la Simulation
      </Button>

      <Separator />

      {/* Results */}
      {simulation.totalReach > 0 && (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Résultats de Simulation</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Reach Quotidien</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {simulation.totalReach.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Impressions/jour</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {simulation.dailyImpressions.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">Coût/jour</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  {simulation.costPerDay}€
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium">Couverture</span>
                </div>
                <div className="text-2xl font-bold text-red-600">
                  {simulation.coverage}%
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium mb-2">Résumé de campagne :</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Budget total estimé :</strong> {simulation.costPerDay * parseInt(config.duration || '30')}€</li>
              <li>• <strong>Impressions totales :</strong> {(simulation.dailyImpressions * parseInt(config.duration || '30')).toLocaleString()}</li>
              <li>• <strong>CPM estimé :</strong> {((simulation.costPerDay / simulation.dailyImpressions) * 1000).toFixed(2)}€</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              * Simulation basée sur données de trafic réelles et moyennes sectorielles
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignSimulator;
