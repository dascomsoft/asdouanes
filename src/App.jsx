import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import MatchesPage from './pages/MatchesPage'
import GalleryPage from './pages/GalleryPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import ArticlePage from './pages/ArticlePage'

function App() {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App