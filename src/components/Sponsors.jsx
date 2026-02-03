import { motion } from 'framer-motion'
import { Star, Award, TrendingUp, Users } from 'lucide-react'

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "Douanes Tchadiennes",
      logo: "/images/douanelogo.jpg",
      category: "Partenaire Principal",
      since: "2020",
      description: "Partenaire historique et fondateur du club"
    },
    {
      id: 2,
      name: "King Pokko",
      logo: "/images/kingpokkologo.jpeg",
      category: "Partenaire Officiel",
      since: "2023",
      description: "Fournisseur officiel d'équipements sportifs"
    },
    {
      id: 3,
      name: "Ministère des Sports",
      logo: "https://via.placeholder.com/150x100/1e3a8a/ffffff?text=MS",
      category: "Partenaire Institutionnel",
      since: "2021",
      description: "Soutien au développement du sport national"
    },
    {
      id: 4,
      name: "Orange Tchad",
      logo: "https://via.placeholder.com/150x100/FF6600/ffffff?text=Orange",
      category: "Partenaire Télécom",
      since: "2022",
      description: "Connectivité et communication digitale"
    },
    {
      id: 5,
      name: "Total Energies",
      logo: "https://via.placeholder.com/150x100/004B8D/ffffff?text=Total",
      category: "Partenaire Énergie",
      since: "2023",
      description: "Mobilité et énergie pour les déplacements"
    },
    {
      id: 6,
      name: "CIMT",
      logo: "https://via.placeholder.com/150x100/008000/ffffff?text=CIMT",
      category: "Partenaire Transport",
      since: "2024",
      description: "Transport officiel de l'équipe"
    }
  ]

  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Visibilité Nationale",
      description: "Exposition média et présence sur nos canaux de communication"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accès Événements",
      description: "Invitations aux matchs et événements exclusifs"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Image Positive",
      description: "Association avec les valeurs sportives et sociales"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI Garanti",
      description: "Retour sur investissement mesurable et suivi personnalisé"
    }
  ]

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-blue mb-6">
            Nos Partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les entreprises qui nous soutiennent dans notre développement
          </p>
        </div>

        {/* Partenaires principaux */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-custom-blue mb-8 text-center">
            Partenaires Principaux
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.slice(0, 3).map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-40 bg-gray-100 flex items-center justify-center p-6">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-custom-blue">{sponsor.name}</h4>
                      <span className="text-sm text-custom-red font-medium">{sponsor.category}</span>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Depuis {sponsor.since}
                    </span>
                  </div>
                  <p className="text-gray-600">{sponsor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partenaires officiels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-custom-blue mb-8 text-center">
            Partenaires Officiels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {sponsors.slice(3).map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="h-24 flex items-center justify-center mb-4">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-custom-blue mb-2">{sponsor.name}</h4>
                <p className="text-sm text-gray-600">{sponsor.category}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Avantages du partenariat */}
        <div className="bg-gradient-to-r from-custom-blue to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Avantages du Partenariat
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Devenir partenaire */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-custom-blue mb-6">
            Devenir Partenaire
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et bénéficiez d'une visibilité unique 
            auprès de notre communauté de supporters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Demander un dossier
            </a>
            <a
              href="mailto:partnership@asdouanes-td.com"
              className="bg-white border-2 border-custom-blue text-custom-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center gap-2"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors