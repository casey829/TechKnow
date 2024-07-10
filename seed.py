from server import create_app, db
from server.models import Topic, Question

app = create_app()

def seed_data():
    with app.app_context():
        db.create_all()

        # Add topics
        topics = ['HTML/CSS', 'React', 'SQL', 'JavaScript', 'Python']
        topic_objects = {}
        for topic_name in topics:
            topic = Topic.query.filter_by(name=topic_name).first()
            if not topic:
                topic = Topic(name=topic_name)
                db.session.add(topic)