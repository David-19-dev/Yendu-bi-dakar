
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = "Yendu-bi | À Propos";
    
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
            src="/imgs/sport1.jpg" 
            alt="Yendu-bi History" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-20 text-center">
          <h1 className="heading-xl mb-4">Notre Histoire</h1>
          <p className="body-lg max-w-2xl mx-auto">
            Découvrez l'histoire de Yendu-bi et les valeurs qui guident notre établissement depuis sa création.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="/imgs/new4.jpg" 
                alt="L'histoire de Yendu-bi" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="heading-lg mb-6 text-yendu-terra">Les Débuts de Yendu-bi</h2>
              <p className="body-lg mb-6">
                Fondé en 2015, Yendu-bi est né de la passion de ses fondateurs pour la culture 
                sénégalaise et leur désir de créer un espace unique où tradition et modernité 
                se rencontrent harmonieusement.
              </p>
              <p className="mb-6">
                Ce qui a commencé comme un petit établissement s'est rapidement transformé en un lieu 
                incontournable de Dakar, attirant aussi bien les habitants locaux que les visiteurs 
                internationaux en quête d'authenticité.
              </p>
              <p>
                Au fil des années, nous avons évolué tout en restant fidèles à notre vision initiale : 
                offrir une expérience exceptionnelle dans un cadre chaleureux et accueillant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-yendu-beige">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="heading-lg mb-4">Nos Valeurs</h2>
            <p className="max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et définissent l'essence de Yendu-bi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticité",
                description: "Nous valorisons l'héritage culturel sénégalais et nous nous efforçons de le partager dans sa forme la plus pure.",
                delay: 0
              },
              {
                title: "Excellence",
                description: "Nous nous engageons à offrir un service de la plus haute qualité dans tous les aspects de notre établissement.",
                delay: 0.2
              },
              {
                title: "Hospitalité",
                description: "Nous accueillons chaque visiteur comme un membre de notre famille, avec chaleur et générosité.",
                delay: 0.4
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md animate-on-scroll" 
                style={{ animationDelay: `${value.delay}s` }}
              >
                <h3 className="heading-sm mb-4 text-yendu-terra">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="heading-lg mb-4">Notre Équipe</h2>
            <p className="max-w-2xl mx-auto">
              Rencontrez les personnes passionnées qui travaillent chaque jour pour rendre votre expérience inoubliable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Amadou Diallo",
                role: "Fondateur & Directeur",
                image: "/placeholder.svg",
                delay: 0
              },
              {
                name: "Fatou Ndiaye",
                role: "Chef Cuisinière",
                image: "/placeholder.svg",
                delay: 0.2
              },
              {
                name: "Omar Seck",
                role: "Responsable Événements",
                image: "/placeholder.svg",
                delay: 0.4
              },
              {
                name: "Aïda Mbaye",
                role: "Responsable Accueil",
                image: "/placeholder.svg",
                delay: 0.6
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="text-center animate-on-scroll" 
                style={{ animationDelay: `${member.delay}s` }}
              >
                <div className="mb-4 overflow-hidden rounded-full mx-auto w-48 h-48">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="heading-sm mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
