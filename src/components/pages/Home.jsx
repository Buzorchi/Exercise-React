import React from 'react'
import { Link } from 'react-router-dom';
// import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <Link to="/product" className="nav-link">Product</Link>
        <Link to="/formPage" className="nav-link">Form</Link>
      </nav>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>Explore our products and fill out the form.</p>
      </div>
    </div>
  )
}

export default Home
