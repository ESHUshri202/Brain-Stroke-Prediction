// src/components/PredictionForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

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
            const response = await axios.post('https://brain-stroke-prediction-f2kk.onrender.com/', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Set the result from Flask response
            setResult( {prediction: response.data.result, formData});
        } catch (error) {
            console.error("There was an error making the request!", error);
        }
    };

    return (
        <>
            <div>
                <h1 className='text-center text-6xl font-medium font-serif'>Check Your Stoke Status</h1>
                <div className='flex text-center pt-6 gap-2'>
                    <span className='border-b-4 rounded  p-2 w-80' ></span>
                    <span className='border-b-4 rounded  p-2 w-40 ' ></span>
                    <span className='border-b-4 rounded  p-2 w-20 ' ></span>
                    <span className='border-b-4 rounded  p-2 w-10 ' ></span>
                    <span className='border-b-4 rounded  p-2 w-5 ' ></span>
                    <span className='border-b-4 rounded  p-2 w-0 ' ></span>
                    <span className='border-b-4 rounded p-2 w-5 ' ></span>
                    <span className='border-b-4 rounded p-2 w-10 ' ></span>
                    <span className='border-b-4 rounded p-2 w-20 ' ></span>
                    <span className='border-b-4 rounded p-2 w-40 ' ></span>
                    <span className='border-b-4 rounded p-2 w-80 ' ></span>                
                </div>
                <div className='grid grid-cols-1 gap-4 p-10 mt-12 bg-[#dddddd]/10  rounded-lg shadow-2xl hover:shadow-red-600 hover:duration-300 hover:ease-in-out '>
                    <form onSubmit={handleSubmit}>
                        <div className='flex justify-between items-center'>
                            <div className='p-10 flex flex-col gap-4'>
                                <label>Enter Gender</label>
                                <select className='h-14 w-full pr-12 pl-12 rounded-xl bg-[#060125] cursor-pointer inline-flex align-middle font-bold text-neutral-400 hover:text-red-800 active:text-red-900 focus:text-red-800 transition ease-in-out duration-300 border-white' name='gender' onChange={handleChange} required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <label>Enter Age</label>
                                <input className='block w-full p-4 rounded-lg bg-[#060125] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 invalid:border-red-500 ' type="number" name="age" placeholder="Age" min={1} max={100} onChange={handleChange} required />
                                <label>Enter Hypertension</label>
                                <select  className='h-14 w-full pr-12 pl-12 rounded-xl bg-[#060125] cursor-pointer inline-flex align-middle font-bold text-neutral-400 hover:text-red-800 active:text-red-900 focus:text-red-800 transition ease-in-out duration-300 border-white' name='hypertension' onChange={handleChange} required>
                                    <option value="">Select Hypertension</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <label>Enter Heart Disease</label>
                                <select  className='h-14 w-full pr-12 pl-12 rounded-xl bg-[#060125] cursor-pointer inline-flex align-middle font-bold text-neutral-400 hover:text-red-800 active:text-red-900 focus:text-red-800 transition ease-in-out duration-300 border-white' name='heart_disease' onChange={handleChange} required>
                                    <option value="">Select Heart Disease</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <label>Ever Married</label>
                                <select  className='h-14 w-full pr-12 pl-12 rounded-xl bg-[#060125] cursor-pointer inline-flex align-middle font-bold text-neutral-400 hover:text-red-800 active:text-red-900 focus:text-red-800 transition ease-in-out duration-300 border-white' name='ever_married' onChange={handleChange} required>
                                    <option value="">Select Ever Married</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            
                            <div className='flex flex-col gap-4'>
                                <label>Work Type</label>
                                <select  className='h-14 w-full pr-12 pl-12 rounded-xl bg-[#060125] cursor-pointer inline-flex align-middle font-bold text-neutral-400 hover:text-red-800 active:text-red-900 focus:text-red-800 transition ease-in-out duration-300 border-white' name='work_type' onChange={handleChange} required>
                                    <option value="">Select Work Type</option>
                                    <option value="Private">Private</option>
                                    <option value="Self-employed">Self-Employed</option>
                                    <option value="Govt_job">Government Job</option>
                                    <option value="children">Children</option>
                                    <option value="Never_worked">Never Worked</option>
                                </select>
                                {/* <input type="text" name="work_type" placeholder="Work Type" onChange={handleChange} required /> */}
                                <label>Residence Type</label>
                                <select  className='h-14 w-full pr-12 pl-12 rounded-xl bg-[#060125] cursor-pointer inline-flex align-middle font-bold text-neutral-400 hover:text-red-800 active:text-red-900 focus:text-red-800 transition ease-in-out duration-300 border-white' name='residence_type' onChange={handleChange} required>
                                    <option value="">Select Residence Type</option>
                                    <option value="Urban">Urban</option>
                                    <option value="Rural">Rural</option>
                                </select>
                                <label>Average Glucose Level</label>
                                <input className='block w-full p-4 rounded-lg bg-[#060125] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 invalid:border-red-500 ' type="number" name="avg_glucose_level" min={1} max={1000} placeholder="Avg Glucose Level" onChange={handleChange} required />
                                <label>BMI</label>
                                <input className='block w-full p-4 rounded-lg bg-[#060125] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 invalid:border-red-500 ' type="number" name="bmi" placeholder="BMI" min={1} max={200} onChange={handleChange} required />
                                <label>Smoking Status</label>
                                <select  className='h-14 w-full pr-12 pl-12 rounded-xl bg-[#060125] cursor-pointer inline-flex align-middle font-bold text-neutral-400 hover:text-red-800 active:text-red-900 focus:text-red-800 transition ease-in-out duration-300 border-white' name='smoking_status' onChange={handleChange} required>
                                    <option value="">Select Smoking Status</option>
                                    <option value="never smoked">Never Smoked</option>
                                    <option value="formerly smoked">Formerly Smoked</option>
                                    <option value="smokes">Smokes</option>
                                    <option value="Unknown">Unknown</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-center p-4'>
                            <button className='text-xl border-1 bg-[#060125] rounded-lg pl-12 pr-12 pt-4 pb-4  hover:bg-blue-950 hover: duration-500 hover:text-white' type="submit">Predict</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PredictionForm;
