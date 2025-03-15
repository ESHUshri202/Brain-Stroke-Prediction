
# from flask import Flask, render_template, request, jsonify
# import pandas as pd
# import joblib
# from flask_cors import CORS  # Import CORS

# app = Flask(__name__)
# CORS(app)  # Enable CORS for the entire app

# # Load the model
# stroke_model = joblib.load("model.joblib")

# # Helper function for prediction
# def predict_input(single_input):
#     input_df = pd.DataFrame([single_input])
#     encoded_cols, numeric_cols = stroke_model["encoded_cols"], stroke_model["numeric_cols"]
#     preprocessor = stroke_model["preprocessor"]
#     input_df[encoded_cols] = preprocessor.transform(input_df)
#     X = input_df[numeric_cols + encoded_cols]
#     prediction = stroke_model['model'].predict(X)
#     return prediction

# @app.route("/", methods=["POST"])
# def predict():
#     data = request.get_json()  # Receive data as JSON

#     gender = data["gender"]
#     age = int(data["age"])
#     hypertension = int(data["hypertension"])
#     heart_disease = int(data["heart_disease"])
#     ever_married = data["ever_married"]
#     work_type = data["work_type"]
#     residence_type = data["residence_type"]
#     avg_glucose_level = float(data["avg_glucose_level"])
#     bmi = float(data["bmi"])
#     smoking_status = data["smoking_status"]

#     work_type_mapping = {
#         "Government job": "Govt_job",
#         "Children": "children",
#         "Never Worked": "Never_worked",
#         "Private": "Private",
#     }

#     single_input = {
#         "gender": gender,
#         "age": age,
#         "hypertension": hypertension,
#         "heart_disease": heart_disease,
#         "ever_married": ever_married,
#         "work_type": work_type_mapping.get(work_type, work_type),
#         "Residence_type": residence_type,
#         "avg_glucose_level": avg_glucose_level,
#         "bmi": bmi,
#         "smoking_status": smoking_status,
#     }

#     # Predict and send back the result as JSON
#     prediction = predict_input(single_input)
#     result = "Likely" if prediction[0] == 1 else "Not Likely"
#     return jsonify({"result": result})

# if __name__ == "__main__":
    
#     app.run(debug=True)
from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS  # Enable Cross-Origin Resource Sharing (CORS)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model and preprocessing pipeline
try:
    stroke_model = joblib.load("model.joblib")
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    stroke_model = None

# Prediction function
def predict_input(single_input):
    try:
        input_df = pd.DataFrame([single_input])

        # Extract preprocessing components
        encoded_cols = stroke_model.get("encoded_cols", [])
        numeric_cols = stroke_model.get("numeric_cols", [])
        preprocessor = stroke_model.get("preprocessor", None)

        if preprocessor:
            input_df[encoded_cols] = preprocessor.transform(input_df)

        X = input_df[numeric_cols + encoded_cols]
        prediction = stroke_model["model"].predict(X)
        
        return prediction[0]  # Return single prediction
    except Exception as e:
        return str(e)  # Return error message if something goes wrong

@app.route("/", methods=["POST"])
def predict():
    try:
        data = request.get_json()  # Receive data as JSON
        if not data:
            return jsonify({"error": "No data received"}), 400

        # Extract input values safely
        gender = data.get("gender", "").lower()
        age = int(data.get("age", 0))
        hypertension = int(data.get("hypertension", 0))
        heart_disease = int(data.get("heart_disease", 0))
        ever_married = data.get("ever_married", "").lower()
        work_type = data.get("work_type", "")
        residence_type = data.get("residence_type", "")
        avg_glucose_level = float(data.get("avg_glucose_level", 0.0))
        bmi = float(data.get("bmi", 0.0))
        smoking_status = data.get("smoking_status", "").lower()

        # Validate required fields
        required_fields = [gender, age, ever_married, work_type, residence_type, avg_glucose_level, bmi, smoking_status]
        if any(field == "" for field in required_fields):
            return jsonify({"error": "Missing required fields"}), 400

        # Standardize work type mapping
        work_type_mapping = {
            "Government job": "Govt_job",
            "Children": "children",
            "Never Worked": "Never_worked",
            "Private": "Private",
        }

        single_input = {
            "gender": gender,
            "age": age,
            "hypertension": hypertension,
            "heart_disease": heart_disease,
            "ever_married": ever_married,
            "work_type": work_type_mapping.get(work_type, work_type),
            "Residence_type": residence_type,
            "avg_glucose_level": avg_glucose_level,
            "bmi": bmi,
            "smoking_status": smoking_status,
        }

        # Make a prediction
        prediction = predict_input(single_input)
        if isinstance(prediction, str):  # If prediction function returned an error
            return jsonify({"error": prediction}), 500

        result = "Likely" if prediction == 1 else "Not Likely"
        return jsonify({"result": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = 8080  # Default to 8080, change if needed
    app.run(host="0.0.0.0", port=port, debug=True)
