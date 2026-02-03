import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Message envoyé avec succès !')
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
              Informations de Contact
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-custom-blue p-3 rounded-full">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Adresse</h4>
                  <p className="text-gray-600">
                    Walia, 9ème arrondissement<br />
                    N'Djaména, Tchad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-custom-blue p-3 rounded-full">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Téléphone</h4>
                  <a href="tel:+23565150115" className="text-gray-600 hover:text-custom-blue">
                    +235 65 15 01 15
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-custom-blue p-3 rounded-full">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <a href="mailto:asdouanestchad@gmail.com" className="text-gray-600 hover:text-custom-blue">
                    asdouanestchad@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-custom-blue p-3 rounded-full">
                  <Facebook className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Réseaux Sociaux</h4>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61567120363658" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-custom-blue"
                  >
                    @ASDouanes
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 bg-gray-100 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-4">Localisation</h4>
              <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
                <p className="ml-2 text-gray-600">Stade de Diguel, N'Djaména</p>
              </div>
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
              Envoyez-nous un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                  placeholder="Sujet du message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact