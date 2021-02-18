from flask import Flask, render_template, request, session
from flask_migrate import Migrate

from .models import db, Cat, Owner, Toy, ToyType
from .api.cat_routes import cat_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(cat_routes, url_prefix='/api/cats')
db.init_app(app)
Migrate(app, db)
