import React from 'react'

const cuisines = [
  { id: 'it', name: 'Italian', desc: 'Pasta, risotto, and southern comfort.', image: '/assets/italian.svg', imageName: 'italian' },
  { id: 'cn', name: 'Chinese', desc: 'Wok, noodles, and bold flavors.', image: '/assets/ramen.svg', imageName: 'chinese' },
  { id: 'mx', name: 'Mexican', desc: 'Bright, spicy, and bold dishes.', image: '/assets/mexican.svg', imageName: 'mexican' },
  { id: 'us', name: 'American', desc: 'Comfort classics and modern twists.', image: '/assets/american.svg', imageName: 'american' }
]

export default function Cuisines() {
  return (
    <section id="cuisines" className="cuisines container">
      <h2>Cuisines</h2>
      <div className="cuisines-grid">
        {cuisines.map(c => (
          <article className="cuisine-card" key={c.id}>
            <img
              className="cuisine-image"
              src={`/assets/photos/${c.imageName || c.id}.jpg`}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = c.image }}
              alt={c.name}
            />
            <div className="cuisine-body">
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
