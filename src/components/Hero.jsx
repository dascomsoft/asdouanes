import { motion } from 'framer-motion'
import { ChevronDown, Facebook, Phone, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/douane11.jpg"
          alt="AS Douanes Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AS DOUANES <span className="text-custom-red">FOOTBALL CLUB</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Club de football affilié à la Ligue Provinciale de N'Djaména
            <br />
            Évoluant en Deuxième Division (D2)
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center"
            >
              Nous Rejoindre
            </motion.a>
            <motion.a
              href="/matches"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-custom-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
            >
              Prochains Matchs
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          <a href="https://www.facebook.com/profile.php?id=61567120363658" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-custom-red transition">
            <Facebook size={20} />
            <span>Facebook</span>
          </a>
          <a href="tel:+23565150115" className="flex items-center gap-2 hover:text-custom-red transition">
            <Phone size={20} />
            <span>+235 65 15 01 15</span>
          </a>
          <a href="mailto:asdouanestchad@gmail.com" className="flex items-center gap-2 hover:text-custom-red transition">
            <Mail size={20} />
            <span>asdouanestchad@gmail.com</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero