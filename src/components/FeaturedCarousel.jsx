import React, { useEffect, useState } from 'react'

export default function FeaturedCarousel() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/data/recipes.json')
      .then(res => res.json())
      .then(rs => setItems(rs.slice(0, 4)))
      .catch(() => setItems([]))
  }, [])

  if (!items || items.length === 0) return null

  return (
    <div className="featured-carousel" aria-hidden={items.length === 0}>
      {items.map((r, i) => (
        <div
          className="featured-item"
          key={r.id}
          style={{ animationDelay: `${i * (12 / Math.max(1, items.length))}s` }}
        >
          {r.image && <img src={r.image} alt={r.title} />}
          <div className="featured-meta">
            <h3 className="featured-title">{r.title}</h3>
            <p>{r.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
