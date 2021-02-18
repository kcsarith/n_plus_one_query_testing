import importlib
from flask.cli import AppGroup

modules = ('.toy_types', '.owners', '.cats', '.toys', )

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# `flask seed all`
@seed_commands.command('all')
def seed():
  for module_name in modules:
    print('importing module: ', module_name)
    module = importlib.import_module(module_name, "app.seeds")
    print('imported module: ', module)
    seed_fx = getattr(module, 'seed')
    print('seeding module: ', module_name)
    seed_fx()

# `flask seed rollback`
@seed_commands.command('rollback')
def rollback():
  for module_name in modules:
    rollback = getattr(importlib.import_module(module_name, "app.seeds"), 'rollback')
    rollback()
