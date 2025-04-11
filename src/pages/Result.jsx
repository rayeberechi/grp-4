import React from 'react';

const Result = ({ score, questions, setPage, setScore }) => {
    const userName = localStorage.getItem('userName');

    const getScoreIcon = () => {
        const percentage = (score / questions.length) * 100;

        if (percentage >= 90) return <i className="fa-solid fa-crown gold"></i>;
        if (percentage >= 70) return <i className="fa-solid fa-medal silver"></i>;
        if (percentage >= 50) return <i className="fa-solid fa-medal bronze"></i>;
        return <i className="fa-solid fa-times-circle red"></i>;
    };

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;

        if (percentage >= 90) return "Excellent!";
        if (percentage >= 70) return "Great job!";
        if (percentage >= 50) return "Not bad.";
        return "Try again!";
    };

    const handleRestart = () => {
        localStorage.clear();
        setScore(0);
        setPage('gameOpt');
    };

    const handleExit = () => {
        localStorage.clear();
        setScore(0);
        setPage('');
    };

    return (
        <div className="result-box">
            <div id="scoreIcon" className='icon'>
                {getScoreIcon()}
            </div>

            <div className="complete-text">
                {userName}, {getScoreMessage()}
            </div>

            <div className="score-text">
                <span>You scored <p>{score}</p> out of <p>{questions.length}</p></span>
            </div>

            <div className="btns">
                <button className="restart" onClick={handleRestart}>Restart Quiz</button>
                <button className="quit" onClick={handleExit}>Exit Quiz</button>
            </div>
        </div>
    );
};

export default Result;