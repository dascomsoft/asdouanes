import { motion } from 'framer-motion'
import { Calendar, Clock, ChevronRight } from 'lucide-react'

const News = () => {
  const news = [
    {
      id: 1,
      title: "Victoire 5-1 contre Economat des Armées",
      excerpt: "L'AS Douanes renoue avec la victoire après une série difficile",
      date: "15 Déc 2025",
      category: "Match",
      image: "/images/match5.jpg",
      link: "/news"
    },
    {
      id: 2,
      title: "Nouveau président élu",
      excerpt: "M. Abakar MADJIADOUMBE prend la tête du club",
      date: "11 Oct 2025",
      category: "Club",
      image: "/images/douanepresi.jpg",
      link: "/news"
    },
    {
      id: 3,
      title: "Calendrier 2026 dévoilé",
      excerpt: "Découvrez les prochains matchs de la saison",
      date: "20 Nov 2025",
      category: "Info",
      image: "/images/match1.jpg",
      link: "/news"
    }
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-custom-blue mb-4">
              Dernières Actualités
            </h2>
            <p className="text-gray-600">
              Suivez toute l'actualité de l'AS Douanes
            </p>
          </div>
          <a
            href="/news"
            className="text-custom-blue hover:text-blue-800 font-semibold flex items-center gap-2"
          >
            Voir toutes les news
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-custom-red text-white rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-custom-blue mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-custom-blue hover:text-blue-800 font-medium"
                >
                  Lire l'article
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News