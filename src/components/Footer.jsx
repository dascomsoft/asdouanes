import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const phoneNumbers = [
    { number: "+235 66 78 79 02", label: "Communicateur" },
    { number: "+235 65 15 01 15", label: "Bureau principal" },
    { number: "+235 66 24 11 36", label: "Secrétaire général" },
    { number: "+235 66 05 29 48", label: "Directeur sportif" }
  ]

  const email = "asdouanestchad@gmail.com"
  const address = "Walia, 9ème arrondissement, N'Djaména, Tchad"

  return (
    <footer className="bg-gradient-to-br from-custom-blue to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/douanelogo.jpg"
                alt="AS Douanes Logo"
                className="h-14 w-14 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold tracking-wide">AS DOUANES</h3>
                <p className="text-sm text-blue-200 font-medium">Football Club</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Club de football affilié à la Ligue Provinciale de N'Djaména,
              évoluant en deuxième division (D2). Fier représentant des douanes tchadiennes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-blue-400/30">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                >
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                >
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Le Club
                </Link>
              </li>
              <li>
                <Link 
                  to="/team" 
                  className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                >
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Équipe
                </Link>
              </li>
              <li>
                <Link 
                  to="/matches" 
                  className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                >
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Matchs
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                >
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-blue-400/30">Contact</h4>
            <div className="space-y-4">
              {/* Adresse */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <MapPin size={16} className="text-blue-300" />
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {address}
                </p>
              </div>

              {/* Numéros de téléphone */}
              <div className="space-y-2">
                {phoneNumbers.map((phone, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="mt-1">
                      <Phone size={14} className="text-blue-300" />
                    </div>
                    <div>
                      <a 
                        href={`tel:${phone.number.replace(/\s/g, '')}`}
                        className="text-blue-100 hover:text-white text-sm transition-colors duration-300 block"
                      >
                        {phone.number}
                      </a>
                      <span className="text-blue-300/80 text-xs block mt-0.5">{phone.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="mt-1">
                  <Mail size={16} className="text-blue-300" />
                </div>
                <a 
                  href={`mailto:${email}`}
                  className="text-blue-100 hover:text-white text-sm transition-colors duration-300"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-blue-400/30">Suivez-nous</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61567120363658"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900/50 p-3 rounded-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105"
                title="Suivez-nous sur Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-900/50 p-3 rounded-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105"
                title="Suivez-nous sur Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-900/50 p-3 rounded-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105"
                title="Suivez-nous sur Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            
            {/* Newsletter */}
            <div className="bg-blue-900/30 rounded-lg p-4">
              <p className="text-sm text-blue-100 mb-3">Restez informé des actualités du club</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 bg-white/10 border border-blue-300/30 rounded px-3 py-2 text-sm text-white placeholder-blue-200/50 focus:outline-none focus:border-blue-300"
                />
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-300"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400/20 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <div className="text-center md:text-left">
            <p className="text-blue-200 text-sm">
              &copy; {currentYear} Association Sportive des Douanes de N'Djaména. Tous droits réservés.
            </p>
            <p className="text-blue-300/70 text-xs mt-1">
              Affilié à la Fédération Tchadienne de Football
            </p>
          </div>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-blue-200 hover:text-white text-sm transition-colors duration-300 hover:underline"
            >
              Mentions légales
            </a>
            <a 
              href="#" 
              className="text-blue-200 hover:text-white text-sm transition-colors duration-300 hover:underline"
            >
              Politique de confidentialité
            </a>
            <a 
              href="#" 
              className="text-blue-200 hover:text-white text-sm transition-colors duration-300 hover:underline"
            >
              Plan du site
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-blue-200 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1"
          >
            <span>↑</span>
            Retour en haut
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer