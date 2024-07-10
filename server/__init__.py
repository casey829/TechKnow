from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restx import Api
from flask_jwt_extended import JWTManager
from flask_cors import CORS  # Import CORS
from config import Config


db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()

authorizations = {
    'Bearer Auth': {
        'type': 'apiKey',
        'in': 'header',
        'name': 'Authorization',
        'description': 'Bearer <JWT>'
    }
}


api = Api(
    title='Your API Title',
    version='1.0',
    description='A description of your API',
    security='Bearer Auth',
    authorizations=authorizations
)

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    CORS(app)  # Enable CORS

    db.init_app(app)
    migrate.init_app(app, db)
    api.init_app(app)
    jwt.init_app(app)