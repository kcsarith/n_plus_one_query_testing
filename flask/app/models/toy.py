from sqlalchemy.orm import relationship
from .db import db

class Toy(db.Model):
  __tablename__ = 'toys'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String)
  cat_id = db.Column(db.ForeignKey('cats.id'))
  cat = relationship('Cat', back_populates='toys')
  toy_type_id = db.Column(db.ForeignKey('toy_types.id'))
  toy_type = relationship('ToyType', back_populates='toys')


  def to_dict(self, ):
    return {
      "id": self.id,
      "name": self.name,
      "cat_id": self.cat_id,
      "toy_type_id": self.toy_type_id,
      "toy_type": self.toy_type.name
    }
