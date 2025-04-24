import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    // Set page title
    document.title = "Yendu-bi | Services";
    
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
            src="/imgs/new5.jpg" 
            alt="Yendu-bi Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-20 text-center">
          <h1 className="heading-xl mb-4">Nos Services</h1>
          <p className="body-lg max-w-2xl mx-auto">
            Découvrez l'éventail complet des services que nous proposons pour enrichir votre expérience à Yendu-bi.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="heading-lg mb-4">Ce Que Nous Offrons</h2>
            <p className="max-w-2xl mx-auto">
              À Yendu-bi, nous nous efforçons de créer une expérience complète qui combine confort, 
              culture et authenticité.
            </p>
          </div>
          
          <div className="space-y-20">
            {/* Service 1: Dining */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div>
                <img 
                  src="/imgs/new9.jpg" 
                  alt="Restauration à Yendu-bi" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="heading-md mb-4 text-yendu-terra">Restauration</h3>
                <p className="mb-4">
                  Notre restaurant propose une cuisine authentique sénégalaise préparée avec des ingrédients 
                  locaux de qualité. Nos chefs talentueux revisitent les plats traditionnels avec une 
                  touche moderne pour vous offrir une expérience culinaire inoubliable.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Plats traditionnels sénégalais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cuisine fusion afro-contemporaine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ingrédients frais et locaux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Options végétariennes disponibles</span>
                  </li>
                </ul>
                <p>
                  Nos horaires : Tous les jours de 11h à 23h
                </p>
              </div>
            </div>
            
            {/* Service 2: Cultural Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="order-2 md:order-1">
                <h3 className="heading-md mb-4 text-yendu-terra">Événements Culturels</h3>
                <p className="mb-4">
                  Yendu-bi est un lieu vivant où la culture sénégalaise s'exprime sous toutes ses formes. 
                  Nous organisons régulièrement des événements qui célèbrent la richesse artistique et 
                  culturelle du Sénégal.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Concerts de musique traditionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Expositions d'art local</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Soirées poétiques et contes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ateliers d'artisanat traditionnel</span>
                  </li>
                </ul>
                <p>
                  Consultez notre calendrier d'événements pour ne rien manquer !
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/imgs/new2.jpg" 
                  alt="Événements culturels à Yendu-bi" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
            
            {/* Service 3: Relaxation Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div>
                <img 
                  src="/imgs/new5.jpg" 
                  alt="Espace détente à Yendu-bi" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="heading-md mb-4 text-yendu-terra">Espace Détente</h3>
                <p className="mb-4">
                  Notre espace détente a été conçu pour vous offrir un havre de paix au cœur de la ville. 
                  C'est l'endroit idéal pour vous ressourcer, lire un livre, travailler ou simplement 
                  profiter d'un moment de calme.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cadre apaisant avec décoration authentique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Connexion Wi-Fi gratuite</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Boissons et en-cas disponibles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Espaces confortables pour le travail ou la détente</span>
                  </li>
                </ul>
                <p>
                  Ouvert tous les jours de 9h à 22h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-yendu-beige">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="heading-lg mb-4">Ce Que Disent Nos Clients</h2>
            <p className="max-w-2xl mx-auto">
              Découvrez les témoignages de personnes qui ont vécu l'expérience Yendu-bi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Martin",
                comment: "Une expérience culinaire exceptionnelle ! Les plats étaient délicieux et le service impeccable. Je recommande vivement.",
                origin: "Paris, France",
                delay: 0
              },
              {
                name: "Moussa Diop",
                comment: "Yendu-bi est devenu mon lieu de prédilection pour travailler. L'ambiance est parfaite et le personnel très accueillant.",
                origin: "Dakar, Sénégal",
                delay: 0.2
              },
              {
                name: "John Williams",
                comment: "J'ai participé à un atelier culturel lors de mon séjour à Dakar. Ce fut une expérience enrichissante qui m'a permis de mieux comprendre la culture sénégalaise.",
                origin: "Londres, Royaume-Uni",
                delay: 0.4
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md animate-on-scroll" 
                style={{ animationDelay: `${testimonial.delay}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <p className="italic mb-6">" {testimonial.comment} "</p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.origin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
