from flask_restful import Resource, reqparse
from models.topic import TopicModel
from database import db


class TopicResource(Resource):
    def get(self, topic_name):
        topic = TopicModel.query.filter(
            db.func.lower(TopicModel.name) == db.func.lower(topic_name)
        ).first()
        if topic:
            return topic.json(include_details=True)
        return {"message": "Topic not found"}, 404

    def put(self, topic_name):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "name", type=str, required=True, help="Name cannot be blank!"
        )
        parser.add_argument(
            "image_url", type=str, required=True, help="Image URL cannot be blank!"
        )
        parser.add_argument(
            "description", type=str, required=True, help="Description cannot be blank!"
        )
        data = parser.parse_args()

        topic = TopicModel.query.filter(
            db.func.lower(TopicModel.name) == db.func.lower(topic_name)
        ).first()
        if not topic:
            return {"message": "Topic not found"}, 404

        try:
            updated_topic = TopicModel.update_topic(
                topic.id, data["name"], data["image_url"], data["description"]
            )
            return updated_topic.json(include_details=True)
        except ValueError as e:
            return {"message": str(e)}, 400

    def delete(self, topic_name):
        topic = TopicModel.query.filter(
            db.func.lower(TopicModel.name) == db.func.lower(topic_name)
        ).first()
        if topic:
            TopicModel.delete_topic(topic.id)
            return {"message": "Topic deleted"}
        return {"message": "Topic not found"}, 404


class TopicListResource(Resource):
    def get(self):
        topics = TopicModel.get_all_topics()
        return [topic.json() for topic in topics], 200

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "name", type=str, required=True, help="Name cannot be blank!"
        )
        parser.add_argument(
            "image_url", type=str, required=True, help="Image URL cannot be blank!"
        )
        parser.add_argument(
            "description", type=str, required=True, help="Description cannot be blank!"
        )
        data = parser.parse_args()

        try:
            new_topic = TopicModel.create_topic(
                data["name"], data["image_url"], data["description"]
            )
            return new_topic.json(), 201
        except ValueError as e:
            return {"message": str(e)}, 400
