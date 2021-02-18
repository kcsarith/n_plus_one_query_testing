# N + 1 Practice Project


## Setup
This project requires:

  - python
  - pipenv
  - postgres

Install the python dependencies using

`pipenv install`

and make sure to enter the Pipenv by

`pipenv shell`

Configure the postgres environment by adding a `.env` file with the environment variables layed out in `app/config.py`.
 - Make sure to add `FLASK_APP=app` and `FLASK_ENV=development` in this file too.
 - Make sure to put this file directly inside the `flask` folder here, and not inside the `app` folder.

Run the migrations and setup the seed data

```
    $ dotenv run flask db upgrade
    $ dotenv run flask seed all
```

Start the application with:

`flask run`

## Fix the N+1 issues

In `app/api/cat_routes.py` you can see 3 routes `/api/cats/`, `/api/cats/owners` and `/api/cats/toys`.

As you navigate between these urls in your browser, observe the various `SELECT` statements that you see in the terminal.

In both the owners and the toys routes you should see a variety of N+1 type errors.

Investigate "eager loading in SQLAlchemy"  And fix each of the routes with N+1 issues.  Each request is solveable with just 1 SQL statement.

## Have fun!
