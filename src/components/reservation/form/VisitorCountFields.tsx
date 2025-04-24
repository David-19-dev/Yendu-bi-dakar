
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../ReservationForm";

interface VisitorCountFieldsProps {
  form: UseFormReturn<FormValues>;
}

export const VisitorCountFields = ({ form }: VisitorCountFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <FormField
        control={form.control}
        name="adultCount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre d'adultes</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                min={1} 
                max={20} 
                onChange={(e) => field.onChange(parseInt(e.target.value))}
                value={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="childCount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre d'enfants (-10 ans)</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                min={0} 
                max={20} 
                onChange={(e) => field.onChange(parseInt(e.target.value))}
                value={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
