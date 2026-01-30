import React from 'react'
import RecipeList from './RecipeList'
import FeaturedCarousel from '../components/FeaturedCarousel'

export default function Home() {
  return (
    <section id="home" className="home-section">
      <FeaturedCarousel />

      <section id="collections" className="collections">
        <div className="container">
          <h2>Collections</h2>
          <div className="collection-list">
            <article className="collection-card" style={{ backgroundImage: "url('/assets/ramen.svg')" }}>
              <div className="collection-overlay">
                <h3>Comfort Noodles</h3>
                <p>Warm, slurpable bowls for cozy nights.</p>
              </div>
            </article>

            <article className="collection-card" style={{ backgroundImage: "url('/assets/pancakes.svg')" }}>
              <div className="collection-overlay">
                <h3>Breakfast & Brunch</h3>
                <p>Sweet and savory starts to your day.</p>
              </div>
            </article>

            <article className="collection-card" style={{ backgroundImage: "url('/assets/salad.svg')" }}>
              <div className="collection-overlay">
                <h3>Fresh Salads</h3>
                <p>Bright, healthy, and refreshing bowls.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="tips" className="tips-section">
        <div className="container">
          <h2>Kitchen Tips</h2>
          <div className="tips-grid">
            <div className="tip">
              <h4>Salt Pasta Water</h4>
              <p>Salt generously so the pasta itself has flavor — it should taste like the sea.</p>
            </div>
            <div className="tip">
              <h4>Rest Meat</h4>
              <p>Let roasted or grilled meat rest before slicing to keep it juicy.</p>
            </div>
            <div className="tip">
              <h4>Finish with Herbs</h4>
              <p>Add fresh herbs at the end to preserve their aroma and color.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="recipes">
        <RecipeList />
      </section>
    </section>
  )
}
