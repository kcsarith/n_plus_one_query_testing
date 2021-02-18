from app.models import db, ToyType

def seed():
  toy_type = ToyType(
    id=1,
    name='String',
  )
  db.session.add(toy_type)
  toy_type = ToyType(
    id=2,
    name='Ball',
  )
  db.session.add(toy_type)
  toy_type = ToyType(
    id=3,
    name='Mouse',
  )
  db.session.add(toy_type)
  toy_type = ToyType(
    id=4,
    name='Feather',
  )
  db.session.add(toy_type)
  toy_type = ToyType(
    id=5,
    name='Lazer',
  )
  db.session.add(toy_type)
  db.session.commit()

def rollback():
  db.session.execute('TRUNCATE toy_types CASCADE;')
  db.session.commit()

