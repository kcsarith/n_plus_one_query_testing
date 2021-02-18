from sqlalchemy.orm import relationship
from .db import db

class ToyType(db.Model):
  __tablename__ = 'toy_types'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String)
  toys = relationship('Toy', back_populates='toy_type')

