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
      change: "+0", 
      icon: <Star className="w-5 h-5" /> 
    },
    { 
      label: "Buts encaissés", 
      value: stats.goalsAgainst.toString(), 
      change: "+0", 
      icon: <TrendingUp className="w-5 h-5" /> 
    },
    { 
      label: "Victoires", 
      value: stats.wins.toString(), 
      change: "+0", 
      icon: <Trophy className="w-5 h-5" /> 
    },
    { 
      label: "Forme actuelle", 
      value: `${stats.winPercentage}%`, 
      change: "+0%", 
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-custom-blue mb-6"
          >
            Calendrier & Résultats
          </motion.h1>
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
            <button
              onClick={() => setActiveView('standings')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeView === 'standings'
                  ? 'bg-custom-blue text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              Classement
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
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                      <div className="p-6">
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

            {activeView === 'standings' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-custom-blue mb-6">
                  Classement D2 - Ligue Provinciale N'Djaména
                </h2>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-custom-blue text-white">
                        <tr>
                          <th className="p-4 text-left">#</th>
                          <th className="p-4 text-left">Équipe</th>
                          <th className="p-4 text-left">J</th>
                          <th className="p-4 text-left">G</th>
                          <th className="p-4 text-left">N</th>
                          <th className="p-4 text-left">P</th>
                          <th className="p-4 text-left">BP</th>
                          <th className="p-4 text-left">BC</th>
                          <th className="p-4 text-left">+/-</th>
                          <th className="p-4 text-left">PTS</th>
                          <th className="p-4 text-left">Forme</th>
                        </tr>
                      </thead>
                      <tbody>
                        {realStandings.map((team, index) => (
                          <tr 
                            key={team.team} 
                            className={`border-b hover:bg-gray-50 transition-colors ${
                              team.team === "AS Douanes" ? 'bg-blue-50 font-semibold' : ''
                            }`}
                          >
                            <td className="p-4">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                team.position === 1 ? 'bg-yellow-100 text-yellow-800' :
                                team.position === 2 ? 'bg-gray-100 text-gray-800' :
                                team.position === 3 ? 'bg-orange-100 text-orange-800' :
                                'bg-gray-50 text-gray-600'
                              }`}>
                                {team.position}
                              </div>
                            </td>
                            <td className="p-4 font-medium">{team.team}</td>
                            <td className="p-4">{team.played}</td>
                            <td className="p-4">{team.won}</td>
                            <td className="p-4">{team.drawn}</td>
                            <td className="p-4">{team.lost}</td>
                            <td className="p-4 font-medium">{team.goalsFor}</td>
                            <td className="p-4">{team.goalsAgainst}</td>
                            <td className="p-4 font-bold">
                              {team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}
                              {team.goalsFor - team.goalsAgainst}
                            </td>
                            <td className="p-4 font-bold text-lg">{team.points}</td>
                            <td className="p-4">
                              <div className="flex gap-1">
                                {team.form.map((result, idx) => (
                                  <div 
                                    key={idx}
                                    className={`w-6 h-6 rounded text-xs flex items-center justify-center ${
                                      result === 'W' ? 'bg-green-100 text-green-800' :
                                      result === 'D' ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-red-100 text-red-800'
                                    }`}
                                  >
                                    {result}
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Légende */}
                  <div className="p-6 border-t">
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-100 rounded"></div>
                        <span>1ère place</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-100 rounded"></div>
                        <span>2ème place</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-100 rounded"></div>
                        <span>3ème place</span>
                      </div>
                    </div>
                  </div>
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
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border-b last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Date</div>
                      <div className="font-bold text-custom-blue">{match.date}</div>
                    </div>
                    <div>
                      <div className="font-medium">{match.homeTeam} vs {match.awayTeam}</div>
                      <div className="text-sm text-gray-600">{match.competition}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    {match.result ? (
                      <div className={`font-bold text-lg ${
                        match.result.split(' - ')[0] > match.result.split(' - ')[1]
                          ? 'text-green-600'
                          : match.result.split(' - ')[0] === match.result.split(' - ')[1]
                          ? 'text-yellow-600'
                          : 'text-red-600'
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