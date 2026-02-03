import { motion } from 'framer-motion'
import { Users, Trophy, Target, Star, ChevronRight } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ali Oumar",
      position: "Gardien",
      number: 1,
      image: "/images/douane3.jpg"
    },
    {
      id: 2,
      name: "Mahamat Issa",
      position: "Défenseur",
      number: 4,
      image: "/images/douane4.jpg"
    },
    {
      id: 3,
      name: "Abdel Kader",
      position: "Défenseur",
      number: 5,
      image: "/images/douane5.jpg"
    },
    {
      id: 4,
      name: "Hassan Youssouf",
      position: "Milieu",
      number: 6,
      image: "/images/douane6.jpg"
    }
  ]

  const stats = [
    { label: "Joueurs professionnels", value: "25", icon: <Users className="w-6 h-6" /> },
    { label: "Matchs gagnés", value: "12", icon: <Trophy className="w-6 h-6" /> },
    { label: "Buts marqués", value: "38", icon: <Target className="w-6 h-6" /> },
    { label: "Jeunes talents", value: "15", icon: <Star className="w-6 h-6" /> }
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-blue mb-6">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les joueurs et le staff qui font la force de l'AS Douanes
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="text-custom-red mb-3 flex justify-center">
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

        {/* Joueurs en vedette */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-custom-blue">
              Joueurs en Vedette
            </h3>
            <a
              href="/team"
              className="text-custom-blue hover:text-blue-800 font-semibold flex items-center gap-2"
            >
              Voir toute l'équipe
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card overflow-hidden group text-center"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-custom-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {player.number}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-custom-blue mb-2">
                    {player.name}
                  </h4>
                  <p className="text-gray-600 mb-3">{player.position}</p>
                  <button className="text-sm text-custom-red hover:text-red-700 font-medium">
                    Voir le profil
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Staff technique */}
        <div>
          <h3 className="text-2xl font-bold text-custom-blue mb-8 text-center">
            Staff Technique
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Coach Abdoulaye",
                role: "Entraîneur Principal",
                image: "/images/douanecoach.jpg",
                experience: "10 ans d'expérience"
              },
              {
                name: "Adoum Ousman",
                role: "Entraîneur Adjoint",
                image: "/images/douane15.jpg",
                experience: "8 ans d'expérience"
              },
              {
                name: "Dr. Ali Haroun",
                role: "Médecin du Club",
                image: "/images/douane17.jpg",
                experience: "12 ans d'expérience"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-custom-blue mb-2">
                  {member.name}
                </h4>
                <p className="text-custom-red font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team