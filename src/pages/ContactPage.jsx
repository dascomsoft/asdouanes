import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaMapMarkerAlt as MapPin,
  FaPhoneAlt as Phone,
  FaEnvelope as Mail,
  FaWhatsapp as Whatsapp,
  FaPaperPlane as Send
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const communicateurWhatsApp = "+23566787902"
  const telephoneClub = "+23565150115"
  const emailClub = "asdouanestchad@gmail.com"
  
  // Nouveaux numéros pour le secrétaire général et le directeur sportif
  const telephoneSecretaireGeneral = "+23566241136"
  const telephoneDirecteurSportif = "+23566052948"
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Créer le message WhatsApp
    const whatsappMessage = `*Message depuis le site AS Douanes*%0A%0A
*Nom:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Sujet:* ${formData.subject}%0A%0A
*Message:*%0A${formData.message}%0A%0A
_Envoyé depuis asdouanes-tchad.com_`
    
    // Ouvrir WhatsApp avec le message pré-rempli
    const whatsappURL = `https://wa.me/${communicateurWhatsApp}?text=${whatsappMessage}`
    window.open(whatsappURL, '_blank')
    
    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">
          Contactez-nous
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-custom-blue mb-8">
              Nos Coordonnées
            </h3>

            <div className="space-y-6">
              {/* Adresse */}
              <div className="flex items-start gap-4">
                <div className="bg-custom-blue p-3 rounded-full">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Adresse du Club</h4>
                  <p className="text-gray-600">
                    Walia, 9ème arrondissement<br />
                    N'Djaména, Tchad<br />
                    Stade de Diguel
                  </p>
                </div>
              </div>

              {/* Téléphone Club */}
              <div className="flex items-start gap-4">
                <div className="bg-custom-blue p-3 rounded-full">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Téléphone Club</h4>
                  <a 
                    href={`tel:${telephoneClub.replace(/\s/g, '')}`}
                    className="text-gray-600 hover:text-custom-blue text-lg font-medium block mb-1"
                  >
                    {telephoneClub}
                  </a>
                  <a 
                    href={`tel:${telephoneSecretaireGeneral.replace(/\s/g, '')}`}
                    className="text-gray-600 hover:text-custom-blue text-lg font-medium block mb-1"
                  >
                    {telephoneSecretaireGeneral}
                  </a>
                  <a 
                    href={`tel:${telephoneDirecteurSportif.replace(/\s/g, '')}`}
                    className="text-gray-600 hover:text-custom-blue text-lg font-medium block"
                  >
                    {telephoneDirecteurSportif}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Bureau administratif et direction
                  </p>
                </div>
              </div>

              {/* WhatsApp Communicateur */}
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Whatsapp className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Communicateur en Chef</h4>
                  <a 
                    href={`https://wa.me/${communicateurWhatsApp}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 text-lg font-medium inline-flex items-center gap-2"
                  >
                    <Whatsapp className="w-5 h-5" />
                    +235 66 78 79 02
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Contact direct via WhatsApp
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-custom-blue p-3 rounded-full">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Officiel</h4>
                  <a 
                    href={`mailto:${emailClub}`}
                    className="text-gray-600 hover:text-custom-blue text-lg font-medium"
                  >
                    {emailClub}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Réponse sous 48h
                  </p>
                </div>
              </div>
            </div>

            {/* Informations complémentaires */}
            {/* <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-custom-blue text-lg mb-4">Contacts supplémentaires</h4>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-gray-700">Numéro principal</div>
                    <div className="text-gray-600">{telephoneClub}</div>
                  </div>
                  <span className="px-3 py-1 bg-white text-custom-blue rounded-full text-sm font-medium">Bureau</span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-gray-700">Secrétariat</div>
                    <div className="text-gray-600">{telephoneSecretaireGeneral}</div>
                  </div>
                  <span className="px-3 py-1 bg-white text-custom-blue rounded-full text-sm font-medium">Administratif</span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-gray-700">Direction sportive</div>
                    <div className="text-gray-600">{telephoneDirecteurSportif}</div>
                  </div>
                  <span className="px-3 py-1 bg-white text-custom-blue rounded-full text-sm font-medium">Sport</span>
                </div>
              </div>
            </div> */}

            {/* Horaires */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 className="font-bold text-custom-blue text-lg mb-4">Horaires de contact</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between items-center">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium bg-white px-3 py-1 rounded">8h - 18h</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Samedi</span>
                  <span className="font-medium bg-white px-3 py-1 rounded">9h - 13h</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Dimanche</span>
                  <span className="font-medium bg-white px-3 py-1 rounded">Matchs uniquement</span>
                </li>
              </ul>
            </div>

            {/* Accès rapide WhatsApp */}
            <div className="mt-8">
              <a 
                href={`https://wa.me/${communicateurWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-700 transition w-full justify-center"
              >
                <Whatsapp className="w-6 h-6" />
                Contacter directement sur WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-custom-blue mb-8">
              Envoyer un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="presse">Demande presse / Interview</option>
                  <option value="partenariat">Proposition de partenariat</option>
                  <option value="billets">Information sur les billets</option>
                  <option value="essais">Demande d'essais / Joueurs</option>
                  <option value="formation">Centre de formation</option>
                  <option value="administratif">Question administrative</option>
                  <option value="sportif">Question sportive</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition"
                  placeholder="Votre message..."
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <Whatsapp className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-700">Envoi via WhatsApp</span>
                </div>
                <p className="text-sm text-gray-600">
                  Votre message sera envoyé directement au communicateur en chef via WhatsApp.
                  Pour les questions administratives, vous pouvez aussi appeler le {telephoneSecretaireGeneral}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message via WhatsApp
              </motion.button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  Vous pouvez aussi nous contacter directement par téléphone :
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href={`tel:${telephoneClub.replace(/\s/g, '')}`}
                    className="text-custom-blue hover:text-blue-700 text-sm font-medium"
                  >
                    Bureau : {telephoneClub}
                  </a>
                  <a 
                    href={`tel:${telephoneSecretaireGeneral.replace(/\s/g, '')}`}
                    className="text-custom-blue hover:text-blue-700 text-sm font-medium"
                  >
                    Secrétariat : {telephoneSecretaireGeneral}
                  </a>
                  <a 
                    href={`tel:${telephoneDirecteurSportif.replace(/\s/g, '')}`}
                    className="text-custom-blue hover:text-blue-700 text-sm font-medium"
                  >
                    Sport : {telephoneDirecteurSportif}
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Localisation */}




