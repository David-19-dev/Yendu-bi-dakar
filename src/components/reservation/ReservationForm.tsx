
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema, FormValues } from "./form/FormSchema";
import { PersonalInfoFields } from "./form/PersonalInfoFields";
import { VisitDateField } from "./form/VisitDateField";
import { VisitorCountFields } from "./form/VisitorCountFields";
import { TermsCheckbox } from "./form/TermsCheckbox";

interface ReservationFormProps {
  onSubmit: (data: FormValues) => void;
  watchDate: Date | undefined;
  watchAdultCount: number;
  watchChildCount: number;
}

export type { FormValues } from "./form/FormSchema";

export const ReservationForm = ({ onSubmit, watchDate, watchAdultCount, watchChildCount }: ReservationFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      adultCount: 1,
      childCount: 0,
      acceptTerms: false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <PersonalInfoFields form={form} />
        <VisitDateField form={form} />
        <VisitorCountFields form={form} />
        <TermsCheckbox form={form} />
        
        <Button type="submit" className="w-full md:w-auto">
          Confirmer la réservation
        </Button>
      </form>
    </Form>
  );
};
