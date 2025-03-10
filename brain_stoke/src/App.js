// src/App.js
import React, { useState } from 'react';
import PredictionForm from './components/PredictionForm';
import Result from './components/Result';

const App = () => {
    const [result, setResult] = useState('');

    return (
        <div>
            <h1>Stroke Prediction</h1>
            <PredictionForm setResult={setResult} />
            {result && <Result result={result} />}
        </div>
    );
};

export default App;