# TechKnow

TechKnow is an interactive web application designed to empower users of all skill levels to assess, strengthen, and expand their knowledge base in critical technology domains. It focuses on five key areas: HTML/CSS, React, SQL, JavaScript, and Python.

## Key Features
1.Comprehensive Question Bank: TechKnow boasts a diverse range of questions tailored to different experience levels, ensuring a well-rounded assessment of users' technical proficiency in each domain.

2.Instant Feedback: Users receive immediate feedback on their answers, allowing them to identify areas for improvement and solidify their understanding.

3.Targeted Learning: By identifying skill gaps, TechKnow provides users with a personalized learning path, guiding them towards relevant resources and materials.

## Benefits
1.Empowers Beginners: TechKnow offers a user-friendly platform for individuals new to coding to build a strong foundation in essential technologies.

2.Challenges Advanced Learners: With a variety of question difficulty levels, TechKnow provides a stimulating environment for experienced developers to sharpen their skills and stay up-to-date.

3.Fosters Continuous Learning: TechKnow promotes a growth mindset by encouraging active participation and continuous improvement in the ever-evolving world of technology.

## Target Audience
.Individuals seeking to enter the tech industry
.Developers looking to upskill and stay competitive
.Anyone interested in expanding their knowledge base in key technology domains

## Project Goals
1.To provide a comprehensive and engaging platform for assessing and developing technical skills.
2.To empower users with the confidence and knowledge needed to excel in their tech careers.
3.To bridge the gap between theoretical knowledge and practical application.

## Frontend Documentation
### Technologies Used
1.React: JavaScript library for building user interfaces.
2.Tailwind CSS: Utility-first CSS framework for styling.
3.Axios: HTTP client for making API requests.
4.React Router: For handling navigation.
## Key Components and Pages
1.Home Page (Home.js): Landing page with overview and navigation to login, signup, and topic selection.
2.Login Page (Login.js): User login interface.
3.Sign-Up Page (Signup.js): User registration interface.
4.Profile/Results Page (Profile.js): User profile and quiz history.
5.Quizzes Page (Quizes.js): Interface for taking quizzes.
6.Error Page (Error.js): Displays error messages for various scenarios.
## API Service (api.js)
1.Login: POST /auth/login
2.Signup: POST /auth/signup
3.Fetch Topics: GET /quiz/topics
4.Fetch Questions: GET /quiz/questions/:topic
5.Submit Quiz: POST /quiz/submit
6.Fetch Profile: GET /user/profile
## Backend Documentation
### Technologies Used
1.Flask: Web framework for Python.
2.Flask-RESTful: Extension for building REST APIs.
3.SQLAlchemy: ORM for database interactions.
4.Flask-Migrate: Extension for handling database migrations.
### Key Modules and Files
1.app/init.py: Initializes the Flask app and configurations.

2.app/models.py: Defines database models for Users, Questions, Scores, etc.

3.app/routes.py: Defines the main routes/endpoints of the application.

4.app/quiz/questions.py: Contains functions to fetch and manage questions.

5.app/auth/routes.py: Handles authentication-related routes (login, signup, logout).

6.instance/config.py: Configuration settings for different environments.
7.run.py: Entry point to run the Flask app.
8.requirements.txt: Python dependencies.
9.API Endpoints
  ### Authentication:
.POST /auth/signup: Sign up a new user.
.POST /auth/login: Log in a user.
.POST /auth/logout: Log out a user.
.Quiz:
.GET /quiz/topics: Get available quiz topics.
.GET /quiz/questions/
: Get questions for a specific topic.
.POST /quiz/submit: Submit quiz answers and get the score.
.User Profile:
.GET /user/profile: Get user profile information and quiz history.

## Getting Started
#### Prerequisites
.Node.js
.npm
.Python
.pip
.Installation

### Frontend
.Clone the repository:

.bash
.Copy code
git clone https://github.com/your-username/techknow.git
.cd techknow
.Navigate to the frontend directory:

.bash
.Copy code
cd frontend
.Install dependencies:

.bash
.Copy code
.npm install
.Run the development server:

.bash
.Copy code
.npm start

### Backend
1.Navigate to the backend directory:

.bash
.Copy code
.cd backend
.Create and activate a virtual environment:

.bash
.Copy code
.python -m venv venv
.source venv/bin/activate  # On Windows use `venv\Scripts\activate`
.Install dependencies:

.bash
.Copy code
.pip install -r requirements.txt
.Set up environment variables (if needed) and run database migrations:

bash
.Copy code
.flask db upgrade
.Run the Flask app:

bash
.Copy code
.flask run

## Contributing
.We welcome contributions! Please read our Contributing Guidelines for more details.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
1.React
2.Tailwind CSS
3.Axios
4.React Router
5.Flask
6.Flask-RESTful
7.SQLAlchemy
8.Flask-Migrate