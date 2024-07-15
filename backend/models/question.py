from database import db
from sqlalchemy.orm import validates

from models.topic import TopicModel


class QuestionModel(db.Model):
    __tablename__ = "questions"

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(250), nullable=False)
    answer = db.Column(db.String(250), nullable=False)
    topic_id = db.Column(db.Integer, db.ForeignKey("topics.id"), nullable=False)
    category = db.relationship("TopicModel", back_populates="questions")

    @validates("question")
    def validate_question(self, key, question):
        if not question:
            raise ValueError("Question is required")
        return question

    @validates("answer")
    def validate_answer(self, key, answer):
        if not answer:
            raise ValueError("Answer is required")
        return answer

    @validates("topic_id")
    def validate_topic_id(self, key, topic_id):
        if not TopicModel.query.get(topic_id):
            raise ValueError("Invalid topic ID")
        return topic_id

    def __repr__(self):
        return f"Question(id={self.id}, question='{self.question}', answer='{self.answer}', topic_id={self.topic_id})"

    @classmethod
    def create_question(cls, question, answer, topic_id):
        new_question = cls(question=question, answer=answer, topic_id=topic_id)
        db.session.add(new_question)
        db.session.commit()
        return new_question

    @classmethod
    def get_question(cls, question_id):
        return cls.query.get(question_id)

    @classmethod
    def get_all_questions(cls):
        return cls.query.all()

    @classmethod
    def update_question(cls, question_id, question=None, answer=None, topic_id=None):
        question_instance = cls.query.get(question_id)
        if not question_instance:
            return None
        if question:
            question_instance.question = question
        if answer:
            question_instance.answer = answer
        if topic_id:
            question_instance.topic_id = topic_id
        db.session.commit()
        return question_instance

    @classmethod
    def delete_question(cls, question_id):
        question = cls.query.get(question_id)
        if not question:
            return None
        db.session.delete(question)
        db.session.commit()
        return question

    def json(self):
        return {
            "id": self.id,
            "question": self.question,
            "answer": self.answer,
            "topic_id": self.topic_id,
        }
