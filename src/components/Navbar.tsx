
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/imgs/logo.png" 
              alt="Yendu-bi Logo" 
              className="h-14 mr-2" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-yendu-terra ${
                  isActive(link.path) ? 'text-yendu-terra' : 'text-yendu-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Bouton de réservation */}
            <Link
              to="/reservation"
              className="flex items-center gap-1.5 bg-primary text-white px-4 py-1.5 rounded-full font-medium transition-colors hover:bg-primary/90"
            >
              <Calendar size={18} />
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-yendu-dark hover:text-yendu-terra focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 py-4 bg-white shadow-md' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container-custom space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-2 font-medium transition-colors hover:text-yendu-terra ${
                isActive(link.path) ? 'text-yendu-terra' : 'text-yendu-dark'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Bouton de réservation pour mobile */}
          <Link
            to="/reservation"
            className="flex items-center gap-1.5 bg-primary text-white px-4 py-2 my-2 rounded-full font-medium transition-colors hover:bg-primary/90 w-full justify-center"
          >
            <Calendar size={18} />
            Réserver
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
