import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight } from 'lucide-react';

const galleryPreviewImages = [
  { id: 1, src: "/imgs/tablaeu.jpg", alt: "Image 1" },
  { id: 2, src: "/imgs/ext2.jpg", alt: "Image 2" },
  { id: 3, src: "/imgs/ext3.jpg", alt: "Image 3" },
  { id: 4, src: "/imgs/img2.jpg", alt: "Image 4" },
];

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Yendu-bi | Complexe Pédagogique de Loisirs et de Sports";
    
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
      <Hero />
      
      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="heading-lg mb-6 text-yendu-terra">À Propos de Yendu-bi</h2>
              <p className="body-lg mb-6">
                Situé à Keur Mbaye FALL à Dakar, Yendu-bi est un complexe pédagogique innovant 
                qui combine loisirs, sports et éducation pour offrir une expérience complète 
                aux jeunes et adultes du Sénégal.
              </p>
              <p className="mb-8">
                Notre mission est de promouvoir le développement personnel et collectif à travers 
                des activités sportives, ludiques et éducatives dans un environnement sécurisé et stimulant.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-yendu-terra hover:underline"
              >
                En savoir plus <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="animate-on-scroll">
              <img 
                src="/imgs/panau.jpg" 
                alt="Panneau d'information Yendu-bi" 
                className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Highlight */}
      <section className="py-20 bg-yendu-beige">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="heading-lg mb-4">Nos Services</h2>
            <p className="max-w-2xl mx-auto">
              Découvrez les activités et programmes exceptionnels que nous proposons pour tous les âges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Activités Sportives",
                description: "Football, basketball, athlétisme et bien d'autres sports encadrés par des professionnels.",
                image: "/imgs/sport.jpg",
                delay: 0
              },
              {
                title: "Programmes Éducatifs",
                description: "Ateliers pédagogiques et programmes de développement personnel pour les jeunes.",
                image: "/imgs/img3.jpg",
                delay: 0.2
              },
              {
                title: "Loisirs et Détente",
                description: "Espaces récréatifs et activités ludiques pour se divertir tout en apprenant.",
                image: "/imgs/img4.jpg",
                delay: 0.4
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll" 
                style={{ animationDelay: `${service.delay}s` }}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="heading-sm mb-3">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-yendu-terra hover:underline inline-flex items-center"
                  >
                    Découvrir <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 animate-on-scroll">
            <Link 
              to="/services" 
              className="px-6 py-3 bg-yendu-terra text-white rounded-md hover:bg-opacity-90 transition-all inline-block"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="heading-lg mb-4">Notre Galerie</h2>
            <p className="max-w-2xl mx-auto">
              Explorez Yendu-bi à travers notre collection d'images capturant les activités et l'ambiance de notre complexe.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll">
            {galleryPreviewImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 animate-on-scroll">
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-yendu-terra hover:underline"
            >
              Voir toute la galerie <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-yendu-dark text-white">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h2 className="heading-lg mb-6">Prêt à Rejoindre Yendu-bi?</h2>
            <p className="body-lg max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour plus d'informations sur nos programmes ou pour planifier une visite.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-yendu-terra text-white rounded-md hover:bg-opacity-90 transition-all inline-block"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
