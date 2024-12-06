import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Connects with React
  .init({
    resources: {
      en: {
        translation: {
          Login: 'Login',
          Register: 'Register',
          'Call Us': 'Call Us',
          'Email Us': 'Email Us',
          'Search for Course': 'Search for Course',
          Categories: 'Categories',
          'Search Now': 'Search Now',
          'Your Hub for Knowledge & Assessment': 'Your Hub for Knowledge & Assessment',
          'Dive into a diverse range of quizzes, track your progress, and sharpen your skills with our tailored resources. Whether you are a student or professional, QuizHub is here to guide you through a dynamic learning experience.':
            'Dive into a diverse range of quizzes, track your progress, and sharpen your skills with our tailored resources. Whether you are a student or professional, QuizHub is here to guide you through a dynamic learning experience.',
        },
      },
      fr: {
        translation: {
          Login: 'Connexion',
          Register: 'S’inscrire',
          'Call Us': 'Appelez-nous',
          'Email Us': 'Envoyez-nous un e-mail',
          'Search for Course': 'Rechercher un cours',
          Categories: 'Catégories',
          'Search Now': 'Rechercher maintenant',
          'Your Hub for Knowledge & Assessment': 'Votre hub pour la connaissance et l’évaluation',
          'Dive into a diverse range of quizzes, track your progress, and sharpen your skills with our tailored resources. Whether you are a student or professional, QuizHub is here to guide you through a dynamic learning experience.':
            'Plongez dans une gamme diversifiée de quiz, suivez vos progrès et aiguisez vos compétences avec nos ressources sur mesure. Que vous soyez étudiant ou professionnel, QuizHub est là pour vous guider à travers une expérience d’apprentissage dynamique.',
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
