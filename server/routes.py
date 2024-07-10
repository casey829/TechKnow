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


answer_model = quiz_ns.model('Answer', {
    'question_id': fields.Integer(required=True, description='The ID of the question'),
    'answer': fields.String(required=True, description='The answer provided by the user')
})

submit_model = quiz_ns.model('Submit', {
    'user_id': fields.Integer(required=True, description='The ID of the user'),
    'topic': fields.String(required=True, description='The topic of the quiz'),
    'answers': fields.List(fields.Nested(answer_model))
})


@quiz_ns.route('/topics')
class TopicList(Resource):
    @quiz_ns.doc('list_topics')
    @quiz_ns.marshal_list_with(topic_model)
    def get(self):
        return Topic.query.all()

@quiz_ns.route('/questions/<string:topic>')
@quiz_ns.param('topic', 'The topic of the questions')
class QuestionList(Resource):
    @quiz_ns.doc('list_questions')
    @quiz_ns.marshal_list_with(question_model)
    def get(self, topic):
        topic_obj = Topic.query.filter_by(name=topic).first()
        if not topic_obj:
            quiz_ns.abort(404, "Topic not found")
        return Question.query.filter_by(topic_id=topic_obj.id).all()

@quiz_ns.route('/submit')
class QuizSubmission(Resource):
    @quiz_ns.doc('submit_quiz')
    @quiz_ns.expect(submit_model)
    def post(self):
        data = request.json
        user_id = data['user_id']
        topic_name = data['topic']
        answers = data['answers']

        topic = Topic.query.filter_by(name=topic_name).first()
        if not topic:
            quiz_ns.abort(404, "Topic not found")

               # Create a new submission
        submission = Submit(user_id=user_id, topic=topic_name)
        db.session.add(submission)
        db.session.commit()

        # Calculate the score
        score = 0
        for answer_data in answers:
            question_id = answer_data['question_id']
            user_answer = answer_data['answer']
            question = Question.query.get(question_id)
            if question and question.answer.lower() == user_answer.lower():
                score += 1
