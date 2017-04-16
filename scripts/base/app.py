from flask import *
from models import *

app = Flask(__name__)

@app.before_request
def before_request():
    initialize_db()

@app.teardown_request
def teardown_request(exc):
    psql_db.close()

@app.route('/')
def home():
    return jsonify({
        'foo': "bar",
    })

if __name__ == '__main__':
    app.run(debug=True, port=5001)
