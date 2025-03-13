import React, {useState} from 'react'
import PredictionForm from '../components/PredictionForm';
import Result from '../components/Result';

const Prediction = () => {
 const [result, setResult] = useState({prediction:'', formData: {}});
  return (
    <div>
        <div className='p-12'>
            <PredictionForm setResult={setResult} />
            {result.prediction && <Result result={result} />}
        </div>
    </div>
  )
}

export default Prediction