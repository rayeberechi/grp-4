import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ setPage }) => {
    const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
    const [nameError, setNameError] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!userName.trim()) {
            setNameError('Please enter your name.');
            return;
        }

        localStorage.setItem('userName', userName);
        setNameError('');
        setPage('gameOpt');
    };

    const handleExit = () => {
        window.open('', '_blank');
        window.close();
    };

    return (
        <div className='main-page'>
            <h1>Welcome to The Quadra Quiz App!</h1>

            <div className="info">
                <div className="info-title">
                    <span>Rules of this Quiz</span>
                </div>
                <div className="info-list">
                    <ol className="info">
                        <li>You have only <span>15 seconds</span> per question.</li>
                        <li>Upon selection of an option, you can't reselect.</li>
                        <li>You can't make a selection once the timer is up.</li>
                        <li>Once the quiz starts, you can't exit.</li>
                        <li>Points will be awarded on the basis of correct answers.</li>
                    </ol>
                </div>
            </div>

            <input
                className="name-input"
                required
                type="text"
                placeholder="Enter your name.."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            {nameError && <p className="error-message" style={{ color: 'red' }}>{nameError}</p>}

            <div className="btns">
                <button className="restart" onClick={handleContinue}>Continue</button>
                <button className="quit" onClick={handleExit}>Exit Quiz</button>
            </div>
        </div>
    );
};

export default LandingPage;