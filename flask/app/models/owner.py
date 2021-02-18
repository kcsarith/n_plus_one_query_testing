from sqlalchemy.orm import relationship
from .db import db

class Owner(db.Model):
  __tablename__ = 'owners'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String)
  last_name = db.Column(db.String)
  cats = relationship('Cat', back_populates='owner')


  def to_dict(self, ):
    return {
      "id": self.id,
      "first_name": self.first_name,
      "last_name": self.last_name,
    }
