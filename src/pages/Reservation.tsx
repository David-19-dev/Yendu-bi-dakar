
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReservationBanner } from "@/components/reservation/ReservationBanner";
import { ReservationForm, FormValues } from "@/components/reservation/ReservationForm";
import { PriceSummary } from "@/components/reservation/PriceSummary";
import { calculatePrice, prices } from "@/components/reservation/utils/priceUtils";
import { supabase } from "@/integrations/supabase/client";

const Reservation = () => {
  document.title = "Réservation | Yendu-bi";
  const [totalPrice, setTotalPrice] = useState(0);
  const [watchDate, setWatchDate] = useState<Date>();
  const [watchAdultCount, setWatchAdultCount] = useState(1);
  const [watchChildCount, setWatchChildCount] = useState(0);
  
  const calculateTotalPrice = () => calculatePrice(watchDate, watchAdultCount, watchChildCount);
  
  useEffect(() => {
    const newPrice = calculateTotalPrice();
    setTotalPrice(newPrice);
  }, [watchDate, watchAdultCount, watchChildCount]);
  
  async function onSubmit(data: FormValues) {
    const finalPrice = calculateTotalPrice();
    
    try {
      // Sauvegarder la réservation dans Supabase
      const { error: dbError } = await supabase
        .from('reservations')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          visit_date: format(data.date, "yyyy-MM-dd"),
          adult_count: data.adultCount,
          child_count: data.childCount,
          total_price: finalPrice,
          status: 'pending'
        });

      if (dbError) throw dbError;

      // Afficher les données envoyées pour débogage
      console.log('Envoi des données de réservation:', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        date: format(data.date, "d MMMM yyyy", { locale: fr }),
        adultCount: data.adultCount,
        childCount: data.childCount,
        totalPrice: finalPrice
      });

      // Envoyer les emails de confirmation
      const { error } = await supabase.functions.invoke('send-reservation-emails', {
        body: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          date: format(data.date, "d MMMM yyyy", { locale: fr }),
          adultCount: data.adultCount,
          childCount: data.childCount,
          totalPrice: finalPrice // S'assurer que le prix total est un nombre
        },
      });

      if (error) throw error;

      setWatchDate(data.date);
      setWatchAdultCount(data.adultCount);
      setWatchChildCount(data.childCount);
      
      toast({
        title: "Réservation confirmée!",
        description: `Votre réservation pour le ${format(data.date, "d MMMM yyyy", { locale: fr })} a été reçue. Un email de confirmation vous a été envoyé.`,
      });
    } catch (error: any) {
      console.error("Erreur lors de la réservation:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la confirmation de votre réservation. Veuillez réessayer.",
        variant: "destructive"
      });
    }
  }
  
  return (
    <main className="py-6 md:py-16">
      <ReservationBanner />

      <div className="container-custom px-3 md:px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="heading-lg mb-2 md:mb-3">Formulaire de Réservation</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto px-1">
            Complétez ce formulaire pour réserver votre visite à Yendu-bi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="lg:col-span-2">
            <Card className="border-2 border-border">
              <CardHeader className="border-b bg-muted/50">
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>Veuillez remplir tous les champs obligatoires</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ReservationForm 
                  onSubmit={onSubmit} 
                  watchDate={watchDate} 
                  watchAdultCount={watchAdultCount} 
                  watchChildCount={watchChildCount} 
                />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <PriceSummary 
              watchDate={watchDate} 
              watchAdultCount={watchAdultCount} 
              watchChildCount={watchChildCount} 
              prices={prices}
              calculatePrice={calculateTotalPrice}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Reservation;
