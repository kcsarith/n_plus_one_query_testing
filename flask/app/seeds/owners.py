from app.models import db, Owner

def seed():
    owner = Owner(
      id=1,
      first_name='Ian',
      last_name='Bentley',
    )
    db.session.add(owner)
    owner = Owner(
      id=2,
      first_name='Ace',
      last_name='Geddis',
    )
    db.session.add(owner)
    owner = Owner(
      id=3,
      first_name='The',
      last_name='Streets',
    )
    db.session.add(owner)
    db.session.commit()

def rollback():
    db.session.execute('TRUNCATE owners CASCADE;')
    db.session.commit()
