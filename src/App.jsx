import React, { useEffect, useState, useCallback } from 'react'
import { useTheme } from './context/ThemeContext'
import Home from './pages/Home'
import Cuisines from './pages/Cuisines'
import FamousChefs from './pages/FamousChefs'
import AboutUs from './pages/AboutUs'
import LoginModal from './components/LoginModal'

export default function App() {
  const [active, setActive] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('vibe_user')) } catch { return null }
  })
  const [loginOpen, setLoginOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    if (!sections.length) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { root: null, rootMargin: '-35% 0px -35% 0px', threshold: 0.1 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 500)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
    setScrollProgress(progress)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  function handleNavClick() { setMenuOpen(false) }
  function handleLogin(u) {
    setUser(u)
    localStorage.setItem('vibe_user', JSON.stringify(u))
    setLoginOpen(false)
  }
  function handleLogout() {
    setUser(null)
    localStorage.removeItem('vibe_user')
  }

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-track">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="site-title">
            <span className="logo-emoji">🍽️</span>
            <span className="title-text">Food Diary</span>
          </a>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
          <div className={`nav-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
          <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#home" className={active === 'home' ? 'active' : ''} onClick={handleNavClick}>Home</a>
            <a href="#cuisines" className={active === 'cuisines' ? 'active' : ''} onClick={handleNavClick}>Cuisines</a>
            <a href="#chefs" className={active === 'chefs' ? 'active' : ''} onClick={handleNavClick}>Famous Chefs</a>
            <a href="#about" className={active === 'about' ? 'active' : ''} onClick={handleNavClick}>About Us</a>
            <button className="btn-ghost theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" style={{ padding: '0.5rem', fontSize: '1.2rem', lineHeight: 1 }}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            {user ? (
              <button className="btn-ghost" onClick={handleLogout}>Hi, {user.name} — Logout</button>
            ) : (
              <button className="btn-primary" onClick={() => { setLoginOpen(true); setMenuOpen(false) }}>Sign in</button>
            )}
          </nav>
        </div>
      </header>

      <main>
        <Home />

        {/* Food Emoji Marquee Divider */}
        <div className="marquee-divider" aria-hidden="true">
          <div className="marquee-track">
            <span className="marquee-content">🍕 🍜 🥑 🍰 🌮 🍣 🥘 🍳 🥗 🍝 🧁 🍔 🌯 🥟 🍗 🫕 🥐 🍕 🍜 🥑 🍰 🌮 🍣 🥘 🍳 🥗 🍝 🧁 🍔 🌯 🥟 🍗 🫕 🥐</span>
            <span className="marquee-content">🍕 🍜 🥑 🍰 🌮 🍣 🥘 🍳 🥗 🍝 🧁 🍔 🌯 🥟 🍗 🫕 🥐 🍕 🍜 🥑 🍰 🌮 🍣 🥘 🍳 🥗 🍝 🧁 🍔 🌯 🥟 🍗 🫕 🥐</span>
          </div>
        </div>

        <Cuisines />
        <FamousChefs />
        <AboutUs />
      </main>

      <svg className="footer-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1360,50 1440,40 L1440,80 L0,80 Z" fill="#1A1A2E" />
      </svg>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo"><span>🍽️</span> Food Diary</div>
            <p>Curating simple, delicious recipes and practical kitchen tips. Made with love and a dash of creativity.</p>
          </div>
          <div className="footer-links">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#cuisines">Cuisines</a>
            <a href="#chefs">Famous Chefs</a>
            <a href="#about">About Us</a>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="footer-social-icons">
              <button className="social-icon" aria-label="Twitter">𝕏</button>
              <button className="social-icon" aria-label="Instagram">📷</button>
              <button className="social-icon" aria-label="YouTube">▶</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Food Diary. Crafted with ❤️ and good food.</div>
      </footer>

      <button className={`scroll-top ${showScrollTop ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">↑</button>

      {loginOpen && (
        <React.Suspense fallback={null}>
          <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onLogin={handleLogin} />
        </React.Suspense>
      )}
    </div>
  )
}