{/* 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-custom-blue mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Notre Stade
          </h3>
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-8 border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center">
                <MapPin className="w-20 h-20 text-custom-blue mx-auto mb-4" />
                <h4 className="text-xl font-bold text-custom-blue">Stade de Diguel</h4>
                <p className="text-gray-600 mt-2">9ème arrondissement, N'Djaména</p>
                <div className="mt-4 space-y-1">
                  <div className="text-sm text-gray-500">Réservation : {telephoneSecretaireGeneral}</div>
                  <div className="text-sm text-gray-500">Événements sportifs : {telephoneDirecteurSportif}</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <div className="text-lg font-bold text-custom-blue mb-1">Parking</div>
                    <div className="text-sm text-gray-600">Gratuit</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <div className="text-lg font-bold text-custom-blue mb-1">Transports</div>
                    <div className="text-sm text-gray-600">Accès facile</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <div className="text-lg font-bold text-custom-blue mb-1">Visites</div>
                    <div className="text-sm text-gray-600">Sur rendez-vous</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-gray-600">
                    <strong>Contact stade :</strong> Pour réserver le stade ou organiser un événement, 
                    contactez le secrétariat général au {telephoneSecretaireGeneral}.<br />
                    <strong>Direction sportive :</strong> Pour les questions liées aux équipes, 
                    entraînements et compétitions, contactez la direction sportive au {telephoneDirecteurSportif}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}





      </div>
    </section>
  )
}

export default Contact