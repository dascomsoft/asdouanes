import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Trophy, Star, TrendingUp, Users, Award, ChevronRight } from 'lucide-react'

const MatchesPage = () => {
  const [activeView, setActiveView] = useState('upcoming')
  
  // Données des matchs
  const upcomingMatches = [
    {
      id: 1,
      date: "18 Jan 2026",
      time: "15:00",
      competition: "D2 - Journée 1",
      homeTeam: "AS Douanes",
      awayTeam: "AS Mairie",
      venue: "Stade de Diguel, N'Djaména",
      status: "upcoming",
      importance: "high"
    },
    {
      id: 2,
      date: "23 Jan 2026",
      time: "16:30",
      competition: "D2 - Journée 2",
      homeTeam: "AS Douanes",
      awayTeam: "AS TASKO",
      venue: "Stade de Diguel, N'Djaména",
      status: "upcoming",
      importance: "medium"
    },
    {
      id: 3,
      date: "27 Jan 2026",
      time: "15:00",
      competition: "D2 - Journée 3",
      homeTeam: "AS Douanes",
      awayTeam: "Star d'Emriguebé",
      venue: "Stade de Diguel, N'Djaména",
      status: "upcoming",
      importance: "high"
    },
    {
      id: 4,
      date: "01 Fév 2026",
      time: "16:00",
      competition: "D2 - Journée 4",
      homeTeam: "ASC Bouzourou",
      awayTeam: "AS Douanes",
      venue: "Stade Municipal",
      status: "upcoming",
      importance: "medium"
    }
  ]

  const recentMatches = [
    {
      id: 1,
      date: "Déc 2025",
      competition: "Match Amical",
      homeTeam: "AS Douanes",
      awayTeam: "ASPSI",
      result: "1 - 2",
      highlights: ["But de Mahamat à la 35ème", "Belle performance défensive"],
      status: "completed",
      performance: "average"
    },
    {
      id: 2,
      date: "Déc 2025",
      competition: "Championnat D2",
      homeTeam: "AS Douanes",
      awayTeam: "Economat des Armées",
      result: "5 - 1",
      highlights: ["Doublé de Oumar", "Hat-trick de Saleh", "Maîtrise totale"],
      status: "completed",
      performance: "excellent"
    },
    {
      id: 3,
      date: "Déc 2025",
      competition: "Championnat D2",
      homeTeam: "AS Douanes",
      awayTeam: "As Tasko",
      result: "1 - 2",
      highlights: ["But précoce d'Ali", "Défense solide jusqu'à la fin"],
      status: "completed",
      performance: "good"
    }
  ]

  // Classement
  const standings = [
    { position: 1, team: "AS Douanes", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 7, goalsAgainst: 4, points: 6, form: ['W', 'W', 'L'] },
    { position: 2, team: "AS Tasko", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 3, points: 6, form: ['W', 'L', 'W'] },
    { position: 3, team: "AS Mairie", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 4, form: ['D', 'W'] },
    { position: 4, team: "Economat Armées", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 8, points: 3, form: ['L', 'L', 'W'] },
    { position: 5, team: "Star d'Emriguebé", played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 3, points: 1, form: ['D', 'L'] }
  ]

  // Statistiques de l'équipe
  const teamStats = [
    { label: "Buts marqués", value: "7", change: "+3", icon: <Star className="w-5 h-5" /> },
    { label: "Buts encaissés", value: "4", change: "-1", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Victoires", value: "2", change: "+1", icon: <Trophy className="w-5 h-5" /> },
    { label: "Forme actuelle", value: "60%", change: "+10%", icon: <Award className="w-5 h-5" /> }
  ]

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
              onClick={() => setActiveView('upcoming')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeView === 'upcoming'
                  ? 'bg-custom-blue text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Matchs à venir
            </button>
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
            {activeView === 'upcoming' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-custom-blue mb-6">
                  Prochains Matchs
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {upcomingMatches.map((match, index) => (
                    <motion.div
                      key={match.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                      {/* En-tête du match */}
                      <div className={`p-4 text-white ${
                        match.importance === 'high' ? 'bg-custom-red' : 'bg-custom-blue'
                      }`}>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span className="font-semibold">{match.date}</span>
                          </div>
                          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {match.competition}
                          </span>
                        </div>
                      </div>

                      {/* Corps du match */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold text-2xl mb-2 mx-auto">
                              AD
                            </div>
                            <div className="font-bold text-lg">{match.homeTeam}</div>
                            <div className="text-sm text-gray-500">Domicile</div>
                          </div>

                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-800 mb-2">VS</div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{match.time}</span>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center font-bold text-2xl mb-2 mx-auto">
                              {match.awayTeam.charAt(0)}
                            </div>
                            <div className="font-bold text-lg">{match.awayTeam}</div>
                            <div className="text-sm text-gray-500">Extérieur</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-5 h-5" />
                            <span>{match.venue}</span>
                          </div>
                          
                          {match.importance === 'high' && (
                            <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                              <p className="text-sm text-red-800 font-medium">
                                <Star className="w-4 h-4 inline mr-1" />
                                Match important pour le classement
                              </p>
                            </div>
                          )}

                          <button className="w-full btn-primary flex items-center justify-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Ajouter au calendrier
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

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
                            match.performance === 'excellent' ? 'bg-green-100 text-green-800' :
                            match.performance === 'good' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {match.result}
                          </div>
                        </div>

                        {/* Score détaillé */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-center flex-1">
                            <div className="font-bold text-xl mb-2">{match.homeTeam}</div>
                            <div className="text-4xl font-bold text-custom-blue">
                              {match.result.split(' - ')[0]}
                            </div>
                          </div>

                          <div className="text-3xl font-bold text-gray-400 mx-4">-</div>

                          <div className="text-center flex-1">
                            <div className="font-bold text-xl mb-2">{match.awayTeam}</div>
                            <div className="text-4xl font-bold text-gray-700">
                              {match.result.split(' - ')[1]}
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="font-bold text-gray-700 mb-3">Points marquants :</h4>
                          <ul className="space-y-2">
                            {match.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <ChevronRight className="w-5 h-5 text-custom-red mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
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
                        {standings.map((team, index) => (
                          <tr 
                            key={team.position} 
                            className={`border-b hover:bg-gray-50 transition-colors ${
                              team.team === "AS Douanes" ? 'bg-blue-50 font-semibold' : ''
                            }`}
                          >
                            <td className="p-4">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                team.position <= 2 ? 'bg-green-100 text-green-800' :
                                team.position <= 4 ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
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
                        <div className="w-4 h-4 bg-green-100 rounded"></div>
                        <span>Promotion D1</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-100 rounded"></div>
                        <span>Play-offs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-100 rounded"></div>
                        <span>Relégation</span>
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
              {upcomingMatches.concat(recentMatches).map((match, index) => (
                <div 
                  key={match.id} 
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
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
                      <div className="font-bold text-lg">{match.result}</div>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{match.time}</span>
                      </div>
                    )}
                    <div className="text-sm text-gray-500">{match.venue}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MatchesPage