# N + 1 Practice Project


## Setup
This project requires:

  - nodeJS
  - npm
  - postgres

Install the node dependencies using

`npm install`

Configure the postgres environment by adding a `.env` file with the environment variables layed out in `config/index.js`.

Run the migrations and setup the seed data

```
    $ npx dotenv sequelize-cli db:migrate
    $ npx dotenv sequelize-cli db:seed:all
```

Start the application with:

`npm start`

## Fix the N+1 issues

In `routes/api/cats.js` you can see 3 routes `/api/cats/`, `/api/cats/owners` and `/api/cats/toys`.

As you navigate between these urls in your browser, observe the various `SELECT` statements that you see in the terminal.

In both the owners and the toys routes you should see a variety of N+1 type errors.

Investigate "eager loading in sequelize"  And fix each of the routes with N+1 issues.  Each request is solveable with just 1 SQL statement.

## Have fun!
