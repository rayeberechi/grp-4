# The Quadra Quiz App

Welcome to The Quadra, the quiz app that'll briefly test your knowledge on either Computer Science, Programming or General Knowledge as per the difficulty level you choose.

**Navigation**

  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
  - [Routing](#routing)
  - [Known Issues and Future Enhancements](#known-issues-and-future-enhancements)
  - [Credits](#credits)

## Features

  - **Login/Sign Up Page**
  - **Timed Quizzes:** You've got 15 seconds per question – no dilly-dallying\!
  - **No Take-Backs:** Once you pick an answer, that's it\! Choose wisely.
  - **Score Tracking:** Points are awarded for correct answers.
  - **User-Friendly Interface** 
  - **Theme Toggle:** Switch between themes to suit your mood (or your eyeballs- lol).
  - The programming questions are hardcoded whilst the Computer and GK questions are fetched from Open Trivia DB
  - **Responsive**

## Screenshot

![The Quadra Quiz App Screenshot](public\Screenshot.png)

## Technologies Used

  - React
  - React Router DOM
  - React Icons
  - Axios
  - Local Storage
  - CSS
  - Font Awesome
  -  Google Font
  - Open Trivia DB

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [Repo link](https://github.com/rayeberechi/the-quadra
    cd the-quadra
    ```

2.  **Navigate to the project directory.**

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  **Open the application in your browser:**

      - Navigate to the address shown in your terminal.

## Project Structure

```
quadra-quiz-app/
├── public/
│   └── Images and Logos
├── src/
│   ├── component/
│   │   ├── LoginPage.jsx
│   │   ├── LoginPage.css
│   │   ├── SignupPage.jsx
│   │   ├── SignupPage.css
│   ├── components/
│   │   ├── QuizTitle.jsx
│   │   ├── TimeLine.jsx
│   │   └── Timer.jsx
│   ├── pages/
│   │   ├── GameOpt.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Quiz.jsx
│   │   └── Result.jsx
│   ├── App.jsx
│   ├── AppLight.css
│   ├── index.css
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Usage

1.  **Login Page (`/`):** This is the main page that prompts the user to login to start playing and prompts a first time user to sign up,.
2.  **Sign Up Page (`/signup`):** This page is for first time users to sign up and then it redirects them to login and progresses to the welcome page and then the quiz.
3. **Landing Page (`/landing`):**

      - Welcome to The Quadra\! Enter your name and get ready to progress to the game setup where you'll select a difficultry level and questions category.

4.  **Game Options (`/gameOpt`):**

      - Choose your quiz difficulty and category.
      - Hit "Enter Quiz" to progress to the main Quiz.

5.  **Quiz Page (`/quiz`):**

      - Answer questions within the 15-second time limit.
      - Use the "Next" and "Previous" buttons to navigate.

6.  **Result Page (`/result`):**

      - See your score and a message/trophy as per your perormance.
      - Restart the quiz or exit.

## Routing

  - **React Router DOM** is used for client-side routing.
  - Routes function as expected.

## Known Issues and Future Enhancements

  - **Theme Storage:** Currently, the theme is not fully functional, will be updated very soon.
  - **More Questions:** We need more questions to keep things interesting.
  - **Question Categories:** Expand the range of categories.
  - **User Profiles:** Add user profiles and history.
  - **Leaderboards:** Implement leaderboards for a competitive edge.
  - **Sound Effects:** Add sound effects for correct/incorrect answers and timers.
  - **Animations:** Add some animations to make it pop.
  - **Responsiveness:** Ensure that the app works seamlessly on all device types.

## Credits

  - **Font Awesome**
  - **React Community**
  - **Author:** Group 4
  - **Tutor:** Superior, Web3Bridge
