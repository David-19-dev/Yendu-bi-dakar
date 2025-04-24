
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Users, CalendarIcon } from "lucide-react";

interface PriceDisplayProps {
  date: Date | undefined;
  adultCount: number;
  childCount: number;
  prices: {
    weekday: { adult: number; child: number };
    saturday: { adult: number; child: number };
    sunday: { adult: number; child: number };
  };
  calculatePrice: () => number;
}

const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

const isSaturday = (date: Date) => date.getDay() === 6;
const isSunday = (date: Date) => date.getDay() === 0;

export const PriceDisplay = ({ date, adultCount, childCount, prices, calculatePrice }: PriceDisplayProps) => {
  if (!date) {
    return (
      <div className="text-center p-6 text-muted-foreground italic">
        Veuillez sélectionner une date pour voir le résumé de votre réservation
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        <p className="font-semibold">Date sélectionnée:</p>
        <div className="bg-secondary/60 p-3 rounded-md flex items-center gap-2">
          <CalendarIcon className="text-primary" />
          <span>{format(date, "d MMMM yyyy", { locale: fr })}</span>
          {isWeekend(date) && (
            <span className="ml-auto bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
              {isSaturday(date) ? "Samedi" : "Dimanche/Férié"}
            </span>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="font-semibold">Visiteurs:</p>
        <div className="bg-secondary/60 p-3 rounded-md flex items-center gap-2">
          <Users className="text-primary" />
          <div>
            <p>{adultCount} {adultCount > 1 ? "adultes" : "adulte"}</p>
            {childCount > 0 && (
              <p className="text-sm text-muted-foreground">{childCount} {childCount > 1 ? "enfants" : "enfant"}</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t space-y-2">
        <div className="flex justify-between">
          <span>Tarif applicable:</span>
          {isSunday(date) ? (
            <span className="font-semibold">Dimanche/Férié</span>
          ) : isSaturday(date) ? (
            <span className="font-semibold">Samedi</span>
          ) : (
            <span className="font-semibold">Jour de semaine</span>
          )}
        </div>
        
        {adultCount > 0 && (
          <div className="flex justify-between text-sm">
            <span>{adultCount} {adultCount > 1 ? "adultes" : "adulte"} x {
              isSunday(date) 
                ? prices.sunday.adult 
                : isSaturday(date) 
                  ? prices.saturday.adult 
                  : prices.weekday.adult
            } FCFA</span>
            <span>{
              isSunday(date) 
                ? prices.sunday.adult * adultCount 
                : isSaturday(date) 
                  ? prices.saturday.adult * adultCount 
                  : prices.weekday.adult * adultCount
            } FCFA</span>
          </div>
        )}
        
        {childCount > 0 && (
          <div className="flex justify-between text-sm">
            <span>{childCount} {childCount > 1 ? "enfants" : "enfant"} x {
              isSunday(date) 
                ? prices.sunday.child 
                : isSaturday(date) 
                  ? prices.saturday.child 
                  : prices.weekday.child
            } FCFA</span>
            <span>{
              isSunday(date) 
                ? prices.sunday.child * childCount 
                : isSaturday(date) 
                  ? prices.saturday.child * childCount 
                  : prices.weekday.child * childCount
            } FCFA</span>
          </div>
        )}
      </div>
    </>
  );
};
