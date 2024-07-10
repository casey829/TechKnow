from server.models import Question
from server import db

def fetch_questions_by_topic(topic):
    return Question.query.filter_by(topic=topic).all()

def add_question(topic, question_text, answer):
    question = Question(topic=topic, question_text=question_text, answer=answer)
    db.session.add(question)
    db.session.commit()
