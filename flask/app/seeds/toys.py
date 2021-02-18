from app.models import db, Toy

def seed():
    toy = Toy(
      id=1,
      name='Yellow String',
      cat_id=1,
      toy_type_id=1,
    )
    db.session.add(toy)
    toy = Toy(
      id=2,
      cat_id=1,
      name='Blue String',
      toy_type_id=1,
    )
    db.session.add(toy)
    toy = Toy(
      id=3,
      cat_id=1,
      name='Shiney Ball',
      toy_type_id=2,
    )
    db.session.add(toy)
    toy = Toy(
      id=4,
      cat_id=1,
      name='Death Lazer',
      toy_type_id=5,
    )
    db.session.add(toy)
    toy = Toy(
      id=5,
      cat_id=2,
      name='Fake Mouse',
      toy_type_id=3,
    )
    db.session.add(toy)
    toy = Toy(
      id=6,
      cat_id=2,
      name='Blue ball',
      toy_type_id=2,
    )
    db.session.add(toy)
    toy = Toy(
      id=7,
      cat_id=3,
      name='Feather',
      toy_type_id=4,
    )
    db.session.add(toy)
    toy = Toy(
      id=8,
      cat_id=3,
      name='Spinning Auto Lazer Machine',
      toy_type_id=5,
    )
    db.session.add(toy)
    db.session.commit()

def rollback():
    db.session.execute('TRUNCATE toys CASCADE;')
    db.session.commit()
