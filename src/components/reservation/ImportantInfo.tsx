
import { Check } from "lucide-react";

export const ImportantInfo = () => {
  return (
    <div className="mt-6 bg-secondary/50 rounded-xl p-5 border border-border/50">
      <h3 className="font-semibold mb-2">Informations importantes:</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li className="flex gap-2">
          <div className="bg-primary/10 text-primary p-1 rounded-full mt-0.5">
            <Check size={14} />
          </div>
          <span>Les réservations doivent être effectuées au moins 24h à l'avance</span>
        </li>
        <li className="flex gap-2">
          <div className="bg-primary/10 text-primary p-1 rounded-full mt-0.5">
            <Check size={14} />
          </div>
          <span>Les enfants de moins de 5 ans entrent gratuitement</span>
        </li>
        <li className="flex gap-2">
          <div className="bg-primary/10 text-primary p-1 rounded-full mt-0.5">
            <Check size={14} />
          </div>
          <span>Annulation gratuite jusqu'à 48h avant la date réservée</span>
        </li>
      </ul>
    </div>
  );
};
