from flask import request, jsonify
from flask_jwt_extended import (
    jwt_required, create_access_token, create_refresh_token,
    get_jwt_identity, unset_jwt_cookies
)

from flask_restx import Namespace, Resource, fields
from flask_bcrypt import Bcrypt
from server import db
from server.models import User

bcrypt = Bcrypt()

# Define the API namespace
auth_ns = Namespace('auth', description='Authentication operations')

# Define the API models
signup_model = auth_ns.model('SignUp', {
    'username': fields.String(required=True, description='The username'),
    'email': fields.String(required=True, description='The email address'),
    'password': fields.String(required=True, description='The password')
})

login_model = auth_ns.model('Login', {
    'email': fields.String(required=True, description='The email address'),
    'password': fields.String(required=True, description='The password')
})

token_model = auth_ns.model('Token', {
    'access_token': fields.String(description='Access token'),
    'refresh_token': fields.String(description='Refresh token')
})

message_model = auth_ns.model('Message', {
    'message': fields.String(description='Message')
})


profile_model = auth_ns.model('Profile', {
    'username': fields.String(description='The username'),
    'email': fields.String(description='The email address')
})

# Define the API resources
@auth_ns.route('/signup')
class SignUp(Resource):
    @auth_ns.expect(signup_model)
    @auth_ns.marshal_with(message_model)
    def post(self):
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
            return {'message': 'User already exists'}, 409

        new_user = User(username=username, email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()

        return {'message': 'User created successfully'}, 201



@auth_ns.route('/login')
class Login(Resource):
    @auth_ns.expect(login_model)
    @auth_ns.marshal_with(token_model)
    def post(self):
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        user = User.query.filter_by(email=email).first()

        if user is None or not user.check_password(password):
            return {'message': 'Invalid credentials'}, 401

        access_token = user.get_access_token()
        refresh_token = user.get_refresh_token()
        return {
            'access_token': access_token,
            'refresh_token': refresh_token
        }, 200
