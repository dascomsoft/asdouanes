import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaCalendar as Calendar,
  FaClock as Clock,
  FaMapMarkerAlt as MapPin,
  FaTrophy as Trophy
} from 'react-icons/fa'
import { matches, standings } from '../data/matchesData'

const Matches = () => {
  const [activeTab, setActiveTab] = useState('recent')

  // Filtrer les 3 derniers matchs pour la page d'accueil
  const recentMatches = matches.filter(match => match.status === 'completed').slice(0, 3)
  const upcomingMatches = matches.filter(match => match.status === 'upcoming').slice(0, 2)
  
  // Déterminer les matchs à afficher selon l'onglet actif
  const displayMatches = activeTab === 'recent' ? recentMatches : upcomingMatches

  return (
    <section id="matches" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">
          Calendrier & Résultats
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            {['recent', 'upcoming'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  activeTab === tab
                    ? 'bg-custom-blue text-white'
                    : 'text-gray-600 hover:text-custom-blue'
                }`}
              >
                {tab === 'recent' ? 'Derniers matchs' : 'Prochains matchs'}
              </button>
            ))}
          </div>
        </div>

        {/* Matches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayMatches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                {/* Match Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-custom-blue">
                    <Calendar size={18} />
                    <span className="font-semibold">{match.date}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    match.status === 'completed' 
                      ? match.result.split(' - ')[0] > match.result.split(' - ')[1]
                        ? 'bg-green-100 text-green-800'
                        : match.result.split(' - ')[0] === match.result.split(' - ')[1]
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {match.status === 'completed' ? match.result : 'À venir'}
                  </div>
                </div>

                {/* Competition */}
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <Trophy size={16} />
                  <span className="font-medium">{match.competition}</span>
                </div>

                {/* Teams & Result */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        match.homeTeam === 'AS Douanes' ? 'bg-custom-blue' : 'bg-gray-600'
                      }`}>
                        {match.homeTeam === 'AS Douanes' ? 'AD' : match.homeTeam.charAt(0)}
                      </div>
                      <span className="font-semibold">{match.homeTeam}</span>
                    </div>
                    {match.status === 'completed' && (
                      <span className={`text-2xl font-bold ${
                        match.result.split(' - ')[0] > match.result.split(' - ')[1]
                          ? 'text-green-600'
                          : 'text-gray-700'
                      }`}>
                        {match.result.split(' - ')[0]}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                        {match.awayTeam.charAt(0)}
                      </div>
                      <span className="font-semibold">{match.awayTeam}</span>
                    </div>
                    {match.status === 'completed' && (
                      <span className="text-2xl font-bold text-gray-700">
                        {match.result.split(' - ')[1]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Match Info */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span>{match.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>{match.venue}</span>
                  </div>
                </div>

                {match.highlight && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">{match.highlight}</p>
                  </div>
                )}
                
                {match.status === 'upcoming' && (
                  <button className="mt-4 w-full btn-primary">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Ajouter au calendrier
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standings Table */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold text-custom-blue mb-8 text-center">
            Classement D2
          </h3>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-custom-blue text-white">
                  <th className="p-4 text-left">#</th>
                  <th className="p-4 text-left">Équipe</th>
                  <th className="p-4 text-left">J</th>
                  <th className="p-4 text-left">G</th>
                  <th className="p-4 text-left">N</th>
                  <th className="p-4 text-left">P</th>
                  <th className="p-4 text-left">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team, index) => (
                  <tr 
                    key={team.position} 
                    className={`border-b hover:bg-gray-50 transition-colors ${
                      team.team.includes('Douanes') ? 'bg-blue-50 font-semibold' : ''
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
                    <td className="p-4 font-bold text-lg">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Bouton pour voir plus */}
          <div className="text-center mt-8">
            <a 
              href="/matches" 
              className="inline-flex items-center gap-2 text-custom-blue hover:text-blue-800 font-semibold"
            >
              Voir le classement complet
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Matches