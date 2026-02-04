import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-custom-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/douanelogo.jpg"
                alt="AS Douanes Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">AS DOUANES</h3>
                <p className="text-sm text-gray-300">Football Club</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Club de football affilié à la Ligue Provinciale de N'Djaména,
              évoluant en deuxième division (D2).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  Le Club
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition">
                  Équipe
                </Link>
              </li>
              <li>
                <Link to="/matches" className="text-gray-300 hover:text-white transition">
                  Matchs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} />
                <a href="#">+235 66 78 79 02</a>/
                <a href="#">+235 65 15 01 15</a>

              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} />
                <a href="#">asdouanestchad@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-6">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567120363658"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            &copy; {currentYear} AS Douanes . Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Mentions légales
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer