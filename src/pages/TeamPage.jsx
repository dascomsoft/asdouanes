import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Trophy, Target, Star, Award, Shield, Zap, Heart } from 'lucide-react'

const TeamPage = () => {
  const [activeCategory, setActiveCategory] = useState('players')
  
  // Données des joueurs
  const players = [
    { id: 1, name: "Ali Oumar", number: 1, position: "Gardien", image: "/images/douane3.jpg", age: 24, matches: 15 },
    { id: 2, name: "Mahamat Issa", number: 4, position: "Défenseur", image: "/images/douane4.jpg", age: 26, matches: 18 },
    { id: 3, name: "Abdel Kader", number: 5, position: "Défenseur", image: "/images/douane5.jpg", age: 25, matches: 16 },
    { id: 4, name: "Hassan Youssouf", number: 6, position: "Milieu", image: "/images/douane6.jpg", age: 23, matches: 20 },
    { id: 5, name: "Moussa Adam", number: 8, position: "Milieu", image: "/images/douane7.jpg", age: 27, matches: 22 },
    { id: 6, name: "Brahim Ali", number: 10, position: "Attaquant", image: "/images/douane8.jpg", age: 28, matches: 19 },
    { id: 7, name: "Saleh Daoud", number: 11, position: "Attaquant", image: "/images/douane9.jpg", age: 24, matches: 17 },
    { id: 8, name: "Oumar Djibril", number: 9, position: "Attaquant", image: "/images/douane10.jpg", age: 26, matches: 21 },
    { id: 9, name: "Ahmed Mahamat", number: 3, position: "Défenseur", image: "/images/douane11.jpg", age: 22, matches: 12 },
    { id: 10, name: "Youssouf Haroun", number: 7, position: "Milieu", image: "/images/douane12.jpg", age: 25, matches: 18 },
    { id: 11, name: "Mahamat Karim", number: 14, position: "Milieu", image: "/images/douane13.jpg", age: 23, matches: 14 },
    { id: 12, name: "Ibrahim Djimet", number: 17, position: "Attaquant", image: "/images/douane14.jpg", age: 24, matches: 16 },
  ]

  // Données du staff technique
  const staff = [
    { id: 1, name: "Coach Abdoulaye", role: "Entraîneur Principal", image: "/images/douanecoach.jpg", experience: "10 ans" },
    { id: 2, name: "Adoum Ousman", role: "Entraîneur Adjoint", image: "/images/douane15.jpg", experience: "8 ans" },
    { id: 3, name: "Mahamat Yacoub", role: "Préparateur Physique", image: "/images/douane16.jpg", experience: "6 ans" },
    { id: 4, name: "Dr. Ali Haroun", role: "Médecin du Club", image: "/images/douane17.jpg", experience: "12 ans" },
    { id: 5, name: "Oumar Brahim", role: "Kinésithérapeute", image: "/images/douane18.jpg", experience: "5 ans" },
  ]

  // Données des jeunes
  const youthPlayers = [
    { id: 1, name: "Yacoub Ali", age: 18, position: "Attaquant", potential: "Élevé", image: "/images/douane1.jpg" },
    { id: 2, name: "Khalil Mahamat", age: 17, position: "Milieu", potential: "Très élevé", image: "/images/douane2.jpg" },
    { id: 3, name: "Souleyman Adam", age: 19, position: "Défenseur", potential: "Moyen", image: "/images/douane3.jpg" },
    { id: 4, name: "Djibril Youssouf", age: 18, position: "Gardien", potential: "Élevé", image: "/images/douane4.jpg" },
  ]

  // Statistiques de l'équipe
  const teamStats = [
    { label: "Matchs joués", value: "18", icon: <Trophy className="w-5 h-5" /> },
    { label: "Victoires", value: "12", icon: <Star className="w-5 h-5" /> },
    { label: "Buts marqués", value: "38", icon: <Zap className="w-5 h-5" /> },
    { label: "Jeunes formés", value: "24", icon: <Users className="w-5 h-5" /> },
  ]

  // Positions avec leurs joueurs
  const positions = {
    gardiens: players.filter(p => p.position === "Gardien"),
    defenseurs: players.filter(p => p.position === "Défenseur"),
    milieux: players.filter(p => p.position === "Milieu"),
    attaquants: players.filter(p => p.position === "Attaquant"),
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
            className="text-4xl md:text-5xl font-bold text-custom-blue mb-6"
          >
            Notre Équipe
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les joueurs, le staff technique et les jeunes talents 
            qui font la force de l'AS Douanes.
          </p>
        </div>

        {/* Statistiques de l'équipe */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="flex justify-center text-custom-red mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-custom-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Navigation par catégories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['players', 'staff', 'youth'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-custom-blue text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category === 'players' && 'Joueurs'}
                {category === 'staff' && 'Staff Technique'}
                {category === 'youth' && 'Jeunes Talents'}
              </button>
            ))}
          </div>

          {/* Contenu selon la catégorie active */}
          <div className="mt-8">
            {activeCategory === 'players' && (
              <>
                {/* Navigation par position */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                  {Object.keys(positions).map((position) => (
                    <a
                      key={position}
                      href={`#${position}`}
                      className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                      {position === 'gardiens' && 'Gardiens'}
                      {position === 'defenseurs' && 'Défenseurs'}
                      {position === 'milieux' && 'Milieux'}
                      {position === 'attaquants' && 'Attaquants'}
                    </a>
                  ))}
                </div>

                {/* Gardiens */}
                <div id="gardiens" className="mb-16">
                  <h2 className="text-2xl font-bold text-custom-blue mb-8 flex items-center gap-3">
                    <Shield className="w-7 h-7" />
                    Gardiens de But
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {positions.gardiens.map((player, index) => (
                      <motion.div
                        key={player.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="card overflow-hidden group"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={player.image}
                            alt={player.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-custom-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                            {player.number}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <h3 className="text-xl font-bold text-white">{player.name}</h3>
                            <p className="text-gray-200">{player.position}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-sm text-gray-500">Âge</div>
                              <div className="font-bold text-custom-blue">{player.age} ans</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-gray-500">Matchs</div>
                              <div className="font-bold text-custom-blue">{player.matches}</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              Titulaire
                            </span>
                            <button className="text-custom-red hover:text-red-700 transition">
                              Voir profil
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Défenseurs */}
                <div id="defenseurs" className="mb-16">
                  <h2 className="text-2xl font-bold text-custom-blue mb-8 flex items-center gap-3">
                    <Shield className="w-7 h-7" />
                    Défenseurs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {positions.defenseurs.map((player, index) => (
                      <motion.div
                        key={player.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="card overflow-hidden group"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={player.image}
                            alt={player.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-custom-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                            {player.number}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <h3 className="text-xl font-bold text-white">{player.name}</h3>
                            <p className="text-gray-200">{player.position}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-sm text-gray-500">Âge</div>
                              <div className="font-bold text-custom-blue">{player.age} ans</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-gray-500">Matchs</div>
                              <div className="font-bold text-custom-blue">{player.matches}</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              Défense centrale
                            </span>
                            <button className="text-custom-red hover:text-red-700 transition">
                              Voir profil
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Milieux */}
                <div id="milieux" className="mb-16">
                  <h2 className="text-2xl font-bold text-custom-blue mb-8 flex items-center gap-3">
                    <Zap className="w-7 h-7" />
                    Milieux de Terrain
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {positions.milieux.map((player, index) => (
                      <motion.div
                        key={player.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="card overflow-hidden group"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={player.image}
                            alt={player.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-custom-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                            {player.number}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <h3 className="text-xl font-bold text-white">{player.name}</h3>
                            <p className="text-gray-200">{player.position}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-sm text-gray-500">Âge</div>
                              <div className="font-bold text-custom-blue">{player.age} ans</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-gray-500">Matchs</div>
                              <div className="font-bold text-custom-blue">{player.matches}</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              Milieu offensif
                            </span>
                            <button className="text-custom-red hover:text-red-700 transition">
                              Voir profil
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Attaquants */}
                <div id="attaquants">
                  <h2 className="text-2xl font-bold text-custom-blue mb-8 flex items-center gap-3">
                    <Target className="w-7 h-7" />
                    Attaquants
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {positions.attaquants.map((player, index) => (
                      <motion.div
                        key={player.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="card overflow-hidden group"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={player.image}
                            alt={player.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-custom-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                            {player.number}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <h3 className="text-xl font-bold text-white">{player.name}</h3>
                            <p className="text-gray-200">{player.position}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-sm text-gray-500">Âge</div>
                              <div className="font-bold text-custom-blue">{player.age} ans</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-gray-500">Matchs</div>
                              <div className="font-bold text-custom-blue">{player.matches}</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                              Avant-centre
                            </span>
                            <button className="text-custom-red hover:text-red-700 transition">
                              Voir profil
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeCategory === 'staff' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {staff.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card text-center group"
                  >
                    <div className="relative h-56 overflow-hidden rounded-t-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-custom-blue mb-2">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{member.role}</p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                        <Award className="w-4 h-4" />
                        <span>{member.experience} d'expérience</span>
                      </div>
                      <div className="space-y-2">
                        {member.role === "Entraîneur Principal" && (
                          <>
                            <div className="text-sm text-gray-600">Diplôme UEFA Pro</div>
                            <div className="text-sm text-gray-600">Spécialiste tactique</div>
                          </>
                        )}
                        {member.role === "Médecin du Club" && (
                          <>
                            <div className="text-sm text-gray-600">Spécialiste traumatologie</div>
                            <div className="text-sm text-gray-600">Ancien médecin national</div>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeCategory === 'youth' && (
              <>
                <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 mb-12">
                  <h2 className="text-2xl font-bold text-custom-blue mb-6 text-center">
                    <Heart className="w-7 h-7 inline mr-2" />
                    Centre de Formation
                  </h2>
                  <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Notre centre de formation a pour mission de développer les jeunes talents 
                    tchadiens et de les préparer à une carrière professionnelle.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-custom-blue mb-4">Objectifs</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-custom-red" />
                          Développement technique et tactique
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-custom-red" />
                          Scolarité et formation académique
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-custom-red" />
                          Préparation physique adaptée
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-custom-red" />
                          Insertion professionnelle
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-custom-blue mb-4">Programme</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>Entraînements quotidiens</li>
                        <li>Suivi scolaire personnalisé</li>
                        <li>Nutrition et santé</li>
                        <li>Matchs de championnat jeunes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {youthPlayers.map((player, index) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="card text-center"
                    >
                      <div className="h-48 overflow-hidden rounded-t-xl">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-custom-blue mb-1">
                          {player.name}
                        </h3>
                        <div className="flex justify-center gap-4 text-sm text-gray-500 mb-3">
                          <span>{player.age} ans</span>
                          <span>{player.position}</span>
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          player.potential === 'Très élevé' ? 'bg-green-100 text-green-800' :
                          player.potential === 'Élevé' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          Potentiel: {player.potential}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button className="btn-primary inline-flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Rejoindre notre centre de formation
                  </button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Section Philosophie de l'équipe */}
        <section className="mt-20">
          <div className="bg-custom-blue text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Philosophie de l'Équipe
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Style de Jeu</h3>
                <p className="text-gray-200">
                  Football offensif, pressing haut, jeu collectif et transitions rapides.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Valeurs</h3>
                <p className="text-gray-200">
                  Respect, discipline, solidarité et engagement total.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Objectifs</h3>
                <p className="text-gray-200">
                  Accession en D1, développement des jeunes et rayonnement national.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TeamPage