import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import FeaturedCarousel from '../components/FeaturedCarousel'

export default function RecipeList() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('/data/recipes.json')
      .then(res => res.json())
      .then(setRecipes)
      .catch(err => console.error('Failed to load recipes', err))
  }, [])

  if (recipes.length === 0) return <p>Loading recipes...</p>

  return (
    <div>
      <FeaturedCarousel recipes={recipes} />
      <section className="recipe-list">
        {recipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
      </section>
    </div>
  )
}
