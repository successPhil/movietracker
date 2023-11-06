export SECRET_KEY=abc123
export DEBUG=True
export POSTGRES_DB=movie_db
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres
export MOVIE_API_KEY=$1
export UPCOMING_MOVIE_API_KEY=$2


COMPOSE_DOCKER_CLI_BUILD=0 DOCKER_BUILDKIT=0 docker compose -f docker-compose.dev.yml up -d --build

# make sure the postgres container is ready, then run migrations
sleep 10
docker exec movie-app-api-1 python /src/manage.py makemigrations 
docker exec movie-app-api-1  python /src/manage.py migrate