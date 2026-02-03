// import { useParams, useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { 
//   FaArrowLeft as ArrowLeft,
//   FaCalendar as Calendar,
//   FaClock as Clock,
//   FaUser as User,
//   FaShareAlt as Share,
//   FaHeart as Heart,
//   FaBookmark as Bookmark,
//   FaFacebook as Facebook,
//   FaTwitter as Twitter,
//   FaWhatsapp as Whatsapp
// } from 'react-icons/fa'

// // Données des articles (à déplacer dans un fichier séparé si nécessaire)
// const allArticles = [
//   {
//     id: 1,
//     title: "Large victoire 5-1 contre Economat des Armées",
//     content: `
//       <p>Après une défaite et un match nul, l'AS Douanes renoue avec la victoire en s'imposant largement face à l'AS Économat des Armées (5-1). L'équipe a fait preuve d'une belle offensive avec notamment un doublé d'Oumar et un triplé de Saleh.</p>
      
//       <h2>Un début de match prometteur</h2>
//       <p>Dès la 12ème minute, Oumar ouvrait le score sur un corner bien tiré par Mahamat. L'équipe a maintenu la pression et a doublé la mise à la 35ème minute grâce à une frappe magnifique de Saleh depuis l'entrée de la surface.</p>
      
//       <h2>Une seconde mi-temps maîtrisée</h2>
//       <p>La seconde mi-temps a vu l'AS Douanes confirmer sa domination avec trois buts supplémentaires. Le gardien Ali Oumar a réalisé plusieurs arrêts décisifs pour préserver l'avantage de son équipe.</p>
      
//       <h2>Les déclarations de l'entraîneur</h2>
//       <p>"Je suis fier de mes joueurs. Ils ont répondu présent après une série difficile. Cette victoire nous redonne confiance pour la suite du championnat", a déclaré le coach Abdoulaye en conférence de presse.</p>
//     `,
//     category: 'matches',
//     date: '15 Déc 2025',
//     author: 'Rédaction AS Douanes',
//     readTime: '3 min',
//     likes: 45,
//     comments: 12,
//     image: '/images/match5.jpg',
//     tags: ['victoire', 'offensive', 'championnat']
//   },
//   {
//     id: 2,
//     title: "Renouvellement du bureau exécutif",
//     content: `
//       <p>L'Assemblée générale élective tenue à l'amphithéâtre de l'ENA de N'Djaména a marqué un tournant pour le club. Le nouveau bureau exécutif, mené par M. Abakar MADJIADOUMBE, promet une nouvelle dynamique.</p>
      
//       <h2>Une élection historique</h2>
//       <p>Plus de 200 membres du club se sont réunis pour élire le nouveau bureau exécutif. Après un scrutin serré, M. Abakar MADJIADOUMBE a été élu président avec 68% des voix.</p>
      
//       <h2>Les nouveaux objectifs</h2>
//       <p>Le nouveau président a présenté son plan d'action pour les trois prochaines années, avec comme priorités :</p>
//       <ul>
//         <li>Modernisation des infrastructures</li>
//         <li>Développement du centre de formation</li>
//         <li>Accession en première division</li>
//         <li>Professionnalisation du club</li>
//       </ul>
      
//       <h2>Une équipe renouvelée</h2>
//       <p>Le nouveau bureau est composé de jeunes cadres dynamiques et d'anciens joueurs du club, garantissant une mixité d'expériences et d'idées.</p>
//     `,
//     category: 'club',
//     date: '11 Oct 2025',
//     author: 'Service Communication',
//     readTime: '4 min',
//     likes: 67,
//     comments: 18,
//     image: '/images/douane16.jpg',
//     tags: ['élection', 'président', 'nouvelle ère']
//   },
//   // Ajoutez les autres articles ici...
// ]

// const ArticlePage = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
  
//   const article = allArticles.find(a => a.id === parseInt(id))
  
//   if (!article) {
//     return (
//       <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-3xl font-bold text-custom-blue mb-4">Article non trouvé</h1>
//           <button 
//             onClick={() => navigate('/news')}
//             className="btn-primary"
//           >
//             Retour aux actualités
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4">
//         {/* Bouton retour */}
//         <button 
//           onClick={() => navigate('/news')}
//           className="flex items-center gap-2 text-custom-blue hover:text-blue-800 mb-8"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Retour aux actualités
//         </button>

