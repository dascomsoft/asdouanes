import { motion } from 'framer-motion'
import { Trophy, Users, Target, Calendar, Award, History } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-custom-blue mb-6">
            À Propos du Club
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'histoire, la mission et les valeurs de l'AS Douanes, 
            club de football de référence à N'Djaména.
          </p>
        </div>

        {/* Histoire du Club */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <History className="w-8 h-8 text-custom-red" />
                <h2 className="text-3xl font-bold text-custom-blue">Notre Histoire</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  L'AS Douanes est un club de football affilié à la <strong>Ligue Provinciale de Football de N'Djaména</strong>, 
                  évoluant actuellement en <strong>deuxième division (D2)</strong>.
                </p>
                <p>
                  Fondé avec le soutien de la Direction Générale des Douanes et Droits Indirects du Tchad,
                  le club incarne les valeurs d'intégrité, de discipline et d'excellence propres aux douanes.
                </p>
                <p>
                  En octobre 2025, une Assemblée Générale Élective historique s'est tenue à l'amphithéâtre 
                  de l'École Normale d'Administration (ENA) de N'Djaména, marquant le renouvellement complet 
                  du bureau exécutif et l'élection de <strong>M. Abakar MADJIADOUMBE</strong> à la présidence.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/douane2.jpg"
                alt="Histoire AS Douanes"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission et Valeurs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-custom-blue text-center mb-12">
            Mission & Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Notre Mission",
                description: "Promouvoir le football tchadien, former les jeunes talents et représenter avec excellence la région de N'Djaména dans les compétitions nationales."
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Nos Valeurs",
                description: "Intégrité, discipline, travail d'équipe, respect et engagement communautaire. Des valeurs qui reflètent l'esprit des douanes."
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Nos Objectifs",
                description: "Accession en première division, développement des infrastructures, formation des jeunes et rayonnement national du club."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-custom-red mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-custom-blue mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Président */}
        <section className="bg-custom-blue text-white rounded-2xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Président</h2>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">M. Abakar MADJIADOUMBE</h3>
                <p className="text-gray-200">Président élu en octobre 2025</p>
              </div>
              <p className="text-gray-200 mb-6">
                Élu lors de l'Assemblée Générale Élective du 11 octobre 2025, 
                M. Abakar MADJIADOUMBE dirige le club avec une vision claire : 
                moderniser les structures, professionnaliser la gestion et 
                amener l'AS Douanes au plus haut niveau du football tchadien.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>Renouvellement du bureau exécutif</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Plan de développement 2025-2028</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/douanepresi.jpg"
                alt="Président AS Douanes"
                className="rounded-2xl shadow-2xl max-w-md"
              />
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section>
          <h2 className="text-3xl font-bold text-custom-blue text-center mb-12">
            Nos Affiliations
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Fédération Tchadienne de Football Association",
                role: "Affiliation nationale"
              },
              {
                name: "Ligue Provinciale de Football de N'Djaména",
                role: "Championnat D2"
              },
              {
                name: "Ministère des Sports et des Loisirs",
                role: "Reconnaissance officielle"
              }
            ].map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {org.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg mb-2">{org.name}</h3>
                <p className="text-gray-600">{org.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage