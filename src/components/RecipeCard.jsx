import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function RecipeCard({ recipe, delay = 0 }) {
  const ref = useScrollReveal()
  const ingredientCount = recipe.ingredients ? recipe.ingredients.length : 0

  return (
    <article className="recipe-card scroll-reveal" ref={ref} style={{ '--delay': `${delay}s` }}>
      {recipe.image && (
        <div className="img-wrap">
          <img src={recipe.image} alt={recipe.title} loading="lazy" />
          {ingredientCount > 0 && (
            <span className="recipe-badge">🥄 {ingredientCount} ingredients</span>
          )}
        </div>
      )}
      <div className="recipe-card-body">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="recipe-card-footer">
          <span className="recipe-tag">🍽️ Recipe</span>
        </div>
      </div>
    </article>
  )
}
