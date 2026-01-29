import { Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Experiences from './components/Experiences'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import ExperiencesPage from './pages/ExperiencesPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Experiences />
      <Gallery />
      <CTA />
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
