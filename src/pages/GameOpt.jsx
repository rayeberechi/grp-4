import React, { useState } from 'react';
import axios from 'axios';
import { easyQuestions, mediumQuestions, hardQuestions } from '../questions';

const GameOpt = ({ setQuestions, setPage }) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleDifficulty = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };

    const handleCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleEnterQuiz = async () => {
        if (!selectedDifficulty || !selectedCategory) return;

        let questionSet;
        if (selectedCategory === 'prog') {
            switch (selectedDifficulty) {
                case 'easy':
                    questionSet = easyQuestions;
                    break;
                case 'medium':
                    questionSet = mediumQuestions;
                    break;
                case 'hard':
                    questionSet = hardQuestions;
                    break;
                default:
                    return;
            }
        } else {
            let apiUrl;
            switch (selectedCategory) {
                case 'comp':
                    apiUrl = `https://opentdb.com/api.php?amount=5&category=18&difficulty=${selectedDifficulty}&type=multiple`;
                    break;
                case 'g-k':
                    apiUrl = `https://opentdb.com/api.php?amount=5&category=9&difficulty=${selectedDifficulty}&type=multiple`;
                    break;
                default:
                    return;
            }

            try {
                const response = await axios.get(apiUrl);
                questionSet = response.data.results.map((q) => ({
                question: decodeHtml(q.question),
                options: q.incorrect_answers.map(decodeHtml).concat(decodeHtml(q.correct_answer)).sort(() => Math.random() - 0.5),
                answer: decodeHtml(q.correct_answer),
                difficulty: selectedDifficulty,
                }));
            } catch (error) {
                console.error('Error fetching questions:', error);
                return;
            }
        }
        setQuestions(questionSet);
        setPage('quiz');
        
    };

    return (
        <div className="quiz-options">
            <div className="difficulty">
                <h1>Select Difficulty Level:</h1>
                <div className="dif-btn">
                    <button className={`easy ${selectedDifficulty === 'easy' ? 'selected' : ''}`} onClick={() => handleDifficulty('easy')}>Easy</button>
                    <button className={`medium ${selectedDifficulty === 'medium' ? 'selected' : ''}`} onClick={() => handleDifficulty('medium')}>Medium</button>
                    <button className={`hard ${selectedDifficulty === 'hard' ? 'selected' : ''}`} onClick={() => handleDifficulty('hard')}>Hard</button>
                </div>
            </div>

            <div className="category">
                <h1>Select Quiz Category:</h1>
                <div className="cat-btn">
                    <button className={`prog ${selectedCategory === 'prog' ? 'selected' : ''}`} onClick={() => handleCategory('prog')}>Programming</button>
                    <button className={`comp ${selectedCategory === 'comp' ? 'selected' : ''}`} onClick={() => handleCategory('comp')}>Computer Science</button>
                    <button className={`g-k ${selectedCategory === 'g-k' ? 'selected' : ''}`} onClick={() => handleCategory('g-k')}>General Knowledge</button>
                </div>
            </div>
            <button className='enter-quiz' disabled={!selectedDifficulty || !selectedCategory} onClick={handleEnterQuiz}>Enter Quiz</button>
        </div>
    );
};

export default GameOpt;