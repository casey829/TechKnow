from flask_restful import Resource, reqparse
from models.question import QuestionModel


class QuestionResource(Resource):
    def get(self, question_id):
        question = QuestionModel.get_question(question_id)
        if question:
            return question.json()
        return {"message": "Question not found"}, 404

    def put(self, question_id):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "question", type=str, required=True, help="Question cannot be blank!"
        )
        parser.add_argument(
            "answer", type=str, required=True, help="Answer cannot be blank!"
        )
        parser.add_argument(
            "topic_id", type=int, required=True, help="Topic ID cannot be blank!"
        )
        data = parser.parse_args()

        try:
            updated_question = QuestionModel.update_question(
                question_id, data["question"], data["answer"], data["topic_id"]
            )
            if updated_question:
                return updated_question.json()
            return {"message": "Question not found"}, 404
        except ValueError as e:
            return {"message": str(e)}, 400

    def delete(self, question_id):
        question = QuestionModel.delete_question(question_id)
        if question:
            return {"message": "Question deleted"}
        return {"message": "Question not found"}, 404


class QuestionListResource(Resource):
    def get(self):
        questions = QuestionModel.get_all_questions()
        return [question.json() for question in questions], 200

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "question", type=str, required=True, help="Question cannot be blank!"
        )
        parser.add_argument(
            "answer", type=str, required=True, help="Answer cannot be blank!"
        )
        parser.add_argument(
            "topic_id", type=int, required=True, help="Topic ID cannot be blank!"
        )
        data = parser.parse_args()

        try:
            new_question = QuestionModel.create_question(
                data["question"], data["answer"], data["topic_id"]
            )
            return new_question.json(), 201
        except ValueError as e:
            return {"message": str(e)}, 400
