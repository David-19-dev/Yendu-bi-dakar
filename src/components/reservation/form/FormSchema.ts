
import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  phone: z.string().min(8, { message: "Numéro de téléphone invalide" }),
  date: z.date({
    required_error: "Veuillez sélectionner une date",
  }),
  adultCount: z.number().min(1, { message: "Au moins 1 adulte est requis" }).max(20, { message: "Maximum 20 adultes" }),
  childCount: z.number().min(0).max(20, { message: "Maximum 20 enfants" }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions générales",
  }),
});

export type FormValues = z.infer<typeof formSchema>;
