from database import db
from sqlalchemy.orm import validates


class TopicModel(db.Model):
    __tablename__ = "topics"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    image_url = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    questions = db.relationship(
        "QuestionModel", back_populates="category", cascade="all, delete-orphan"
    )

    resources = db.relationship(
        "StudyResource", back_populates="topic", cascade="all, delete-orphan"
    )

    @validates("name")
    def validate_name(self, key, name):
        if not name:
            raise ValueError("Name is required")
        if TopicModel.query.filter_by(name=name).first():
            raise ValueError("Name must be unique")
        return name

    @validates("image_url")
    def validate_image_url(self, key, image_url):
        if not image_url:
            raise ValueError("Image URL is required")
        return image_url

    @validates("description")
    def validate_description(self, key, description):
        if not description:
            raise ValueError("Description is required")
        return description

    def __repr__(self):
        return f"Topic(id={self.id}, name='{self.name}')"

    @classmethod
    def create_topic(cls, name, image_url, description):
        new_topic = cls(name=name, image_url=image_url, description=description)
        db.session.add(new_topic)
        db.session.commit()
        return new_topic

    @classmethod
    def get_topic(cls, topic_id):
        return cls.query.get(topic_id)

    @classmethod
    def get_all_topics(cls):
        return cls.query.all()

    @classmethod
    def update_topic(cls, topic_id, name=None, image_url=None, description=None):
        topic = cls.query.get(topic_id)
        if not topic:
            return None
        if name:
            topic.name = name
        if image_url:
            topic.image_url = image_url
        if description:
            topic.description = description
        db.session.commit()
        return topic

    @classmethod
    def delete_topic(cls, topic_id):
        topic = cls.query.get(topic_id)
        if not topic:
            return None
        db.session.delete(topic)
        db.session.commit()
        return topic

    def json(self, include_details=False):
        data = {
            "id": self.id,
            "name": self.name,
            "image_url": self.image_url,
            "description": self.description,
            "created_at": self.created_at.isoformat(),
        }
        if include_details:
            data["questions"] = [question.json() for question in self.questions]
            data["resources"] = [resource.json() for resource in self.resources]
        return data
