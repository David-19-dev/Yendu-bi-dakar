
import { CalendarIcon, Users, Clock, Check } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ReservationBanner = () => {
  return (
    <div className="relative mb-12 md:mb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-yendu-terra/80 z-10"></div>
      <div className="container-custom px-3 md:px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-10 md:py-16">
          <div className="text-white animate-fade-in">
            <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Réservez votre <span className="text-yendu-sand">évasion</span> dès maintenant
            </h1>
            <p className="text-sm md:text-base opacity-90 mb-6 max-w-md">
              Quelques clics suffisent pour assurer votre place au paradis. Réservez à l'avance pour garantir votre accès et profiter pleinement de nos installations.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <CalendarIcon size={18} className="text-yendu-sand" />
                <span className="text-sm">Disponibilité garantie</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock size={18} className="text-yendu-sand" />
                <span className="text-sm">Confirmation immédiate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users size={18} className="text-yendu-sand" />
                <span className="text-sm">Groupes bienvenus</span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform md:translate-y-6 transition-all duration-500 hover:translate-y-0 border-4 border-white/20">
            <AspectRatio ratio={4/3} className="bg-secondary/50">
              <div className="w-full h-full bg-[url('/imgs/new2.jpg')] bg-cover bg-center flex items-center justify-center">
                <div className="bg-black/40 rounded-full p-4 backdrop-blur-sm">
                  <Users size={40} className="text-white/80" />
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};
