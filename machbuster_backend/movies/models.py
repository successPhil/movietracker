from django.db import models

class Movie(models.Model):
    movie_id = models.CharField(max_length=20, unique=True)
    title = models.CharField(max_length=100)
    movie_img = models.CharField(max_length=500, default="")
    
    def __str__(self):
        return self.title
