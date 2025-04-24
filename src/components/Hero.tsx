
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
          src="/imgs/piscine.png" 
          alt="Piscine de Yendu-bi Dakar" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Hero Content */}
      <div className={`container-custom relative z-20 text-white text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="heading-xl mb-6">Bienvenue à Yendu-bi</h1>
        <h2 className="heading-md mb-6">Complexe Pédagogique de Loisirs et de Sports du Sénégal</h2>
        <p className="body-lg max-w-2xl mx-auto mb-8">
          Découvrez notre complexe éducatif unique qui associe activités sportives, loisirs et apprentissage au cœur de Dakar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/Reservation"
            className="px-6 py-3 bg-yendu-terra text-white rounded-md hover:bg-opacity-90 transition-all"
          >
            Réserver
          </Link>
          <Link 
            to="/contact"
            className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-yendu-dark transition-all flex items-center justify-center"
          >
            Nous contacter <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
