from sqlalchemy.orm import relationship
from .db import db

class Cat(db.Model):
  __tablename__ = 'cats'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String)
  owner_id = db.Column(db.ForeignKey('owners.id'))
  owner = relationship('Owner', back_populates="cats")
  breed = db.Column(db.String)
  color = db.Column(db.String)
  toys = relationship('Toy', back_populates='cat')


  def to_dict(self, expand=[]):
    result = {
      "id": self.id,
      "username": self.name,
      "owner_id": self.owner_id,
      "breed": self.breed,
      "color": self.color
    }
    if 'owner' in expand:
      result['owner'] = self.owner.to_dict()
    if 'toys' in expand:
      result['toys'] = [toy.to_dict() for toy in self.toys]
    return result
