import React, { useState, useEffect } from "react";
import QuizTitle from "./components/QuizTitle";
import LandingPage from "./pages/LandingPage";
import GameOpt from "./pages/GameOpt";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import './styles.css';
// import './AppLight.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [isLightTheme, setIsLightTheme] = useState(localStorage.getItem('theme') === 'light');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.toggle('light-theme', isLightTheme);
    }, [isLightTheme]);

    const toggleTheme = () => {
        const newTheme = !isLightTheme;
        setIsLightTheme(newTheme);
        localStorage.setItem('theme', newTheme ? 'light' : 'dark');
    };

    const setPage = (page) => {
        navigate(`/${page}`);
    };

    return (
        <div className={`App ${isLightTheme ? 'App-light light-theme' : 'App-dark'}`}>
            <header>
                <QuizTitle toggleTheme={toggleTheme} isLightTheme={isLightTheme}/>
            </header>
            <Routes>
                <Route path="/" element={<LandingPage setPage={setPage} />} />
                <Route path="/gameOpt" element={<GameOpt setQuestions={setQuestions} setPage={setPage} />} />
                <Route path="/quiz" element={<Quiz questions={questions} userAnswers={userAnswers} setUserAnswers={setUserAnswers} score={score} setScore={setScore} setPage={setPage} />} />
                <Route path="/result" element={<Result score={score} questions={questions} setPage={setPage} setScore={setScore} />} />
            </Routes>
        </div>
    );
}

export default App;