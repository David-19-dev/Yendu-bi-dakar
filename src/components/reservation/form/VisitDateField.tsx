
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../ReservationForm";

interface VisitDateFieldProps {
  form: UseFormReturn<FormValues>;
}

export const VisitDateField = ({ form }: VisitDateFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date de visite</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                >
                  {field.value ? (
                    format(field.value, "d MMMM yyyy", { locale: fr })
                  ) : (
                    "Sélectionnez une date"
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => {
                  return date < new Date();
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>
            Les tarifs varient selon le jour de la semaine
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
