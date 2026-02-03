import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send, Clock, Users, MessageSquare } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulation d'envoi
    setFormStatus('sending')
    
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => {
        setFormStatus('')
      }, 3000)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: [
        "Walia, 9ème arrondissement",
        "N'Djaména, Tchad",
        "Stade de Diguel"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: [
        "+235 65 15 01 15",
        "+235 22 51 00 10"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "asdouanestchad@gmail.com",
        "contact@asdouanes-td.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      details: [
        "Lundi - Vendredi: 8h - 18h",
        "Samedi: 9h - 12h",
        "Matchs: Weekends"
      ]
    }
  ]

  const departments = [
    {
      name: "Direction Sportive",
      contact: "ds@asdouanes-td.com",
      phone: "+235 65 15 01 16",
      description: "Transferts, contrats, équipe professionnelle"
    },
    {
      name: "Centre de Formation",
      contact: "formation@asdouanes-td.com",
      phone: "+235 65 15 01 17",
      description: "Jeunes talents, académie, scolarité"
    },
    {
      name: "Communication",
      contact: "communication@asdouanes-td.com",
      phone: "+235 65 15 01 18",
      description: "Presse, relations publiques, médias"
    },
    {
      name: "Billetterie",
      contact: "billetterie@asdouanes-td.com",
      phone: "+235 65 15 01 19",
      description: "Matchs, abonnements, réservations"
    }
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
            Contactez-nous
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes à votre écoute pour toute question, suggestion ou demande de partenariat
          </p>
        </div>

        {/* Informations de contact */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-custom-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-custom-blue mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-custom-blue mb-2">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600 mb-8">
                Nous vous répondrons dans les plus brefs délais
              </p>

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200"
                >
                  Message envoyé avec succès ! Nous vous contacterons rapidement.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition"
                      placeholder="+235 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="info">Informations générales</option>
                      <option value="tickets">Billetterie</option>
                      <option value="partnership">Partenariat</option>
                      <option value="tryout">Essais</option>
                      <option value="press">Presse</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Informations supplémentaires */}
          <div>
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h3 className="text-xl font-bold text-custom-blue mb-6 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Services & Départements
              </h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <h4 className="font-bold text-custom-blue mb-2">{dept.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                    <div className="text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Mail className="w-4 h-4" />
                        <span>{dept.contact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 mt-1">
                        <Phone className="w-4 h-4" />
                        <span>{dept.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-r from-custom-blue to-blue-600 rounded-2xl shadow-lg p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-6">
                Suivez-nous
              </h3>
              <p className="text-blue-100 mb-6">
                Restez connecté avec l'AS Douanes sur les réseaux sociaux
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61567120363658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
                >
                  <Facebook className="w-6 h-6" />
                  <div>
                    <div className="font-medium">Facebook</div>
                    <div className="text-sm text-blue-200">@ASDouanes</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
                >
                  <Instagram className="w-6 h-6" />
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm text-blue-200">@asdouanes_td</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
                >
                  <Twitter className="w-6 h-6" />
                  <div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-sm text-blue-200">@ASDouanes_TD</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 mt-8"
            >
              <h3 className="text-xl font-bold text-custom-blue mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Questions fréquentes
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "Comment acheter des billets pour les matchs ?",
                    a: "Les billets sont disponibles au stade le jour du match ou en prévente sur notre site."
                  },
                  {
                    q: "Comment intégrer le centre de formation ?",
                    a: "Les essais ont lieu chaque année en septembre. Contactez le service formation."
                  },
                  {
                    q: "Comment devenir partenaire du club ?",
                    a: "Contactez le service partenariat à partnership@asdouanes-td.com"
                  }
                ].map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="cursor-pointer font-medium text-gray-800 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      {faq.q}
                    </summary>
                    <div className="p-3 text-gray-600">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carte */}
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-custom-blue mb-6">
                <MapPin className="w-6 h-6 inline mr-2" />
                Localisation
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    Notre siège social et le Stade de Diguel sont situés dans le 9ème arrondissement de N'Djaména, facilement accessible depuis le centre-ville.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-custom-blue mb-2">Accès au stade</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Parking gratuit disponible</li>
                        <li>• Accessible en transports en commun</li>
                        <li>• Vestiaires et sanitaires sur place</li>
                        <li>• Boutique officielle du club</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-custom-blue mb-2">Visites guidées</h4>
                      <p className="text-gray-600">
                        Des visites du stade sont organisées sur rendez-vous. Contactez-nous pour plus d'informations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Carte interactive</p>
                    <p className="text-gray-500 text-sm">(Intégration Google Maps)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage