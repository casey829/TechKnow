from server import db
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, create_refresh_token
from sqlalchemy.orm import validates

bcrypt = Bcrypt()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    quizzes = db.relationship('Score', backref='user', lazy=True)

    @validates('username')
    def validate_username(self, key, username):
        if not username or len(username) < 3:
            raise ValueError("Username must be at least 3 characters long")
        return username

    @validates('email')
    def validate_email(self, key, email):
        if not email or '@' not in email:
            raise ValueError("Invalid email address")
        return email

    def set_password(self, password):
        if len(password) < 8:
            raise ValueError("Password must be at least 8 characters long")
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

    @validates('name')
    def validate_name(self, key, name):
        if not name or len(name) < 3:
            raise ValueError("Topic name must be at least 3 characters long")
        return name

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    topic_id = db.Column(db.Integer, db.ForeignKey('topic.id'), nullable=False)
    question_text = db.Column(db.Text, nullable=False)
    answer = db.Column(db.String(50), nullable=False)

    @validates('question_text')
    def validate_question_text(self, key, question_text):
        if not question_text or len(question_text) < 10:
            raise ValueError("Question text must be at least 10 characters long")
        return question_text

    @validates('answer')
    def validate_answer(self, key, answer):
        if not answer or len(answer) < 1:
            raise ValueError("Answer must be at least 1 character long")
        return answer

class Score(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    topic = db.Column(db.String(50), nullable=False)
    score = db.Column(db.Integer, nullable=False)

    @validates('score')
    def validate_score(self, key, score):
        if score < 0 or score > 100:
            raise ValueError("Score must be between 0 and 100")
        return score

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

    @validates('answer')
    def validate_answer(self, key, answer):
        if not answer or len(answer) < 1:
            raise ValueError("Answer must be at least 1 character long")
        return answer