import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaCalendar as Calendar,
  FaClock as Clock,
  FaMapMarkerAlt as MapPin,
  FaTrophy as Trophy,
  FaStar as Star,
  FaChartLine as TrendingUp,
  FaUsers as Users,
  FaAward as Award,
  FaChevronRight as ChevronRight
} from 'react-icons/fa'
import { matches, standings } from '../data/matchesData'

const MatchesPage = () => {
  const [activeView, setActiveView] = useState('recent')
  
  // Filtrer les matchs par statut
  const recentMatches = matches.filter(match => match.status === 'completed')
  const upcomingMatches = matches.filter(match => match.status === 'upcoming')
  
  // Calculer les statistiques réelles
  const calculateStats = () => {
    const completedMatches = matches.filter(m => m.status === 'completed')
    let goalsFor = 0
    let goalsAgainst = 0
    let wins = 0
    let draws = 0
    let losses = 0
    
    completedMatches.forEach(match => {
      const [forGoals, againstGoals] = match.result.split(' - ').map(Number)
      goalsFor += forGoals
      goalsAgainst += againstGoals
      
      if (forGoals > againstGoals) wins++
      else if (forGoals === againstGoals) draws++
      else losses++
    })
    
    // Calculer le pourcentage de victoires
    const winPercentage = completedMatches.length > 0 
      ? Math.round((wins / completedMatches.length) * 100) 
      : 0
    
    return {
      goalsFor,
      goalsAgainst,
      wins,
      draws,
      losses,
      winPercentage
    }
  }
  
  const stats = calculateStats()
  
  // Statistiques de l'équipe
  const teamStats = [
    { 
      label: "Buts marqués", 
      value: stats.goalsFor.toString(), 
      change: "+3", 
      icon: <Star className="w-5 h-5" /> 
    },
    { 
      label: "Buts encaissés", 
      value: stats.goalsAgainst.toString(), 
      change: "+1", 
      icon: <TrendingUp className="w-5 h-5" /> 
    },
    { 
      label: "Victoires", 
      value: stats.wins.toString(), 
      change: "+1", 
      icon: <Trophy className="w-5 h-5" /> 
    },
    { 
      label: "Forme actuelle", 
      value: `${stats.winPercentage}%`, 
      change: "+25%", 
      icon: <Award className="w-5 h-5" /> 
    }
  ]

  // Calculer le classement avec les vraies données
  const calculateRealStandings = () => {
    // Simuler un calcul de classement basé sur les matchs joués
    const teams = {}
    
    matches.forEach(match => {
      if (match.status === 'completed' && match.competition.includes('D2')) {
        const [homeScore, awayScore] = match.result.split(' - ').map(Number)
        
        // Initialiser l'équipe à domicile
        if (!teams[match.homeTeam]) {
          teams[match.homeTeam] = {
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
          }
        }
        
        // Initialiser l'équipe à l'extérieur
        if (!teams[match.awayTeam]) {
          teams[match.awayTeam] = {
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
          }
        }
        
        // Mettre à jour les statistiques
        teams[match.homeTeam].played++
        teams[match.awayTeam].played++
        teams[match.homeTeam].goalsFor += homeScore
        teams[match.homeTeam].goalsAgainst += awayScore
        teams[match.awayTeam].goalsFor += awayScore
        teams[match.awayTeam].goalsAgainst += homeScore
        
        if (homeScore > awayScore) {
          teams[match.homeTeam].won++
          teams[match.homeTeam].points += 3
          teams[match.awayTeam].lost++
        } else if (homeScore === awayScore) {
          teams[match.homeTeam].drawn++
          teams[match.homeTeam].points += 1
          teams[match.awayTeam].drawn++
          teams[match.awayTeam].points += 1
        } else {
          teams[match.homeTeam].lost++
          teams[match.awayTeam].won++
          teams[match.awayTeam].points += 3
        }
      }
    })
    
    // Convertir en tableau et trier par points
    const standingsArray = Object.entries(teams).map(([team, stats], index) => ({
      position: index + 1,
      team,
      played: stats.played,
      won: stats.won,
      drawn: stats.drawn,
      lost: stats.lost,
      goalsFor: stats.goalsFor,
      goalsAgainst: stats.goalsAgainst,
      points: stats.points,
      form: ['W', 'L', 'D', 'W'].slice(0, Math.min(stats.played, 4)) // Simuler la forme
    }))
    
    // Trier par points (décroissant)
    return standingsArray.sort((a, b) => b.points - a.points)
  }
  
  const realStandings = calculateRealStandings()

  return (
    <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section avec dernier résultat */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-green-100 to-blue-100 px-6 py-2 rounded-full mb-4">
              <span className="font-bold text-green-800">🎉 DERNIER RÉSULTAT</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-custom-blue mb-6"
          >
            Calendrier & Résultats
          </motion.h1>
          
          {/* Dernier résultat en vedette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 mb-8 border-2 border-green-200"
          >
            <div className="text-center mb-4">
              <div className="text-sm text-gray-500 mb-2">7 Février 2026 • Championnat D2</div>
              <div className="text-xl font-bold text-custom-blue mb-6">Derby de N'Djaména</div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-center flex-1">
                  <div className="font-bold text-2xl mb-2 text-custom-blue">AS Douanes</div>
                  <div className="text-5xl font-bold text-green-600">3</div>
                  <div className="mt-2 text-sm text-gray-600">Victoire à domicile</div>
                </div>
                
                <div className="text-3xl font-bold text-gray-400 mx-4">VS</div>
                
                <div className="text-center flex-1">
                  <div className="font-bold text-2xl mb-2 text-gray-700">AS Police</div>
                  <div className="text-5xl font-bold text-gray-700">1</div>
                  <div className="mt-2 text-sm text-gray-600">Défaite à l'extérieur</div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">📝 Résumé du match :</h4>
                <p className="text-gray-700">
                  <strong>Mi-temps : 1-1</strong> - Les Douaniers ouvrent le score à la 25e minute mais l'AS Police égalise avant la pause.
                  <br/>
                  <strong>Seconde mi-temps :</strong> L'AS Douanes montre sa supériorité en inscrivant deux buts (65e et 85e minutes) pour s'imposer 3-1.
                </p>
              </div>
            </div>
          </motion.div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez tous les matchs de l'AS Douanes en championnat D2 et autres compétitions
          </p>
        </div>

        {/* Statistiques rapides */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-custom-red">
                    {stat.icon}
                  </div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    stat.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {stat.change}
                  </span>
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

        {/* Navigation des vues */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveView('recent')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeView === 'recent'
                  ? 'bg-custom-blue text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Trophy className="w-5 h-5" />
              Derniers matchs
            </button>
          </div>

          {/* Contenu selon la vue active */}
          <div className="mt-8">
            {activeView === 'recent' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-custom-blue mb-6">
                  Derniers Résultats
                </h2>
                <div className="space-y-6">
                  {recentMatches.map((match, index) => (
                    <motion.div
                      key={match.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                        match.id === 1 ? 'border-2 border-green-200' : ''
                      }`}
                    >
                      <div className="p-6">
                        {/* Badge spécial pour la dernière victoire */}
                        {match.id === 1 && (
                          <div className="mb-4">
                            {/* <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-4 py-2 rounded-full font-bold">
                              <Trophy className="w-4 h-4" />
                              DERNIÈRE VICTOIRE
                            </span> */}
                          </div>
                        )}
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <Trophy className="w-5 h-5 text-custom-red" />
                              <span className="font-semibold text-custom-blue">{match.competition}</span>
                            </div>
                            <div className="text-gray-600">{match.date}</div>
                          </div>
                          <div className={`px-4 py-2 rounded-full font-bold text-lg ${
                            match.result && match.result.split(' - ')[0] > match.result.split(' - ')[1] 
                              ? 'bg-green-100 text-green-800'
                              : match.result && match.result.split(' - ')[0] === match.result.split(' - ')[1]
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {match.result}
                          </div>
                        </div>

                        {/* Score détaillé */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-center flex-1">
                            <div className="font-bold text-xl mb-2">{match.homeTeam}</div>
                            <div className={`text-4xl font-bold ${
                              match.result && match.result.split(' - ')[0] > match.result.split(' - ')[1]
                                ? 'text-custom-blue'
                                : 'text-gray-700'
                            }`}>
                              {match.result && match.result.split(' - ')[0]}
                            </div>
                          </div>

                          <div className="text-3xl font-bold text-gray-400 mx-4">-</div>

                          <div className="text-center flex-1">
                            <div className="font-bold text-xl mb-2">{match.awayTeam}</div>
                            <div className="text-4xl font-bold text-gray-700">
                              {match.result && match.result.split(' - ')[1]}
                            </div>
                          </div>
                        </div>

                        {/* Match Info */}
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-5 h-5" />
                            <span>{match.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-5 h-5" />
                            <span>{match.venue}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="font-bold text-gray-700 mb-3">Commentaire :</h4>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <p className="text-blue-800">{match.highlight}</p>
                          </div>
                        </div>




                        {/* Résumé détaillé spécial pour AS Police */}
                        {/* {match.id === 1 && (
                          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-100">
                            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <span className="text-green-600">🏆</span>
                              Résumé détaillé du derby
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold">
                                  1
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800">Première mi-temps (25')</div>
                                  <div className="text-gray-600">Ouverture du score par l'AS Douanes après une belle action collective</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold">
                                  2
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800">Égalisation (35')</div>
                                  <div className="text-gray-600">AS Police profite d'une erreur défensive pour égaliser juste avant la pause</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold">
                                  3
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800">Seconde mi-temps (65')</div>
                                  <div className="text-gray-600">Les Douaniers reprennent l'avantage sur un coup franc bien exécuté</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold">
                                  4
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800">But du break (85')</div>
                                  <div className="text-gray-600">Troisième but douanier sur contre-attaque rapide pour sceller la victoire</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )} */}

                        <div className="flex gap-4">
                          <button className="flex-1 btn-secondary">
                            Voir les stats
                          </button>
                          <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                            Photos du match
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Calendrier complet */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-custom-blue mb-8">
            Calendrier complet de la saison
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="space-y-4">
              {matches.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border-b last:border-0 ${
                    match.id === 1 ? 'bg-green-50 hover:bg-green-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Date</div>
                      <div className={`font-bold ${
                        match.id === 1 ? 'text-green-700' : 'text-custom-blue'
                      }`}>
                        {match.date}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">
                        {match.homeTeam === 'AS Douanes' ? (
                          <span className="text-custom-blue font-bold">AS Douanes</span>
                        ) : (
                          match.homeTeam
                        )} 
                        vs 
                        {match.awayTeam === 'AS Douanes' ? (
                          <span className="text-custom-blue font-bold"> AS Douanes</span>
                        ) : (
                          ` ${match.awayTeam}`
                        )}
                      </div>
                      <div className="text-sm text-gray-600">{match.competition}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    {match.result ? (
                      <div className={`font-bold text-lg ${
                        match.result.split(' - ')[0] > match.result.split(' - ')[1]
                          ? match.homeTeam === 'AS Douanes' || match.awayTeam === 'AS Douanes'
                            ? 'text-green-600'
                            : 'text-gray-600'
                          : match.result.split(' - ')[0] === match.result.split(' - ')[1]
                          ? 'text-yellow-600'
                          : match.homeTeam === 'AS Douanes' || match.awayTeam === 'AS Douanes'
                            ? 'text-red-600'
                            : 'text-gray-600'
                      }`}>
                        {match.result}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{match.time}</span>
                      </div>
                    )}
                    <div className="text-sm text-gray-500">{match.venue}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MatchesPage