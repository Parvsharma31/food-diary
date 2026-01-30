import React from 'react'

const chefs = [
  { id: '1', name: 'Aiko Tanaka', bio: 'Ramen specialist and broth master.', image: '/assets/chef-aiko.svg' },
  { id: '2', name: 'Marco Ricci', bio: 'Traditional Italian techniques with modern twists.', image: '/assets/chef-marco.svg' },
  { id: '3', name: 'Lena Martinez', bio: 'Creative brunch and pastry chef.', image: '/assets/chef-lena.svg' }
]

export default function FamousChefs() {
  return (
    <section id="chefs" className="chefs container">
      <h2>Famous Chefs</h2>
      <div className="chefs-grid">
        {chefs.map(c => (
          <article className="chef-card" key={c.id}>
            <img
              className="chef-avatar"
              src={`/assets/photos/${c.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = c.image }}
              alt={c.name}
            />
            <div>
              <h3>{c.name}</h3>
              <p>{c.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
