from django.contrib.auth.models import User
from django.db import models
from movies.models import Movie  # Import the Movie model

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    favorite_movies = models.ManyToManyField(Movie, related_name='favorited_by', blank=True)

    def add_to_favorite_movies(self, movie_id, movie_title, movie_img):
        # Check if the movie is already in the user's favorites
        if not self.favorite_movies.filter(movie_id=movie_id).exists():
            # Movie is not in favorites, create it
            movie = Movie.objects.create(movie_id=movie_id, title=movie_title, movie_img=movie_img)
            self.favorite_movies.add(movie)
            return {'message': 'Movie added to watchlist.'}
        else:
            return {'message': 'Movie already in watchlist.'}


    def __str__(self):
        return self.user.username
