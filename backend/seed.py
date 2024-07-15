from database import db
from models.topic import TopicModel
from models.question import QuestionModel
from models.resource import StudyResource
from app import app

topics = [
    {
        "name": "HTML/CSS",
        "image_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0ace9e202549427.6687b5a574ea5.png",
        "description": "HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are foundational technologies for building web pages. HTML provides the structure of the page, while CSS is used to control the layout and appearance. Together, they enable the creation of visually appealing and well-structured websites. Mastery of HTML and CSS is essential for any web developer aiming to create engaging and accessible web content.",
    },
    {
        "name": "React",
        "image_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/019128200022451.665b544cd5e90.png",
        "description": "React is a popular JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes. React uses a component-based architecture, making it easier to manage the complexities of UI development. It is widely used in modern web development for its performance and flexibility.",
    },
    {
        "name": "SQL",
        "image_url": "https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?size=626&ext=jpg&ga=GA1.1.624413441.1705993479&semt=sph",
        "description": "SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It is used to query, insert, update, and delete data within a database. SQL is essential for data analysis, reporting, and database management, making it a crucial skill for backend developers, data analysts, and anyone involved in data-driven projects. Understanding SQL enables efficient data handling and retrieval in various applications.",
    },
    {
        "name": "JavaScript",
        "image_url": "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150063081.jpg?size=626&ext=jpg&ga=GA1.1.624413441.1705993479&semt=sph",
        "description": "JavaScript is a versatile and powerful programming language commonly used to create interactive and dynamic content on the web. It allows developers to implement complex features on web pages, such as interactive forms, animations, and real-time updates. JavaScript is an essential technology in web development, supported by all modern web browsers, and is the backbone of frameworks like React, Angular, and Vue.js.",
    },
    {
        "name": "Python",
        "image_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/af508f68303911.5b583fd6026b9.jpg",
        "description": "Python is a high-level, interpreted programming language known for its readability and versatility. It is widely used in various domains, including web development, data analysis, artificial intelligence, scientific computing, and automation. Python's simple syntax and powerful libraries make it a favorite among beginners and experienced developers alike. It promotes rapid development and is used by major tech companies for various applications.",
    },
]

questions = {
    "HTML/CSS": [
        {
            "question_text": "What does CSS stand for?",
            "answer": "Cascading Style Sheets",
        },
        {
            "question_text": "How do you center a div in CSS?",
            "answer": "margin: auto;",
        },
        {
            "question_text": "What is the purpose of the <head> element in HTML?",
            "answer": "To contain meta-information about the document",
        },
        {
            "question_text": "How do you create a hyperlink in HTML?",
            "answer": "<a href='url'>link text</a>",
        },
        {
            "question_text": "What is the difference between padding and margin in CSS?",
            "answer": "Padding is the space inside the element, margin is the space outside the element",
        },
    ],
    "React": [
        {
            "question_text": "What is React?",
            "answer": "A JavaScript library for building user interfaces",
        },
        {
            "question_text": "What is a component in React?",
            "answer": "A reusable piece of the UI",
        },
        {
            "question_text": "How do you create a functional component in React?",
            "answer": "function MyComponent() { return <div>Hello</div> }",
        },
        {
            "question_text": "What is state in React?",
            "answer": "An object that determines how that component renders & behaves",
        },
        {
            "question_text": "How do you handle events in React?",
            "answer": "Using event handlers like onClick",
        },
    ],
    "SQL": [
        {
            "question_text": "What does SQL stand for?",
            "answer": "Structured Query Language",
        },
        {
            "question_text": "How do you select all columns from a table named 'users'?",
            "answer": "SELECT * FROM users;",
        },
        {
            "question_text": "What is a primary key in SQL?",
            "answer": "A unique identifier for a record in a table",
        },
        {
            "question_text": "How do you insert a new record into a table?",
            "answer": "INSERT INTO table_name (column1, column2) VALUES (value1, value2);",
        },
        {
            "question_text": "What is a foreign key in SQL?",
            "answer": "A key used to link two tables together",
        },
    ],
    "JavaScript": [
        {
            "question_text": "What is JavaScript?",
            "answer": "A programming language used to create dynamic and interactive content on websites",
        },
        {
            "question_text": "How do you declare a variable in JavaScript?",
            "answer": "Using var, let, or const",
        },
        {
            "question_text": "What is an array in JavaScript?",
            "answer": "A data structure that can hold more than one value at a time",
        },
        {
            "question_text": "How do you create a function in JavaScript?",
            "answer": "function myFunction() { // code }",
        },
        {
            "question_text": "What is the difference between == and === in JavaScript?",
            "answer": "== compares values, === compares values and types",
        },
    ],
    "Python": [
        {
            "question_text": "What is Python?",
            "answer": "A high-level, interpreted programming language",
        },
        {
            "question_text": "How do you create a list in Python?",
            "answer": "Using square brackets, e.g., my_list = [1, 2, 3]",
        },
        {
            "question_text": "What is a dictionary in Python?",
            "answer": "A collection of key-value pairs",
        },
        {
            "question_text": "How do you define a function in Python?",
            "answer": "Using the def keyword, e.g., def my_function():",
        },
        {
            "question_text": "What is a lambda function in Python?",
            "answer": "An anonymous function defined with the lambda keyword",
        },
    ],
}


def seed():
    with app.app_context():
        db.drop_all()
        db.create_all()

        topic_models = {}
        for topic in topics:
            topic_model = TopicModel(
                name=topic["name"],
                image_url=topic["image_url"],
                description=topic["description"],
            )
            db.session.add(topic_model)
            topic_models[topic["name"]] = topic_model

        db.session.commit()

        for topic_name, question_list in questions.items():
            topic_model = topic_models[topic_name]
            for question in question_list:
                question_model = QuestionModel(
                    question=question["question_text"],
                    answer=question["answer"],
                    topic_id=topic_model.id,
                )
                db.session.add(question_model)

        db.session.commit()

        print("Database seeded successfully!")


if __name__ == "__main__":
    seed()
