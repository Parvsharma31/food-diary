import React, { useEffect, useState } from 'react'

export default function FeaturedCarousel() {
  const [items, setItems] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch('/data/recipes.json')
      .then(res => res.json())
      .then(rs => setItems(rs.slice(0, 4)))
      .catch(() => setItems([]))
  }, [])

  useEffect(() => {
    if (items.length <= 1) return
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [items])

  if (!items || items.length === 0) return null

  return (
    <div className="featured-carousel">
      {items.map((r, i) => (
        <div
          className={`featured-item ${i === index ? 'active' : ''}`}
          key={r.id}
        >
          {r.image && <img src={r.image} alt={r.title} />}
          <div className="featured-meta">
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
