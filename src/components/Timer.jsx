import React from 'react';

const Timer = ({ timeRemaining }) => {
  return (
    <div className="timer">
      <div className="time-text">Time Left</div>
      <div className="timer-sec">{timeRemaining}</div>
    </div>
  );
};

export default Timer;