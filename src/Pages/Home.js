import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link
import './Home.css';
import laptopImage from "../Assets/laptopImage.png";

const Home = () => {
  return (
    <div className='body'>
    <section className="hero">
      <div className="hero-content">
        <h1>
          Upgrade Your <br /> Work & Play
        </h1>
        <p>Explore the latest laptops from top brands at unbeatable prices.</p>
        <Link to="/buy-laptop" className="hero-btn">
          Shop Now
        </Link>
      </div>
      <div className="hero-image">
        <img src={laptopImage} alt="Laptop" />
      </div>
    </section>
    </div>
  );
};

export default Home;
