
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Send } from 'lucide-react';
import { toast } from 'sonner';

interface Zone {
  id: string;
  name: string;
  location: string;
  traffic: string;
}

interface ZoneReservationFormProps {
  zones: Zone[];
}

const formSchema = z.object({
  selectedZone: z.string().min(1, "Veuillez sélectionner une zone"),
  company: z.string().min(2, "Le nom de l'entreprise est requis"),
  contactName: z.string().min(2, "Le nom du contact est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone requis"),
  duration: z.string().min(1, "Veuillez sélectionner une durée"),
  budget: z.string().min(1, "Veuillez indiquer votre budget"),
  startDate: z.string().min(1, "Date de début requise"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ZoneReservationForm = ({ zones }: ZoneReservationFormProps) => {
  const [selectedZoneDetails, setSelectedZoneDetails] = useState<Zone | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedZone: '',
      company: '',
      contactName: '',
      email: '',
      phone: '',
      duration: '',
      budget: '',
      startDate: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submission:', data);
      toast.success('Demande envoyée avec succès ! Nous vous contacterons sous 24h.');
      form.reset();
      setSelectedZoneDetails(null);
    } catch (error) {
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleZoneChange = (zoneId: string) => {
    const zone = zones.find(z => z.id === zoneId);
    setSelectedZoneDetails(zone || null);
  };

  const durationOptions = [
    { value: '1-week', label: '1 semaine', price: 'À partir de 800€' },
    { value: '2-weeks', label: '2 semaines', price: 'À partir de 1400€' },
    { value: '1-month', label: '1 mois', price: 'À partir de 2500€' },
    { value: '3-months', label: '3 mois', price: 'À partir de 6800€' },
    { value: '6-months', label: '6 mois', price: 'À partir de 12000€' },
    { value: '1-year', label: '1 an', price: 'À partir de 20000€' },
  ];

  const budgetRanges = [
    '500€ - 1000€',
    '1000€ - 2500€',
    '2500€ - 5000€',
    '5000€ - 10000€',
    '10000€ - 25000€',
    '25000€+',
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <Send className="h-6 w-6 mr-2 text-red-600" />
          Demande de Réservation
        </CardTitle>
        <CardDescription>
          Remplissez ce formulaire pour recevoir un devis personnalisé sous 24h
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Zone Selection */}
            <FormField
              control={form.control}
              name="selectedZone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Zone d'implantation
                  </FormLabel>
                  <Select 
                    onValueChange={(value) => {
                      field.onChange(value);
                      handleZoneChange(value);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une zone stratégique" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {zones.map((zone) => (
                        <SelectItem key={zone.id} value={zone.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{zone.name}</span>
                            <Badge variant="secondary" className="ml-2">
                              {zone.traffic}/jour
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedZoneDetails && (
                    <div className="mt-2 p-3 bg-red-50 rounded-lg border border-red-200">
                      <p className="text-sm font-medium text-red-800">{selectedZoneDetails.location}</p>
                      <p className="text-sm text-red-600">Trafic: {selectedZoneDetails.traffic} véhicules/jour</p>
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Entreprise *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom de votre entreprise" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom et prénom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="votre@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone *</FormLabel>
                    <FormControl>
                      <Input placeholder="0696 XX XX XX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Campaign Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Durée de diffusion *
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir la durée" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {durationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center justify-between w-full">
                              <span>{option.label}</span>
                              <span className="text-xs text-green-600 ml-2">{option.price}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Budget envisagé *
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date de début souhaitée *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message complémentaire</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Décrivez votre projet, vos objectifs ou toute information utile..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Partagez vos objectifs marketing pour un devis plus précis
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Envoi en cours...'
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer ma demande de devis
                </>
              )}
            </Button>
          </form>
        </Form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Engagement CARIBMATIC</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✓ Réponse sous 24h garantie</li>
            <li>✓ Devis détaillé et transparent</li>
            <li>✓ Accompagnement personnalisé</li>
            <li>✓ Support technique inclus</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ZoneReservationForm;
