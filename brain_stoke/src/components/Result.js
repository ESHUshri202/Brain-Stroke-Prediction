// src/components/Result.js
import React from 'react';

const Result = ({ result }) => {
    return (
        <div className='text-center text-3xl font-medium font-serif'>
            <h2>Prediction Result: {result}</h2>
        </div>
    );
};

export default Result;