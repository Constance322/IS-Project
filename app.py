from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  


app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'c'  
app.config['MYSQL_PASSWORD'] = 'connie123' 
app.config['MYSQL_DB'] = 'facia'

mysql = MySQL(app)

@app.route('/')
def home():
    return "Welcome to the registration API!"

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        name = data['name']
        email = data['email']
        user_id = data['id']
        id_number = data.get('id_number', None)  
        is_admin = data.get('admin', False)
        is_security = data.get('security', False)

        cur = mysql.connection.cursor()

        cur.execute("""
            INSERT INTO users (name, email, id, id_number, admin, security)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (name, email, user_id, id_number, is_admin, is_security))

        mysql.connection.commit()
        cur.close()

        return jsonify({"message": "Registration successful"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
