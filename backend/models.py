# DB Schema
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Integer
from config import db

"""
class Cats(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable=False, unique=False)
    description = db.Column(db.String(250), nullable=False, unique=False)
    img_url = db.Column(db.String(200), nullable=False, unique=False)
    city = db.Column(db.String(40), nullable=False, unique=False)
    email = db.Column(db.String(120), unique=True, nullable=False) 
"""
class Cat(db.Model):
    __tablename__ = 'cats'
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(70), nullable=False, unique=False)
    description: Mapped[str] = mapped_column(String(250), nullable=False, unique=False)
    img_url: Mapped[str] = mapped_column(String(200), nullable=False, unique=False)
    city: Mapped[str] = mapped_column(String(40), nullable=False, unique=False)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)

    def to_json(self):
        return{
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "imgUrl": self.img_url,
            "city": self.city,
            "email": self.email
        }

