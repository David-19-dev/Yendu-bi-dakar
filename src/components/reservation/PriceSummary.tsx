
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PriceDisplay } from "./PriceDisplay";
import { ImportantInfo } from "./ImportantInfo";

interface PriceSummaryProps {
  watchDate: Date | undefined;
  watchAdultCount: number;
  watchChildCount: number;
  prices: {
    weekday: { adult: number; child: number };
    saturday: { adult: number; child: number };
    sunday: { adult: number; child: number };
  };
  calculatePrice: () => number;
}

export const PriceSummary = ({ 
  watchDate, 
  watchAdultCount, 
  watchChildCount, 
  prices, 
  calculatePrice 
}: PriceSummaryProps) => {
  return (
    <div>
      <Card className="border-2 border-border sticky top-4">
        <CardHeader className="border-b bg-muted/50">
          <CardTitle>Résumé de la réservation</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <PriceDisplay 
            date={watchDate} 
            adultCount={watchAdultCount} 
            childCount={watchChildCount} 
            prices={prices} 
            calculatePrice={calculatePrice} 
          />
        </CardContent>
        {watchDate && (
          <CardFooter className="border-t bg-muted/50 py-4 px-6">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold">{calculatePrice()} FCFA</span>
            </div>
          </CardFooter>
        )}
      </Card>
      
      <ImportantInfo />
    </div>
  );
};
