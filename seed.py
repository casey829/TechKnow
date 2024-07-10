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
                db.session.commit()
            topic_objects[topic_name] = topic

        # Add predefined questions for each topic
        questions = {
            'HTML/CSS': [
                {"question_text": "What does CSS stand for?", "answer": "Cascading Style Sheets"},
                {"question_text": "How do you center a div in CSS?", "answer": "margin: auto;"},
                {"question_text": "What is the purpose of the <head> element in HTML?", "answer": "To contain meta-information about the document"},
                {"question_text": "How do you create a hyperlink in HTML?", "answer": "<a href='url'>link text</a>"},
                {"question_text": "What is the difference between padding and margin in CSS?", "answer": "Padding is the space inside the element, margin is the space outside the element"}
            ],
            'React': [
                {"question_text": "What is React?", "answer": "A JavaScript library for building user interfaces"},
                {"question_text": "What is a component in React?", "answer": "A reusable piece of the UI"},
                {"question_text": "How do you create a functional component in React?", "answer": "function MyComponent() { return <div>Hello</div> }"},
                {"question_text": "What is state in React?", "answer": "An object that determines how that component renders & behaves"},
                {"question_text": "How do you handle events in React?", "answer": "Using event handlers like onClick"}
            ],
            'SQL': [
                {"question_text": "What does SQL stand for?", "answer": "Structured Query Language"},
                {"question_text": "How do you select all columns from a table named 'users'?", "answer": "SELECT * FROM users;"},
                {"question_text": "What is a primary key in SQL?", "answer": "A unique identifier for a record in a table"},
                {"question_text": "How do you insert a new record into a table?", "answer": "INSERT INTO table_name (column1, column2) VALUES (value1, value2);"},
                {"question_text": "What is a foreign key in SQL?", "answer": "A key used to link two tables together"}
            ],
            'JavaScript': [
                {"question_text": "What is JavaScript?", "answer": "A programming language used to create dynamic and interactive content on websites"},
                {"question_text": "How do you declare a variable in JavaScript?", "answer": "Using var, let, or const"},
                {"question_text": "What is an array in JavaScript?", "answer": "A data structure that can hold more than one value at a time"},
                {"question_text": "How do you create a function in JavaScript?", "answer": "function myFunction() { // code }"},
                {"question_text": "What is the difference between == and === in JavaScript?", "answer": "== compares values, === compares values and types"}
            ],
            'Python': [
                {"question_text": "What is Python?", "answer": "A high-level, interpreted programming language"},
                {"question_text": "How do you create a list in Python?", "answer": "Using square brackets, e.g., my_list = [1, 2, 3]"},
                {"question_text": "What is a dictionary in Python?", "answer": "A collection of key-value pairs"},
                {"question_text": "How do you define a function in Python?", "answer": "Using the def keyword, e.g., def my_function():"},
                {"question_text": "What is a lambda function in Python?", "answer": "An anonymous function defined with the lambda keyword"}
            ]
        }