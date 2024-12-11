# DB Schema
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
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
Base = declarative_base()

class Cat(Base):
    __tablename__ = 'cats'

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(70), nullable=False)
    description: Mapped[str] = mapped_column(String(250), nullable=True)
    img_url: Mapped[str] = mapped_column(String(200), nullable=False)
    city: Mapped[str] = mapped_column(String(40), nullable=False)
    email: Mapped[str] = mapped_column(String(120), unique=False, nullable=False)
    phone: Mapped[str] = mapped_column(String(20), unique=False, nullable=True)
    age: Mapped[str] = mapped_column(String(50), nullable=False)  
    gender: Mapped[str] = mapped_column(String(10), nullable=False)  
    breed: Mapped[str] = mapped_column(String(50), nullable=True)  
    color: Mapped[str] = mapped_column(String(50), nullable=True)
    vaccinated: Mapped[bool] = mapped_column(nullable=False)  
    neutered: Mapped[bool] = mapped_column(nullable=False)  
    health_status: Mapped[str] = mapped_column(Text, nullable=True)  
    adoption_terms: Mapped[str] = mapped_column(Text, nullable=True) 
    personality: Mapped[str] = mapped_column(String(100), nullable=True) 

    def to_json(self) -> dict:
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "img_url": self.img_url,
            "city": self.city,
            "email": self.email,
            "phone": self.phone,
            "age": self.age,
            "gender": self.gender,
            "breed": self.breed,
            "color": self.color,
            "vaccinated": self.vaccinated,
            "neutered": self.neutered,
            "health_status": self.health_status,
            "adoption_terms": self.adoption_terms,
            "personality": self.personality
        }

