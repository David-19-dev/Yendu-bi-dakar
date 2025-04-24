
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import * as SibApiV3Sdk from 'npm:@sendinblue/client';

const brevoApiKey = Deno.env.get('BREVO_API_KEY');
const adminEmail = Deno.env.get('ADMIN_EMAIL');
const templateIdClient = Deno.env.get('templateId_client') || '1';
const templateIdAdmin = Deno.env.get('templateId_admin') || '2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ReservationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  adultCount: number;
  childCount: number;
  totalPrice: number;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!brevoApiKey) {
      throw new Error('La clé API Brevo n\'est pas configurée');
    }

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, brevoApiKey);

    const { firstName, lastName, email, phone, date, adultCount, childCount, totalPrice }: ReservationData = await req.json();

    console.log('Données de réservation reçues:', {
      firstName, lastName, email, phone, date, adultCount, childCount, totalPrice
    });

    // Conversion explicite en nombre et formatage du prix
    const numericPrice = typeof totalPrice === 'number' ? totalPrice : Number(totalPrice) || 0;
    const formattedTotalPrice = `${numericPrice.toLocaleString()} FCFA`;
    
    console.log('Prix formaté:', formattedTotalPrice);
    
    // Envoyer l'email au client
    const sendEmailToCustomer = await apiInstance.sendTransacEmail({
      templateId: parseInt(templateIdClient),
      to: [{ email: email, name: `${firstName} ${lastName}` }],
      params: {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        email,
        phone,
        date,
        adultCount,
        childCount,
        totalPrice: formattedTotalPrice
      },
    });

    console.log('Email client envoyé:', sendEmailToCustomer);

    // Vérifier si adminEmail est défini et non vide
    if (adminEmail && adminEmail.trim() !== '') {
      console.log('Tentative d\'envoi d\'email à l\'administrateur:', adminEmail);
      
      try {
        const sendEmailToAdmin = await apiInstance.sendTransacEmail({
          templateId: parseInt(templateIdAdmin),
          to: [{ email: adminEmail.trim() }],
          params: {
            customerName: `${firstName} ${lastName}`,
            customerEmail: email,
            customerPhone: phone,
            date,
            adultCount,
            childCount,
            totalPrice: formattedTotalPrice,
            firstName,
            lastName,
            fullName: `${firstName} ${lastName}`,
            email,
            phone
          },
        });

        console.log('Email admin envoyé avec succès:', sendEmailToAdmin);
      } catch (adminError) {
        console.error('Erreur lors de l\'envoi de l\'email admin:', adminError);
        // Ne pas faire échouer la fonction complète si l'email admin échoue
      }
    } else {
      console.warn('Email admin non envoyé: ADMIN_EMAIL n\'est pas configuré ou est vide');
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
