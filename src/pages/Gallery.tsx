import { useEffect, useState } from 'react';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Categories for filtering
  const categories = ['all', 'intérieur', 'extérieur', 'cuisine', 'événements'];

  useEffect(() => {
    // Set page title
    document.title = "Yendu-bi | Galerie";
    
    const galleryImages: GalleryImage[] = [
      { id: 1, src: "/imgs/singe.jpg", alt: "Intérieur 1", category: "intérieur" },
      { id: 2, src: "/imgs/ext1.jpg", alt: "Extérieur 1", category: "extérieur" },
      { id: 3, src: "/imgs/tablaeu.jpg", alt: "Cuisine 1", category: "cuisine" },
      { id: 4, src: "/imgs/sport.jpg", alt: "Événement 1", category: "événements" },
      { id: 5, src: "/imgs/tablaeu.jpg", alt: "Image 1", category: "intérieur" },
      { id: 6, src: "/imgs/ext2.jpg", alt: "Image 2", category: "extérieur" },
      { id: 7, src: "/imgs/ext3.jpg", alt: "Image 3", category: "cuisine" },
      { id: 8, src: "/imgs/new5.jpg", alt: "Image 4", category: "intérieur" },
      { id: 9, src: "/imgs/new6.jpg", alt: "Image 5", category: "extérieur" },
      { id: 10, src: "/imgs/new7.jpg", alt: "Image 6", category: "cuisine" },
      { id: 11, src: "/imgs/new8.jpg", alt: "Image 7", category: "événements" },
      { id: 12, src: "/imgs/new9.jpg", alt: "Image 8", category: "intérieur" },
      // Ajoutez d'autres images ici
    ];
    setImages(galleryImages);
    
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

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main>
      {/* Page Header */}
      <section className="relative py-32 bg-yendu-dark text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <img 
            src="/imgs/img-couv.png" 
            alt="Yendu-bi Gallery" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-20 text-center">
          <h1 className="heading-xl mb-4">Notre Galerie</h1>
          <p className="body-lg max-w-2xl mx-auto">
            Explorez l'univers de Yendu-bi à travers notre collection d'images.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === category
                    ? 'bg-yendu-terra text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">Aucune image trouvée pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="max-w-4xl w-full max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="text-white mt-4 flex justify-between items-center">
              <p>{selectedImage.alt}</p>
              <button 
                onClick={closeModal}
                className="px-4 py-2 bg-yendu-terra text-white rounded hover:bg-opacity-90"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
