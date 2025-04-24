import { useState, FormEvent } from 'react';
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Appel à la fonction Supabase pour envoyer le message de contact
      const { error } = await supabase.functions.invoke('send-contact-emails', {
        body: formData
      });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Message envoyé",
        description: "Nous avons bien reçu votre message et vous contacterons dans les plus brefs délais.",
      });
      
      // Réinitialiser le formulaire après l'envoi réussi
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yendu-terra"
            placeholder="Votre nom"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yendu-terra"
            placeholder="Votre adresse email"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yendu-terra"
          placeholder="Votre numéro de téléphone"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yendu-terra"
          placeholder="Votre message"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-yendu-terra text-white rounded-md hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
};

export default ContactForm;
