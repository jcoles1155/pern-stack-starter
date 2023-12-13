# PERN Stack

The PERN Stack is an acronym for Postgres, Express, React, Node. It's a set of tools to create a complete web application.

Start by downloading this technologies if you haven't already:

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

