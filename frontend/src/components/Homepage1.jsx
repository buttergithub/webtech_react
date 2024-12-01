/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../assets/assets/image/header1.jpg';
import logoImage from '../assets/assets/image/img1.png';

const Homepage1 = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      color: '#fff',
      minHeight: '100vh'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: 'rgba(0, 0, 0, 0.6)'
      }}>
        <div className="nav__logo">QuizHub
        <img src={logoImage} alt="QuizHub Logo" style={{ height: '50px' }} />
        </div>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1rem'
        }}>
          <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
          <li><Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link></li>
          <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
          <li><a href="#"><i className="ri-facebook-circle-fill"></i></a></li>
          <li><a href="#"><i className="ri-pinterest-line"></i></a></li>
          <li><a href="#"><i className="ri-instagram-line"></i></a></li>
        </ul>
        <div className="nav__contact" style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span><i className="ri-phone-line"></i></span>
            <div>
              <p>Call Us</p>
              <h4>+250782413479</h4>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span><i className="ri-mail-line"></i></span>
            <div>
              <p>Email Us</p>
              <h4>uwizeyengogasandra@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="language-switcher">
          <button onClick={() => toggleLanguage('en')}>English</button>
          <button onClick={() => toggleLanguage('fr')}>French</button>
        </div>
      </nav>

      <header style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        margin: '2rem'
      }}>
        <div className="header__image">
          <img 
            src={headerImage} 
            alt="Welcome to QuizHub" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '2rem'
            }}
          />
        </div>
        <div className="header__content">
          <h1>Your Hub for Knowledge & Assessment</h1>
          <p>
            Dive into a diverse range of quizzes, track your progress, and sharpen your skills with our tailored resources.
            Whether you are a student or professional, QuizHub is here to guide you through a dynamic learning experience.
          </p>
          <form style={{ marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '5px', padding: '0.5rem 1rem' }}>
                <span><i className="ri-search-line"></i></span>
                <input type="text" placeholder="Search for Course" style={{ border: 'none', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '5px', padding: '0.5rem 1rem' }}>
                <span><i className="ri-arrow-down-s-line"></i></span>
                <input type="text" placeholder="Categories" style={{ border: 'none', outline: 'none' }} />
              </div>
            </div>
            <button type="submit" style={{
              backgroundColor: '#2575fc',
              color: '#fff',
              padding: '0.7rem 1.5rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Search Now
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Homepage1;
