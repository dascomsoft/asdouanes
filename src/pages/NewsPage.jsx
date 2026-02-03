import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaCalendar as Calendar,
  FaClock as Clock,
  FaUser as User,
  FaTag as Tag,
  FaHeart as Heart,
  FaComments as MessageCircle,
  FaChartLine as TrendingUp
} from 'react-icons/fa'

// Données des articles (peut être externalisé dans un fichier data)
const articles = [
  {
    id: 1,
    title: "Large victoire 5-1 contre Economat des Armées",
    excerpt: "L'AS Douanes renoue avec la victoire après une série difficile, démontrant une offensive redoutable.",
    category: 'matches',
    date: '15 Déc 2025',
    author: 'Rédaction AS Douanes',
    readTime: '3 min',
    likes: 45,
    comments: 12,
    image: '/images/douane11.jpg',
    featured: true,
    tags: ['victoire', 'offensive', 'championnat']
  },
  {
    id: 2,
    title: "Renouvellement du bureau exécutif",
    excerpt: "Élection de M. Abakar MADJIADOUMBE à la présidence lors de l'Assemblée générale.",
    category: 'club',
    date: '11 Oct 2025',
    author: 'Service Communication',
    readTime: '4 min',
    likes: 67,
    comments: 18,
    image: '/images/douane.jpg',
    featured: true,
    tags: ['élection', 'président', 'nouvelle ère']
  },
  {
    id: 3,
    title: "Première défaite de la saison face à Tasko",
    excerpt: "Malgré une bonne performance, l'AS Douanes s'incline 2-1 au Stade de Diguel.",
    category: 'matches',
    date: '08 Déc 2025',
    author: 'Journaliste Sportif',
    readTime: '2 min',
    likes: 38,
    comments: 8,
    image: '/images/douane2.jpg',
    featured: false,
    tags: ['défaite', 'analyse', 'championnat']
  },
  // {
  //   id: 4,
  //   title: "Nouveau recrutement pour renforcer la défense",
  //   excerpt: "Le club annonce la signature d'un jeune défenseur prometteur.",
  //   category: 'transfers',
  //   date: '05 Nov 2025',
  //   author: 'Direction Sportive',
  //   readTime: '3 min',
  //   likes: 52,
  //   comments: 15,
  //   image: '/images/douane13.jpg',
  //   featured: false,
  //   tags: ['recrutement', 'défense', 'jeune']
  // },
  // {
  //   id: 5,
  //   title: "Calendrier des 4 premières journées dévoilé",
  //   excerpt: "Découvrez le programme du début de saison en D2.",
  //   category: 'matches',
  //   date: '20 Nov 2025',
  //   author: 'Service Organisation',
  //   readTime: '2 min',
  //   likes: 41,
  //   comments: 6,
  //   image: '/images/match1.jpg',
  //   featured: false,
  //   tags: ['calendrier', 'programme', 'saison']
  // },
  // {
  //   id: 6,
  //   title: "Centre de formation : les nouveaux espoirs",
  //   excerpt: "Présentation des jeunes talents du centre de formation.",
  //   category: 'youth',
  //   date: '18 Oct 2025',
  //   author: 'Responsable Formation',
  //   readTime: '4 min',
  //   likes: 58,
  //   comments: 22,
  //   image: '/images/douane14.jpg',
  //   featured: false,
  //   tags: ['formation', 'jeunes', 'talents']
  // }
]

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Catégories d'actualités
  const categories = [
    { id: 'all', label: 'Toutes les news', count: articles.length },
    { id: 'matches', label: 'Résultats matchs', count: articles.filter(a => a.category === 'matches').length },
    { id: 'transfers', label: 'Transferts', count: articles.filter(a => a.category === 'transfers').length },
    { id: 'club', label: 'Vie du club', count: articles.filter(a => a.category === 'club').length },
    { id: 'youth', label: 'Jeunes talents', count: articles.filter(a => a.category === 'youth').length }
  ]

  // Articles populaires
  const popularArticles = articles
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3)

  // Filtrage des articles
  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory)

  return (
    <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-custom-blue mb-6"
          >
            Actualités du Club
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez toute l'actualité de l'AS Douanes : résultats, transferts, vie du club et plus encore
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2">
            {/* Filtres */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-custom-blue text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Articles en vedette */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-custom-blue mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Articles en vedette
              </h2>
              <div className="space-y-8">
                {articles.filter(a => a.featured).map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-2/5">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      
                      {/* Contenu */}
                      <div className="md:w-3/5 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-custom-red text-white rounded-full text-sm font-medium">
                            {article.category === 'matches' && 'Match'}
                            {article.category === 'transfers' && 'Transfert'}
                            {article.category === 'club' && 'Club'}
                            {article.category === 'youth' && 'Jeunes'}
                          </span>
                          <span className="text-sm text-gray-500">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            {article.date}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-custom-blue mb-4">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-6">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.readTime}
                            </span>
                          </div>

                          <div className="flex items-center gap-4">
                            <button className="text-gray-500 hover:text-custom-red transition">
                              <Heart className="w-5 h-5" />
                              <span className="text-sm ml-1">{article.likes}</span>
                            </button>
                            <button className="text-gray-500 hover:text-custom-blue transition">
                              <MessageCircle className="w-5 h-5" />
                              <span className="text-sm ml-1">{article.comments}</span>
                            </button>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <Link 
                            to={`/article/${article.id}`}
                            className="btn-primary inline-flex items-center gap-2"
                          >
                            Lire l'article complet
                            <span className="text-xl">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Tous les articles */}
            <div>
              <h2 className="text-2xl font-bold text-custom-blue mb-6">
                Toutes les actualités
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-custom-red text-white rounded-full text-sm font-medium">
                          {article.category === 'matches' && 'Match'}
                          {article.category === 'transfers' && 'Transfert'}
                          {article.category === 'club' && 'Club'}
                          {article.category === 'youth' && 'Jeunes'}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-custom-blue mb-3 line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-gray-500">
                          <button className="flex items-center gap-1 hover:text-custom-red transition">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm">{article.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-custom-blue transition">
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm">{article.comments}</span>
                          </button>
                        </div>

                        <Link 
                          to={`/article/${article.id}`}
                          className="text-custom-blue hover:text-blue-800 font-medium text-sm"
                        >
                          Lire plus →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Articles populaires */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-custom-blue mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Articles populaires
              </h3>
              <div className="space-y-6">
                {popularArticles.map((article) => (
                  <Link 
                    key={article.id}
                    to={`/article/${article.id}`}
                    className="block pb-6 border-b last:border-0 last:pb-0 hover:bg-gray-50 -mx-6 px-6 transition"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 hover:text-custom-blue transition">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>{article.date}</span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {article.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Catégories */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-custom-blue mb-6">
                Catégories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition ${
                      activeCategory === category.id
                        ? 'bg-custom-blue text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-sm">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-custom-blue to-blue-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                Newsletter
              </h3>
              <p className="text-blue-100 mb-6">
                Recevez les dernières actualités directement dans votre boîte mail
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-custom-blue font-bold py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  S'abonner
                </button>
              </form>
            </div>

            {/* Tags populaires */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-custom-blue mb-6">
                <Tag className="w-5 h-5 inline mr-2" />
                Tags populaires
              </h3>
              <div className="flex flex-wrap gap-2">
                {['victoire', 'championnat', 'jeunes', 'transfert', 'entraînement', 'match', 'équipe', 'but'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition text-sm"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage