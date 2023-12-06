# Machbuster

Welcome to Machbuster! Machbuster is a web app that allows users to manage their movie watchlist. Users can create an account, explore upcoming releases or favorites, and curate a personal watchlist for a tailored cinematic experience. 

<img src="https://github.com/successPhil/demo-gifs/blob/main/machbuster-demo.gif?raw=true" alt="machbuster-demo">

To visit Machbuster [click here](http://18.118.163.74/)


## Tech Stack:

### Frontend
- React.js, Javascript, CSS, Material UI
### Backend
- Django, Python
Database: Postgres
### Other Technologies
- Docker for containerization
- AWS for deployment

## Installation

#### This project is containerized using docker to reduce dependency issues so docker must be installed and running on your local machine. 

- [Click here](https://www.docker.com/products/docker-desktop/) to install Docker

#### Two API Keys are required to access movie data and can be obtained by following the links below:

- Movies Database Rapid API Key: [Click here](https://rapidapi.com/SAdrian/api/moviesdatabase)

- OMDB Movie API Key: [Click here](https://www.omdbapi.com/)

#### Run the command below from the project's root directory to allow execute permissions

```
chmod 755 run-compose-dev.sh
```

#### Run the file that 'execute permissions' were given to in the first step and pass in the following 7 parameters replacing the two API key parameters with the ones you obtained from the links given above:

- SECRET_KEY
- DEBUG (True or False)
- POSTGRES_DB
- POSTGRES_USER
- POSTGRES_PASSWORD
- OMDB Movie API Key
- Movie Database Rapid API Key

```
./run-compose-dev.sh abc123 True movie_db postgres postgres <inserrt OMDB API Key> <Insert Movie Database Rapid API Key>
```
#### Navigate to `localhost:80` in your browser