//         {/* Article */}
//         <motion.article
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-lg overflow-hidden"
//         >
//           {/* Image principale */}
//           <div className="relative h-64 md:h-96">
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             <div className="absolute bottom-6 left-6 text-white">
//               <span className="px-3 py-1 bg-custom-red rounded-full text-sm font-medium mb-3 inline-block">
//                 {article.category === 'matches' && 'Match'}
//                 {article.category === 'transfers' && 'Transfert'}
//                 {article.category === 'club' && 'Club'}
//                 {article.category === 'youth' && 'Jeunes'}
//               </span>
//               <h1 className="text-3xl md:text-4xl font-bold">{article.title}</h1>
//             </div>
//           </div>

//           <div className="p-6 md:p-12">
//             {/* Métadonnées */}
//             <div className="flex flex-wrap gap-4 mb-8 text-gray-600">
//               <div className="flex items-center gap-2">
//                 <User className="w-5 h-5" />
//                 <span className="font-medium">{article.author}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-5 h-5" />
//                 <span>{article.date}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-5 h-5" />
//                 <span>{article.readTime} de lecture</span>
//               </div>
//             </div>

//             {/* Contenu */}
//             <div 
//               className="prose prose-lg max-w-none mb-12"
//               dangerouslySetInnerHTML={{ __html: article.content }}
//             />

//             {/* Tags */}
//             <div className="mb-12">
//               <h3 className="text-xl font-bold text-custom-blue mb-4">Tags</h3>
//               <div className="flex flex-wrap gap-2">
//                 {article.tags.map(tag => (
//                   <span 
//                     key={tag} 
//                     className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Interactions */}
//             <div className="flex flex-wrap gap-6 justify-between items-center pt-8 border-t">
//               <div className="flex items-center gap-6">
//                 <button className="flex items-center gap-2 text-gray-600 hover:text-custom-red transition">
//                   <Heart className="w-6 h-6" />
//                   <span className="font-medium">{article.likes}</span>
//                 </button>
//                 <button className="flex items-center gap-2 text-gray-600 hover:text-custom-blue transition">
//                   <Bookmark className="w-6 h-6" />
//                   <span className="font-medium">Sauvegarder</span>
//                 </button>
//               </div>

//               <div className="flex items-center gap-4">
//                 <span className="text-gray-600">Partager :</span>
//                 <button className="text-blue-600 hover:text-blue-800">
//                   <Facebook className="w-6 h-6" />
//                 </button>
//                 <button className="text-blue-400 hover:text-blue-600">
//                   <Twitter className="w-6 h-6" />
//                 </button>
//                 <button className="text-green-500 hover:text-green-700">
//                   <Whatsapp className="w-6 h-6" />
//                 </button>
//                 <button className="text-gray-600 hover:text-gray-800">
//                   <Share className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.article>

//         {/* Articles similaires */}
//         <section className="mt-16">
//           <h2 className="text-2xl font-bold text-custom-blue mb-8">
//             Articles similaires
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {allArticles
//               .filter(a => a.id !== article.id && a.category === article.category)
//               .slice(0, 3)
//               .map(similarArticle => (
//                 <div 
//                   key={similarArticle.id}
//                   className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
//                   onClick={() => navigate(`/article/${similarArticle.id}`)}
//                 >
//                   <div className="h-48 overflow-hidden">
//                     <img
//                       src={similarArticle.image}
//                       alt={similarArticle.title}
//                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="font-bold text-lg text-custom-blue mb-3 line-clamp-2">
//                       {similarArticle.title}
//                     </h3>
//                     <div className="flex items-center gap-4 text-sm text-gray-500">
//                       <span>{similarArticle.date}</span>
//                       <span>{similarArticle.readTime}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default ArticlePage



























































import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaArrowLeft as ArrowLeft,
  FaCalendar as Calendar,
  FaClock as Clock,
  FaUser as User,
  FaShareAlt as Share,
  FaHeart as Heart,
  FaBookmark as Bookmark,
  FaFacebook as Facebook,
  FaTwitter as Twitter,
  FaWhatsapp as Whatsapp,
  FaTag as Tag
} from 'react-icons/fa'

