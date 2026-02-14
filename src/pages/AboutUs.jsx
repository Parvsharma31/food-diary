import React, { useRef, useState, useEffect } from 'react'
import { useScrollRevealMultiple } from '../hooks/useScrollReveal'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref} className="stat-number">{count}{suffix}</span>
}

export default function AboutUs() {
  const ref = useRef(null)
  useScrollRevealMultiple('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right', ref)

  return (
    <section id="about" className="about-us container" ref={ref}>
      <div className="section-header scroll-reveal">
        <span className="section-emoji">❤️</span>
        <h2>About Us</h2>
        <p>Our story, our passion, our kitchen</p>
        <span className="header-line" />
      </div>
      <div className="about-grid">
        <div className="about-text scroll-reveal-left" style={{ '--delay': '0.1s' }}>
          <p><strong>Food Diary</strong> is a small project showcasing home-cooked favorites and chef-inspired ideas. We curate simple, delicious recipes and practical kitchen tips to help you cook with confidence.</p>
          <p>Our mission is to make great food approachable: clear recipes, helpful tips, and a few chef secrets to elevate your everyday meals.</p>
          <div className="about-stats">
            <div className="stat-item">
              <AnimatedCounter target={50} suffix="+" />
              <span className="stat-label">Recipes</span>
            </div>
            <div className="stat-item">
              <AnimatedCounter target={4} suffix="" duration={1200} />
              <span className="stat-label">Cuisines</span>
            </div>
            <div className="stat-item">
              <AnimatedCounter target={3} suffix="" duration={1000} />
              <span className="stat-label">Chefs</span>
            </div>
          </div>
        </div>
        <div className="about-photos scroll-reveal-right" style={{ '--delay': '0.3s' }}>
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80" alt="Cooking" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=600&q=80" alt="Kitchen" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&q=80" alt="Ingredients" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
