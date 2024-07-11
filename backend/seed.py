from app import app
from models import db, User, Quiz, Topic

with app.app_context():
    db.drop_all()
    db.create_all()

    # Create sample data
    user = User(username="admin", password="password")
    db.session.add(user)

    topic1 = Topic(name="Mathematics")
    topic2 = Topic(name="Science")
    db.session.add(topic1)
    db.session.add(topic2)

    quiz1 = Quiz(title="Math Quiz", description="Test your math skills", topic=topic1)
    quiz2 = Quiz(
        title="Science Quiz", description="Test your science knowledge", topic=topic2
    )
    db.session.add(quiz1)
    db.session.add(quiz2)

    db.session.commit()
