export SECRET_KEY=$1
export DEBUG=$2
export POSTGRES_DB=$3
export POSTGRES_USER=$4
export POSTGRES_PASSWORD=$5
export MOVIE_API_KEY=$6
export UPCOMING_MOVIE_API_KEY=$7


COMPOSE_DOCKER_CLI_BUILD=0 DOCKER_BUILDKIT=0 docker compose -f docker-compose.dev.yml up -d --build

# make sure the postgres container is ready, then run migrations
sleep 10
docker exec movie-app-api-1 python /src/manage.py makemigrations 
docker exec movie-app-api-1  python /src/manage.py migrate