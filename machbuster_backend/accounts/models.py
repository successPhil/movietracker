from django.contrib.auth.models import User
from django.db import models
from movies.models import Movie  # Import the Movie model

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    favorite_movies = models.ManyToManyField(Movie, related_name='favorited_by', blank=True)

    def add_to_favorite_movies(self, movie_id):
        movie, created = Movie.objects.get_or_create(movie_id=movie_id)
        self.favorite_movies.add(movie)

    def __str__(self):
        return self.user.username
