import React from 'react';

const TimeLine = ({ progress }) => {
    return (
        <div className="time-line" style={{ width: `${progress}%` }}></div>
    );
};

export default TimeLine;