from server import db
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, create_refresh_token

bcrypt = Bcrypt()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    quizzes = db.relationship('Score', backref='user', lazy=True)

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def get_access_token(self):
        return create_access_token(identity=self.id)

    def get_refresh_token(self):
        return create_refresh_token(identity=self.id)

class Topic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    questions = db.relationship('Question', backref='topic', lazy=True)


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    topic_id = db.Column(db.Integer, db.ForeignKey('topic.id'), nullable=False)
    question_text = db.Column(db.Text, nullable=False)
    answer = db.Column(db.String(50), nullable=False)

class Score(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    topic = db.Column(db.String(50), nullable=False)
    score = db.Column(db.Integer, nullable=False)

class Submit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    topic = db.Column(db.String(50), nullable=False)
    answers = db.relationship('Answer', backref='submit', lazy=True)

class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    submit_id = db.Column(db.Integer, db.ForeignKey('submit.id'), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'), nullable=False)
    answer = db.Column(db.String(50), nullable=False)
