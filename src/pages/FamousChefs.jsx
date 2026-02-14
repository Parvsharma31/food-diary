import React, { useRef } from 'react'
import { useScrollRevealMultiple } from '../hooks/useScrollReveal'

const chefs = [
  { id: '1', name: 'Aiko Tanaka', specialty: '🍜 Ramen Specialist', bio: 'Ramen specialist and broth master — perfecting the art of umami for over a decade.', image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=400&q=80' },
  { id: '2', name: 'Marco Ricci', specialty: '🍝 Italian Master', bio: 'Traditional Italian techniques with modern twists that honor generations of flavor.', image: 'https://images.unsplash.com/photo-1583394238232-9636231d3604?auto=format&fit=crop&w=400&q=80' },
  { id: '3', name: 'Lena Martinez', specialty: '🥐 Pastry Chef', bio: 'Creative brunch and pastry chef, turning simple ingredients into edible art.', image: 'https://images.unsplash.com/photo-1595273670150-db0a3d39074f?auto=format&fit=crop&w=400&q=80' }
]

export default function FamousChefs() {
  const ref = useRef(null)
  useScrollRevealMultiple('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right', ref)

  return (
    <section id="chefs" className="chefs container" ref={ref}>
      <div className="section-header scroll-reveal">
        <span className="section-emoji">👨‍🍳</span>
        <h2>Famous Chefs</h2>
        <p>The culinary artists behind our inspiration</p>
        <span className="header-line" />
      </div>
      <div className="chefs-grid">
        {chefs.map((c, i) => (
          <article className={`chef-card ${i % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`} key={c.id} style={{ '--delay': `${i * 0.2}s` }}>
            <img className="chef-avatar" src={c.image} alt={c.name} loading="lazy" />
            <div className="chef-info">
              <h3>{c.name}</h3>
              <span className="chef-specialty">{c.specialty}</span>
              <p>{c.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
