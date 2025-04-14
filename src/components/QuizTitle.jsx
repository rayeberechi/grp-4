import React from 'react';

const QuizTitle = ({ toggleTheme, isLightTheme }) => {
    return (
        <div className='header'>
            <div className="quiz-title">
                <img src="/The-Quadra-logo.png" alt="Quadra logo" />
            </div>

            <div className="theme" onClick={toggleTheme}>
                <i className={`fa-solid ${isLightTheme ? 'fa-arrows-to-dot' : 'fa-arrows-to-dot'}`}></i>
            </div>
        </div>
    );
};

export default QuizTitle;