from flask import Flask, request, jsonify, redirect, url_for, session
from flask_mysqldb import MySQL
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'c'  
app.config['MYSQL_PASSWORD'] = 'connie123' 
app.config['MYSQL_DB'] = 'facia'

mysql = MySQL(app)

@app.route('/')
def home():
    return "Welcome to the login API!"

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        name = data['name']
        user_id = data['id']
        is_admin = data.get('admin', False)
        is_security = data.get('security', False)

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE name = %s AND id = %s", (name, user_id))
        user = cur.fetchone()
        cur.close()

        if user:
            session['user_id'] = user[0]  # Store user ID in the session

            if is_admin and user[4] == 1:
                return jsonify({"redirect": url_for('admin')})
            elif is_security and user[5] == 1:
                return jsonify({"redirect": url_for('security')})
            else:
                return jsonify({"error": "Invalid user type"}), 401
        else:
            return jsonify({"error": "Invalid credentials"}), 401

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/admin')
def admin():
    if 'user_id' in session:
        return jsonify({"message": "Welcome to the Admin page!"})
    else:
        return jsonify({"error": "Unauthorized"}), 401

@app.route('/security')
def security():
    if 'user_id' in session:
        return jsonify({"message": "Welcome to the Security page!"})
    else:
        return jsonify({"error": "Unauthorized"}), 401

app.secret_key = 'your_secret_key_here' 

if __name__ == '__main__':
    app.run(debug=True)
