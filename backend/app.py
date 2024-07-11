import random
from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    get_jwt_identity,
    jwt_required,
    get_jwt,
)
from datetime import timedelta
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///event.db"  # postgres
app.config["JWT_SECRET_KEY"] = "fsbdgfnhgvjnvhmvh" + str(
    random.randint(1, 1000000000000)
)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=1)
app.config["SECRET_KEY"] = "JKSRVHJVFBSRDFV" + str(random.randint(1, 1000000000000))

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

from models import db, User, Subject, Question

migrate = Migrate(app, db)
db.init_app(app)


# Shell context for flask CLI
@app.shell_context_processor
def make_shell_context():
    return {"db": db, "User": User, "Subject": Subject, "Question": Question}


# Logout
BLACKLIST = set()


# Login
@app.route("/api/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify({"access_token": access_token})

    return jsonify({"message": "Invalid email or password"}), 401


# Fetch current user
@app.route("/current_user", methods=["GET"])
@jwt_required()
def get_current_user():
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user:
        return (
            jsonify(
                {
                    "id": current_user.id,
                    "name": current_user.name,
                    "email": current_user.email,
                }
            ),
            200,
        )
    else:
        return jsonify({"error": "User not found"}), 404


@jwt.token_in_blocklist_loader
def check_if_token_in_blocklist(jwt_header, decrypted_token):
    return decrypted_token["jti"] in BLACKLIST


@app.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    jti = get_jwt()["jti"]
    BLACKLIST.add(jti)
    return jsonify({"success": "Successfully logged out"}), 200


# Add user
@app.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()
    new_user = User(
        name=data["name"],
        email=data["email"],
        password=bcrypt.generate_password_hash(data["password"]).decode("utf-8"),
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"success": "User created successfully"}), 201


# Get single user
@app.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify({"id": user.id, "name": user.name, "email": user.email})


# Update user
@app.route("/users/<int:user_id>", methods=["PUT"])
@jwt_required()
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()

    user.name = data["name"]
    user.email = data["email"]
    db.session.commit()
    return jsonify({"message": "User updated successfully"})


# ======== Subject Operations ========
# Create a subject
@app.route("/api/subjects", methods=["POST"])
# @jwt_required()
def create_subject():
    data = request.get_json()

    # current_user_id = get_jwt_identity()

    new_subject = Subject(
        name=data["name"],
        description=data["description"],
        image_url=data["image_url"],
        user_id=1,
    )
    db.session.add(new_subject)
    db.session.commit()
    return jsonify({"message": "Subject created successfully"}), 201


# Get all subjects
@app.route("/api/subjects", methods=["GET"])
def get_subjects():
    subjects = Subject.query.all()
    output = []
    for subject in subjects:
        subject_data = {
            "id": subject.id,
            "name": subject.name,
            "description": subject.description,
            "image_url": subject.image_url,
            "user_id": subject.user_id,
        }
        output.append(subject_data)
    return jsonify({"subjects": output})


# Get single subject
@app.route("/api/subjects/<int:id>", methods=["GET"])
def get_subject(id):
    try:
        subject = Subject.query.get_or_404(id)
        return jsonify(
            {
                "id": subject.id,
                "name": subject.name,
                "description": subject.description,
                "image_url": subject.image_url,
                "user_id": subject.user_id,
            }
        )
    except:
        return jsonify({"error": "Subject not found"}), 404


# Update subject
@app.route("/api/subjects/<int:id>", methods=["PUT"])
# @jwt_required()
def update_subject(id):
    subject = Subject.query.get_or_404(id)
    data = request.get_json()

    # Update only if the current user owns the subject
    # if subject.user_id != get_jwt_identity():
    #     return jsonify({"message": "Unauthorized"}), 403

    subject.name = data.get("name", subject.name)
    subject.description = data.get("description", subject.description)
    subject.image_url = data.get("image_url", subject.image_url)

    db.session.commit()
    return jsonify({"message": "Subject updated successfully"})


# Delete subject
@app.route("/api/subjects/<int:id>", methods=["DELETE"])
# @jwt_required()
def delete_subject(id):
    subject = Subject.query.get_or_404(id)

    # Check if the current user owns the subject
    # if subject.user_id != get_jwt_identity():
    #     return jsonify({"message": "Unauthorized"}), 403

    db.session.delete(subject)
    db.session.commit()
    return jsonify({"message": "Subject deleted successfully"})


if __name__ == "__main__":
    app.run(debug=True)
