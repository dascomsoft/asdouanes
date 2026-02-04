import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Liste des images disponibles - en supprimant celles spécifiées
  const images = Array.from({ length: 18 }, (_, i) => {
    const num = i + 1;
    // Filtre pour supprimer les images spécifiées
    if ([10, 12, 14, 17, 28, 29].includes(num)) {
      return null; // Ces images seront filtrées
    }
    return `/images/douane${num}.jpg`;
  })
  .filter(Boolean) // Supprime les null
  .concat(Array.from({ length: 7 }, (_, i) => `/images/match${i + 1}.jpg`))
  .concat([
    '/images/douanelogo.jpg',
    '/images/douanepresi.jpg',
    '/images/douanecoach.jpg',
    '/images/kingpokkologo.jpeg'
  ])

  const openLightbox = (index) => {
    setSelectedImage(images[index])
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">
          Galerie Photo
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          Découvrez les moments forts de l'AS Douanes : matchs, entraînements, 
          célébrations et vie du club.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`AS Douanes ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeLightbox()
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft size={48} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight size={48} />
              </button>

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="absolute bottom-4 text-white text-center">
                Image {currentIndex + 1} sur {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery