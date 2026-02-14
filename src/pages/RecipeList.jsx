import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'

export default function RecipeList() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('/data/recipes.json')
      .then(res => res.json())
      .then(setRecipes)
      .catch(err => console.error('Failed to load recipes', err))
  }, [])

  if (recipes.length === 0) return <p style={{ textAlign: 'center', padding: '2rem', color: '#6B5B4E' }}>Loading recipes...</p>

  return (
    <div className="recipe-list">
      {recipes.map((r, i) => <RecipeCard key={r.id} recipe={r} delay={i * 0.1} />)}
    </div>
  )
}
