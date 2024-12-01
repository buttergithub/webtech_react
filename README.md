# OnlineQuizApp - Interactive Learning Platform

## Project Description
OnlineQuizApp is an innovative online assessment platform that transforms traditional testing into an engaging learning experience. Built with modern web technologies, it delivers seamless quiz-taking capabilities while providing valuable insights for both educators and learners.

## Business Value Proposition
- **Educational Impact**: Enhances learning through interactive assessments
- **Time Efficiency**: Automated grading and instant feedback
- **Data Insights**: Comprehensive analytics on student performance
- **Accessibility**: 24/7 access to learning materials
- **Cost-Effective**: Reduces administrative overhead for institutions

## Technical Architecture

### Frontend
- React.js for dynamic user interface
- Material-UI components
- Redux for state management
- Axios for API integration

### Backend
- Spring Boot framework
- Java 22
- Maven for dependency management
- RESTful API architecture
- JPA/Hibernate for data persistence
- Spring Security for authentication

### Database
- MySQL database
- JPA repositories
- Hibernate ORM

### Key Features
- Dynamic quiz generation
- Real-time scoring
- Progress tracking
- Performance analytics
- Mobile-responsive design

## Authentication System

### Sign Up Flow
1. User clicks "register" button
2. System displays registration form requesting:
   - Username
   - Email
   - Password
3. Spring Security validates input data
4. Creates new user record in MySQL database
5. Returns JWT token for authentication

### Sign In Process
1. User enters credentials on login page
2. Spring Security validates credentials
3. Upon successful validation:
   - Generates JWT token
   - Creates user session
   - Redirects to dashboard
4. Error handling for invalid credentials

