from app.models import db, Cat

def seed():
    cat = Cat(id=1,
      name='Scampi',
      owner_id=1,
      breed='Brown Tabby',
      color='brown, grey, black, white',
    )
    db.session.add(cat)
    cat = Cat(id=2,
      name='Graystoke',
      owner_id=1,
      breed='Grey Tabby',
      color='grey, black, white',
    )
    db.session.add(cat)
    cat = Cat(id=3,
      name='Scout',
      owner_id=2,
      breed='American Shorhair',
      color='tuxedo',
    )
    db.session.add(cat)
    cat = Cat(id=4,
      name='James Dean',
      owner_id=3,
      breed='Manx',
      color='tortoise shell',
    )
    db.session.add(cat)
    db.session.commit()

def rollback():
    db.session.execute('TRUNCATE cats CASCADE;')
    db.session.commit()
