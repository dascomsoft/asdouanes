import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Trophy, Target, Star, Award, Shield, Zap, Heart, Building, UserCheck, Briefcase, Mail, Phone } from 'lucide-react'

const TeamPage = () => {
  const [activeCategory, setActiveCategory] = useState('executive')
  
  // Données du bureau exécutif - Classées par ordre hiérarchique
  const executiveBoard = [
    // Direction Générale
    { id: 1, name: "Général OUSMANE BRAHIM DJOUMA", position: "Président d'honneur/DG AS DOUANES", image: "/images/dgasdouane.jpeg", category: "direction" },
    { id: 2, name: "NELDJI ISMAËL KONDOL", position: "Vice-Président/DG Adjoint des DOUANES", image: "/images/dgadjoint.jpeg", category: "direction" },
    
    // Présidence
    { id: 3, name: "ABAKAR MADJIADOUMBE", position: "Président", image: "/images/douanepresi.jpg", category: "direction" },
    { id: 4, name: "IDRISS ABAKAR ABDELKERIM", position: "1er Vice Président", image: "/images/vicepasdouane.jpeg", category: "direction" },
    { id: 5, name: "AHMAT ALHADJ ABDERAMANE", position: "2ème Vice Président", image: "/images/2vicep.jpeg", category: "direction" },
    
    // Secrétariat
    { id: 6, name: "MAHAMAT MOUSSA MAHAMAT SALEH", position: "Secrétaire General", image: "/images/executive6.jpg", category: "secretariat" },
    { id: 7, name: "DINGAM-HONDE MBEURNODJI PALBO", position: "Secrétaire Général Adjoint", image: "/images/agadj.jpeg", category: "secretariat" },
    
    // Trésorerie
    { id: 8, name: "MAHMOUD ABAKAR DAOUD", position: "Trésorier Général", image: "/images/tresorg.jpeg", category: "tresorerie" },
    { id: 9, name: "Mme ANATOU TILEM BIENVENUE", position: "Trésorière Adjointe", image: "/images/tresorieradjoint.jpeg", category: "tresorerie" },
    
    // Sport
    { id: 10, name: "TOLOUBAYE NDOUBA PATRICE alias PETIT FOU", position: "Directeur Sportif", image: "/images/dsjpeg", category: "sport" },
    { id: 11, name: "SENOUSSI HASSAN", position: "Directeur Sportif Adjoint", image: "/images/executive11.jpg", category: "sport" },
    
    // Communication
    { id: 12, name: "ERICK GAMO MARANTI alias Moriero", position: "Chef des Services Communication et Publicité", image: "/images/chefc.jpeg", category: "communication" },
    { id: 13, name: "BARKAÏ AMBOU CHIDI", position: "Chargé de Communication", image: "/images/chargeco.jpeg", category: "communication" },
    { id: 14, name: "ROLAND DINGAMADJI", position: "Chargé de Communication rattaché au DGDDI", image: "/images/chc.jpeg", category: "communication" },
    
    // Relations Extérieures
    { id: 15, name: "DEOUNOUDJI NAHARI FRÉDÉRIC", position: "Secrétaire Chargé des Relations Extérieures", image: "/images/sgrelationext.jpeg", category: "relations" },
    
    // Matériels & Logistique
    { id: 16, name: "NASSOUR OUMAR BACHAR", position: "Chargé de matériels", image: "/images/executive15.jpg", category: "materiels" },
    { id: 17, name: "NATHAN GUESNA BENJAMIN", position: "Chargé des Matériels Adjoint", image: "/images/chargem.jpeg", category: "materiels" },
    
    // Médical
    { id: 18, name: "RAMADAN GRASSOU SAMUEL", position: "Soigneur (Kiné)", image: "/images/kine.jpeg", category: "medical" },
  ]

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
    { id: 1, name: "Coach BALGUÉ BANI dit OUSTA", role: "Entraîneur Principal", image: "/images/coac.jpeg", experience: "5 ans" },
    { id: 2, name: "BRAHIM HASSANA", role: "Entraîneur Adjoint", image: "/images/coacha.jpeg", experience: "3 ans" },
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

  // Fonction pour grouper les membres par catégorie
  const groupByCategory = (members) => {
    const categories = {
      direction: members.filter(m => m.category === "direction"),
      secretariat: members.filter(m => m.category === "secretariat"),
      tresorerie: members.filter(m => m.category === "tresorerie"),
      sport: members.filter(m => m.category === "sport"),
      communication: members.filter(m => m.category === "communication"),
      relations: members.filter(m => m.category === "relations"),
      materiels: members.filter(m => m.category === "materiels"),
      medical: members.filter(m => m.category === "medical"),
    }
    return categories
  }

  const groupedExecutive = groupByCategory(executiveBoard)

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
            Découvrez l'ensemble de notre structure : du bureau exécutif aux joueurs, 
            en passant par le staff technique et les jeunes talents.
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
            {['executive', 'players', 'staff', 'youth'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category
                    ? 'bg-custom-blue text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category === 'executive' && <><Building className="w-4 h-4" /> Bureau Exécutif</>}
                {category === 'players' && <><Users className="w-4 h-4" /> Joueurs</>}
                {category === 'staff' && <><Briefcase className="w-4 h-4" /> Staff Technique</>}
                {category === 'youth' && <><Heart className="w-4 h-4" /> Jeunes Talents</>}
              </button>
            ))}
          </div>

          {/* Contenu selon la catégorie active */}
          <div className="mt-8">
            {/* SECTION BUREAU EXÉCUTIF */}
            {activeCategory === 'executive' && (
              <>
                {/* Section Direction */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-custom-blue flex items-center gap-3">
                      <Building className="w-7 h-7" />
                      Direction Générale & Présidence
                    </h2>
                    <span className="px-3 py-1 bg-custom-blue text-white rounded-full text-sm">
                      {groupedExecutive.direction.length} membres
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedExecutive.direction.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center"
                      >
                        <div className="p-6">
                          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-custom-blue/20">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-lg font-bold text-custom-blue mb-2">
                            {member.name}
                          </h3>
                          <div className="flex items-center justify-center gap-2 text-custom-red font-medium mb-4">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-center">{member.position}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Section Secrétariat */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-custom-blue flex items-center gap-3">
                      <UserCheck className="w-7 h-7" />
                      Secrétariat
                    </h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {groupedExecutive.secretariat.length} membres
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedExecutive.secretariat.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center"
                      >
                        <div className="p-6">
                          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-custom-blue mb-2">
                            {member.name}
                          </h3>
                          <p className="text-sm text-custom-red font-medium">
                            {member.position}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Section Trésorerie */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-custom-blue flex items-center gap-3">
                      <Award className="w-7 h-7" />
                      Trésorerie
                    </h2>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {groupedExecutive.tresorerie.length} membres
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedExecutive.tresorerie.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center"
                      >
                        <div className="p-6">
                          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-green-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-custom-blue mb-2">
                            {member.name}
                          </h3>
                          <p className="text-sm text-custom-red font-medium">
                            {member.position}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Section Sport */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-custom-blue flex items-center gap-3">
                      <Zap className="w-7 h-7" />
                      Direction Sportive
                    </h2>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                      {groupedExecutive.sport.length} membres
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedExecutive.sport.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center"
                      >
                        <div className="p-6">
                          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-orange-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-custom-blue mb-2">
                            {member.name}
                          </h3>
                          <p className="text-sm text-custom-red font-medium">
                            {member.position}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Section Communication */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-custom-blue flex items-center gap-3">
                      <Target className="w-7 h-7" />
                      Communication
                    </h2>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {groupedExecutive.communication.length} membres
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedExecutive.communication.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center"
                      >
                        <div className="p-6">
                          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-purple-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-custom-blue mb-2">
                            {member.name}
                          </h3>
                          <p className="text-sm text-custom-red font-medium">
                            {member.position}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Section Relations Extérieures */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-custom-blue flex items-center gap-3">
                      <Mail className="w-7 h-7" />
                      Relations Extérieures
                    </h2>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {groupedExecutive.relations.length} membre{groupedExecutive.relations.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedExecutive.relations.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center"
                      >
                        <div className="p-6">
                          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-indigo-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-custom-blue mb-2">
                            {member.name}
                          </h3>
                          <p className="text-sm text-custom-red font-medium">
                            {member.position}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Section Matériels */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-custom-blue flex items-center gap-3">
                      <Shield className="w-7 h-7" />
                      Matériels & Logistique
                    </h2>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                      {groupedExecutive.materiels.length} membres
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedExecutive.materiels.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center"
                      >
                        <div className="p-6">
                          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-teal-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-custom-blue mb-2">
                            {member.name}
                          </h3>
                          <p className="text-sm text-custom-red font-medium">
                            {member.position}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Section Médical */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-custom-blue flex items-center gap-3">
                      <Heart className="w-7 h-7" />
                      Service Médical
                    </h2>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      {groupedExecutive.medical.length} membre{groupedExecutive.medical.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedExecutive.medical.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center"
                      >
                        <div className="p-6">
                          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-red-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-custom-blue mb-2">
                            {member.name}
                          </h3>
                          <p className="text-sm text-custom-red font-medium">
                            {member.position}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* SECTION JOUEURS */}
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
                        className="bg-white rounded-xl shadow-lg overflow-hidden group"
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
                        className="bg-white rounded-xl shadow-lg overflow-hidden group"
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
                        className="bg-white rounded-xl shadow-lg overflow-hidden group"
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
                        className="bg-white rounded-xl shadow-lg overflow-hidden group"
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

            {/* SECTION STAFF TECHNIQUE */}
            {activeCategory === 'staff' && (
              <>
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-custom-blue mb-4">
                    Staff Technique
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    L'équipe d'encadrement technique qui accompagne nos joueurs au quotidien
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {staff.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden text-center"
                    >
                      <div className="p-6">
                        <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-custom-blue/30">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-custom-blue mb-2">
                          {member.name}
                        </h3>
                        <p className="text-gray-600 mb-4 font-medium">{member.role}</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                          <Award className="w-4 h-4 text-custom-red" />
                          <span className="font-medium">{member.experience} d'expérience</span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          {member.role === "Entraîneur Principal" && (
                            <>
                              <div className="flex items-center justify-center gap-1">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">UEFA Pro</span>
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Tactique</span>
                              </div>
                              <div className="text-gray-500">Spécialiste en stratégie offensive</div>
                            </>
                          )}
                          {member.role === "Entraîneur Adjoint" && (
                            <>
                              <div className="flex items-center justify-center gap-1">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Entraîneur</span>
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Développement</span>
                              </div>
                              <div className="text-gray-500">Spécialiste en préparation physique</div>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {/* SECTION JEUNES TALENTS */}
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
                      className="bg-white rounded-xl shadow-lg overflow-hidden text-center"
                    >
                      <div className="p-6">
                        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-custom-blue/20">
                          <img
                            src={player.image}
                            alt={player.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
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
                  <button className="bg-custom-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
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
          <div className="bg-gradient-to-r from-custom-blue to-blue-800 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Notre Philosophie
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