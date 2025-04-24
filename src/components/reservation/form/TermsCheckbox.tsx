
import { FormField, FormItem, FormControl, FormLabel, FormDescription, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../ReservationForm";

interface TermsCheckboxProps {
  form: UseFormReturn<FormValues>;
}

export const TermsCheckbox = ({ form }: TermsCheckboxProps) => {
  return (
    <FormField
      control={form.control}
      name="acceptTerms"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              J'accepte les conditions générales d'utilisation
            </FormLabel>
            <FormDescription>
              En confirmant ma réservation, j'accepte les termes et conditions de Yendu-bi.
            </FormDescription>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
