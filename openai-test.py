from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

# Load environment variables from the .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Get the OpenAI API key from environment variables
openai_api_key = os.getenv("OPENAI_API_KEY")

# Initialize the OpenAI client
client = OpenAI(api_key=openai_api_key)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
                {"role": "user", "content": user_message}
            ]
        )
        response = completion.choices[0].message['content']
        return jsonify({'response': response})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
