from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from datetime import datetime
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()


class User(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    subjects = db.relationship("Subject", backref="user", lazy=True)

    def __repr__(self):
        return f"<User {self.name}>"


class Subject(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    image_url = db.Column(db.String(120), nullable=False)
    questions = db.relationship("Question", backref="subject", lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return f"<Subject {self.name}>"


class Question(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(120), nullable=False)
    answer = db.Column(db.Text, nullable=True)
    correct = db.Column(db.Boolean, default=False)
    level = db.Column(db.String(120), nullable=False)
    completed = db.Column(db.Boolean, default=False)
    subject_id = db.Column(db.Integer, db.ForeignKey("subject.id"), nullable=False)

    def __repr__(self):
        return f"<Question {self.question}>"
