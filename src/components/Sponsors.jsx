import { motion } from 'framer-motion'
import { Star, Award, TrendingUp, Users } from 'lucide-react'

const Sponsors = () => {
  // Un seul partenaire : Douanes Tchadiennes
  const sponsors = [
    {
      id: 1,
      name: "Douanes Tchadiennes",
      logo: "/images/douanelogo.jpg",
      category: "Partenaire Fondateur",
      since: "2020",
      description: "Partenaire historique et fondateur du club. La Direction Générale des Douanes et Droits Indirects du Tchad est à l'origine de la création et du soutien continu de l'AS Douanes."
    }
  ]

  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Visibilité Nationale",
      description: "Exposition média et présence sur tous nos canaux de communication"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accès Événements",
      description: "Invitations aux matchs et événements exclusifs du club"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Image Positive",
      description: "Association avec les valeurs sportives, disciplinaires et sociales"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Impact Social",
      description: "Contribuer au développement du football tchadien et des jeunes talents"
    }
  ]

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-blue mb-6">
            Notre Partenaire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partenaire historique et fondateur de l'AS Douanes
          </p>
        </div>

        {/* Partenaire unique */}
        <div className="mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              {/* Logo */}
              <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center p-8">
                <div className="text-center">
                  <img
                    src={sponsors[0].logo}
                    alt={sponsors[0].name}
                    className="max-h-40 max-w-full object-contain mx-auto"
                  />
                  <div className="mt-4">
                    <span className="px-4 py-2 bg-custom-red text-white rounded-full text-sm font-medium">
                      {sponsors[0].category}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Informations */}
              <div className="md:w-2/3 p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-custom-blue mb-2">
                      {sponsors[0].name}
                    </h3>
                    <p className="text-gray-500">
                      Partenaire depuis {sponsors[0].since}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-6">
                  {sponsors[0].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Relation</div>
                    <div className="font-bold text-custom-blue">Fondateur</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Engagement</div>
                    <div className="font-bold text-custom-blue">Long terme</div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <h4 className="font-bold text-gray-700 mb-3">Mots du Président :</h4>
                  <blockquote className="italic text-gray-600 pl-4 border-l-4 border-custom-blue">
                    "La Direction Générale des Douanes est fière de soutenir l'AS Douanes, 
                    un club qui incarne les valeurs de discipline, d'intégrité et d'excellence 
                    qui sont au cœur de notre institution."
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Avantages du partenariat */}
        <div className="bg-gradient-to-r from-custom-blue to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Avantages du Partenariat avec l'AS Douanes
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
            Rejoindre notre réseau de partenaires
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Vous souhaitez soutenir le développement du football tchadien et bénéficier 
            d'une visibilité unique auprès de notre communauté ? Rejoignez-nous !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Devenir partenaire
            </a>
            <a
              href="mailto:asdouanestchad@gmail.com"
              className="bg-white border-2 border-custom-blue text-custom-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center gap-2"
            >
              Demander plus d'informations
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors