from flask_restful import Resource, reqparse
from models.resource import StudyResource


class ResourceResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("title", type=str, required=True, help="Title cannot be blank!")
    parser.add_argument("url", type=str, required=True, help="URL cannot be blank!")
    parser.add_argument(
        "topic_id", type=int, required=True, help="Topic ID cannot be blank!"
    )

    def get(self, resource_id):
        resource = StudyResource.get_by_id(resource_id)
        if resource:
            return resource.json()
        return {"message": "Study resource not found"}, 404

    def post(self):
        data = ResourceResource.parser.parse_args()
        try:
            new_resource = StudyResource(
                title=data["title"], url=data["url"], topic_id=data["topic_id"]
            )
            new_resource.save()
            return new_resource.json(), 201
        except ValueError as e:
            return {"message": str(e)}, 400

    def put(self, resource_id):
        data = ResourceResource.parser.parse_args()
        resource = StudyResource.get_by_id(resource_id)
        if not resource:
            return {"message": "Study resource not found"}, 404
        resource.title = data["title"]
        resource.url = data["url"]
        resource.topic_id = data["topic_id"]
        resource.save()
        return resource.json()

    def delete(self, resource_id):
        resource = StudyResource.get_by_id(resource_id)
        if not resource:
            return {"message": "Study resource not found"}, 404
        resource.delete()
        return {"message": "Study resource deleted"}


class ResourceListResource(Resource):
    def get(self):
        resources = StudyResource.get_all()
        return [resource.json() for resource in resources], 200

    def post(self):
        data = ResourceResource.parser.parse_args()
        try:
            new_resource = StudyResource(
                title=data["title"], url=data["url"], topic_id=data["topic_id"]
            )
            new_resource.save()
            return new_resource.json(), 201
        except ValueError as e:
            return {"message": str(e)}, 400
