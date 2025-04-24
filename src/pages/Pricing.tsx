
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Umbrella, Coffee, Users, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const Pricing = () => {
  document.title = "Tarifs | Yendu-bi";
  const isMobile = useIsMobile();

  return (
    <main className="py-6 md:py-16">
      {/* Section Image Stylée */}
      <div className="relative mb-12 md:mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-yendu-terra/80 z-10"></div>
        <div className="container-custom px-3 md:px-4 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-10 md:py-16">
            <div className="text-white animate-fade-in">
              <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Une expérience <span className="text-yendu-sand">inoubliable</span> à prix abordable
              </h1>
              <p className="text-sm md:text-base opacity-90 mb-6 max-w-md">
                Découvrez nos tarifs conçus pour tous les budgets. Profitez d'un cadre exceptionnel
                et d'un service de qualité à des prix attractifs.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Umbrella size={18} className="text-yendu-sand" />
                  <span className="text-sm">Cadre relaxant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Coffee size={18} className="text-yendu-sand" />
                  <span className="text-sm">Restauration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Users size={18} className="text-yendu-sand" />
                  <span className="text-sm">Espace famille</span>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform md:translate-y-6 transition-all duration-500 hover:translate-y-0 border-4 border-white/20">
              <AspectRatio ratio={4/3} className="bg-secondary/50">
                <div className="w-full h-full bg-[url('/imgs/img-couv.png')] bg-cover bg-center flex items-center justify-center">
                  <div className="bg-black/40 rounded-full p-4 backdrop-blur-sm">
                    <ImageIcon size={40} className="text-white/80" />
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
      </div>

      <div className="container-custom px-3 md:px-4">
        <div className="text-center mb-8 md:mb-14 animate-fade-in">
          <h1 className="heading-lg mb-2 md:mb-3">Nos Tarifs</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto px-1">
            Des tarifs adaptés à tous pour profiter de nos installations
          </p>
        </div>

        {/* Grille de tarifs sur 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Colonne 1: Jours de semaine */}
          <PriceColumn
            title="Jours de Semaine"
            subtitle="Du lundi au vendredi"
            highlight={false}
            price="5 000 FCFA"
            description="Tarif unique incluant l'accès et la consommation"
            features={[
              "Accès aux installations",
              "Consommation incluse",
              "Transat disponible",
              "Serviettes en location"
            ]}
            buttonText="Réserver"
          />

          {/* Colonne 2: Samedi */}
          <PriceColumn
            title="Samedi"
            subtitle="Tarif week-end"
            highlight={true}
            price="7 500 FCFA"
            priceChild="5 000 FCFA"
            description="Adultes. Enfants moins de 10 ans: 5 000 FCFA"
            features={[
              "Accès prioritaire",
              "Consommation premium incluse",
              "Transat garanti",
              "Serviette offerte",
              "Animation musicale"
            ]}
            buttonText="Réserver maintenant"
          />

          {/* Colonne 3: Dimanches et jours fériés */}
          <PriceColumn
            title="Dimanches & Fériés"
            subtitle="Jours spéciaux"
            highlight={false}
            price="10 000 FCFA"
            description="Tarif unique incluant l'accès et les consommations premium"
            features={[
              "Accès à toutes les installations",
              "Consommations premium illimitées",
              "Transat premium réservé",
              "Serviette offerte",
              "Animations spéciales",
              "Cocktail de bienvenue"
            ]}
            buttonText="Réserver"
          />
        </div>

        {/* Section FAQ ou informations complémentaires */}
        <div className="bg-secondary/50 rounded-xl p-6 md:p-8 mt-8 md:mt-12">
          <h2 className="heading-sm mb-4 text-center">Informations complémentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Réservations</h3>
              <p className="text-sm text-muted-foreground">
                Les réservations sont fortement recommandées, surtout pendant les week-ends et jours fériés. 
                Contactez-nous au +221 XX XXX XX XX pour réserver votre place.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Enfants</h3>
              <p className="text-sm text-muted-foreground">
                Les enfants de moins de 5 ans bénéficient de l'entrée gratuite. Une zone spéciale est 
                aménagée pour les enfants avec surveillance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface PriceColumnProps {
  title: string;
  subtitle?: string;
  highlight: boolean;
  price: string;
  priceChild?: string;
  description: string;
  features: string[];
  buttonText: string;
}

const PriceColumn = ({
  title,
  subtitle,
  highlight,
  price,
  priceChild,
  description,
  features,
  buttonText
}: PriceColumnProps) => {
  return (
    <Card className={`border-2 overflow-hidden transition-all duration-300 h-full ${
      highlight 
        ? 'border-primary shadow-lg scale-[1.02] z-10' 
        : 'border-border hover:border-primary/50 hover:shadow-md'
    } rounded-xl flex flex-col`}>
      <CardHeader className={`${
        highlight ? 'bg-primary text-white' : 'bg-secondary/70'
      } text-center p-6`}>
        <CardTitle className="text-xl md:text-2xl font-bold">{title}</CardTitle>
        {subtitle && <CardDescription className={highlight ? 'text-white/80' : ''}>{subtitle}</CardDescription>}
      </CardHeader>
      
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="text-center mb-6">
          <div className="font-playfair text-3xl md:text-4xl font-bold text-primary">{price}</div>
          {priceChild && (
            <div className="text-sm font-medium mt-1">Enfants: {priceChild}</div>
          )}
          <p className="text-xs md:text-sm text-muted-foreground mt-2">{description}</p>
        </div>
        
        <div className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pb-6 px-6 pt-0">
        <Button 
          className={`w-full ${highlight ? 'bg-primary hover:bg-primary/90' : ''}`}
          variant={highlight ? 'default' : 'outline'}
          size="lg"
          asChild
        >
          <Link to="/reservation">
            {buttonText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Pricing;
