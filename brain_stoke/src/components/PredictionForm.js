// src/components/PredictionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = ({ setResult }) => {
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        hypertension: '',
        heart_disease: '',
        ever_married: '',
        work_type: '',
        residence_type: '',
        avg_glucose_level: '',
        bmi: '',
        smoking_status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to Flask API
            const response = await axios.post('http://127.0.0.1:5000/', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Set the result from Flask response
            setResult(response.data.result);
        } catch (error) {
            console.error("There was an error making the request!", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Fill in the details to predict stroke:</label>
            <br />
            <label>Enter Gender</label>
            <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
            <input type="number" name="hypertension" placeholder="Hypertension (0 or 1)" onChange={handleChange} required />
            <input type="number" name="heart_disease" placeholder="Heart Disease (0 or 1)" onChange={handleChange} required />
            <input type="text" name="ever_married" placeholder="Ever Married (Yes or No)" onChange={handleChange} required />
            <input type="text" name="work_type" placeholder="Work Type" onChange={handleChange} required />
            <input type="text" name="residence_type" placeholder="Residence Type" onChange={handleChange} required />
            <input type="number" name="avg_glucose_level" placeholder="Avg Glucose Level" onChange={handleChange} required />
            <input type="number" name="bmi" placeholder="BMI" onChange={handleChange} required />
            <input type="text" name="smoking_status" placeholder="Smoking Status" onChange={handleChange} required />
            <button type="submit">Predict</button>
        </form>
    );
};

export default PredictionForm;
