# PERN Stack

The PERN Stack is an acronym for Postgres, Express, React, Node. It's a set of tools to create a complete web application.

Start by downloading these technologies if you haven't already:

* Node JS
* Homebrew
* Postgres
* Docker

Other technologies and libraries that I use in this project:

* Material UI
* [Postico](https://eggerapps.at/postico2/)
* Docker




### Installation

This project consists in a *Web Frontend Application* and a *Web Backend Application*.

First, clone the repo:

```bash
git clone https://github.com/jcoles1155/pern-stack-starter.git
```




### Development

In order to execute the project in development, you can use docker-compose to create the postgresql database and the pgadmin client:

to run the database you can use docker:

```
docker compose up -d
```

this command will create the database and the pgadmin client in the following ports:

- Database: localhost:5432
- Pgadmin: localhost:8080

We also need the packages this project is dependent on... so:

Build the packages:

```
npm i
```

This will download

* Express
* React
* Node

Start up the Express Server from root

```
node src/index.js
```

And spin up the frontend:

```
cd client
npm run dev
```


Sweet!  All your services should be running!


Now go ahead and boot up Postico that you downloaded and open up the settings of the test server created and make them like so:


![Screenshot 2023-12-13 at 12 31 56 AM](https://github.com/jcoles1155/pern-stack-starter/assets/7937257/8bdb55fe-b2a5-4fe6-88cf-104cb8d811b1)


Try and connect!  You should be into the db and see a 'tasks' table... click into it!


Go ahead and navigate to http://localhost:5173/


![Screenshot 2023-12-13 at 12 43 47 AM](https://github.com/jcoles1155/pern-stack-starter/assets/7937257/4c3324b2-2dd9-443a-b61a-d75afab33f4f)


Once there, go ahead and create a test task, and you should see that task created in your db through Postico!


![Screenshot 2023-12-13 at 12 44 08 AM](https://github.com/jcoles1155/pern-stack-starter/assets/7937257/b3b8355d-ab96-4487-9267-ba3ed79d1cba)


Deleting the task should remove it from the db of course...


Now you have everything set up!


### File Structure

There are a few things to make sure to understand if you are new to the PERN stack... this project is for the absolute beginner, so here's a light breakdown:

Frontend:

1. Basic React Project

2. This will be UI that users interact with to use the app

3. The Frontend interacts with the server to run sql queries defined in the controllers of our server

Database:

1. Initializes the postgres db, and creates the initial table

2. We will run our migrations that can update the structure of our db tables, and run CRUD operations (Create, Read, Update, Delete)

src: Server (backend)

1. Controllers
    - Houses the functions we run across our db, that we use in Routes

2. Routes
    - Location to house our HTTP calls from the frontend, that calls a designated controller function

3. config.js
    - db configuration variables

4. db.js
    - creates a connection pool for the db

5. index.js
    - express server






