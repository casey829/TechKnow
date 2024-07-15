from werkzeug.security import generate_password_hash, check_password_hash
from database import db
from sqlalchemy.orm import validates


class UserModel(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(80), nullable=False)
    lastname = db.Column(db.String(80), nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)

    @validates("firstname")
    def validate_firstname(self, key, firstname):
        if not firstname:
            raise ValueError("First name is required")
        return firstname

    @validates("lastname")
    def validate_lastname(self, key, lastname):
        if not lastname:
            raise ValueError("Last name is required")
        return lastname

    @validates("email")
    def validate_email(self, key, email):
        if not email:
            raise ValueError("Email is required")
        if UserModel.query.filter_by(email=email).first():
            raise ValueError("The email you are trying to use is already in use.")
        return email

    def __repr__(self):
        return f"<User {self.firstname} {self.lastname} {self.email}>"

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    @classmethod
    def create_user(cls, firstname, lastname, password, email):
        new_user = cls(firstname=firstname, lastname=lastname, email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        return new_user

    @classmethod
    def get_user(cls, user_id):
        return cls.query.get(user_id)

    @classmethod
    def get_user_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    @classmethod
    def get_all_users(cls):
        return cls.query.all()

    @classmethod
    def update_user(
        cls, user_id, firstname=None, lastname=None, password=None, email=None
    ):
        user = cls.query.get(user_id)
        if not user:
            return None
        if firstname:
            user.firstname = firstname
        if lastname:
            user.lastname = lastname
        if email:
            if (
                cls.query.filter_by(email=email).first()
                and cls.query.filter_by(email=email).first().id != user_id
            ):
                raise ValueError("Email must be unique")
            user.email = email
        if password:
            user.set_password(password)
        db.session.commit()
        return user

    @classmethod
    def delete_user(cls, user_id):
        user = cls.query.get(user_id)
        if not user:
            return None
        db.session.delete(user)
        db.session.commit()
        return user

    def json(self):
        return {
            "id": self.id,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
        }
