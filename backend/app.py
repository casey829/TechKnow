import secrets
from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from database import db
from resources.topic import TopicResource, TopicListResource
from resources.question import QuestionResource, QuestionListResource
from resources.resource import ResourceResource, ResourceListResource
from resources.user import (
    RegisterResource,
    LoginResource,
    ResetPasswordResource,
    UserResource,
    UserListResource,
)


from config import sqliteConfig

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = sqliteConfig
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["JWT_SECRET_KEY"] = (
    f"a1d3c56531737{secrets.token_hex(2)}cf62bc36a7e30cd871d7{secrets.token_hex(2)}7b5b51e8208b8cef{secrets.token_hex(2)}c2689e8c0cb412b"
)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = False

api = Api(app)
db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

CORS(app)

api.add_resource(TopicResource, "/topics/<string:topic_name>")
api.add_resource(TopicListResource, "/topics")
api.add_resource(ResourceResource, "/resources/<int:resource_id>")
api.add_resource(ResourceListResource, "/resources")
api.add_resource(QuestionResource, "/questions/<int:question_id>")
api.add_resource(QuestionListResource, "/questions")

# auth
api.add_resource(RegisterResource, "/auth/register")
api.add_resource(LoginResource, "/auth/login")
api.add_resource(ResetPasswordResource, "/auth/reset-password")
api.add_resource(UserResource, "/auth/users/<int:user_id>")
api.add_resource(UserListResource, "/auth/users")


with app.app_context():
    db.create_all()


if __name__ == "__main__":
    app.run(debug=True)
