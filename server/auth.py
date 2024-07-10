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