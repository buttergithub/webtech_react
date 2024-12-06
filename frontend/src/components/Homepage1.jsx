// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import headerImage from '../assets/assets/image/home1.jpg';
import logoImage from '../assets/assets/image/img1.png';

const Homepage1 = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          background: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className="nav__logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logoImage} alt="QuizHub Logo" style={{ height: '50px', borderRadius: '50%' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>QuizHub</span>
        </div>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '1rem',
          }}
        >
          <li>
            <Link
              to="/login"
              style={{
                color: '#fff',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                background: 'rgba(255, 255, 255, 0.2)',
                transition: '0.3s',
              }}
            >
              {t('Login')}
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              style={{
                color: '#fff',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                background: 'rgba(255, 255, 255, 0.2)',
                transition: '0.3s',
              }}
            >
              {t('Register')}
            </Link>
          </li>
        </ul>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
          }}
        >
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
            }}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
      </nav>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '4rem 2rem',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '8px',
          margin: '2rem',
        }}
      >
        <h1>{t('Your Hub for Knowledge & Assessment')}</h1>
        <p>
          {t(
            'Dive into a diverse range of quizzes, track your progress, and sharpen your skills with our tailored resources. Whether you are a student or professional, QuizHub is here to guide you through a dynamic learning experience.'
          )}
        </p>
      </header>
    </div>
  );
};

export default Homepage1;
