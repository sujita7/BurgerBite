import React from 'react';
import './Landing.css';

export const Landing = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        
        <div className='navbar'>
        <h1>BurgerBite.</h1>
        <ul className='navbar-menu'>
          <li>home </li>
          <li>menu </li>
          <li>contact us</li>
        </ul>
        <div className='navbar-right'>
            <div className='navbar-search-icon'>
                <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"/>
            </div>
            <div className='navbar-cart-icon'>
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png"/>
            </div>
            <button>Sign in</button>
        </div>
        </div>
      </header>
      <section className="landing-hero">
        <img 
          src="https://mediaproxy.salon.com/width/1200/height/675/https://media2.salon.com/2022/05/c3dca504-39ac-4994-8186-3b0ee92c1586--2022-0504_abt-burgers_3x2_julia-gartland_115.png" 
          alt="Delicious food" 
          className="hero-image"
        />
        <div className="hero-content">
          <h2>Explore Our Menu</h2>
          <p>Explore a variety of burgers from BurgerBite in your area</p>
          <button className="hero-button" onClick={() => window.location.href='/menu'}>
            View Menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
