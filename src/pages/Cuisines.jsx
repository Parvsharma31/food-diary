import React, { useRef } from 'react'
import { useScrollRevealMultiple } from '../hooks/useScrollReveal'

const cuisines = [
  { id: 'it', name: 'Italian', emoji: '🇮🇹', food: '🍝', desc: 'Pasta, risotto, and southern comfort.', image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=800&q=80' },
  { id: 'cn', name: 'Chinese', emoji: '🇨🇳', food: '🥡', desc: 'Wok, noodles, and bold flavors.', image: 'https://images.unsplash.com/photo-1541696490-8744a5dbf223?auto=format&fit=crop&w=800&q=80' },
  { id: 'mx', name: 'Mexican', emoji: '🇲🇽', food: '🌮', desc: 'Bright, spicy, and bold dishes.', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80' },
  { id: 'in', name: 'Indian', emoji: '🇮🇳', food: '🍛', desc: 'Rich spices and aromatic curries.', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80' }
]

export default function Cuisines() {
  const ref = useRef(null)
  useScrollRevealMultiple('.scroll-reveal, .scroll-reveal-scale', ref)

  return (
    <section id="cuisines" className="cuisines container" ref={ref}>
      <div className="section-header scroll-reveal">
        <span className="section-emoji">🌍</span>
        <h2>World Cuisines</h2>
        <p>Explore flavors from around the globe</p>
        <span className="header-line" />
      </div>
      <div className="cuisines-grid">
        {cuisines.map((c, i) => (
          <article className="cuisine-card scroll-reveal-scale" key={c.id} style={{ '--delay': `${i * 0.18}s` }}>
            <span className="cuisine-badge">{c.food}</span>
            <img className="cuisine-image" src={c.image} alt={c.name} loading="lazy" />
            <div className="cuisine-body">
              <h3>{c.emoji} {c.name}</h3>
              <p>{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
