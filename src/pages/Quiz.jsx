import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import TimeLine from '../components/TimeLine';

const Quiz = ({ questions, userAnswers, setUserAnswers, score, setScore, setPage }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(15);
    const [timeLineProgress, setTimeLineProgress] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [timerActive, setTimerActive] = useState(true);
    const [timeAnswered, setTimeAnswered] = useState(15);

    useEffect(() => {
        if (timerActive && timeRemaining > 0) {
            const timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
                setTimeLineProgress((prevProgress) => prevProgress + (100 / 15));
            }, 1000);
            return () => clearInterval(timer);
        } else if (timerActive) {
            handleAnswer(null);
        }
    }, [timeRemaining, timerActive]);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
        setShowFeedback(true);
        setTimerActive(false);
        setTimeAnswered(timeRemaining);

        if (answer === questions[currentQuestionIndex].answer) {
            setScore((prevScore) => prevScore + 1);
        }

        setUserAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = answer;
            return newAnswers;
        });


        localStorage.setItem(`answer_${currentQuestionIndex}`, answer);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setTimeRemaining(15);
            setTimeLineProgress(0);
            setSelectedAnswer(null);
            setTimerActive(true);
            setShowFeedback(false);
        } else {
            setPage('result');
            localStorage.clear();
            setScore(0);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
            setTimeRemaining(timeAnswered);
            setTimeLineProgress((timeAnswered / 15) * 100);
            setSelectedAnswer(localStorage.getItem(`answer_${currentQuestionIndex - 1}`));
            setShowFeedback(true)
            setTimerActive(false);
        }
    };

    useEffect(() => {
        const storedAnswer = localStorage.getItem(`answer_${currentQuestionIndex}`);
        if (storedAnswer) {
            setSelectedAnswer(storedAnswer);
        }
    }, [currentQuestionIndex]);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="quiz-box">
            <header>
                <Timer timeRemaining={timeRemaining} />
                <TimeLine progress={timeLineProgress} />
            </header>
            <section>
                <div className="que-text">
                    <span>{currentQuestionIndex + 1}. {currentQuestion.question}</span>
                </div>
                <div className="option-list">
                    {currentQuestion.options.map((option, index) => (
                        <div
                            key={index}
                            className={`option ${selectedAnswer === option ? (option === currentQuestion.answer ? 'correct' : 'incorrect') : ''} ${showFeedback && option === currentQuestion.answer ? 'correct' : ''} ${showFeedback ? 'disabled': ''}`}
                            onClick={() => !selectedAnswer && handleAnswer(option)}
                        >
                            <span>{option}</span>
                            {selectedAnswer === option && (
                                <div className={`icon ${option === currentQuestion.answer ? 'tick' : 'cross'}`}>
                                    {option === currentQuestion.answer ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-times"></i>}
                                </div>
                            )}
                            {showFeedback && option === currentQuestion.answer && selectedAnswer !== option && (
                                <div className='correct'></div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <footer>
                <div className="total-que">
                    <span>
                        <p>{currentQuestionIndex + 1}</p>of<p>{questions.length}</p>Questions
                    </span>

                    <div className="score">
                      <span>Score: {score}</span>
                    </div>
                </div>
                <div className="q-btn">
                    {currentQuestionIndex > 0 && <button className="prv-btn" onClick={handlePrevious}>Previous</button>}
                    <button className="next-btn" onClick={currentQuestionIndex === questions.length - 1 ? () => setPage('result') : handleNext}>
                        {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Quiz;