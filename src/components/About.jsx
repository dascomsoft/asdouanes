import { motion } from 'framer-motion'
import { Trophy, Users, Target, Calendar } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Championnat D2",
      description: "Évoluant en 2ème division de la Ligue Provinciale de N'Djaména"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Jeunes Talents",
      description: "Formation et développement des jeunes footballeurs tchadiens"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence Sportive",
      description: "Promotion du football tchadien et valeurs sportives"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Matchs Réguliers",
      description: "Calendrier complet de matchs et compétitions"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">
          À Propos du Club
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-custom-blue mb-6">
              AS Douanes - L'Excellence du Football Tchadien
            </h3>
            <p className="text-gray-600 mb-4">
              L'AS Douanes est un club de football affilié à la <strong>Ligue Provinciale de Football de N'Djaména</strong>, 
              évoluant actuellement en <strong>deuxième division (D2)</strong>. Le club est lié aux douanes tchadiennes 
              et met en avant le sport tchadien, les matchs locaux et l'engagement communautaire.
            </p>
            <p className="text-gray-600 mb-6">
              Sous la présidence de <strong>M. Abakar MADJIADOUMBE</strong>, élu en octobre 2025, le club poursuit 
              sa mission de développement du football local et d'émergence des jeunes talents.
            </p>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
            >
              En savoir plus
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-left"
            className="relative"
          >
            <img
              src="/images/douanepresi.jpg"
              alt="Président AS Douanes"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="font-bold text-custom-blue">M. Abakar MADJIADOUMBE</p>
              <p className="text-sm text-gray-600">Président du Club</p>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card p-6 text-center"
            >
              <div className="text-custom-red mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-custom-blue mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About