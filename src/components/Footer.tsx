
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yendu-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <div className="flex items-center mb-4">
              <img 
                src="/imgs/logo.png" 
                alt="Yendu-bi Logo" 
                className="h-16 mr-2 bg-white rounded-md p-1" 
              />
            </div>
            <p className="mb-6 text-gray-300">Complexe Pédagogique de Loisirs et de Sports du Sénégal dirigé par Keur Mbaye FALL.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yendu-sand transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yendu-sand transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yendu-sand transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-playfair text-xl font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yendu-sand transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yendu-sand transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yendu-sand transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-yendu-sand transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yendu-sand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="font-playfair text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Keur Mbaye FALL, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <span>+221 XX XXX XX XX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <span>contact@yendu-bi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} Yendu-bi - Complexe Pédagogique de Loisirs et de Sports du Sénégal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