// Données des articles (à mettre dans un fichier séparé comme articlesData.js)
const allArticles = [
  {
    id: 1,
    title: "Large victoire 5-1 contre Economat des Armées",
    excerpt: "L'AS Douanes renoue avec la victoire après une série difficile, démontrant une offensive redoutable.",
    content: `
      <p>Après une défaite et un match nul, l'AS Douanes renoue avec la victoire en s'imposant largement face à l'AS Économat des Armées (5-1). L'équipe a fait preuve d'une belle offensive avec notamment un doublé d'Oumar et un triplé de Saleh.</p>
      
      <h2 class="text-2xl font-bold text-custom-blue mt-8 mb-4">Un début de match prometteur</h2>
      <p>Dès la 12ème minute, Oumar ouvrait le score sur un corner bien tiré par Mahamat. L'équipe a maintenu la pression et a doublé la mise à la 35ème minute grâce à une frappe magnifique de Saleh depuis l'entrée de la surface.</p>
      
      <div class="my-8 p-6 bg-blue-50 rounded-xl border-l-4 border-custom-blue">
        <p class="text-lg italic text-custom-blue">"Je suis fier de mes joueurs. Ils ont répondu présent après une série difficile. Cette victoire nous redonne confiance pour la suite du championnat"</p>
        <p class="mt-4 font-semibold">- Coach Abdoulaye</p>
      </div>
      
      <h2 class="text-2xl font-bold text-custom-blue mt-8 mb-4">Une seconde mi-temps maîtrisée</h2>
      <p>La seconde mi-temps a vu l'AS Douanes confirmer sa domination avec trois buts supplémentaires. Le gardien Ali Oumar a réalisé plusieurs arrêts décisifs pour préserver l'avantage de son équipe.</p>
      
      <h2 class="text-2xl font-bold text-custom-blue mt-8 mb-4">Les statistiques du match</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-custom-blue">62%</div>
          <div class="text-sm text-gray-600">Possession</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-custom-blue">18</div>
          <div class="text-sm text-gray-600">Tirs</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-custom-blue">8</div>
          <div class="text-sm text-gray-600">Tirs cadrés</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-custom-blue">5</div>
          <div class="text-sm text-gray-600">Corners</div>
        </div>
      </div>
      
      <p>Cette victoire permet à l'AS Douanes de remonter à la 2ème place du classement D2 et de se relancer dans la course à la promotion.</p>
    `,
    category: 'matches',
    date: '15 Déc 2025',
    author: 'Rédaction AS Douanes',
    readTime: '3 min',
    likes: 45,
    comments: 12,
    image: '/images/douane4.jpg',
    tags: ['victoire', 'offensive', 'championnat', 'buts', 'statistiques']
  },
  {
    id: 2,
    title: "Renouvellement du bureau exécutif",
    excerpt: "Élection de M. Abakar MADJIADOUMBE à la présidence lors de l'Assemblée générale.",
    content: `
      <p>L'Assemblée générale élective tenue à l'amphithéâtre de l'ENA de N'Djaména a marqué un tournant pour le club. Le nouveau bureau exécutif, mené par M. Abakar MADJIADOUMBE, promet une nouvelle dynamique.</p>
      
      <h2 class="text-2xl font-bold text-custom-blue mt-8 mb-4">Une élection historique</h2>
      <p>Plus de 200 membres du club se sont réunis pour élire le nouveau bureau exécutif. Après un scrutin serré, M. Abakar MADJIADOUMBE a été élu président avec 68% des voix.</p>
      
      <div class="my-8">
        <img src="/images/douanepresi.jpg" alt="M. Abakar MADJIADOUMBE" class="w-full max-w-md mx-auto rounded-xl shadow-lg" />
        <p class="text-center text-sm text-gray-500 mt-2">M. Abakar MADJIADOUMBE, nouveau président de l'AS Douanes</p>
      </div>
      
      <h2 class="text-2xl font-bold text-custom-blue mt-8 mb-4">Les nouveaux objectifs</h2>
      <p>Le nouveau président a présenté son plan d'action pour les trois prochaines années, avec comme priorités :</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Modernisation des infrastructures du stade</li>
        <li>Développement du centre de formation</li>
        <li>Accession en première division d'ici 2027</li>
        <li>Professionnalisation du club</li>
        <li>Augmentation des partenariats commerciaux</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-custom-blue mt-8 mb-4">Une équipe renouvelée</h2>
      <p>Le nouveau bureau est composé de jeunes cadres dynamiques et d'anciens joueurs du club, garantissant une mixité d'expériences et d'idées pour porter le club vers l'excellence.</p>
      
      <blockquote class="border-l-4 border-custom-red pl-6 my-8 italic text-lg">
        "Nous allons construire un club moderne, compétitif et ancré dans son territoire. L'AS Douanes doit redevenir une référence du football tchadien."
      </blockquote>
    `,
    category: 'club',
    date: '11 Oct 2025',
    author: 'Service Communication',
    readTime: '4 min',
    likes: 67,
    comments: 18,
    image: '/images/douane.jpg',
    tags: ['élection', 'président', 'nouvelle ère', 'gouvernance', 'projet']
  },
  // Ajoutez les autres articles ici...
]

const ArticlePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const article = allArticles.find(a => a.id === parseInt(id))
  
  if (!article) {
    return (
      <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-custom-blue mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
          <Link 
            to="/news"
            className="btn-primary"
          >
            Retour aux actualités
          </Link>
        </div>
      </div>
    )
  }

  // Articles similaires (même catégorie)
  const similarArticles = allArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3)

  return (
    <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Bouton retour */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-custom-blue hover:text-blue-800 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Retour aux actualités
        </button>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
        >
          {/* Image principale */}
          <div className="relative h-64 md:h-96">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-custom-red rounded-full text-sm font-medium">
                  {article.category === 'matches' && 'Match'}
                  {article.category === 'transfers' && 'Transfert'}
                  {article.category === 'club' && 'Club'}
                  {article.category === 'youth' && 'Jeunes'}
                </span>
                <span className="text-sm opacity-90">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {article.date}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} de lecture
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-12">
            {/* Contenu */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mb-12 pt-8 border-t">
              <h3 className="text-xl font-bold text-custom-blue mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Mots-clés
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <Link 
                    key={tag}
                    to="/news"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition text-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      // Ici vous pourriez filtrer par tag
                      navigate('/news')
                    }}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Interactions */}
            <div className="flex flex-wrap gap-6 justify-between items-center pt-8 border-t">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-600 hover:text-custom-red transition group">
                  <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{article.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-custom-blue transition group">
                  <Bookmark className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Sauvegarder</span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-600">Partager :</span>
                <button className="text-blue-600 hover:text-blue-800 transition">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="text-blue-400 hover:text-blue-600 transition">
                  <Twitter className="w-6 h-6" />
                </button>
                <button className="text-green-500 hover:text-green-700 transition">
                  <Whatsapp className="w-6 h-6" />
                </button>
                <button className="text-gray-600 hover:text-gray-800 transition">
                  <Share className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Articles similaires */}
        {similarArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-custom-blue mb-8">
              Articles similaires
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {similarArticles.map(similarArticle => (
                <motion.article
                  key={similarArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Link to={`/article/${similarArticle.id}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={similarArticle.image}
                        alt={similarArticle.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">
                          {similarArticle.date}
                        </span>
                        <span className="text-sm text-gray-500">
                          {similarArticle.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-custom-blue mb-3 line-clamp-2 hover:text-blue-800 transition">
                        {similarArticle.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {similarArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {similarArticle.author}
                        </span>
                        <span className="text-custom-blue text-sm font-medium">
                          Lire →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            
            {/* Bouton vers toutes les actualités */}
            <div className="text-center mt-10">
              <Link 
                to="/news"
                className="inline-flex items-center gap-2 text-custom-blue hover:text-blue-800 font-semibold"
              >
                Voir toutes les actualités
                <span className="text-xl">→</span>
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default ArticlePage