
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import * as SibApiV3Sdk from 'npm:@sendinblue/client';
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') || '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
);

const brevoApiKey = Deno.env.get('BREVO_API_KEY');
// Définir une adresse email d'administration par défaut au cas où la variable d'environnement ne serait pas définie
const adminEmail = Deno.env.get('ADMIN_EMAIL') || 'admin@gomisconnect.com';
const templateIdClient = Deno.env.get('templateId_contact_client') || '3';
const templateIdAdmin = Deno.env.get('templateId_contact_admin') || '4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!brevoApiKey) throw new Error("La clé API Brevo n'est pas configurée");

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, brevoApiKey);

    const { name, email, phone, message }: ContactData = await req.json();

    // Save contact message to database
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({ name, email, phone, message });

    if (dbError) {
      console.error('Database insertion error:', dbError);
      // Continue with email sending even if database insertion fails
    }

    console.log('Contact form data received:', { name, email, phone, message });

    // Send email to client (confirm receipt)
    const emailToClient = await apiInstance.sendTransacEmail({
      templateId: parseInt(templateIdClient),
      to: [{ email, name }],
      params: {
        name,
        email,
        phone,
        message,
      },
    });

    console.log('Client email sent:', emailToClient);

    // Vérifier si l'email d'administration est défini
    if (adminEmail && adminEmail.trim() !== '') {
      console.log(`Sending admin email to: ${adminEmail}`);
      try {
        const emailToAdmin = await apiInstance.sendTransacEmail({
          templateId: parseInt(templateIdAdmin),
          to: [{ email: adminEmail.trim() }],
          params: {
            name,
            email,
            phone,
            message
          },
        });

        console.log('Admin email sent:', emailToAdmin);
      } catch (adminError) {
        console.error("Erreur lors de l'envoi de l'email admin:", adminError);
        throw new Error(`Échec de l'envoi de l'email admin: ${adminError.message}`);
      }
    } else {
      console.warn("ADMIN_EMAIL non défini ou vide. Email admin non envoyé.");
      throw new Error("L'adresse email d'administration n'est pas configurée");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi des emails de contact:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
