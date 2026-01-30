import React from 'react'

export default function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      {recipe.image && (
        <div className="img-wrap" style={{ backgroundImage: "url('/assets/noodles.svg')" }}>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      )}
      <div className="recipe-card-body">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
      </div>
    </article>
  )
}
