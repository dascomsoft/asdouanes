import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Search, Filter, Download, Share2, Heart, Camera } from 'lucide-react'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Catégories d'images
  const categories = [
    { id: 'all', label: 'Toutes les photos', count: 25 },
    { id: 'matches', label: 'Matchs', count: 12 },
    { id: 'training', label: 'Entraînements', count: 6 },
    { id: 'team', label: 'Équipe', count: 5 },
    { id: 'events', label: 'Événements', count: 2 }
  ]

  // Images de la galerie (utilisant les images du dossier public)
  const images = [
    { id: 1, src: '/images/match1.jpg', category: 'matches', title: 'Victoire 5-1', date: 'Déc 2025', likes: 42 },
    { id: 2, src: '/images/match2.jpg', category: 'matches', title: 'Défense solide', date: 'Déc 2025', likes: 38 },
    { id: 3, src: '/images/match3.jpg', category: 'matches', title: 'But décisif', date: 'Déc 2025', likes: 51 },
    { id: 4, src: '/images/match5.jpg', category: 'matches', title: 'Célébration', date: 'Jan 2026', likes: 47 },
    { id: 5, src: '/images/match6.jpg', category: 'matches', title: 'Action de jeu', date: 'Jan 2026', likes: 39 },
    { id: 6, src: '/images/match7.jpg', category: 'matches', title: 'Préparation', date: 'Jan 2026', likes: 45 },
    { id: 7, src: '/images/douane1.jpg', category: 'team', title: 'Équipe 2025-2026', date: 'Oct 2025', likes: 67 },
    { id: 8, src: '/images/douane2.jpg', category: 'team', title: 'Groupe', date: 'Oct 2025', likes: 53 },
    { id: 9, src: '/images/douane3.jpg', category: 'team', title: 'Gardien', date: 'Oct 2025', likes: 49 },
    { id: 10, src: '/images/douane4.jpg', category: 'training', title: 'Session technique', date: 'Nov 2025', likes: 41 },
    { id: 11, src: '/images/douane5.jpg', category: 'training', title: 'Préparation physique', date: 'Nov 2025', likes: 36 },
    { id: 12, src: '/images/douane6.jpg', category: 'training', title: 'Exercices', date: 'Nov 2025', likes: 44 },
    { id: 13, src: '/images/douane7.jpg', category: 'training', title: 'Récupération', date: 'Nov 2025', likes: 32 },
    { id: 14, src: '/images/douane8.jpg', category: 'team', title: 'Attaquant', date: 'Oct 2025', likes: 55 },
    { id: 15, src: '/images/douane9.jpg', category: 'team', title: 'Milieu', date: 'Oct 2025', likes: 48 },
    // { id: 16, src: '/images/douane10.jpg', category: 'events', title: 'Assemblée générale', date: 'Oct 2025', likes: 61 },
    { id: 17, src: '/images/douane11.jpg', category: 'events', title: 'Présentation', date: 'Oct 2025', likes: 54 },
    // { id: 18, src: '/images/douane12.jpg', category: 'training', title: 'Tactique', date: 'Nov 2025', likes: 40 },
    { id: 19, src: '/images/douane13.jpg', category: 'training', title: 'Frappes', date: 'Nov 2025', likes: 43 },
    // { id: 20, src: '/images/douane14.jpg', category: 'matches', title: 'Victoire', date: 'Déc 2025', likes: 58 },
    // { id: 21, src: '/images/douane15.jpg', category: 'team', title: 'Staff technique', date: 'Oct 2025', likes: 52 },
    { id: 22, src: '/images/douane16.jpg', category: 'team', title: 'Entraîneur', date: 'Oct 2025', likes: 56 },
    // { id: 23, src: '/images/douane17.jpg', category: 'events', title: 'Cérémonie', date: 'Oct 2025', likes: 60 },
    { id: 24, src: '/images/douane18.jpg', category: 'matches', title: 'Dernier match', date: 'Jan 2026', likes: 62 },
    { id: 25, src: '/images/douanelogo.jpg', category: 'events', title: 'Logo officiel', date: '2025', likes: 85 }
  ]

  // Filtrage des images
  const filteredImages = images.filter(image => {
    const matchesCategory = activeCategory === 'all' || image.category === activeCategory
    const matchesSearch = !searchTerm || 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.date.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openLightbox = (index) => {
    setSelectedImage(filteredImages[index])
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-custom-blue mb-6 flex items-center justify-center gap-3"
          >
            <Camera className="w-10 h-10" />
            Galerie Photo
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les moments forts de l'AS Douanes en images
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Barre de recherche */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher des photos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                />
              </div>

              {/* Filtres */}
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 text-gray-600">
                  <Filter className="w-5 h-5" />
                  Filtres :
                </span>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-custom-blue text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Résultats */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {filteredImages.length} photo{filteredImages.length > 1 ? 's' : ''} trouvée{filteredImages.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </section>

        {/* Grille de photos */}
        <section className="mb-16">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                        <div className="flex items-center justify-between text-sm">
                          <span>{image.date}</span>
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4" />
                            <span>{image.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Catégorie */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                        {image.category === 'matches' && 'Match'}
                        {image.category === 'training' && 'Entraînement'}
                        {image.category === 'team' && 'Équipe'}
                        {image.category === 'events' && 'Événement'}
                      </span>
                    </div>
                  </div>

                  {/* Info rapide */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{image.title}</h3>
                      <button className="text-custom-red hover:text-red-700">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{image.date}</span>
                      <div className="flex items-center gap-1">
                        <Camera className="w-4 h-4" />
                        <span>Photo officielle</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Aucune photo trouvée
              </h3>
              <p className="text-gray-500">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </section>

        {/* Statistiques */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-custom-blue mb-8 text-center">
            Statistiques de la galerie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Photos totales', value: '25', icon: <Camera className="w-6 h-6" /> },
              { label: 'Vues totales', value: '2.5K', icon: <Eye className="w-6 h-6" /> },
              { label: 'Likes reçus', value: '1.2K', icon: <Heart className="w-6 h-6" /> },
              { label: 'Albums', value: '5', icon: <Album className="w-6 h-6" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-custom-red mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-custom-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

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
              {/* Contrôles */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeLightbox()
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full"
              >
                <X size={24} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image principale */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[70vh] object-contain rounded-lg"
                />

                {/* Informations de l'image */}
                <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedImage.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-300">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {selectedImage.date}
                        </span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                          {selectedImage.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="text-white hover:text-gray-300">
                        <Download size={20} />
                      </button>
                      <button className="text-white hover:text-gray-300">
                        <Share2 size={20} />
                      </button>
                      <button className="text-white hover:text-red-400">
                        <Heart size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Navigation des miniatures */}
                  <div className="flex gap-2 overflow-x-auto py-2">
                    {filteredImages.map((img, idx) => (
                      <button
                        key={img.id}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentIndex(idx)
                          setSelectedImage(img)
                        }}
                        className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${
                          idx === currentIndex ? 'border-custom-red' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={img.src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Indicateur */}
              <div className="absolute bottom-4 text-white text-center w-full">
                Image {currentIndex + 1} sur {filteredImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Composants d'icônes manquants
const Eye = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

const Album = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
)

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

export default GalleryPage