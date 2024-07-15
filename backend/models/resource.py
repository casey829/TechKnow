from database import db
from sqlalchemy.orm import validates


class StudyResource(db.Model):
    __tablename__ = "studyresources"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    url = db.Column(db.String(120), nullable=False)
    topic_id = db.Column(db.Integer, db.ForeignKey("topics.id"), nullable=False)

    topic = db.relationship("TopicModel", back_populates="resources")

    def __repr__(self):
        return f"<Resource {self.title} {self.url}>"

    @validates("title", "url")
    def validate_empty(self, key, value):
        if not value:
            raise ValueError("{} can't be empty".format(key))
        return value

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def get_all(cls):
        return StudyResource.query.all()

    @classmethod
    def get_by_id(cls, id):
        return StudyResource.query.get(id)

    @classmethod
    def get_by_topic_id(cls, topic_id):
        return StudyResource.query.filter_by(topic_id=topic_id).all()

    def json(self):
        return {
            "id": self.id,
            "title": self.title,
            "url": self.url,
            "topic_id": self.topic_id,
        }
