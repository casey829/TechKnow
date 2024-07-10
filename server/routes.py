from flask_restx import Namespace, Resource, fields
from flask import request
from server.models import db, Topic, Question, Score, Submit, Answer

quiz_ns = Namespace('quiz', description='Quiz related operations')

topic_model = quiz_ns.model('Topic', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a topic'),
    'name': fields.String(required=True, description='The name of the topic')
})

question_model = quiz_ns.model('Question', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a question'),
    'topic_id': fields.Integer(required=True, description='The ID of the topic'),
    'question_text': fields.String(required=True, description='The text of the question'),
    'answer': fields.String(required=True, description='The answer to the question')
})

score_model = quiz_ns.model('Score', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a score'),
    'user_id': fields.Integer(required=True, description='The ID of the user'),
    'topic': fields.String(required=True, description='The topic of the score'),
    'score': fields.Integer(required=True, description='The score achieved by the user')
})