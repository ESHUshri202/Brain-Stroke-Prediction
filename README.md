# Brain Stroke Prediction using Flask, Machine Learning, Python, and React.js

## Introduction
Brain strokes are a leading cause of disability and death worldwide. Early prediction of stroke risk can help in taking preventive measures. This project focuses on building a **Brain Stroke Prediction System** using **Machine Learning algorithms**, **Flask** for backend API development, and **React.js** for the frontend.

## Project Workflow
1. **Data Collection & Preprocessing**
2. **Machine Learning Model Training**
3. **Flask API Development**
4. **Firebase Integration**
5. **Frontend Development using React.js**
6. **Integration & Deployment**

---

## 1. Data Collection & Preprocessing
### Dataset:
We use a dataset containing relevant medical features such as:
- Age
- Hypertension
- Heart disease
- Smoking status
- BMI
- Glucose level
- Gender
- Work type
- Residence type

### Preprocessing Steps:
- Handling missing values
- Encoding categorical variables
- Feature scaling (StandardScaler/MinMaxScaler)
- Splitting data into training and testing sets

---

## 2. Machine Learning Model Training
### Algorithms Used:
- **Logistic Regression**
- **Random Forest**
- **Support Vector Machine (SVM)**
- **XGBoost**

### Model Training & Evaluation:
- Train models using Scikit-Learn
- Evaluate performance using metrics like Accuracy, Precision, Recall, and F1-score
- Choose the best-performing model for deployment

---

## 3. Flask API Development
- Develop a Flask-based REST API to serve the model predictions
- Load the trained model using `joblib`
- Create API endpoints:
  - `/predict` for making stroke predictions
  - `/result` for checking server status
- Implement CORS for frontend-backend communication


## 4. Frontend Development using React.js
- Use **React.js** to build a user-friendly interface
- Create a form to accept user input for medical features
- Send the input to the Flask API and display prediction results
- Implement state management using **React Hooks**
- Use **Tailwind CSS** for styling


## 5. Integration & Deployment
- Deploy **Flask API** using **Render** 
- Deploy **React App** using **Vercel**
- Implement security measures like **input validation** and **API authentication**

## Conclusion
This project provides a practical approach to predicting brain stroke risk using machine learning. The combination of Flask for backend, React.js for frontend, and a well-trained machine learning model ensures an efficient and user-friendly system. Future improvements could involve real-time monitoring and mobile app integration.

