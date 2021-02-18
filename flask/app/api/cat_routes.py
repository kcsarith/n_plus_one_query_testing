from flask import Blueprint, jsonify
from app.models import Cat

cat_routes = Blueprint('cats', __name__)


@cat_routes.route('/')
def cats():
    cats = Cat.query.all()
    return {"cats": [cat.to_dict() for cat in cats]}


@cat_routes.route('/owners')
def owners():
    cats = Cat.query.all()
    return {"cats": [cat.to_dict(expand=['owner']) for cat in cats]}

@cat_routes.route('/toys')
def toys():
    cats = Cat.query.all()
    return {"cats": [cat.to_dict(expand=['toys']) for cat in cats]}
