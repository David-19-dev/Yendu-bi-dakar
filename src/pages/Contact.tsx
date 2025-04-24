
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Set page title
    document.title = "Yendu-bi | Contact";
    
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.9) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <main>
      {/* Page Header */}
      <section className="relative py-32 bg-yendu-dark text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <img 
            src="/imgs/contact.jpg" 
            alt="Yendu-bi Contact" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-20 text-center">
          <h1 className="heading-xl mb-4">Contactez-Nous</h1>
          <p className="body-lg max-w-2xl mx-auto">
            Nous sommes à votre disposition pour répondre à toutes vos questions et vous accueillir à Yendu-bi.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h2 className="heading-lg mb-8 text-yendu-terra">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="animate-on-scroll">
              <h2 className="heading-lg mb-8 text-yendu-terra">Nos Coordonnées</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin className="text-yendu-terra mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p>Rue des Almadies, Dakar, Sénégal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-yendu-terra mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p>+221 XX XXX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-yendu-terra mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p>contact@yendu-bi.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-yendu-terra mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Horaires d'ouverture</h3>
                    <p>Lundi - Dimanche : 9h00 - 23h00</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">Carte Google Maps sera intégrée ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-yendu-beige">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="heading-lg mb-4">Questions Fréquentes</h2>
            <p className="max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes concernant Yendu-bi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            {[
              {
                question: "Faut-il réserver pour venir manger au restaurant ?",
                answer: "Bien que nous puissions accueillir des clients sans réservation, nous recommandons fortement de réserver à l'avance, surtout les week-ends et pour les grands groupes, afin d'être sûr d'avoir une table."
              },
              {
                question: "Proposez-vous des options végétariennes ou végétaliennes ?",
                answer: "Oui, notre menu inclut plusieurs options végétariennes savoureuses. Pour les régimes végétaliens, n'hésitez pas à en informer notre équipe lors de votre réservation, et nos chefs se feront un plaisir de préparer des plats adaptés."
              },
              {
                question: "Comment puis-je être informé des événements à venir ?",
                answer: "Vous pouvez consulter notre calendrier d'événements sur notre site, nous suivre sur nos réseaux sociaux, ou vous inscrire à notre newsletter pour recevoir toutes les informations sur nos événements à venir."
              },
              {
                question: "Disposez-vous d'un parking pour les clients ?",
                answer: "Oui, nous disposons d'un parking privé gratuit pour nos clients. Il est toutefois conseillé d'arriver tôt pendant les heures de pointe, car les places peuvent être limitées."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
