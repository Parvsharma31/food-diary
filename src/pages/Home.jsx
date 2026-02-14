import React, { useRef, useEffect, useState, useCallback } from 'react'
import RecipeList from './RecipeList'
import FeaturedCarousel from '../components/FeaturedCarousel'
import { useScrollRevealMultiple } from '../hooks/useScrollReveal'

const TAGLINES = [
  'Discover chef-inspired recipes from around the world.',
  'Explore world cuisines and bold new flavors.',
  'Level up your cooking with pro kitchen tips.',
  'Simple dishes anyone can make at home.',
]

function useTypewriter(phrases, typingSpeed = 50, pauseTime = 2500) {
  const [display, setDisplay] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), typingSpeed)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), typingSpeed / 2)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex(i => (i + 1) % phrases.length)
    }

    setDisplay(current.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, pauseTime])

  return display
}

export default function Home() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const tagline = useTypewriter(TAGLINES, 45, 2200)

  useScrollRevealMultiple(
    '.scroll-reveal, .scroll-reveal-up, .scroll-reveal-rotate, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale',
    sectionRef
  )

  // Mouse parallax for hero floating foods
  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }, [])

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      {/* Hero */}
      <div className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
        <div className="floating-foods">
          {['🍕', '🍜', '🥑', '🍰', '🌮', '🍣', '🥐', '🫕'].map((emoji, i) => (
            <span
              key={i}
              className="floating-food"
              style={{
                transform: `translate(${mousePos.x * (10 + i * 5)}px, ${mousePos.y * (10 + i * 5)}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-emoji-row">
            <span>🍝</span><span>🥘</span><span>🍳</span><span>🥗</span><span>🍰</span>
          </div>
          <h1>
            Your Daily <span className="gradient-text">Food Diary</span>
          </h1>
          <p className="hero-tagline">
            {tagline}<span className="typewriter-cursor">|</span>
          </p>
          <div className="hero-cta">
            <a href="#cuisines" className="btn-hero">Explore Cuisines 🌍</a>
            <a href="#recipes" className="btn-ghost">View Recipes</a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow" />
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* Featured Carousel */}
      <section style={{ padding: '7rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-header scroll-reveal">
          <span className="section-emoji">🌟</span>
          <h2>Featured Recipes</h2>
          <p>Hand-picked dishes we can't stop cooking</p>
          <span className="header-line" />
        </div>
        <div className="scroll-reveal-scale" style={{ '--delay': '0.2s' }}>
          <FeaturedCarousel />
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="collections">
        <div className="container">
          <div className="section-header scroll-reveal">
            <span className="section-emoji">📚</span>
            <h2>Collections</h2>
            <p>Curated recipe collections for every mood</p>
            <span className="header-line" />
          </div>
          <div className="collection-list">
            <article className="collection-card scroll-reveal-up tilt-card" style={{ '--delay': '0s' }}>
              <img src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80" alt="Comfort Noodles" />
              <div className="collection-overlay">
                <h3>🍜 Comfort Noodles</h3>
                <p>Warm, slurpable bowls for cozy nights.</p>
              </div>
            </article>
            <article className="collection-card scroll-reveal-up tilt-card" style={{ '--delay': '0.2s' }}>
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&w=800&q=80" alt="Breakfast & Brunch" />
              <div className="collection-overlay">
                <h3>🥞 Breakfast &amp; Brunch</h3>
                <p>Sweet and savory starts to your day.</p>
              </div>
            </article>
            <article className="collection-card scroll-reveal-up tilt-card" style={{ '--delay': '0.4s' }}>
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" alt="Fresh Salads" />
              <div className="collection-overlay">
                <h3>🥗 Fresh Salads</h3>
                <p>Bright, healthy, and refreshing bowls.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Kitchen Tips */}
      <section id="tips" className="tips-section">
        <div className="container">
          <div className="section-header scroll-reveal">
            <span className="section-emoji">💡</span>
            <h2>Kitchen Tips</h2>
            <p>Pro secrets to level up your cooking game</p>
            <span className="header-line" />
          </div>
          <div className="tips-grid">
            <div className="tip scroll-reveal-rotate tilt-card" style={{ '--delay': '0s' }}>
              <span className="tip-icon">🧂</span>
              <h4>Salt Pasta Water</h4>
              <p>Salt generously so the pasta itself has flavor — it should taste like the sea.</p>
            </div>
            <div className="tip scroll-reveal-rotate tilt-card" style={{ '--delay': '0.2s' }}>
              <span className="tip-icon">🥩</span>
              <h4>Rest Meat</h4>
              <p>Let roasted or grilled meat rest before slicing to keep it juicy.</p>
            </div>
            <div className="tip scroll-reveal-rotate tilt-card" style={{ '--delay': '0.4s' }}>
              <span className="tip-icon">🌿</span>
              <h4>Finish with Herbs</h4>
              <p>Add fresh herbs at the end to preserve their aroma and color.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section id="recipes" style={{ padding: '7rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-header scroll-reveal">
          <span className="section-emoji">📖</span>
          <h2>Our Recipes</h2>
          <p>Simple, delicious dishes anyone can make</p>
          <span className="header-line" />
        </div>
        <RecipeList />
      </section>
    </section>
  )
}
